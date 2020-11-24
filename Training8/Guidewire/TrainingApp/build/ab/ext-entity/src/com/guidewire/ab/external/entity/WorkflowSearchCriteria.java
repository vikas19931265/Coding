package com.guidewire.ab.external.entity;

/**
 * Search criteria used for workflow searches.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkflowSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * The specific state of the workflow if it's active.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActiveState")
  public com.guidewire.ab.external.typelist.WorkflowActiveState getActiveState();

  /**
   * The specific state of the workflow if it's active.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ActiveState")
  public void setActiveState(com.guidewire.ab.external.typelist.WorkflowActiveState value);


  /**
   * Returns all the step ids available for the specified workflow subtype and version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AvailableSteps")
  public java.lang.String[] getAvailableSteps();


  /**
   * Returns all the workflow subtypes that are not abstract.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AvailableTypes")
  public com.guidewire.ab.external.typelist.Workflow[] getAvailableTypes();


  /**
   * Returns all the versions available for the given subtype
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AvailableVersions")
  public java.lang.Integer[] getAvailableVersions();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Whether this workflows work item is checked out.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CheckedOut")
  public java.lang.Boolean isCheckedOut();

  /**
   * Whether this workflows work item is checked out.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CheckedOut")
  public void setCheckedOut(java.lang.Boolean value);


  /**
   * Name of the current step the workflow is on.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentStep")
  public java.lang.String getCurrentStep();

  /**
   * Name of the current step the workflow is on.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CurrentStep")
  public void setCurrentStep(java.lang.String value);


  /**
   * What infrastructure component is handling the workflow?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Handler")
  public com.guidewire.ab.external.typelist.WorkflowHandler getHandler();

  /**
   * What infrastructure component is handling the workflow?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Handler")
  public void setHandler(com.guidewire.ab.external.typelist.WorkflowHandler value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * The workflow's parent workflow.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public com.guidewire.ab.external.entity.Workflow getParent();

  /**
   * The workflow's parent workflow.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Parent")
  public void setParent(com.guidewire.ab.external.entity.Workflow value);


  /**
   * The version number of the workflow definition.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProcessVersion")
  public java.lang.Integer getProcessVersion();

  /**
   * The version number of the workflow definition.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProcessVersion")
  public void setProcessVersion(java.lang.Integer value);


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
   * Start date lower bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartDateFrom")
  public java.util.Date getStartDateFrom();

  /**
   * Start date lower bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartDateFrom")
  public void setStartDateFrom(java.util.Date value);


  /**
   * Start date upper bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartDateTo")
  public java.util.Date getStartDateTo();

  /**
   * Start date upper bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartDateTo")
  public void setStartDateTo(java.util.Date value);


  /**
   * The workflow's current state.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public com.guidewire.ab.external.typelist.WorkflowState getState();

  /**
   * The workflow's current state.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "State")
  public void setState(com.guidewire.ab.external.typelist.WorkflowState value);


  /**
   * Update date lower bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateDateFrom")
  public java.util.Date getUpdateDateFrom();

  /**
   * Update date lower bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateDateFrom")
  public void setUpdateDateFrom(java.util.Date value);


  /**
   * Update date upper bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateDateTo")
  public java.util.Date getUpdateDateTo();

  /**
   * Update date upper bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateDateTo")
  public void setUpdateDateTo(java.util.Date value);


  /**
   * The type of the workflow.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Workflowtype")
  public com.guidewire.ab.external.typelist.Workflow getWorkflowtype();

  /**
   * The type of the workflow.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Workflowtype")
  public void setWorkflowtype(com.guidewire.ab.external.typelist.Workflow value);

  /**
   * Returns the step name in the given local for the step id
   *
   * @return the step name
   * @param stepId 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "localizedStepName")
  public java.lang.String localizedStepName(java.lang.String stepId);

  /**
   * Finds all workflows that match this search criteria
   *
   * @return a QueryProcessor of Workflow objects that match this search criteria
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearch")
  public external.gw.api.database.IQueryBeanResult performSearch();


  /**
   * Utility class for initializing an instance of WorkflowSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WorkflowSearchCriteria.
     */
    public static WorkflowSearchCriteria newInstance()
    {
      return (WorkflowSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WorkflowSearchCriteria.class);
    }
  }

}
