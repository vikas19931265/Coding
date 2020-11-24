package gw.solr

uses com.google.common.annotations.VisibleForTesting
uses com.guidewire.cc.system.config.CCConfigResourceKeys
uses com.guidewire.pl.system.dependency.PLDependencies
uses gw.api.solr.CCSolrConfig
uses gw.api.system.PLLoggerCategory
uses gw.plugin.solr.CCFreeTextSearchUtil
uses gw.plugin.solr.ISolrMessageTransportPlugin
uses gw.plugin.solr.SolrSearchStore
uses gw.solr.consistency.ConsistencyTracker
uses gw.solr.consistency.ConsistencyTrackerBuilder
uses gw.solr.request.ClaimContactArchiveRequest
uses gw.solr.request.ClaimContactDeleteRequest
uses gw.solr.request.ClaimContactIndexRequest
uses gw.solr.request.IMessageRequest
uses gw.solr.utils.SolrUpdateMessage
uses org.json.simple.JSONArray

uses java.lang.Exception
uses java.util.Collections
uses java.util.List
uses java.util.concurrent.TimeUnit


/**
 * External Solr search indexing of claim contacts.
 *
 * <br/><br/><i>Experimental.  Do not use without consulting Guidewire.</i>
 */
@Export
class CCSolrMessageTransportPlugin extends AbstractSolrMessageTransportPlugin implements ISolrMessageTransportPlugin {

  @VisibleForTesting
  protected var _consistencyTracker : ConsistencyTracker = new ConsistencyTrackerBuilder()
      .withReconstructor( new CCDocumentReconstructor())
      .withCacheSize(2500).withCacheTiming(30, TimeUnit.SECONDS).build()

  construct() {
    super("CCSolrMessageTransportPlugin")
  }

  protected construct(pluginName : String) {
    super(pluginName)
  }

  // ------------------------------------------------------------------
  // Message sender, runs on batch server
  // ------------------------------------------------------------------

  override function send(message : Message, data : String) {
    if(_logger.TraceEnabled) _logger.trace("CCSolrMessageTransport.send() : " + data)
    try {
      var solrMsg = SolrUpdateMessage.parse(data)
      var updateRequest = _consistencyTracker.maybeCorrectMessage(solrMsg.JsonPayload)
      var response = updateRequest.process(PLDependencies.getSolrServerMgr().findServer(solrMsg.DocType))

      if(PLLoggerCategory.SOLR_INDEX.TraceEnabled) PLLoggerCategory.SOLR_INDEX.trace("Solr update response: " + response)
      if(response.getStatus() != 0) {
        throw new SolrException("Solr update request " + updateRequest.XML + 
            " for " + solrMsg.DocType + " failed with status code " + response.Status)
      }
    } catch (e : Exception) {
      _logger.warn(e as String)
      _logger.warn(data)
      // If the _debug flag is set, no exception will be thrown and the code will fall thru to
      // message.reportAck() below. This is useful behavior when debugging since you don't have
      // to keep resuming the message destination.  However, it will also have the side effect
      // of causing the Lucene index to get out of sync with the app database.
      if (!Debug) {
        throw e
      }
    }
    message.reportAck()
  }
  
  // ------------------------------------------------------------------
  // Event message interpretation, runs on server node performing transaction
  // ------------------------------------------------------------------

  public static function handleClaimAddedEvent(messageContext : MessageContext) {
    createMessages(messageContext, createClaimIndexRequest(messageContext.Root as Claim))
  }

  public static function handleClaimChangedEvent(messageContext : MessageContext) {
    var claim = messageContext.Root as Claim
    for(ctct in claim.Contacts) {
      if(hasRelevantChanges(ctct, CCConfigResourceKeys.CLAIMCONTACT_SEARCH_CONFIG.File)) {
        createMessages(messageContext, createClaimIndexRequest(claim))
        break
      }
    }
  }
  
  public static function handleClaimRemovedEvent(messageContext : MessageContext) {
    createMessages(messageContext, createClaimDeleteRequest(messageContext.Root as Claim))
  }
  
  public static function handleClaimPurgedEvent(messageContext : MessageContext) {
    var c = messageContext.Root
    if (c typeis Claim) {
      createMessages(messageContext, createClaimDeleteByClaimNumberRequest(c.ClaimNumber, SolrSearchStore.ACTIVE)) 
    } else if (c typeis ClaimInfo) {
      createMessages(messageContext, createClaimDeleteByClaimNumberRequest(c.ClaimNumber, SolrSearchStore.ARCHIVE)) 
    }
  }
  
  public static function handleClaimInfoChangedEvent(messageContext : MessageContext) {
    var claimInfo = messageContext.Root as ClaimInfo
    if (claimInfo.ExcludeReason != null && !claimInfo.ExcludeReason.equals("null")) {
      if(_logger.TraceEnabled) _logger.trace("ClaimInfoChanged for ${claimInfo.ClaimNumber} ignored.  Exclude reason = ${claimInfo.ExcludeReason}")
      return
    } 
    if (claimInfo.ArchiveState == ArchiveState.TC_ARCHIVED)  {
      if(_logger.TraceEnabled) _logger.trace("Archiving claim: ${claimInfo.ClaimNumber}")
      var docArray = CCFreeTextSearchUtil.getSolrSearchPlugin().searchByClaimNumber(claimInfo.ClaimNumber, SolrSearchStore.ACTIVE) as JSONArray
      createMessages(messageContext, createClaimArchiveIndexRequest(docArray, SolrSearchStore.ARCHIVE))
      createMessages(messageContext, createClaimDeleteByClaimNumberRequest(claimInfo.ClaimNumber, SolrSearchStore.ACTIVE)) 
    } else if (claimInfo.ArchiveState == null && claimInfo.ChangedFields.contains("ArchiveState")) {
      if(_logger.TraceEnabled) _logger.trace("Restoring claim: ${claimInfo.ClaimNumber}")
      var docArray = CCFreeTextSearchUtil.getSolrSearchPlugin().searchByClaimNumber(claimInfo.ClaimNumber, SolrSearchStore.ARCHIVE) as JSONArray
      createMessages(messageContext, createClaimArchiveIndexRequest(docArray, SolrSearchStore.ACTIVE))
      createMessages(messageContext, createClaimDeleteByClaimNumberRequest(claimInfo.ClaimNumber, SolrSearchStore.ARCHIVE)) 
    }
  }
  
