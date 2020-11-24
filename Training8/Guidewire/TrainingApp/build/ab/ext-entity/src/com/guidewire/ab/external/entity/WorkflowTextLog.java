package com.guidewire.ab.external.entity;

/**
 * A log entry that is just text.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkflowTextLog extends com.guidewire.ab.external.entity.WorkflowLogEntry
{


  /**
   * Optional detailed description (may include stack trace)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();


  /**
   * Short description NOTE: when inserting a WorkflowTextLog this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Summary")
  public java.lang.String getSummary();


  /**
   * Utility class for initializing an instance of WorkflowTextLog
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WorkflowTextLog.
     */
    public static WorkflowTextLog newInstance()
    {
      return (WorkflowTextLog) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WorkflowTextLog.class);
    }
  }

}
