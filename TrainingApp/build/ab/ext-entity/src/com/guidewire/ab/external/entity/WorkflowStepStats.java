package com.guidewire.ab.external.entity;

/**
 * Workflow elapsed and execution time statistics aggregated by workflow step.  Elapsed time is the total time spent from step entry to completion.  Execution time is time spent on processing, excluding time spent waiting on triggers, activities, or timeouts.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkflowStepStats extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Maximum elapsed time spent processing any occurrence of this step, in millis. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElapsedTimeMax")
  public java.lang.Long getElapsedTimeMax();


  /**
   * Average elapsed time spent processing occurrences of this step, in millis. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElapsedTimeMean")
  public java.lang.Long getElapsedTimeMean();


  /**
   * Minimum elapsed time spent processing any occurrence of this step, in millis. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElapsedTimeMin")
  public java.lang.Long getElapsedTimeMin();


  /**
   * Standard deviation of elapsed time spent processing occurrences of this step, in millis. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElapsedTimeStdDev")
  public java.lang.Long getElapsedTimeStdDev();


  /**
   * End of the statistics aggregation period.  Statistics were computed from steps completing on or before this time. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();


  /**
   * Maximum system time spent actively processing any occurrence of this step, in millis. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecTimeMax")
  public java.lang.Long getExecTimeMax();


  /**
   * Average system time spent actively processing occurrences of this step, in millis. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecTimeMean")
  public java.lang.Long getExecTimeMean();


  /**
   * Minimum system time spent actively processing any occurrence of this step, in millis. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecTimeMin")
  public java.lang.Long getExecTimeMin();


  /**
   * Standard deviation of system time spent actively processing occurrences of this step, in millis. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecTimeStdDev")
  public java.lang.Long getExecTimeStdDev();


  /**
   * Total number of steps that completed within the aggregation period. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Executions")
  public java.lang.Integer getExecutions();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Version of the workflow process used, if this uses an internal workflow NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProcessVersion")
  public java.lang.Integer getProcessVersion();


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * The app server ID. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServerID")
  public java.lang.String getServerID();

  /**
   * The app server ID. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServerID")
  public void setServerID(java.lang.String value);


  /**
   * Start of the statistics aggregation period.  Statistics were computed from steps completing after this time. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();


  /**
   * ID of the workflow step. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StepName")
  public java.lang.String getStepName();


  /**
   * Type of the workflow. NOTE: when inserting a WorkflowStepStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkflowType")
  public com.guidewire.ab.external.typelist.Workflow getWorkflowType();

  /**
   * Returns the localized display name for the current step in the current locale
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "localizedStepName")
  public java.lang.String localizedStepName();


  /**
   * Utility class for initializing an instance of WorkflowStepStats
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WorkflowStepStats.
     */
    public static WorkflowStepStats newInstance()
    {
      return (WorkflowStepStats) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WorkflowStepStats.class);
    }
  }

}
