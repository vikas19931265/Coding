package com.guidewire.ab.external.entity;

/**
 * Assignment state data for a particular fingerprint.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DynamicAssignmentState extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.LastAssignedUserContainer, com.guidewire.ab.external.entity.LastAssignedUserContainerBase, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


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
   * The fingerprint this state is tracking. NOTE: when inserting a DynamicAssignmentState this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Fingerprint")
  public java.lang.String getFingerprint();

  /**
   * The fingerprint this state is tracking. NOTE: when inserting a DynamicAssignmentState this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Fingerprint")
  public void setFingerprint(java.lang.String value);


  /**
   * Flag indicating whether the row represents a Group assignment only, or a Group and User assignment
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupOnly")
  public java.lang.Boolean isGroupOnly();

  /**
   * Flag indicating whether the row represents a Group assignment only, or a Group and User assignment
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupOnly")
  public void setGroupOnly(java.lang.Boolean value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * The id of the last group that was assigned an activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastActivityGrp")
  public com.guidewire.ab.external.entity.Group getLastActivityGrp();

  /**
   * The id of the last group that was assigned an activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastActivityGrp")
  public void setLastActivityGrp(com.guidewire.ab.external.entity.Group value);


  /**
   * The id of the last user that was assigned an activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastActivityUser")
  public com.guidewire.ab.external.entity.User getLastActivityUser();

  /**
   * The id of the last user that was assigned an activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastActivityUser")
  public void setLastActivityUser(com.guidewire.ab.external.entity.User value);


  /**
   * The id of the last group that was assigned an assignment review activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastReviewGrp")
  public com.guidewire.ab.external.entity.Group getLastReviewGrp();

  /**
   * The id of the last group that was assigned an assignment review activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastReviewGrp")
  public void setLastReviewGrp(com.guidewire.ab.external.entity.Group value);


  /**
   * The id of the last user that was assigned an assignment review activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastReviewUser")
  public com.guidewire.ab.external.entity.User getLastReviewUser();

  /**
   * The id of the last user that was assigned an assignment review activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastReviewUser")
  public void setLastReviewUser(com.guidewire.ab.external.entity.User value);


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
   * Utility class for initializing an instance of DynamicAssignmentState
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DynamicAssignmentState.
     */
    public static DynamicAssignmentState newInstance()
    {
      return (DynamicAssignmentState) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DynamicAssignmentState.class);
    }
  }

}
