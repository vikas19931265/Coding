package gw.wsi.pl
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiWebService
uses gw.xml.ws.WsiAuthenticationException
uses gw.api.webservice.systemTools.ServerVersion
uses gw.api.webservice.systemTools.SystemToolsImpl
uses gw.api.database.DatabaseSnapshotInfo;
uses gw.api.tools.ProcessID
uses gw.api.webservice.systemTools.SystemRunlevel
uses gw.api.webservice.systemTools.SessionData
uses gw.api.webservice.exception.ServerStateException
uses gw.api.webservice.exception.RequiredFieldException
uses gw.util.SystemOutLogger.LoggingLevel
uses gw.xml.ws.annotation.WsiGenInToolkit
uses java.lang.IllegalArgumentException

@WsiWebService("http://guidewire.com/pl/ws/gw/wsi/pl/SystemToolsAPI")
@WsiAvailability(MAINTENANCE)
@WsiGenInToolkit
@Export
class SystemToolsAPI {

  /**
   * Get the version of the server, including application version and schema version.
   * The application version is in the format: <tt>[major].[minor].[build]</tt>.
   * The scheme version is in the format: <tt>[base].[vertical]</tt>.
   *
   * @return  Version of the server, including application version and schema version.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function getVersion() : ServerVersion {
    return  new SystemToolsImpl().getVersion()
  }

  /**
   * Submit the consistency checks batch job on the underlying physical database.
   *
   * @param tablesToCheck                null - check all tables, else array of tables names to check
   * @param consistencyCheckTypesToCheck null - check all types, else array of types to check
   *                                     Must be valid <code>ConsistencyCheckType</code>s.
   * @return ProcessID  Describes results of consistency checks
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function submitDBCCBatchJob(tablesToCheck : String[], consistencyCheckTypesToCheck : String[]) : ProcessID {
    return new SystemToolsImpl().submitDBCCBatchJob( tablesToCheck, consistencyCheckTypesToCheck )
  }

  /**
   * Returns the state of the consistency checks process. Only one set of consistency checks can be running at
   * any given moment.
   *
   * @return the state of the consistency checks process
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function getDBCCState() : typekey.WorkItemSetState {
    return new SystemToolsImpl().getDBCCState()
  }

  /**
   * Run the update stats process on the underlying physical database. Please use isUpdateStatsRunning() to check on
   * the state of the run.
   *
   * @param description null - Description of the job
   * @param incremental true: the process should perform an incremental update; false: the process should perform a full upgrade
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function submitUpdateStats(description : String, incremental : boolean) {
    new SystemToolsImpl().submitUpdateStats( description, incremental )
  }

  /**
   * Cancel the update stats process if running. Please use getUpdateStatsState() to check on the state of the run.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function cancelUpdateStats() {
    new SystemToolsImpl().cancelUpdateStats()
  }

  /**
   * Returns the state of the update stats process. Only one update stats process can be running at
   * any given moment.
   *
   * @return the state of the update stats process
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function getUpdateStatsState() : typekey.WorkItemSetState {
    return new SystemToolsImpl().getUpdateStatsState()
  }

  /**
   * Submit the SQL Server DMV Performance Report batch job.
   *
   * @param includeDatabaseStatistics    The default is true.
   *
   * @return ProcessID  pid of batch job
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function submitDmvReportBatchJob(includeDatabaseStatistics : boolean) : ProcessID {
    return new SystemToolsImpl().submitDmvReportBatchJob( includeDatabaseStatistics )
  }

  /**
   * Retrieve the latest N Oracle AWR snapshots.
   *
   * @param numSnapshots                 Number of snapshots to retrieve.
   *
   * @return String[]                    Requested AWR snapshot information
   * @throws gw.api.webservice.exception.PermissionException SOAPException
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function getRecentAWRSnapshotInfo(numSnapshots : int) : DatabaseSnapshotInfo[] {
    return new SystemToolsImpl().getRecentAWRSnapshotInfo(numSnapshots)
  }

  /**
   * Submit the Oracle AWR Performance Report batch job with three parameters.
   *
   * @param beginSnapshot                ID of the beginning snapshot
   * @param endSnapshot                  ID of the ending snapshot
   * @param probeVDollarTables           True or false
   *
   * @return ProcessID  pid of batch job
   * @throws gw.api.webservice.exception.PermissionException SOAPException
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function submitAwrReportBatchJob(beginSnapshot : int, endSnapshot : int, probeVDollarTables : boolean) : ProcessID {
   return new SystemToolsImpl().submitAwrReportBatchJob( beginSnapshot, endSnapshot, probeVDollarTables )
  }


  /**
   * Submit the Oracle AWR Performance Report batch job with all possible parameters.
   *
   * @param beginSnapshotID              ID of beginning snapshot
   * @param endSnapshotID                ID of ENDING snapshot
   * @param probeVDollarTables           Whether to probe the V$Dollar tables
   * @param capturePeakedBindVariables   Whether to capturePeakedBindVariables
   * @param searchForQueriesWithMultiplePlans
   *                                     Whether to search for queries with mulitiple plans
   * @param searchForQueriesOnlyInFirstSnapshot
   *                                     Whether to search for queries only in first snapshot
   * @param searchForQueriesOnlyInLastSnapshot
   *                                     Whether to search for queries only in last snapshot
   * @param includeMetadataForInstrumentationTables
   *                                     Whether to include metadata for instrumentation tables
   * @param useExperimentalRawDataOutput Whether to use experimental raw data output
   * @param includeDatabaseStatistics    Whether to include database statistics
   * @param probeSQLMonitor              Whether to probe SQL monitor
   * @param capturePeakedBindVariablesFromAWR
   *                                     Whether to capture peaked bind variables from AWR
   * @param generateCallsToASHScripts    Whether to generate calls to ASH scripts
   * @return Process ID of submitted batch job
   * @throws gw.api.webservice.exception.PermissionException SOAPException
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function submitAwrReportBatchJobAllOpts(beginSnapshot : int, endSnapshot : int,
                                                          probeVDollarTables : boolean,
                                                          capturePeakedBindVariables : boolean,
                                                          searchForQueriesWithMultiplePlans : boolean,
                                                          searchForQueriesOnlyInFirstSnapshot : boolean,
                                                          searchForQueriesOnlyInLastSnapshot : boolean,
                                                          includeMetadataForInstrumentationTables : boolean,
                                                          useExperimentalRawDataOutput : boolean,
                                                          includeDatabaseStatistics : boolean,
                                                          probeSQLMonitor : boolean,
                                                          capturePeakedBindVariablesFromAWR : boolean,
                                                          generateCallsToASHScripts : boolean) : ProcessID {
     return new SystemToolsImpl().submitAwrReportBatchJobAllOpts( beginSnapshot, endSnapshot, probeVDollarTables,
         capturePeakedBindVariables, searchForQueriesWithMultiplePlans, searchForQueriesOnlyInFirstSnapshot,
         searchForQueriesOnlyInLastSnapshot, includeMetadataForInstrumentationTables, useExperimentalRawDataOutput,
         includeDatabaseStatistics, probeSQLMonitor, capturePeakedBindVariablesFromAWR, generateCallsToASHScripts)
  }

  /**
   * Retrieve the information about the latest N Oracle AWR downloads.
   *
   * @param numDownloads                 How many AWR downloads for which to return info.
   *                                     Passing 0 means to return all available.
   *
   * @return PerfDownloadDetail[]        Requested AWR download information
   * @throws gw.api.webservice.exception.PermissionException SOAPException
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function getPerfReportsInfo(numDownloads : int) : String[] {
    return new SystemToolsImpl().getPerfDownloadsInfo(numDownloads)
  }

  /**
   * Creates a report of the state of the database catalog statistics for all tables.
   *
   * @return a zip file of an HTML report to view the database catalog statistics.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function reportDatabaseCatalogStatistics() : byte[]  {
    return new SystemToolsImpl().reportDatabaseCatalogStatistics()
  }

  /**
   * Creates a report of the state of the database catalog statistics for all tables.
   *
   * @param tables         null - report on all tables, else array of tables names to on which to report
   * @param stagingTables  null - report on all staging tables, else array of staging tables names to on which to report
   * @param typelistTables null - report on all typelist tables, else array of typelist tables names to on which to report
   * @return a zip file of an HTML report to view the database catalog statistics on the selected tables.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  @Throws(ServerStateException,"for errors production the report")
  public function reportPartialDatabaseCatalogStatistics(tables : String[], stagingTables : String[], typelistTables : String[]): byte[] {
   return new SystemToolsImpl().reportPartialDatabaseCatalogStatistics(tables, stagingTables, typelistTables)
  }

  /**
   * Verify that the data mode matches the physical database
   * @return String[] Any differences between the data model and the physical database.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function verifyDatabaseSchema() : String[]{
    return new SystemToolsImpl().verifyDatabaseSchema()
  }

  /**
   * Sets the run level of this specific server. If the server is currently undergoing a runlevel change, this method will block
   * until that level change has completed.
   * <p/>
   * The valid run levels that the server can be set to through this method are <code>SystemRunlevel.GW_DB_MAINTENANCE</code>,
   * <code>SystemRunlevel.GW_MAINTENANCE</code>, and <code>SystemRunlevel.GW_MULTIUSER</code>.  See the definitions of those constants
   * for more information.
   *
   * @param runLevel The level at which the server should run.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  @Throws(ServerStateException,"for errors setting the run level")
  public function setRunlevel(runLevel : SystemRunlevel){
    new SystemToolsImpl().setRunlevel(runLevel)
  }

  /**
   * Gets the run level of the server.  See the definition of the run level constants for details of how to interpret
   * this value.
   *
   * @return An int containing the runlevel
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function getRunlevel() : SystemRunlevel{
    return new SystemToolsImpl().getRunlevel()
  }

  /**
   * Gets the highest run level of the cluster.  See the definition of the run level constants for details of how to
   * interpret this value.
   *
   * @return An int containing the highest runlevel of the cluster.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function getHighestRunlevel() : SystemRunlevel {
    return new SystemToolsImpl().getHighestRunlevel()
  }

  /**
   * Returns all server session information.  The session information is returned as an array of SessionData objects,
   * each of which contains the user's name, ID, and session ID for a session that's currently open.
   *
   * @return all server session information.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function getActiveSessionData() : SessionData[] {
    return new SystemToolsImpl().getActiveSessionData()
  }

  /**
   * Dynamically updates the logging level of the given logger.
   *
   * @param logger The name of the logger to be updated - this should be a qualified class or package
   * @param level One of 5 possible logging levels: INFO, DEBUG, WARN, ERROR, TRACE
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  @Throws(RequiredFieldException, "if logger is not defined")
  public function updateLoggingLevel(logger : String, level : LoggingLevel) {
    if (level == null) {
      throw new IllegalArgumentException("Level must be one of INFO, DEBUG, WARN, ERROR, TRACE")
    }
    new SystemToolsImpl().updateLoggingLevel(logger, level.name())
  }

  /**
   * Causes a reload of the logging.properties.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function reloadLoggingConfig(){
    new SystemToolsImpl().reloadLoggingConfig()
  }

  /**
   * Recalculates the file checksums used for clustered configuration verification.  Returns true
   * if checksums were recalcuted and false if clustering or configuration verification were disabled.
   *
   * @return <code>true</code> if checksums were recalcuted and <code>false</code> if clustering or configuration verification were disabled.
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  public function recalculateFileChecksums() : boolean {
    return new SystemToolsImpl().recalculateFileChecksums()
  }

  /**
   * Get a list of all of the logger categories available in the system. These can be used
   * directly in logging.properties.
   *
   * @return An array of Strings containing all logger categories in the system
   */
  @Throws(WsiAuthenticationException,"On permission or authentication errors")
  function getLoggingCategories() : String[] {
    return new SystemToolsImpl().getLoggingCategories()
  }
}
