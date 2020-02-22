package com.guidewire.ab.external.entity;

/**
 * An activity pattern is a template for an activity. An activity pattern is not assigned to a user, nor does it belong to a claim; it is used only to create new activity instances. To create a new activity, an activity pattern is first chosen, and the values in the activity pattern are used to seed the values of the new activity instance.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ActivityPattern extends com.guidewire.ab.external.entity.DecentralizedEntity, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
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
   * True if the activity pattern is used only by automated additions to the workplan. If true, the pattern won't be shown as an option for users to choose in the application's interface.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutomatedOnly")
  public java.lang.Boolean isAutomatedOnly();

  /**
   * True if the activity pattern is used only by automated additions to the workplan. If true, the pattern won't be shown as an option for users to choose in the application's interface.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AutomatedOnly")
  public void setAutomatedOnly(java.lang.Boolean value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Category used to organize the activity pattern.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Category")
  public com.guidewire.ab.external.typelist.ActivityCategory getCategory();

  /**
   * Category used to organize the activity pattern.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Category")
  public void setCategory(com.guidewire.ab.external.typelist.ActivityCategory value);


  /**
   * The concise name of the activity pattern, used to identify the pattern within rules.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Code")
  public java.lang.String getCode();

  /**
   * The concise name of the activity pattern, used to identify the pattern within rules.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Code")
  public void setCode(java.lang.String value);


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
   * Description of the activity pattern.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of the activity pattern.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description_en_US")
  public java.lang.String getDescription_en_US();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description_en_US")
  public void setDescription_en_US(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description_ja_JP")
  public java.lang.String getDescription_ja_JP();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description_ja_JP")
  public void setDescription_ja_JP(java.lang.String value);


  /**
   * The id of an associated document template. The id gets passed to IDocumentTemplateSource to retrieve the DocumentTemplateDescriptor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DocumentTemplate")
  public java.lang.String getDocumentTemplate();

  /**
   * The id of an associated document template. The id gets passed to IDocumentTemplateSource to retrieve the DocumentTemplateDescriptor.
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
   * Location bean path to use for business calendar in calculating EscalationDate, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EscBusCalLocPath")
  public java.lang.String getEscBusCalLocPath();

  /**
   * Location bean path to use for business calendar in calculating EscalationDate, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EscBusCalLocPath")
  public void setEscBusCalLocPath(java.lang.String value);


  /**
   * Holiday tag code to use for business calendar in calculating EscalationDate, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EscalationBusCalTag")
  public com.guidewire.ab.external.typelist.HolidayTagCode getEscalationBusCalTag();

  /**
   * Holiday tag code to use for business calendar in calculating EscalationDate, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EscalationBusCalTag")
  public void setEscalationBusCalTag(com.guidewire.ab.external.typelist.HolidayTagCode value);


  /**
   * Gets the escalation business calendar type (e.g. holiday tag or location bean path),
if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EscalationBusCalType")
  public external.gw.api.activity.BusCalType getEscalationBusCalType();

  /**
   * Gets the escalation business calendar type (e.g. holiday tag or location bean path),
if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EscalationBusCalType")
  public void setEscalationBusCalType(external.gw.api.activity.BusCalType value);


  /**
   * Used in conjunction with EscalationStartPoint and EscalationIncludedDays to calculate the EscalationDate of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EscalationDays")
  public java.lang.Integer getEscalationDays();

  /**
   * Used in conjunction with EscalationStartPoint and EscalationIncludedDays to calculate the EscalationDate of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EscalationDays")
  public void setEscalationDays(java.lang.Integer value);


  /**
   * Used in conjunction with EscalationStartPoint and EscalationIncludedDays to calculate the EscalationDate of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EscalationHours")
  public java.lang.Integer getEscalationHours();

  /**
   * Used in conjunction with EscalationStartPoint and EscalationIncludedDays to calculate the EscalationDate of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EscalationHours")
  public void setEscalationHours(java.lang.Integer value);


  /**
   * Which days to include in calculating the EscalationDate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EscalationInclDays")
  public com.guidewire.ab.external.typelist.IncludeDaysType getEscalationInclDays();

  /**
   * Which days to include in calculating the EscalationDate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EscalationInclDays")
  public void setEscalationInclDays(com.guidewire.ab.external.typelist.IncludeDaysType value);


  /**
   * Which existing date on the activity or associated claim to use as the starting date for the EscalationDate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EscalationStartPt")
  public com.guidewire.ab.external.typelist.StartPointType getEscalationStartPt();

  /**
   * Which existing date on the activity or associated claim to use as the starting date for the EscalationDate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EscalationStartPt")
  public void setEscalationStartPt(com.guidewire.ab.external.typelist.StartPointType value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Whether completion of the activity is mandatory.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Mandatory")
  public java.lang.Boolean isMandatory();

  /**
   * Whether completion of the activity is mandatory.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Mandatory")
  public void setMandatory(java.lang.Boolean value);


  /**
   * The organization to which this ActivityPatternBase belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Organization")
  public com.guidewire.ab.external.entity.Organization getOrganization();

  /**
   * The organization to which this ActivityPatternBase belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Organization")
  public void setOrganization(com.guidewire.ab.external.entity.Organization value);


  /**
   * Priority of the activity with respect to other activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Priority")
  public com.guidewire.ab.external.typelist.Priority getPriority();

  /**
   * Priority of the activity with respect to other activities.
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
   * Short subject field of the activity. For use in small areas e.g., a calendar event entry.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShortSubject")
  public java.lang.String getShortSubject();

  /**
   * Short subject field of the activity. For use in small areas e.g., a calendar event entry.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ShortSubject")
  public void setShortSubject(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShortSubject_en_US")
  public java.lang.String getShortSubject_en_US();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ShortSubject_en_US")
  public void setShortSubject_en_US(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShortSubject_ja_JP")
  public java.lang.String getShortSubject_ja_JP();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ShortSubject_ja_JP")
  public void setShortSubject_ja_JP(java.lang.String value);


  /**
   * Subject field of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subject")
  public java.lang.String getSubject();

  /**
   * Subject field of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Subject")
  public void setSubject(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subject_en_US")
  public java.lang.String getSubject_en_US();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Subject_en_US")
  public void setSubject_en_US(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subject_ja_JP")
  public java.lang.String getSubject_ja_JP();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Subject_ja_JP")
  public void setSubject_ja_JP(java.lang.String value);


  /**
   * System patterns are a set of activity patterns known to the system and used
for special purposes. Users cannot add or delete system patterns, and they
can only edit certain fields.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SystemPattern")
  public java.lang.Boolean isSystemPattern();


  /**
   * Location bean path to use for business calendar in calculating TargetDate, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetBusCalLocPath")
  public java.lang.String getTargetBusCalLocPath();

  /**
   * Location bean path to use for business calendar in calculating TargetDate, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetBusCalLocPath")
  public void setTargetBusCalLocPath(java.lang.String value);


  /**
   * Holiday tag code to use for business calendar in calculating TargetDate, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetBusCalTag")
  public com.guidewire.ab.external.typelist.HolidayTagCode getTargetBusCalTag();

  /**
   * Holiday tag code to use for business calendar in calculating TargetDate, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetBusCalTag")
  public void setTargetBusCalTag(com.guidewire.ab.external.typelist.HolidayTagCode value);


  /**
   * Gets the target business calendar type (e.g. holiday tag or location bean path),
if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetBusCalType")
  public external.gw.api.activity.BusCalType getTargetBusCalType();

  /**
   * Gets the target business calendar type (e.g. holiday tag or location bean path),
if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetBusCalType")
  public void setTargetBusCalType(external.gw.api.activity.BusCalType value);


  /**
   * Used in conjunction with TargetStartPoint and TargetIncludedDays to calculate the ActionDate of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetDays")
  public java.lang.Integer getTargetDays();

  /**
   * Used in conjunction with TargetStartPoint and TargetIncludedDays to calculate the ActionDate of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetDays")
  public void setTargetDays(java.lang.Integer value);


  /**
   * Used in conjunction with TargetStartPoint and TargetIncludedDays to calculate the ActionDate of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetHours")
  public java.lang.Integer getTargetHours();

  /**
   * Used in conjunction with TargetStartPoint and TargetIncludedDays to calculate the ActionDate of the activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetHours")
  public void setTargetHours(java.lang.Integer value);


  /**
   * Which days to include in calculating the TargetDate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetIncludeDays")
  public com.guidewire.ab.external.typelist.IncludeDaysType getTargetIncludeDays();

  /**
   * Which days to include in calculating the TargetDate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetIncludeDays")
  public void setTargetIncludeDays(com.guidewire.ab.external.typelist.IncludeDaysType value);


  /**
   * Which existing date on the activity or associated claim to use as the starting date for the TargetDate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetStartPoint")
  public com.guidewire.ab.external.typelist.StartPointType getTargetStartPoint();

  /**
   * Which existing date on the activity or associated claim to use as the starting date for the TargetDate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetStartPoint")
  public void setTargetStartPoint(com.guidewire.ab.external.typelist.StartPointType value);


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
   * Sets the escalation business calendar type (e.g. holiday tag or location bean path),
if applicable.
   *
   * @param bct a business calendar type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setEscalationBusCalType")
  public void setEscalationBusCalType_Method(external.gw.api.activity.BusCalType bct);

  /**
   * The organization to which this ActivityPatternBase belongs.
   *
   * @param organization The organization to which this ActivityPatternBase belongs.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setOrganization")
  public void setOrganization_Method(com.guidewire.ab.external.entity.Organization organization);

  /**
   * Sets the target business calendar type (e.g. holiday tag or location bean path),
if applicable.
   *
   * @param bct a business calendar type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setTargetBusCalType")
  public void setTargetBusCalType_Method(external.gw.api.activity.BusCalType bct);


  /**
   * Utility class for initializing an instance of ActivityPattern
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ActivityPattern.
     */
    public static ActivityPattern newInstance()
    {
      return (ActivityPattern) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ActivityPattern.class);
    }
  }

}
