package com.guidewire.ab.external.entity;

/**
 * Describes a set of Work Items
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkItemSet extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * timestamp when the last WorkItem finished processing
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * timestamp when the last WorkItem finished processing
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Number of operations that were not processed because the user canceled the WorkItemSet
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumOpsCanceled")
  public java.lang.Integer getNumOpsCanceled();

  /**
   * Number of operations that were not processed because the user canceled the WorkItemSet
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumOpsCanceled")
  public void setNumOpsCanceled(java.lang.Integer value);


  /**
   * Number of operations completed (successfully or otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumOpsCompleted")
  public java.lang.Integer getNumOpsCompleted();

  /**
   * Number of operations completed (successfully or otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumOpsCompleted")
  public void setNumOpsCompleted(java.lang.Integer value);


  /**
   * Number of operations that have failed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumOpsFailed")
  public java.lang.Integer getNumOpsFailed();

  /**
   * Number of operations that have failed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumOpsFailed")
  public void setNumOpsFailed(java.lang.Integer value);


  /**
   * Total number of operations (WorkItems) that make up this WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumTotalOps")
  public java.lang.Integer getNumTotalOps();

  /**
   * Total number of operations (WorkItems) that make up this WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumTotalOps")
  public void setNumTotalOps(java.lang.Integer value);


  /**
   * Reference to the ProcessHistory instance of the batch process that generated this WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProcessHistory")
  public java.lang.Long getProcessHistory();

  /**
   * Reference to the ProcessHistory instance of the batch process that generated this WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProcessHistory")
  public void setProcessHistory(java.lang.Long value);


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
   * timestamp when we started processing the WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * timestamp when we started processing the WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * The state of this WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public com.guidewire.ab.external.typelist.WorkItemSetState getState();

  /**
   * The state of this WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "State")
  public void setState(com.guidewire.ab.external.typelist.WorkItemSetState value);


  /**
   * The type of WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkItemSetType")
  public com.guidewire.ab.external.typelist.BatchProcessType getWorkItemSetType();

  /**
   * The type of WorkItemSet NOTE: when inserting a WorkItemSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkItemSetType")
  public void setWorkItemSetType(com.guidewire.ab.external.typelist.BatchProcessType value);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "cancelUnprocessedWorkItems")
  public void cancelUnprocessedWorkItems();


  /**
   * Utility class for initializing an instance of WorkItemSet
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WorkItemSet.
     */
    public static WorkItemSet newInstance()
    {
      return (WorkItemSet) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WorkItemSet.class);
    }
  }

}
