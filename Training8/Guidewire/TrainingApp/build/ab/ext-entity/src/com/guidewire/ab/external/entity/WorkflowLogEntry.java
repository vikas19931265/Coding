package com.guidewire.ab.external.entity;

/**
 * Log of what work the Workflows have performed.  Each row is one entry.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkflowLogEntry extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * The argument for the display key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Argument")
  public java.lang.Integer getArgument();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The display key to construct
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DisplayKey")
  public java.lang.String getDisplayKey();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * This will localize the message for the current locale
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LocalizeMessage")
  public java.lang.String getLocalizeMessage();


  /**
   * The date when this entry was logged NOTE: when inserting a WorkflowLogEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LogDate")
  public java.util.Date getLogDate();


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
   * Number of times this workflow has been polled. NOTE: when inserting a WorkflowLogEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SortOrder")
  public java.lang.Integer getSortOrder();

  /**
   * Number of times this workflow has been polled. NOTE: when inserting a WorkflowLogEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SortOrder")
  public void setSortOrder(java.lang.Integer value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.WorkflowLogEntry getSubtype();


  /**
   * The Workflow this log entry is for
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Workflow")
  public com.guidewire.ab.external.entity.Workflow getWorkflow();


  /**
   * Utility class for initializing an instance of WorkflowLogEntry
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WorkflowLogEntry.
     */
    public static WorkflowLogEntry newInstance()
    {
      return (WorkflowLogEntry) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WorkflowLogEntry.class);
    }
  }

}