  public static function handleClaimContactAddedEvent(messageContext : MessageContext) {
    var claimContact = messageContext.Root as ClaimContact
    if (!claimContact.Claim.New) {
      createMessages(messageContext, createClaimIndexRequest(claimContact))
    } else {
      // No need to do anything since the document will be sent out as a result of the ClaimAdded event      
    }
  }
  
  public static function handleClaimContactChangedEvent(messageContext : MessageContext) {
    var claimContact = messageContext.Root as ClaimContact
    if (!claimContact.Claim.Changed) {
      createMessages(messageContext, createClaimIndexRequest(claimContact))
    }
  }

  public static function handleClaimContactContactChangedEvent(messageContext : MessageContext) {
    var claimContact = messageContext.Root as ClaimContact
    if (!claimContact.Claim.Changed) {
      createMessages(messageContext, createClaimIndexRequest(claimContact))
    }
  }

  public static function handleClaimContactRemovedEvent(messageContext : MessageContext) {
    createMessages(messageContext, createClaimDeleteRequest(messageContext.Root as ClaimContact))
  }
  
  public static function handleClaimContactRoleAddedEvent(messageContext : MessageContext) {
    var claimContactRole = messageContext.Root as ClaimContactRole
    var claimContact = claimContactRole.ClaimContact 
    if (!claimContact.New) {
      createMessages(messageContext, createClaimIndexRequest(claimContact))
    } else {
      // No need to do anything here since the document will be sent out as a result of the ClaimContactAdded event being handled.
    }
  }
  
  public static function handleClaimContactRoleChangedEvent(messageContext : MessageContext) {
    var claimContactRole = messageContext.Root as ClaimContactRole
    createMessages(messageContext, createClaimIndexRequest(claimContactRole.ClaimContact))
  }
  
  // This method is a special case since it doesn't return a DeleteRequest object, but an IndexRequest object
  // This is because what is required is that all ClaimContactAddress records get written out again with a new set of roles.  
  public static function handleClaimContactRoleRemovedEvent(messageContext : MessageContext)  {
    var claimContactRole = messageContext.Root as ClaimContactRole
    var claimContact = claimContactRole.ClaimContact 
    for (var bean in claimContactRole.Bundle.RemovedBeans) {
      if (bean typeis ClaimContact and bean.PublicID == claimContact.PublicID) {
        return
      }
    }
    createMessages(messageContext, createClaimIndexRequest(claimContact))
  }
  
  // ------------------------------------------------------------------
  // Creation of the correct Solr index update messages
  // ------------------------------------------------------------------
  
  private static function createClaimIndexRequest(claim : Claim) : List<IMessageRequest> {
    var indexRequest = new ClaimContactIndexRequest(claim)
    return Collections.singletonList<IMessageRequest>(indexRequest)
  }
  
  private static function createClaimDeleteRequest(claim : Claim) : List<IMessageRequest> {
    var deleteRequest = new ClaimContactDeleteRequest(claim)
    return Collections.singletonList<IMessageRequest>(deleteRequest)
  }

  private static function createClaimIndexRequest(claimContact : ClaimContact) : List<IMessageRequest> {
    var indexRequest = new ClaimContactIndexRequest(claimContact)
    return Collections.singletonList<IMessageRequest>(indexRequest)
  }
  
  private static function createClaimArchiveIndexRequest(docArray : JSONArray, store : SolrSearchStore) : List<IMessageRequest> {
    var indexRequest = new ClaimContactArchiveRequest(docArray, store)
    return Collections.singletonList<IMessageRequest>(indexRequest)
  }
  
  private static function createClaimDeleteRequest(claimContact : ClaimContact) : List<IMessageRequest> {
    var deleteRequest = new ClaimContactDeleteRequest(claimContact)
    return Collections.singletonList<IMessageRequest>(deleteRequest)
  }

  private static function createClaimDeleteByClaimNumberRequest(claimNumber : String, store : SolrSearchStore) : List<IMessageRequest> {
    var deleteRequest = new ClaimContactDeleteRequest(claimNumber, store)
    return Collections.singletonList<IMessageRequest>(deleteRequest)
  }
  
  private static function createMessages(messageContext : MessageContext, requestList : List<IMessageRequest>) {
    for( req in requestList ) {
      if(req.hasContent()) {
        messageContext.createMessage(req.toMessage())
      }
    }
  }

  /**
   * Gets the currently configured database in database-config.xml and returns
   * the matching entity in data-config.xml.
   * @param docId The document index whose entity is to be found
   * @returns The entity name or null if no matching entity element found
   */
  private function getConfigDatabaseEntityName(docId:String) : String {
    return CCSolrConfig.findEntityNameForCurrentDbConfig(docId)
  }
}
