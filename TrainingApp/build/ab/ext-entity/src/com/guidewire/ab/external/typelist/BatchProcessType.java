package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of batch processes
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class BatchProcessType implements TypeKey, Comparable<BatchProcessType> {
  /**
   * Flag Overdue Legal Reports
   */
  public static BatchProcessType FLAGOVERDUELEGALREPORTS;
  /**
   * Calculates aggregate review scores for ABContacts from submitted ReviewSummaries.
   */
  public static BatchProcessType ABCONTACTSCORING;
  /**
   * Geocoding ABAddresses queue writer.
   */
  public static BatchProcessType ABGEOCODE;
  /**
   * Activity escalation monitor
   */
  public static BatchProcessType ACTIVITYESC;
  /**
   * Identify archiving work and create work items.
   */
  public static BatchProcessType ARCHIVE;
  /**
   * Purge records through table updates
   */
  public static BatchProcessType BULKPURGE;
  /**
   * Automatically synchronize the local contact that are out of syn and marked 'allow' auto-sync.
   */
  public static BatchProcessType CONTACTAUTOSYNC;
  /**
   * Data distribution for the database
   */
  public static BatchProcessType DATADISTRIBUTION;
  /**
   * Database consistency checks
   */
  public static BatchProcessType DBCONSISTENCYCHECK;
  /**
   * Database statistics
   */
  public static BatchProcessType DBSTATS;
  /**
   * Execute deferred upgrade tasks
   */
  public static BatchProcessType DEFERREDUPGRADE;
  /**
   * Finds new duplicate contacts and creates a browsable list of said contacts.
   */
  public static BatchProcessType DUPLICATECONTACTS;
  /**
   * Geocoding Addresses queue writer.
   */
  public static BatchProcessType GEOCODE;
  /**
   * Group exception Monitor
   */
  public static BatchProcessType GROUPEXCEPTION;
  /**
   * Microsoft database DMV performance report generation
   */
  public static BatchProcessType MSDMVREPORT;
  /**
   * Oracle database AWR performance report generation
   */
  public static BatchProcessType ORAAWRREPORT;
  /**
   * Performs a normalization of phone numbers contact
   */
  public static BatchProcessType PHONENUMBERNORMALIZER;
  /**
   * Populate searchColumn columns from their original sources.
   */
  public static BatchProcessType POPULATESEARCHCOLUMNS;
  /**
   * Invoke plugin on completion of monitored worker queue
   */
  public static BatchProcessType PROCESSCOMPLETIONMONITOR;
  /**
   * Purge batch process history data
   */
  public static BatchProcessType PROCESSHISTORYPURGE;
  /**
   * Purge old ClusterMember entities
   */
  public static BatchProcessType PURGECLUSTERMEMBERS;
  /**
   * Purge failed work items from all queues.
   */
  public static BatchProcessType PURGEFAILEDWORKITEMS;
  /**
   * Purge files that were created as deletable and are older than the maximum age.
   */
  public static BatchProcessType PURGEDELETABLEFILES;
  /**
   * Purge profiler data at regular intervals
   */
  public static BatchProcessType PURGEPROFILERDATA;
  /**
   * Purge completed workflows after resetting any referenced workflows, this executes gw.processes.PurgeWorkflow.gs
   */
  public static BatchProcessType PURGEWORKFLOWS;
  /**
   * Purge completed workflows logs, this executes gw.processes.PurgeWorkflowLogs.gs
   */
  public static BatchProcessType PURGEWORKFLOWLOGS;
  /**
   * Performs a full data import of the app database into the Solr/Lucene index
   */
  public static BatchProcessType SOLRDATAIMPORT;
  /**
   * Asynchronous deletion of excluded rows from staging tables
   */
  public static BatchProcessType STDELETEEXCLUDED;
  /**
   * Asynchronous encryption of staging table data
   */
  public static BatchProcessType STENCRYPT;
  /**
   * Asynchronous integrity check of staging tables
   */
  public static BatchProcessType STINTEGRITYCHECK;
  /**
   * Asynchronous integrity check and load of staging tables
   */
  public static BatchProcessType STLOAD;
  /**
   * Asynchronous population of the exclusion tables
   */
  public static BatchProcessType STPOPEXCLUDED;
  /**
   * Asynchronous update of staging table statistics
   */
  public static BatchProcessType STSTATISTICS;
  /**
   * Stat Report work queue writer
   */
  public static BatchProcessType STATREPORT;
  /**
   * Statistics calculator
   */
  public static BatchProcessType STATISTICS;
  /**
   * User exception Monitor
   */
  public static BatchProcessType USEREXCEPTION;
  /**
   * Verifies the minimum creation criteria for all staging table loaded contacts.
   */
  public static BatchProcessType VERIFYMINIMUMCRITERIA;
  /**
   * Will execute the workflow writer.
   */
  public static BatchProcessType WORKFLOW;
  /**
   * Purge WorkItemSet data
   */
  public static BatchProcessType WORKITEMSETPURGE;
  /**
   * Purge instrumentation data for work queues
   */
  public static BatchProcessType WORKQUEUEINSTRUMENTATIONPURGE;
  /**
   * Unknown value for BatchProcessType
   */
  public static BatchProcessType UNKNOWN;
  /**
   * Updates the MatchSetKey for all contacts
   */
  public static BatchProcessType UPDATEMATCHSETKEY;
  private static final Map<String, BatchProcessType> ALL_CODES = new LinkedHashMap<String, BatchProcessType>();


  private static void initTypecodes0() {
    FLAGOVERDUELEGALREPORTS = new BatchProcessType("FlagOverdueLegalReports", 0);
    ABCONTACTSCORING = new BatchProcessType("ABContactScoring", 1);
    ABGEOCODE = new BatchProcessType("ABGeocode", 2);
    ACTIVITYESC = new BatchProcessType("ActivityEsc", 3);
    ARCHIVE = new BatchProcessType("Archive", 4);
    BULKPURGE = new BatchProcessType("BulkPurge", 5);
    CONTACTAUTOSYNC = new BatchProcessType("ContactAutoSync", 6);
    DATADISTRIBUTION = new BatchProcessType("DataDistribution", 7);
    DBCONSISTENCYCHECK = new BatchProcessType("DBConsistencyCheck", 8);
    DBSTATS = new BatchProcessType("DBStats", 9);
    DEFERREDUPGRADE = new BatchProcessType("DeferredUpgrade", 10);
    DUPLICATECONTACTS = new BatchProcessType("DuplicateContacts", 11);
    GEOCODE = new BatchProcessType("Geocode", 12);
    GROUPEXCEPTION = new BatchProcessType("GroupException", 13);
    MSDMVREPORT = new BatchProcessType("MSDMVReport", 14);
    ORAAWRREPORT = new BatchProcessType("OraAWRReport", 15);
    PHONENUMBERNORMALIZER = new BatchProcessType("PhoneNumberNormalizer", 16);
    POPULATESEARCHCOLUMNS = new BatchProcessType("PopulateSearchColumns", 17);
    PROCESSCOMPLETIONMONITOR = new BatchProcessType("ProcessCompletionMonitor", 18);
    PROCESSHISTORYPURGE = new BatchProcessType("ProcessHistoryPurge", 19);
    PURGECLUSTERMEMBERS = new BatchProcessType("PurgeClusterMembers", 20);
    PURGEFAILEDWORKITEMS = new BatchProcessType("PurgeFailedWorkItems", 21);
    PURGEDELETABLEFILES = new BatchProcessType("PurgeDeletableFiles", 22);
    PURGEPROFILERDATA = new BatchProcessType("PurgeProfilerData", 23);
    PURGEWORKFLOWS = new BatchProcessType("PurgeWorkflows", 24);
    PURGEWORKFLOWLOGS = new BatchProcessType("PurgeWorkflowLogs", 25);
    SOLRDATAIMPORT = new BatchProcessType("SolrDataImport", 26);
    STDELETEEXCLUDED = new BatchProcessType("STDeleteExcluded", 27);
    STENCRYPT = new BatchProcessType("STEncrypt", 28);
    STINTEGRITYCHECK = new BatchProcessType("STIntegrityCheck", 29);
    STLOAD = new BatchProcessType("STLoad", 30);
    STPOPEXCLUDED = new BatchProcessType("STPopExcluded", 31);
    STSTATISTICS = new BatchProcessType("STStatistics", 32);
    STATREPORT = new BatchProcessType("StatReport", 33);
    STATISTICS = new BatchProcessType("Statistics", 34);
    USEREXCEPTION = new BatchProcessType("UserException", 35);
    VERIFYMINIMUMCRITERIA = new BatchProcessType("VerifyMinimumCriteria", 36);
    WORKFLOW = new BatchProcessType("Workflow", 37);
    WORKITEMSETPURGE = new BatchProcessType("WorkItemSetPurge", 38);
    WORKQUEUEINSTRUMENTATIONPURGE = new BatchProcessType("WorkQueueInstrumentationPurge", 39);
    UNKNOWN = new BatchProcessType("Unknown", 40);
    UPDATEMATCHSETKEY = new BatchProcessType("UpdateMatchSetKey", 41);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate BatchProcessType instance, or null if no such code is present in the list
   */
  public static BatchProcessType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static BatchProcessType[] values() {
    Collection<BatchProcessType> keys = ALL_CODES.values();
    return keys.toArray(new BatchProcessType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private BatchProcessType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "BatchProcessType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BatchProcessType.class, "Categories");
  }

  /**
   * Compares two BatchProcessType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(BatchProcessType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
