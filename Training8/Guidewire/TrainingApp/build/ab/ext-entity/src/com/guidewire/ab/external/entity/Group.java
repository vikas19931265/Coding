package com.guidewire.ab.external.entity;

/**
 * Groups of users.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Group extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, com.guidewire.ab.external.entity.Validatable, external.gw.api.assignment.Assignee, gw.pl.external.entity.Entity
{


  /**
   * Assignment queues associated with this group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignableQueues")
  public com.guidewire.ab.external.entity.AssignableQueue[] getAssignableQueues();

  /**
   * Assignment queues associated with this group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignableQueues")
  public void setAssignableQueues(com.guidewire.ab.external.entity.AssignableQueue[] value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Returns all of the groups having this group as their parent and
which are visible to the caller.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ChildGroups")
  public com.guidewire.ab.external.entity.Group[] getChildGroups();


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
   * Type of group (describes its function). NOTE: when inserting a Group this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupType")
  public com.guidewire.ab.external.typelist.GroupType getGroupType();

  /**
   * Type of group (describes its function). NOTE: when inserting a Group this field must be non-null.
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
   * Percentage value of normal workload to be given to this group. This is used for round-robin assignment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadFactor")
  public java.lang.Integer getLoadFactor();

  /**
   * Percentage value of normal workload to be given to this group. This is used for round-robin assignment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadFactor")
  public void setLoadFactor(java.lang.Integer value);


  /**
   * Returns all the users in this group that are members (including system users)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Members")
  public com.guidewire.ab.external.entity.GroupUser[] getMembers();


  /**
   * Returns all the users in this group that are members but who aren't system users
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MembersNoSystemUsers")
  public com.guidewire.ab.external.entity.GroupUser[] getMembersNoSystemUsers();


  /**
   * Returns all the users in this group that are members but who aren't system users.  Returns a List of User objects,
NOT GroupUser objects.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MembersNoSystemUsersAsList")
  public java.util.List getMembersNoSystemUsersAsList();


  /**
   * Returns all the users in this group that are members, sorted by name
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MembersNoSystemUsersSortedByName")
  public com.guidewire.ab.external.entity.GroupUser[] getMembersNoSystemUsersSortedByName();


  /**
   * The group name; this must be unique. NOTE: when inserting a Group this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * The group name; this must be unique. NOTE: when inserting a Group this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * The group name in Kanji.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NameKanji")
  public java.lang.String getNameKanji();

  /**
   * The group name in Kanji.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NameKanji")
  public void setNameKanji(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name_en_US")
  public java.lang.String getName_en_US();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name_en_US")
  public void setName_en_US(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name_ja_JP")
  public java.lang.String getName_ja_JP();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name_ja_JP")
  public void setName_ja_JP(java.lang.String value);


  /**
   * All open activities assigned to this group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OpenActivities")
  public com.guidewire.ab.external.entity.Activity[] getOpenActivities();


  /**
   * Count of all open activities assigned to this group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OpenActivityCount")
  public int getOpenActivityCount();


  /**
   * The Organization that this group belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Organization")
  public com.guidewire.ab.external.entity.Organization getOrganization();

  /**
   * The Organization that this group belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Organization")
  public void setOrganization(com.guidewire.ab.external.entity.Organization value);


  /**
   * The group's parent group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public com.guidewire.ab.external.entity.Group getParent();

  /**
   * The group's parent group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Parent")
  public void setParent(com.guidewire.ab.external.entity.Group value);


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
   * Regions associated with this group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Regions")
  public com.guidewire.ab.external.entity.GroupRegion[] getRegions();

  /**
   * Regions associated with this group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Regions")
  public void setRegions(com.guidewire.ab.external.entity.GroupRegion[] value);


  /**
   * the root group for this group
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RootGroup")
  public com.guidewire.ab.external.entity.Group getRootGroup();


  /**
   * Returns the id of the root group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RootGroupId")
  public gw.pl.external.entity.Key getRootGroupId();


  /**
   * Tests if the group can be safely deleted. Returns false if
<ul>
<li>The group is the root group.
<li>The group has any sub-groups.
<li>The group has any users.
</ul>
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SafeToDelete")
  public boolean isSafeToDelete();


  /**
   * Security zone to which the group belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SecurityZone")
  public com.guidewire.ab.external.entity.SecurityZone getSecurityZone();

  /**
   * Security zone to which the group belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SecurityZone")
  public void setSecurityZone(com.guidewire.ab.external.entity.SecurityZone value);


  /**
   * Supervisor of the group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Supervisor")
  public com.guidewire.ab.external.entity.User getSupervisor();

  /**
   * Supervisor of the group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Supervisor")
  public void setSupervisor(com.guidewire.ab.external.entity.User value);


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
  public com.guidewire.ab.external.entity.GroupUser[] getUsers();

  /**
   * Users belonging to this group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Users")
  public void setUsers(com.guidewire.ab.external.entity.GroupUser[] value);


  /**
   * Returns all the users in this group EXCEPT system users
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UsersNoSystemUsers")
  public com.guidewire.ab.external.entity.GroupUser[] getUsersNoSystemUsers();


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
   * Group that defines the visibility zone for this group. A visibility zone is defined by a direct child of the root group. The visibility zone of the root group will always be null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VisibilityZone")
  public com.guidewire.ab.external.entity.Group getVisibilityZone();

  /**
   * Group that defines the visibility zone for this group. A visibility zone is defined by a direct child of the root group. The visibility zone of the root group will always be null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VisibilityZone")
  public void setVisibilityZone(com.guidewire.ab.external.entity.Group value);


  /**
   * If true, this group is visible to all users, regardless of what groups they belong to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorldVisible")
  public java.lang.Boolean isWorldVisible();

  /**
   * If true, this group is visible to all users, regardless of what groups they belong to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorldVisible")
  public void setWorldVisible(java.lang.Boolean value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToAssignableQueues")
  public void addToAssignableQueues(com.guidewire.ab.external.entity.AssignableQueue element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToRegions")
  public void addToRegions(com.guidewire.ab.external.entity.GroupRegion element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToUsers")
  public void addToUsers(com.guidewire.ab.external.entity.GroupUser element);

  /**
   * Returns true if and only if this group contains the given user.
Note that a user can be contained in a group, but not be a member.
Hence, the group's user set is a (not necessarily strict) superset
of its membership.
   *
   * @param user 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsUser")
  public boolean containsUser(com.guidewire.ab.external.entity.User user);

  /**
   * Gets the <code>GroupUser</code> entry in this group that references the given <code>user</code>. This method compares
the <code>user.userID</cod> against the group members' to locate a match.
   *
   * @return GroupUser  The matching <code>GroupUser</code> entity or <code>null</code> if there is no such <code>GroupUser</code>.
   * @param user The <code>user</code> entity to match.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getGroupUser")
  public com.guidewire.ab.external.entity.GroupUser getGroupUser(com.guidewire.ab.external.entity.User user);

  /**
   * 
   *
   * @return The named AssignableQueue associated with this, or null if it does not exist...
   * @param queueName name of the queue to get
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getQueue")
  public com.guidewire.ab.external.entity.AssignableQueue getQueue(java.lang.String queueName);

  /**
   * 
   *
   * @return true this is an ancestor group of the argument
   * @param maybeChild 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isAncestor")
  public boolean isAncestor(com.guidewire.ab.external.entity.Group maybeChild);

  /**
   * Returns true if and only if the user with the given <code>userId</code>
is a member of this group. Note that a user may be contained in a group
but may not be a member of the group.
   *
   * @return true if the user is a member of group, false if not
   * @param userID the key of the user to check
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isMember")
  public boolean isMember(gw.pl.external.entity.Key userID);

  /**
   * 
   *
   * @return true iff the userId passed in is the supervisor of this group.
   * @param userId the user to check.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isSupervisor")
  public boolean isSupervisor(gw.pl.external.entity.Key userId);

  /**
   * 
   *
   * @return true iff the userId passed in is the supervisor of this group or one if it's parents.
   * @param userId the user to check
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isSupervisorInChain")
  public boolean isSupervisorInChain(gw.pl.external.entity.Key userId);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeOrganizationSelection")
  public com.guidewire.ab.external.entity.OrganizationSelection makeOrganizationSelection();

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AssignableQueue from the AssignableQueues array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAssignableQueues")
  public void removeFromAssignableQueues(com.guidewire.ab.external.entity.AssignableQueue element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AssignableQueue having id elementID from the AssignableQueues array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAssignableQueues")
  public void removeFromAssignableQueues(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GroupRegion from the Regions array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRegions")
  public void removeFromRegions(com.guidewire.ab.external.entity.GroupRegion element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GroupRegion having id elementID from the Regions array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRegions")
  public void removeFromRegions(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GroupUser from the Users array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUsers")
  public void removeFromUsers(com.guidewire.ab.external.entity.GroupUser element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GroupUser having id elementID from the Users array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUsers")
  public void removeFromUsers(gw.pl.external.entity.Key elementID);

  /**
   * 
   *
   * @return true if user was a member of the group, false if not.
   * @param user 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeUser")
  public boolean removeUser(com.guidewire.ab.external.entity.User user);


  /**
   * Utility class for initializing an instance of Group
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Group.
     */
    public static Group newInstance()
    {
      return (Group) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Group.class);
    }
  }

}
