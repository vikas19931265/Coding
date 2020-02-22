package com.guidewire.ab.external.entity;

/**
 * Process run history
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProcessHistory extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Versionable, external.gw.api.profiler.ProfilerDataSource, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The date this process completed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CompleteDate")
  public java.util.Date getCompleteDate();

  /**
   * The date this process completed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CompleteDate")
  public void setCompleteDate(java.util.Date value);


  /**
   * The number of operations that failed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FailedOps")
  public java.lang.Integer getFailedOps();

  /**
   * The number of operations that failed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FailedOps")
  public void setFailedOps(java.lang.Integer value);


  /**
   * If not successful, the reason the process failed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FailureReason")
  public java.lang.String getFailureReason();

  /**
   * If not successful, the reason the process failed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FailureReason")
  public void setFailureReason(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Completion Notification Sent
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NotificationSent")
  public java.lang.Boolean isNotificationSent();

  /**
   * Completion Notification Sent
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NotificationSent")
  public void setNotificationSent(java.lang.Boolean value);


  /**
   * The total number of operations the process performed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OpsPerformed")
  public java.lang.Integer getOpsPerformed();

  /**
   * The total number of operations the process performed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OpsPerformed")
  public void setOpsPerformed(java.lang.Integer value);


  /**
   * The process this entry refers to. NOTE: when inserting a ProcessHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProcessType")
  public com.guidewire.ab.external.typelist.BatchProcessType getProcessType();

  /**
   * The process this entry refers to. NOTE: when inserting a ProcessHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProcessType")
  public void setProcessType(com.guidewire.ab.external.typelist.BatchProcessType value);


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
   * Whether or not the process ran to completion, or failed or was interrupted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RanToCompletion")
  public java.lang.Boolean isRanToCompletion();

  /**
   * Whether or not the process ran to completion, or failed or was interrupted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RanToCompletion")
  public void setRanToCompletion(java.lang.Boolean value);


  /**
   * Whether this was a scheduled run
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Scheduled")
  public java.lang.Boolean isScheduled();

  /**
   * Whether this was a scheduled run
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Scheduled")
  public void setScheduled(java.lang.Boolean value);


  /**
   * The date this process started. NOTE: when inserting a ProcessHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartDate")
  public java.util.Date getStartDate();

  /**
   * The date this process started. NOTE: when inserting a ProcessHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartDate")
  public void setStartDate(java.util.Date value);


  /**
   * Utility class for initializing an instance of ProcessHistory
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ProcessHistory.
     */
    public static ProcessHistory newInstance()
    {
      return (ProcessHistory) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ProcessHistory.class);
    }
  }

}
