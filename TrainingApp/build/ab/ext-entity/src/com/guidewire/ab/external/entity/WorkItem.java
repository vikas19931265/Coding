package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkItem extends gw.pl.external.entity.Entity
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Attempts")
  public java.lang.Integer getAttempts();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Attempts")
  public void setAttempts(java.lang.Integer value);


  /**
   * The time after which the work item can be tried. Must be null on failed work items
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AvailableSince")
  public java.util.Date getAvailableSince();

  /**
   * The time after which the work item can be tried. Must be null on failed work items
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AvailableSince")
  public void setAvailableSince(java.util.Date value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CheckedOutBy")
  public java.lang.String getCheckedOutBy();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CheckedOutBy")
  public void setCheckedOutBy(java.lang.String value);


  /**
   *  NOTE: when inserting a WorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreationTime")
  public java.util.Date getCreationTime();


  /**
   * Stack trace of the exception
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Exception")
  public java.lang.String getException();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastUpdateTime")
  public java.util.Date getLastUpdateTime();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastUpdateTime")
  public void setLastUpdateTime(java.util.Date value);


  /**
   * Return that number of retries, i.e. Attempts - 1.
Added for backward compatibility.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumRetries")
  public java.lang.Integer getNumRetries();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Priority")
  public java.lang.Integer getPriority();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Priority")
  public void setPriority(java.lang.Integer value);


  /**
   * Return {@link ProcessHistory} that may be <code>null</code>
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProcessHistory")
  public com.guidewire.ab.external.entity.ProcessHistory getProcessHistory();


  /**
   * The writer batch job that created this workitem (ProcessHistory).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProcessHistoryID")
  public java.lang.Long getProcessHistoryID();

  /**
   * The writer batch job that created this workitem (ProcessHistory).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProcessHistoryID")
  public void setProcessHistoryID(java.lang.Long value);


  /**
   * Status of this workitem.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.WorkItemStatusType getStatus();

  /**
   * Postpone work item for later retrial
   *
   * @param availableSince The time to retry work item
   * @param now Current time (used to update LastUpdateTime timestamp).
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "checkIn")
  public void checkIn(java.util.Date availableSince, java.util.Date now);

  /**
   * Check out a work item. The progressInterval is used to calculate
the AvailableSince date to set (checkoutTime + 2 * progressInterval).
The AvailableSince date is used to find orphans.
   *
   * @param checkoutTime The time of check out
   * @param instanceNumber The instance number of the worker doing the check out
   * @param progressInterval progress interval
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "checkOut")
  public void checkOut(java.util.Date checkoutTime, int instanceNumber, long progressInterval);

  /**
   * Fail work item
   *
   * @param failDate The time of failure
   * @param exception optional exception string. If <code>null</code> exception field on the work item
                 is not modified (current value will be preserved).
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "fail")
  public void fail(java.util.Date failDate, java.lang.String exception);

  /**
   * Initialize work items
   *
   * @param now Current time (used to update LastUpdateTime timestamp).
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "initialize")
  public void initialize(java.util.Date now);


  /**
   * Utility class for initializing an instance of WorkItem
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WorkItem.
     */
    public static WorkItem newInstance()
    {
      return (WorkItem) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WorkItem.class);
    }
  }

}
