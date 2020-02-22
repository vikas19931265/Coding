package external.gw.plugin;

/**
 * Defines the contract for integration to an external client system.  This interface
is a marker interface only, which allows for users to register different plugin
implementations for each specific interface type.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ClientSystemPlugin extends gw.plugin.IPlugin
{

  /**
   * Informs the client application that the pending change sent by it has been approved.
   *
   * @param pendingContactChangeContextXML the context for the change that was rejected as XML
   * @param ABUIDContainerXML the AddressBookUIDContainer with mapping new AddressBookUIDs to App PublicIDs
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "approvePendingChange")
  public void approvePendingChange(java.lang.String pendingContactChangeContextXML, java.lang.String ABUIDContainerXML);



  /**
   * Creates a message in the messageContact by serializing the contact to XML.
   *
   * @param messageContext The MessageContext from the rules.
   * @param contact An ABContact entity in ContactManager.
   * @param asyncMessageType The type of message to create
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createAsyncMessage")
  public void createAsyncMessage(com.guidewire.ab.external.entity.MessageContext messageContext, com.guidewire.ab.external.entity.ABContact contact, external.gw.plugin.AsyncMessageType asyncMessageType);



  /**
   * Checks whether a contact can be deleted from the external client system
   *
   * @return whether the contact can be deleted from the external client system
   * @param linkID the LinkID of the contact
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isContactDeletable")
  public boolean isContactDeletable(java.lang.String linkID) throws gw.plugin.ContactCommunicationException;



  /**
   * Advises external system that the contact with the retiredId has been merged onto the contact with the keptId.
   *
   * @param keptId the id of the contact being retained
   * @param retiredId the id of the contact being retired
   * @param transactionId the transaction id of this message
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mergeContacts")
  public void mergeContacts(java.lang.String keptId, java.lang.String retiredId, java.lang.String transactionId) throws gw.plugin.ContactCommunicationException;



  /**
   * Informs the client application that the pending change sent by it has been rejected.
   *
   * @param pendingContactChangeContextXML the context for the change that was rejected as XML
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "rejectPendingChange")
  public void rejectPendingChange(java.lang.String pendingContactChangeContextXML);



  /**
   * Removes a contact in the external client system.
   *
   * @param contact the ContactManager version of the contact being removed
   * @param transactionId the transaction id of this message
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeContact")
  public void removeContact(com.guidewire.ab.external.entity.ABContact contact, java.lang.String transactionId) throws gw.plugin.ContactCommunicationException;



  /**
   * Updates a contact in the external client system.
   *
   * @param contact the ContactManager version of the contact being updated
   * @param changes the changes being made
   * @param transactionId the transaction id of this message
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "updateContact")
  public void updateContact(com.guidewire.ab.external.entity.ABContact contact, java.lang.String changes, java.lang.String transactionId) throws gw.plugin.ContactCommunicationException;

}
