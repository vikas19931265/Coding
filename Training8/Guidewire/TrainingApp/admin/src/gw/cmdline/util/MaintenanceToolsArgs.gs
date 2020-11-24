package gw.cmdline.util

uses gw.lang.cli.*

class MaintenanceToolsArgs {

  /**
   * The name of the process to start.
   */
  @ShortName( "startprocess" )
  static var _startProcess : String as StartProcess

  /**
   * A name or process number to return the process status of
   */
  @ShortName( "processstatus" )
  static var _processStatus : String as ProcessStatus

  /**
   * A name or process number to terminate
   */
  @ShortName( "terminateprocess" )
  static var _terminateProcess : String as TerminateProcess

  /**
   * Gets the list of SQL statements to update database statistics
   */
  @ShortName( "getdbstatisticsstatements" )
  static var _dbStats : boolean as GetDBStatisticsStatements

  /**
   * Return the incremental db stats for this server based in update threshold
   */
  @ShortName( "getincrementaldbstatisticsstatements" )
  static var _dbIncrementalStats : boolean as GetIncrementalDBStatisticsStatements


  /**
   * The root server URL to access
   */
  @DefaultValue( 
          "http://localhost:8280/ab" )
  static var _server : String as Server

  /**
   * The user to log in as
   */
  @DefaultValue( "su" )
  static var _user : String as User

  /**
   * The password to use
   */
  @DefaultValue( "gw" )
  static var _password : String as Password

}
