package com.guidewire.ab.external.entity;

/**
 * Table for workflow definitions
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Workflow extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Specific state of this workflow if active (e.g. running, waitmanual, waitactivity).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActiveState")
  public com.guidewire.ab.external.typelist.WorkflowActiveState getActiveState();


  /**
   * This will find the active work item for this workflow if it exists
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActiveWorkflowWorkItem")
  public com.guidewire.ab.external.entity.WorkflowWorkItem getActiveWorkflowWorkItem();


  /**
   * Active activities on this workflow.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Activities")
  public com.guidewire.ab.external.entity.Activity[] getActivities();


  /**
   * Returns a list of available triggers
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AvailableTriggers")
  public java.util.List getAvailableTriggers();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * What workflow called this workflow
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Caller")
  public com.guidewire.ab.external.entity.Workflow getCaller();


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * What action is the Workflow currently trying to take?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentAction")
  public com.guidewire.ab.external.typelist.WorkflowActionType getCurrentAction();


  /**
   * ID of the branch the workflow is currently trying to execute.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentBranch")
  public java.lang.String getCurrentBranch();


  /**
   * ID of the workflow's current step.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentStep")
  public java.lang.String getCurrentStep();


  /**
   * Gets the current time, which is normally the time from the SystemClock, but will
be the value of the "testTime" field if the Workflow's handler is internal
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateTime")
  public java.util.Date getDateTime();


  /**
   * Will return the default language from this workflow.  Note that this
is used by WorkflowEngine to set the locale prior to executing
the workflow processing in advance.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultLanguage")
  public gw.pl.external.i18n.ILocale getDefaultLanguage();


  /**
   * Will return the default locale from this workflow.  Note that this
is used by WorkflowEngine to set the locale prior to executing
the workflow processing in advance.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultLocale")
  public gw.pl.external.i18n.ILocale getDefaultLocale();


  /**
   * Time when the Workflow entered the current step
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnteredStep")
  public java.util.Date getEnteredStep();


  /**
   * ID of the next workflow timeout branch to take.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ForceTimeoutBranch")
  public java.lang.String getForceTimeoutBranch();


  /**
   * What infrastructure handles this Workflow? NOTE: when inserting a Workflow this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Handler")
  public com.guidewire.ab.external.typelist.WorkflowHandler getHandler();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Log of what work this Workflow has performed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Log")
  public com.guidewire.ab.external.entity.WorkflowLogEntry[] getLog();


  /**
   * Integration message associated with this workflow
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Message")
  public com.guidewire.ab.external.entity.Message getMessage();


  /**
   * Completed integration message associated with this workflow
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MessageHistory")
  public com.guidewire.ab.external.entity.MessageHistory getMessageHistory();


  /**
   * ID of the step the workflow was on BEFORE the current step.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreviousStep")
  public java.lang.String getPreviousStep();


  /**
   * Version of the workflow process used, if this uses an internal workflow
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
   * State of this workflow (e.g., 'started', 'completed', etc.) NOTE: when inserting a Workflow this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public com.guidewire.ab.external.typelist.WorkflowState getState();


  /**
   * Total system time spent actively processing the current step, in millis.  Does not include time spent waiting on triggers, activities, or timeouts
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StepExecTime")
  public java.lang.Long getStepExecTime();


  /**
   * Gets all subflows created by the "createSubFlow" method
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SubFlows")
  public com.guidewire.ab.external.entity.Workflow[] getSubFlows();


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.Workflow getSubtype();


  /**
   * What time the Workflow thinks it is
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TestTime")
  public java.util.Date getTestTime();


  /**
   * Date/time when current step will time out.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TimeoutTime")
  public java.util.Date getTimeoutTime();

  /**
   * Date/time when current step will time out.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TimeoutTime")
  public void setTimeoutTime(java.util.Date value);


  /**
   * Marks the key of a Trigger that was invoked, or null
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TriggerInvoked")
  public com.guidewire.ab.external.typelist.WorkflowTriggerKey getTriggerInvoked();


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();

  /**
   * null
   *
   * @param element 
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToActivities")
  public void addToActivities(com.guidewire.ab.external.entity.Activity element);

  /**
   * null
   *
   * @param element 
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToLog")
  public void addToLog(com.guidewire.ab.external.entity.WorkflowLogEntry element);

  /**
   * Handle the resuming of the Indicates to the workflow that it is okay to proceed.  It is similiar to resume, except that it
does nothing if the workflow is in an error state.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "advance")
  public void advance();

  /**
   * Create and start a subflow.  If the subflow has a common super type, the common super type's properties
are copied into the new workflow.
   *
   * @return the newly created and started subflow.
   * @param type the type of subflow to create.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createSubFlow")
  public com.guidewire.ab.external.entity.Workflow createSubFlow(com.guidewire.ab.external.typelist.Workflow type) throws java.lang.RuntimeException;

  /**
   * Create and start a subflow of the specified version.
If the subflow has a common super type, the common super type's properties are copied into the new workflow.
   *
   * @return the newly created and started subflow.
   * @param type the type of subflow to create.
   * @param version the version
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createSubFlow")
  public com.guidewire.ab.external.entity.Workflow createSubFlow(com.guidewire.ab.external.typelist.Workflow type, java.lang.Integer version) throws java.lang.RuntimeException;

  /**
   * This will find the active work item for this workflow if it exists
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findWorkflowWorkItems")
  public external.gw.api.database.IQueryBeanResult findWorkflowWorkItems();

  /**
   * Create but do not start a subflow of the specified version.  After you have finished populating the properties
of the workflow you should either start or startAsynchronously (with the apporpiate version if desired)
If the subflow has a common super type, the common super type's properties are copied into the new workflow.
   *
   * @return the newly created subflow.
   * @param type the type of subflow to create.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "instantiateSubFlow")
  public com.guidewire.ab.external.entity.Workflow instantiateSubFlow(com.guidewire.ab.external.typelist.Workflow type) throws java.lang.RuntimeException;

  /**
   * Tries to invoke a "manual trigger" in the Workflow, meaning an action initiated from outside
the Workflow itself.  In the case of an external Workflow, this will just update the "triggerInvoked"
field; in the case of an internal Workflow it will set the "triggerInvoked" field and advance the
workflow synchronously.
<p>
This is equivalent to calling invokeTrigger(triggerKey, true)
   *
   * @param triggerKey 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "invokeTrigger")
  public void invokeTrigger(com.guidewire.ab.external.typelist.WorkflowTriggerKey triggerKey);

  /**
   * Like {@link #invokeTrigger(WorkflowTriggerKey)} but with an extra parameter to control whether
the trigger should be evaluated synchronously (i.e. immediately in the current bundle) or
else in the background.
   *
   * @param triggerKey 
   * @param synchronous if true, executes trigger immediately; otherwise in the background
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "invokeTrigger")
  public void invokeTrigger(com.guidewire.ab.external.typelist.WorkflowTriggerKey triggerKey, boolean synchronous);

  /**
   * True if the given trigger is available in the Workflow; i.e. if it is OK to pass the
trigger ID to the invokeTrigger method
   *
   * @param triggerKey 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isTriggerAvailable")
  public boolean isTriggerAvailable(com.guidewire.ab.external.typelist.WorkflowTriggerKey triggerKey);

  /**
   * Returns the localized display name for the given branch in the given step in the current locale
   *
   * @param stepId 
   * @param branchId 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "localizedBranchName")
  public java.lang.String localizedBranchName(java.lang.String stepId, java.lang.String branchId);

  /**
   * Returns the localized display name for the current step in the current locale
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "localizedCurrentStepName")
  public java.lang.String localizedCurrentStepName();

  /**
   * Returns the localized display name for the previous step in the current locale
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "localizedPreviousStepName")
  public java.lang.String localizedPreviousStepName();

  /**
   * Returns the localized display name for the given step in the current locale
   *
   * @param stepId 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "localizedStepName")
  public java.lang.String localizedStepName(java.lang.String stepId);

  /**
   * Logs an item of information about the Workflow.  The entry is returned in case you want
to set additional fields on it.
   *
   * @return the log entry
   * @param summary a short (about 10 word max) summary of what happened
   * @param description a longer description, which may include details like a stack trace
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "log")
  public com.guidewire.ab.external.entity.WorkflowLogEntry log(java.lang.String summary, java.lang.String description);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.Activity from the Activities array.
   *
   * @param element 
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromActivities")
  public void removeFromActivities(com.guidewire.ab.external.entity.Activity element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.Activity having id elementID from the Activities array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromActivities")
  public void removeFromActivities(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.WorkflowLogEntry from the Log array.
   *
   * @param element 
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromLog")
  public void removeFromLog(com.guidewire.ab.external.entity.WorkflowLogEntry element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.WorkflowLogEntry having id elementID from the Log array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromLog")
  public void removeFromLog(gw.pl.external.entity.Key elementID);

  /**
   * Start the workflow.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "start")
  public void start();

  /**
   * Start the workflow with the specified process version.
   *
   * @param version the process version
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "start")
  public void start(java.lang.Integer version) throws java.lang.RuntimeException;

  /**
   * Start the workflow asynchronously.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "startAsynchronously")
  public void startAsynchronously();

  /**
   * Start the workflow with the specified process version asynchronously.
   *
   * @param version the process version
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "startAsynchronously")
  public void startAsynchronously(java.lang.Integer version) throws java.lang.RuntimeException;


  /**
   * Utility class for initializing an instance of Workflow
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Workflow.
     */
    public static Workflow newInstance()
    {
      return (Workflow) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Workflow.class);
    }
  }

}
