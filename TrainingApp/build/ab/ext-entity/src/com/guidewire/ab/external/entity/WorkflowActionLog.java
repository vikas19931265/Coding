package com.guidewire.ab.external.entity;

/**
 * A log entry for user actions.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkflowActionLog extends com.guidewire.ab.external.entity.WorkflowLogEntry
{


  /**
   * The current action
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Action")
  public com.guidewire.ab.external.typelist.WorkflowActionType getAction();


  /**
   * The current step of the id
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StepId")
  public java.lang.String getStepId();


  /**
   * Utility class for initializing an instance of WorkflowActionLog
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WorkflowActionLog.
     */
    public static WorkflowActionLog newInstance()
    {
      return (WorkflowActionLog) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WorkflowActionLog.class);
    }
  }

}
