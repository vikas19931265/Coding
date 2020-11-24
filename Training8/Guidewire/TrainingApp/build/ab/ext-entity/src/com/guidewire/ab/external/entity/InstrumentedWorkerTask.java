package com.guidewire.ab.external.entity;

/**
 * Instrumentation information for a run of a distributed worker instance.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface InstrumentedWorkerTask extends external.gw.api.profiler.ProfilerDataSource, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * The number of exceptions caught during workitem processing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Cdcs")
  public java.lang.Integer getCdcs();

  /**
   * The number of exceptions caught during workitem processing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Cdcs")
  public void setCdcs(java.lang.Integer value);


  /**
   * Count of the number of consecutive work items that resulted in an exception.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ConsecutiveExceptions")
  public java.lang.Integer getConsecutiveExceptions();

  /**
   * Count of the number of consecutive work items that resulted in an exception.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ConsecutiveExceptions")
  public void setConsecutiveExceptions(java.lang.Integer value);


  /**
   * Timestamp when the instance was shutdown.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * Timestamp when the instance was shutdown.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * The number of exceptions caught during workitem processing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Exceptions")
  public java.lang.Integer getExceptions();

  /**
   * The number of exceptions caught during workitem processing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Exceptions")
  public void setExceptions(java.lang.Integer value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * The instance number on this app server. NOTE: when inserting a InstrumentedWorkerTask this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InstanceNumber")
  public java.lang.Integer getInstanceNumber();

  /**
   * The instance number on this app server. NOTE: when inserting a InstrumentedWorkerTask this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "InstanceNumber")
  public void setInstanceNumber(java.lang.Integer value);


  /**
   * Returns {@link InstrumentedWorkExecutor} that runs this task.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InstrumentedWorkExecutor")
  public com.guidewire.ab.external.entity.InstrumentedWorkExecutor getInstrumentedWorkExecutor();


  /**
   * Executor instance that created this task. NOTE: when inserting a InstrumentedWorkerTask this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InstrumentedWorkExecutorID")
  public java.lang.Long getInstrumentedWorkExecutorID();

  /**
   * Executor instance that created this task. NOTE: when inserting a InstrumentedWorkerTask this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "InstrumentedWorkExecutorID")
  public void setInstrumentedWorkExecutorID(java.lang.Long value);


  /**
   * The number of milliseconds spent managing the work queue.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ManagementElapsed")
  public java.lang.Long getManagementElapsed();

  /**
   * The number of milliseconds spent managing the work queue.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ManagementElapsed")
  public void setManagementElapsed(java.lang.Long value);


  /**
   * The number of orphaned workitems reclaimed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrphansAdopted")
  public java.lang.Integer getOrphansAdopted();

  /**
   * The number of orphaned workitems reclaimed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OrphansAdopted")
  public void setOrphansAdopted(java.lang.Integer value);


  /**
   * The writer batch job that created all workitem processed by this run.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProcessHistoryID")
  public java.lang.Long getProcessHistoryID();

  /**
   * The writer batch job that created all workitem processed by this run.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProcessHistoryID")
  public void setProcessHistoryID(java.lang.Long value);


  /**
   * Raw Profiler data
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProfilerData")
  public external.gw.lang.Blob getProfilerData();

  /**
   * Raw Profiler data
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProfilerData")
  public void setProfilerData(external.gw.lang.Blob value);


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
   * Whether the worker batch ran to completion, or failed or was interrupted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RanToCompletion")
  public java.lang.Boolean isRanToCompletion();

  /**
   * Whether the worker batch ran to completion, or failed or was interrupted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RanToCompletion")
  public void setRanToCompletion(java.lang.Boolean value);


  /**
   * Timestamp when the instance was started.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Timestamp when the instance was started.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * The number of milliseconds spent processing work items.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkElapsed")
  public java.lang.Long getWorkElapsed();

  /**
   * The number of milliseconds spent processing work items.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkElapsed")
  public void setWorkElapsed(java.lang.Long value);


  /**
   * The number of workitems checked out.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkitemsCheckedOut")
  public java.lang.Integer getWorkitemsCheckedOut();

  /**
   * The number of workitems checked out.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkitemsCheckedOut")
  public void setWorkitemsCheckedOut(java.lang.Integer value);


  /**
   * The number of workitems marked as failed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkitemsFailed")
  public java.lang.Integer getWorkitemsFailed();

  /**
   * The number of workitems marked as failed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkitemsFailed")
  public void setWorkitemsFailed(java.lang.Integer value);


  /**
   * The number of workitems processed successfully.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkitemsProcessed")
  public java.lang.Integer getWorkitemsProcessed();

  /**
   * The number of workitems processed successfully.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkitemsProcessed")
  public void setWorkitemsProcessed(java.lang.Integer value);


  /**
   * The number of workitems processed after previous attempt failed with CDC.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkitemsProcessedAfterCdc")
  public java.lang.Integer getWorkitemsProcessedAfterCdc();

  /**
   * The number of workitems processed after previous attempt failed with CDC.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkitemsProcessedAfterCdc")
  public void setWorkitemsProcessedAfterCdc(java.lang.Integer value);


  /**
   * The number of workitems processed after previous attempt failed with some kind of error (including CDC).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkitemsProcessedAfterError")
  public java.lang.Integer getWorkitemsProcessedAfterError();

  /**
   * The number of workitems processed after previous attempt failed with some kind of error (including CDC).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkitemsProcessedAfterError")
  public void setWorkitemsProcessedAfterError(java.lang.Integer value);


  /**
   * The number of workitems skipped.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkitemsSkipped")
  public java.lang.Integer getWorkitemsSkipped();

  /**
   * The number of workitems skipped.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkitemsSkipped")
  public void setWorkitemsSkipped(java.lang.Integer value);

  /**
   * Gets custom instrumentation.
   *
   * @return {@link WorkQueueInstrumentationFieldType}, never <code>null</code>.
   * @param fieldTypes instrumentation fields. This is required because instrumentation fields
                  definition might be changed after instrumentation was saved previous time.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCustomInstrumentation")
  public external.gw.processes.WorkQueueInstrumentation getCustomInstrumentation(java.util.Map fieldTypes);

  /**
   * Gets custom instrumentation. Parsing errors are expected and logged, an empty object (not <code>null</code>)
is returned in case of a parsing error error.
   *
   * @return {@link WorkQueueInstrumentationFieldType}, never <code>null</code>.
   * @param fieldTypes instrumentation fields. This is required because instrumentation fields
                  definition might be changed after instrumentation was saved previous time.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOrCreateCustomInstrumentation")
  public external.gw.processes.WorkQueueInstrumentation getOrCreateCustomInstrumentation(java.util.Map fieldTypes);

  /**
   * Saves custom instrumentation. Returns <code>false</code> if could not convert
the instrumentation to JSON (e.g. it was too big). Conversion errors are expected are logged.
   *
   * @param instrumentation custom instrumentation to save.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setCustomInstrumentation")
  public boolean setCustomInstrumentation(external.gw.processes.WorkQueueInstrumentation instrumentation);


  /**
   * Utility class for initializing an instance of InstrumentedWorkerTask
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity InstrumentedWorkerTask.
     */
    public static InstrumentedWorkerTask newInstance()
    {
      return (InstrumentedWorkerTask) gw.pl.external.entity.EntityFactory.getInstance().newEntity(InstrumentedWorkerTask.class);
    }
  }

}
