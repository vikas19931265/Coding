package com.guidewire.ab.external.entity;

/**
 * Represents the assignment of a role to a user on an assignable object.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UserRoleAssignmentDelegate extends com.guidewire.ab.external.entity.Assignable, gw.pl.external.entity.Entity
{


  /**
   * Indicates whether the user is active in this role assignment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Active")
  public java.lang.Boolean isActive();

  /**
   * Indicates whether the user is active in this role assignment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Active")
  public void setActive(java.lang.Boolean value);


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
   * The role to which the user is assigned.
   * @deprecated use getRole()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignmentRole")
  public com.guidewire.ab.external.typelist.UserRole getAssignmentRole();

  /**
   * The role to which the user is assigned.
   * @deprecated use getRole()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignmentRole")
  public void setAssignmentRole(com.guidewire.ab.external.typelist.UserRole value);


  /**
   * Typelist describing assignment status.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignmentStatus")
  public com.guidewire.ab.external.typelist.AssignmentStatus getAssignmentStatus();


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
   * Comments about this role assignment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Comments")
  public java.lang.String getComments();

  /**
   * Comments about this role assignment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Comments")
  public void setComments(java.lang.String value);


  /**
   * The group in which the user is assigned to the role.
   * @deprecated use getAssignedGroup()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Group")
  public com.guidewire.ab.external.entity.Group getGroup();

  /**
   * The group in which the user is assigned to the role.
   * @deprecated use getAssignedGroup()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Group")
  public void setGroup(com.guidewire.ab.external.entity.Group value);


  /**
   * The group ID in which the user is assigned to the role.
   * @deprecated use getAssignedGroupID()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupID")
  public gw.pl.external.entity.Key getGroupID();

  /**
   * The group ID in which the user is assigned to the role.
   * @deprecated use getAssignedGroupID()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupID")
  public void setGroupID(gw.pl.external.entity.Key value);


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
   * The role to which the user is assigned. NOTE: when inserting a UserRoleAssignmentDelegate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Role")
  public com.guidewire.ab.external.typelist.UserRole getRole();

  /**
   * The role to which the user is assigned. NOTE: when inserting a UserRoleAssignmentDelegate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Role")
  public void setRole(com.guidewire.ab.external.typelist.UserRole value);


  /**
   * The user assigned to the role.
   * @deprecated use getAssignedUser()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();

  /**
   * The user assigned to the role.
   * @deprecated use getAssignedUser()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "User")
  public void setUser(com.guidewire.ab.external.entity.User value);


  /**
   * The user ID assigned to the role.
   * @deprecated use getAssignedUserID()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UserID")
  public gw.pl.external.entity.Key getUserID();

  /**
   * The user ID assigned to the role.
   * @deprecated use getAssignedUserID()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UserID")
  public void setUserID(gw.pl.external.entity.Key value);

  /**
   * Set the role to which the user is assigned.
   *
   * @param userRole 
   * @deprecated use setRole()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAssignmentRole")
  public void setAssignmentRole_Method(com.guidewire.ab.external.typelist.UserRole userRole);

  /**
   * Set the group ID in which the user is assigned to the role.
   *
   * @param value 
   * @deprecated use setAssignedGroupID()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setGroupID")
  public void setGroupID_Method(gw.pl.external.entity.Key value);

  /**
   * Set the group in which the user is assigned to the role.
   *
   * @param value 
   * @deprecated use setAssignedGroup()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setGroup")
  public void setGroup_Method(com.guidewire.ab.external.entity.Group value);

  /**
   * Set the user ID assigned to the role.
   *
   * @param value 
   * @deprecated use setAssignedUserID()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setUserID")
  public void setUserID_Method(gw.pl.external.entity.Key value);

  /**
   * Set the user assigned to the role.
   *
   * @param value 
   * @deprecated use getAssignedUser()
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setUser")
  public void setUser_Method(com.guidewire.ab.external.entity.User value);


  /**
   * Utility class for initializing an instance of UserRoleAssignmentDelegate
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UserRoleAssignmentDelegate.
     */
    public static UserRoleAssignmentDelegate newInstance()
    {
      return (UserRoleAssignmentDelegate) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UserRoleAssignmentDelegate.class);
    }
  }

}
