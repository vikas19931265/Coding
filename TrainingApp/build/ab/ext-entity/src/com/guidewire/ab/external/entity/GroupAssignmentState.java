package com.guidewire.ab.external.entity;

/**
 * Assignment state data for a particular group.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GroupAssignmentState extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.LastAssignedUserContainer, com.guidewire.ab.external.entity.LastAssignedUserContainerBase, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * The current load of the group for activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActivityLoad")
  public java.lang.Integer getActivityLoad();

  /**
   * The current load of the group for activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ActivityLoad")
  public void setActivityLoad(java.lang.Integer value);


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
   * The group this state is tracking. NOTE: when inserting a GroupAssignmentState this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Group")
  public com.guidewire.ab.external.entity.Group getGroup();

  /**
   * The group this state is tracking. NOTE: when inserting a GroupAssignmentState this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Group")
  public void setGroup(com.guidewire.ab.external.entity.Group value);


  /**
   * The group type this state is tracking.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupType")
  public com.guidewire.ab.external.typelist.GroupType getGroupType();

  /**
   * The group type this state is tracking.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupType")
  public void setGroupType(com.guidewire.ab.external.typelist.GroupType value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Is this assignment state for just this group, or does it include the sub groups as well.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IncludeSubGroups")
  public java.lang.Boolean isIncludeSubGroups();

  /**
   * Is this assignment state for just this group, or does it include the sub groups as well.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IncludeSubGroups")
  public void setIncludeSubGroups(java.lang.Boolean value);


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
   * The current load of the group for assignment review activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReviewLoad")
  public java.lang.Integer getReviewLoad();

  /**
   * The current load of the group for assignment review activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReviewLoad")
  public void setReviewLoad(java.lang.Integer value);


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
   * Users belonging to this group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Users")
  public com.guidewire.ab.external.entity.GroupUserAssignmentState[] getUsers();

  /**
   * Users belonging to this group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Users")
  public void setUsers(com.guidewire.ab.external.entity.GroupUserAssignmentState[] value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToUsers")
  public void addToUsers(com.guidewire.ab.external.entity.GroupUserAssignmentState element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GroupUserAssignmentState from the Users array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUsers")
  public void removeFromUsers(com.guidewire.ab.external.entity.GroupUserAssignmentState element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GroupUserAssignmentState having id elementID from the Users array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUsers")
  public void removeFromUsers(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of GroupAssignmentState
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GroupAssignmentState.
     */
    public static GroupAssignmentState newInstance()
    {
      return (GroupAssignmentState) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GroupAssignmentState.class);
    }
  }

}
