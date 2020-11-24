package com.guidewire.ab.external.entity;

/**
 * An activity is a instance of work assigned to a user.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Activity extends com.guidewire.ab.external.entity.Assignable, com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, com.guidewire.ab.external.entity.Validatable, gw.pl.external.entity.Entity
{


  /**
   * The class of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActivityClass")
  public com.guidewire.ab.external.typelist.ActivityClass getActivityClass();

  /**
   * The class of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ActivityClass")
  public void setActivityClass(com.guidewire.ab.external.typelist.ActivityClass value);


  /**
   * Pattern that created this activity. It it was not created from a pattern, then this is null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActivityPattern")
  public com.guidewire.ab.external.entity.ActivityPattern getActivityPattern();

  /**
   * Pattern that created this activity. It it was not created from a pattern, then this is null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ActivityPattern")
  public void setActivityPattern(com.guidewire.ab.external.entity.ActivityPattern value);


  /**
   * activity status
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActivityStatus")
  public java.lang.String getActivityStatus();


  /**
   * Reason approval is needed. This field should only be set for approval activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ApprovalIssue")
  public java.lang.String getApprovalIssue();

  /**
   * Reason approval is needed. This field should only be set for approval activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ApprovalIssue")
  public void setApprovalIssue(java.lang.String value);


  /**
   * Rationale for approving/rejecting the activity. This field should only be set for approval activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ApprovalRationale")
  public java.lang.String getApprovalRationale();

  /**
   * Rationale for approving/rejecting the activity. This field should only be set for approval activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ApprovalRationale")
  public void setApprovalRationale(java.lang.String value);


  /**
   * Whether the activity is approved. This is null if not relevant or undecided.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Approved")
  public java.lang.Boolean isApproved();

  /**
   * Whether the activity is approved. This is null if not relevant or undecided.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Approved")
  public void setApproved(java.lang.Boolean value);


  /**
   * User who assigned this entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedByUser")
  public com.guidewire.ab.external.entity.User getAssignedByUser();

  /**
   * User who assigned this entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedByUser")
  public void setAssignedByUser(com.guidewire.ab.external.entity.User value);


  /**
   * Group to which this entity is assigned; null if none assigned
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedGroup")
  public com.guidewire.ab.external.entity.Group getAssignedGroup();

  /**
   * Group to which this entity is assigned; null if none assigned
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedGroup")
  public void setAssignedGroup(com.guidewire.ab.external.entity.Group value);


  /**
   * Either the Queue to which this entity is assigned (if AssignmentStatus is 'assigned'), the Queue to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedQueue")
  public com.guidewire.ab.external.entity.AssignableQueue getAssignedQueue();

  /**
   * Either the Queue to which this entity is assigned (if AssignmentStatus is 'assigned'), the Queue to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedQueue")
  public void setAssignedQueue(com.guidewire.ab.external.entity.AssignableQueue value);


  /**
   * Either the User to which this entity is assigned (if AssignmentStatus is 'assigned'), the User to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedUser")
  public com.guidewire.ab.external.entity.User getAssignedUser();

  /**
   * Either the User to which this entity is assigned (if AssignmentStatus is 'assigned'), the User to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedUser")
  public void setAssignedUser(com.guidewire.ab.external.entity.User value);


  /**
   * Time when entity last assigned
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignmentDate")
  public java.util.Date getAssignmentDate();


  /**
   * Typelist describing assignment status.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignmentStatus")
  public com.guidewire.ab.external.typelist.AssignmentStatus getAssignmentStatus();


  /**
   * true if this activity is associated with document template
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssociatedWithDocumentTemplate")
  public boolean isAssociatedWithDocumentTemplate();


  /**
   * true if this activity is associated with an email template
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssociatedWithEmailTemplate")
  public boolean isAssociatedWithEmailTemplate();


  /**
   * True if the activity was generated automatically; never fully implemented. Instead, customers can create an extension field and set it after creating an activity in a rule to indicate how the activity was created
   * @deprecated True if the activity was generated automatically; never fully implemented. Instead, customers can create an extension field and set it after creating an activity in a rule to indicate how the activity was created
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutoGenerated")
  public java.lang.Boolean isAutoGenerated();

  /**
   * True if the activity was generated automatically; never fully implemented. Instead, customers can create an extension field and set it after creating an activity in a rule to indicate how the activity was created
   * @deprecated True if the activity was generated automatically; never fully implemented. Instead, customers can create an extension field and set it after creating an activity in a rule to indicate how the activity was created
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AutoGenerated")
  public void setAutoGenerated(java.lang.Boolean value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Date and time when this entity was closed. (Not applicable to all assignable entities)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CloseDate")
  public java.util.Date getCloseDate();

  /**
   * Date and time when this entity was closed. (Not applicable to all assignable entities)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CloseDate")
  public void setCloseDate(java.util.Date value);


  /**
   * The user who closed this activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CloseUser")
  public com.guidewire.ab.external.entity.User getCloseUser();

  /**
   * The user who closed this activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CloseUser")
  public void setCloseUser(com.guidewire.ab.external.entity.User value);


  /**
   * A Gosu command to execute for this activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Command")
  public java.lang.String getCommand();

  /**
   * A Gosu command to execute for this activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Command")
  public void setCommand(java.lang.String value);


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
   * Description of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * The id of an associated document template. The id and language gets passed to IDocumentTemplateSource to retrieve the DocumentTemplateDescriptor. This property should not be used by applications.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DocumentTemplate")
  public java.lang.String getDocumentTemplate();

  /**
   * The id of an associated document template. The id and language gets passed to IDocumentTemplateSource to retrieve the DocumentTemplateDescriptor. This property should not be used by applications.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DocumentTemplate")
  public void setDocumentTemplate(java.lang.String value);


  /**
   * The id of an associated email template. The id gets passed to IEmailTemplateSource to retrieve the EmailTemplateDescriptor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EmailTemplate")
  public java.lang.String getEmailTemplate();

  /**
   * The id of an associated email template. The id gets passed to IEmailTemplateSource to retrieve the EmailTemplateDescriptor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EmailTemplate")
  public void setEmailTemplate(java.lang.String value);


  /**
   * Time the event is scheduled to terminate or null if the activity is not a scheduled event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndDate")
  public java.util.Date getEndDate();

  /**
   * Time the event is scheduled to terminate or null if the activity is not a scheduled event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndDate")
  public void setEndDate(java.util.Date value);


  /**
   * True if the activity has been escalated.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Escalated")
  public java.lang.Boolean isEscalated();

  /**
   * True if the activity has been escalated.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Escalated")
  public void setEscalated(java.lang.Boolean value);


  /**
   * When the activity will be escalated if it isn't yet completed; this is null if the activity is never escalated.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EscalationDate")
  public java.util.Date getEscalationDate();

  /**
   * When the activity will be escalated if it isn't yet completed; this is null if the activity is never escalated.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EscalationDate")
  public void setEscalationDate(java.util.Date value);


  /**
   * Whether the activity is externally owned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternallyOwned")
  public java.lang.Boolean isExternallyOwned();

  /**
   * Whether the activity is externally owned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExternallyOwned")
  public void setExternallyOwned(java.lang.Boolean value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * When this activity was last viewed by the assignee. If never viewed, this is null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastViewedDate")
  public java.util.Date getLastViewedDate();

  /**
   * When this activity was last viewed by the assignee. If never viewed, this is null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastViewedDate")
  public void setLastViewedDate(java.util.Date value);


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Logical name of the activity.  Used by the internal workflow engine.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LogicalName")
  public java.lang.String getLogicalName();


  /**
   * True if the activity must be completed and cannot be skipped.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Mandatory")
  public java.lang.Boolean isMandatory();

  /**
   * True if the activity must be completed and cannot be skipped.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Mandatory")
  public void setMandatory(java.lang.Boolean value);


  /**
   * Returns a boolean indicating whether or not the activity is overdue
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Overdue")
  public boolean isOverdue();


  /**
   * Group to which this entity was previously assigned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreviousGroup")
  public com.guidewire.ab.external.entity.Group getPreviousGroup();


  /**
   * Queue to which this entity was previously assigned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreviousQueue")
  public com.guidewire.ab.external.entity.AssignableQueue getPreviousQueue();


  /**
   * User to which this entity was previously assigned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreviousUser")
  public com.guidewire.ab.external.entity.User getPreviousUser();


  /**
   * Priority of the activity with respect to other activities. NOTE: when inserting a Activity this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Priority")
  public com.guidewire.ab.external.typelist.Priority getPriority();

  /**
   * Priority of the activity with respect to other activities. NOTE: when inserting a Activity this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Priority")
  public void setPriority(com.guidewire.ab.external.typelist.Priority value);


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
   * Whether this activity is recurring.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Recurring")
  public java.lang.Boolean isRecurring();

  /**
   * Whether this activity is recurring.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Recurring")
  public void setRecurring(java.lang.Boolean value);


  /**
   * For assignment review activities, points to the activity to be assigned.  Otherwise, this is null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RelatedActivity")
  public com.guidewire.ab.external.entity.Activity getRelatedActivity();

  /**
   * For assignment review activities, points to the activity to be assigned.  Otherwise, this is null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RelatedActivity")
  public void setRelatedActivity(com.guidewire.ab.external.entity.Activity value);


  /**
   * A very brief title for the activity e.g., displayable in a calendar; this is associated with its pattern.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShortSubject")
  public java.lang.String getShortSubject();

  /**
   * A very brief title for the activity e.g., displayable in a calendar; this is associated with its pattern.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ShortSubject")
  public void setShortSubject(java.lang.String value);


  /**
   * Status of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.ActivityStatus getStatus();

  /**
   * Status of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Status")
  public void setStatus(com.guidewire.ab.external.typelist.ActivityStatus value);


  /**
   * A brief title for the activity; this is associated with its pattern.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subject")
  public java.lang.String getSubject();

  /**
   * A brief title for the activity; this is associated with its pattern.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Subject")
  public void setSubject(java.lang.String value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.Activity getSubtype();


  /**
   * If this activity is a task, time by which a person should complete the task; if not completed by this time, the task is considered overdue. If this activity is an event, the time the event is scheduled to start.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetDate")
  public java.util.Date getTargetDate();

  /**
   * If this activity is a task, time by which a person should complete the task; if not completed by this time, the task is considered overdue. If this activity is an event, the time the event is scheduled to start.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetDate")
  public void setTargetDate(java.util.Date value);


  /**
   * Type of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.ActivityType getType();

  /**
   * Type of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.ActivityType value);


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
   * Returns a boolean indicating whether or not this activity was updated since the last time it was viewed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdatedSinceLastViewed")
  public boolean isUpdatedSinceLastViewed();


  /**
   * Validation level that this object passed (if any) before it was stored.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValidationLevel")
  public com.guidewire.ab.external.typelist.ValidationLevel getValidationLevel();

  /**
   * Validation level that this object passed (if any) before it was stored.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ValidationLevel")
  public void setValidationLevel(com.guidewire.ab.external.typelist.ValidationLevel value);


  /**
   * Optional pointer to the workflow this activity is associated with.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Workflow")
  public com.guidewire.ab.external.entity.Workflow getWorkflow();

  /**
   * If the activity is open, marks the activity as approved and closed, runs associated rules
and, if necessary, notifies its associated workflow.<p>
<p/>
If the activity is not open, this is a no-op
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "approve")
  public void approve() throws gw.pl.external.GenericCheckedException, java.lang.RuntimeException;

  /**
   * Assigns the activity to the specified queue, which must be non null.
If the engine cannot assign the item to the requested queue,
it will throw an exception indicating the reason.
   *
   * @param queue The queue to which the item should be assigned - must be
             specified.  If not known, use autoAssign(item) instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignToQueue")
  public void assignToQueue(com.guidewire.ab.external.entity.AssignableQueue queue) throws java.lang.RuntimeException;

  /**
   * 
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "autoAssign")
  public boolean autoAssign();

  /**
   * Returns a boolean indicating whether or not the given activity can be approved.  Returns true if:
<ol>
<li> the activity is of type Approval</li>
<li> the activity is of status Open</li>
<li> the activity is Assigned</li>
<li> the activity is either assigned to the given user or the user has the "approveany" permission</li>
</ol>
   *
   * @return true if the given activity can be approved
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canApprove")
  public boolean canApprove();

  /**
   * Returns a boolean indicating whether or not the given activity can be assigned.  Returns true iff:
<ol>
<li> the activity is of type Approval</li>
<li> the activity is of status Open</li>
<li> the activity is not assigned to a queue</li>
<li> the user has the "assignactivity" permission</li>
</ol>
   *
   * @return true if the given activity can be assigned
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canAssign")
  public boolean canAssign();

  /**
   * Returns a boolean indicating whether or not the given activity can be completed.  Returns true iff:
<ol>
<li> the activity is of type General</li>
<li> the activity is of status Open</li>
<li> the activity is Assigned</li>
<li> the activity is not assigned to a queue</li>
<li> the user has the modify activity permission for this activity</li>
<ol/>
Note this test does not check anything particular to the activity and its
requirements for completion.
   *
   * @return true if the given activity can be completed
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canComplete")
  public boolean canComplete();

  /**
   * Returns a boolean indicating whether or not the given activity can be edited.  Returns true iff:
<ol>
<li> the activity is of status Open</li>
<li> the user has the modify activity permission for this activity</li>
</ol>
   *
   * @return true if the given activity can be edited
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canEdit")
  public boolean canEdit();

  /**
   * Indicates whether or not the current user can toggle the mandatory flag on this activity.
   *
   * @return true if the current user can toggle the mandatory flag on this activity, false otherwise
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canMakeMandatory")
  public boolean canMakeMandatory();

  /**
   * Returns a boolean indicating whether or not the given activity can generate a recurring activity.  Returns true
iff:
<ol>
<li> the activity's isRecurring property is non-null and equal to TRUE</li>
</ol>
   *
   * @return true if the given activity can recur
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canRecur")
  public boolean canRecur();

  /**
   * Returns true if the user can skip the activity based on the following:
<ol>
<li> the activity is a GENERAL or APPROVAL_DENIED activity</li>
<li> the activity is open</li>
<li> the activity is assigned</li>
<li> the activity is not mandatory</li>
<li> the activity is not assigned to a queue</li>
<li> the user has permission to modify the activity</li>
</ol>
   *
   * @return true if the given activity can be skipped
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canSkip")
  public boolean canSkip();

  /**
   * Completes an activity
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "complete")
  public void complete() throws java.lang.RuntimeException;

  /**
   * Synonym for {@link #skip()}, retained for backwards compatibility
   *
   * @deprecated use {@link #skip()}
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "defer")
  public void defer() throws java.lang.RuntimeException;

  /**
   * Will create a new Note
   *
   * @return the new note
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "newNote")
  public com.guidewire.ab.external.entity.Note newNote();

  /**
   * If the activity is open, marks the activity as not approved and closed, runs associated rules
and, if necessary, notifies its associated workflow.
<p/>
If the activity is not open, this is a no-op
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reject")
  public void reject() throws gw.pl.external.GenericCheckedException, java.lang.RuntimeException;

  /**
   * Sets the activity pattern with overrides for the starting points for the target and escalation dates.
The target date and escalation date are used to override the <b>starting point</b> of target date and escalation date,
respectively.  The same date calculation still applies
   *
   * @param pattern The activity pattern used to populate the activity fields
   * @param targetDate The target date used to override the target starting point.
   * @param escalationDate The escalation date used to override the escalation starting point
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setActivityPattern")
  public void setActivityPattern(com.guidewire.ab.external.entity.ActivityPattern pattern, java.util.Date targetDate, java.util.Date escalationDate);

  /**
   * Sets the activity pattern and copy pattern's values into this activity,
   *
   * @param pattern The activity pattern used to populate the activity fields
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setActivityPatternAndCopy")
  public void setActivityPatternAndCopy(com.guidewire.ab.external.entity.ActivityPattern pattern);

  /**
   * Sets the activity pattern and copy the pattern's values into this activity.
This overrides for the starting points for the target and escalation dates.  The target date and escalation date
are used to override the <b>starting point</b> of target date and escalation date, respectively.  The same date
calculation still applies
   *
   * @param pattern The activity pattern used to populate the activity fields
   * @param targetDate The target date used to override the target starting point.
   * @param escalationDate The escalation date used to override the escalation starting point
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setActivityPatternAndCopy")
  public void setActivityPatternAndCopy(com.guidewire.ab.external.entity.ActivityPattern pattern, java.util.Date targetDate, java.util.Date escalationDate);

  /**
   * Calls pre-setup rules, assigns the activity, then calls post-setup rules.  This does not commit
the activity to the database
   *
   * @param assignee the assignee to which the activity should be assigned
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setUp")
  public void setUp(external.gw.api.assignment.Assignee assignee) throws java.lang.RuntimeException;

  /**
   * 
   *
   * @deprecated Please use {@link #autoAssign()} or {@link #setUp(Assignee)} (with gw.api.assignment.AutoAssignAssignee.INSTANCE as the argument) instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setUpAuto")
  public void setUpAuto() throws java.lang.RuntimeException;

  /**
   * Sets an activity's state to skipped. If the activity is not open, does nothing at all.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "skip")
  public void skip() throws java.lang.RuntimeException;


  /**
   * Utility class for initializing an instance of Activity
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Activity.
     */
    public static Activity newInstance()
    {
      return (Activity) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Activity.class);
    }
  }

}
