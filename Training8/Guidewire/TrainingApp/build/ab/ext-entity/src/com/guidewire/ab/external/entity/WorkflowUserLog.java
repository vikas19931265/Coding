package com.guidewire.ab.external.entity;

/**
 * A log entry for user actions.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkflowUserLog extends com.guidewire.ab.external.entity.WorkflowLogEntry
{


  /**
   * The user how invoked the action. NOTE: when inserting a WorkflowUserLog this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();


  /**
   * Utility class for initializing an instance of WorkflowUserLog
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WorkflowUserLog.
     */
    public static WorkflowUserLog newInstance()
    {
      return (WorkflowUserLog) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WorkflowUserLog.class);
    }
  }

}
