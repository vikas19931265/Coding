package com.guidewire.ab.external.entity;

/**
 * User role assignment.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UserRoleAssignment extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, com.guidewire.ab.external.entity.UserRoleAssignmentDelegate, gw.pl.external.entity.Entity
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
   * Typelist describing assignment status.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignmentStatus")
  public com.guidewire.ab.external.typelist.AssignmentStatus getAssignmentStatus();


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
   * The role to which the user is assigned. NOTE: when inserting a UserRoleAssignment this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Role")
  public com.guidewire.ab.external.typelist.UserRole getRole();

  /**
   * The role to which the user is assigned. NOTE: when inserting a UserRoleAssignment this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Role")
  public void setRole(com.guidewire.ab.external.typelist.UserRole value);


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
   * Utility class for initializing an instance of UserRoleAssignment
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UserRoleAssignment.
     */
    public static UserRoleAssignment newInstance()
    {
      return (UserRoleAssignment) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UserRoleAssignment.class);
    }
  }

}
