package com.guidewire.ab.external.entity;

/**
 * 
      Encapsulates the search criteria for a User search. Key points in the system for user search include, the user
      search from the admin page, user picker on assignment pages, and the general user search page.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UserSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Returns a set of all roles which can be searched for, sorted by name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllRoles")
  public com.guidewire.ab.external.entity.Role[] getAllRoles();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The user's contact information.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.ContactSearchCriteria getContact();

  /**
   * The user's contact information.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contact")
  public void setContact(com.guidewire.ab.external.entity.ContactSearchCriteria value);


  /**
   * Name of group the user belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupName")
  public java.lang.String getGroupName();

  /**
   * Name of group the user belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupName")
  public void setGroupName(java.lang.String value);


  /**
   * Name of group the user belongs to in Kanji
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupNameKanji")
  public java.lang.String getGroupNameKanji();

  /**
   * Name of group the user belongs to in Kanji
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupNameKanji")
  public void setGroupNameKanji(java.lang.String value);


  /**
   * Type of group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupType")
  public com.guidewire.ab.external.typelist.GroupType getGroupType();

  /**
   * Type of group.
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
   * Include in search users who might be the default owner.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IncludeDefaultOwner")
  public java.lang.Boolean isIncludeDefaultOwner();

  /**
   * Include in search users who might be the default owner.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IncludeDefaultOwner")
  public void setIncludeDefaultOwner(java.lang.Boolean value);


  /**
   * Include in search system users.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IncludeSystemUsers")
  public java.lang.Boolean isIncludeSystemUsers();

  /**
   * Include in search system users.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IncludeSystemUsers")
  public void setIncludeSystemUsers(java.lang.Boolean value);


  /**
   * Include in the search users not in any group
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NotInAnyGroup")
  public java.lang.Boolean isNotInAnyGroup();

  /**
   * Include in the search users not in any group
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NotInAnyGroup")
  public void setNotInAnyGroup(java.lang.Boolean value);


  /**
   * The organization the user belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Organization")
  public com.guidewire.ab.external.entity.Organization getOrganization();

  /**
   * The organization the user belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Organization")
  public void setOrganization(com.guidewire.ab.external.entity.Organization value);


  /**
   * Parent of the group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParentGroup")
  public com.guidewire.ab.external.entity.Group getParentGroup();

  /**
   * Parent of the group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParentGroup")
  public void setParentGroup(com.guidewire.ab.external.entity.Group value);


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
   * The role which the user has.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Role")
  public com.guidewire.ab.external.entity.Role getRole();

  /**
   * The role which the user has.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Role")
  public void setRole(com.guidewire.ab.external.entity.Role value);


  /**
   * Username
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Username")
  public java.lang.String getUsername();

  /**
   * Username
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Username")
  public void setUsername(java.lang.String value);

  /**
   * Returns only internal or external roles only controlled by the boolean parameter passed in.
   *
   * @return returns either internal or external roles only, depending on the boolean parameter passed in
   * @param isCarrierInternalRole 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getRoles")
  public external.gw.api.database.IQueryBeanResult getRoles(boolean isCarrierInternalRole);

  /**
   * Searches for visible UserGroups with users matching the last name and first
name fields specified in the criteria. Visible user groups have groups that
are in the same security zone(s) as the current user
(see {@link User#getGroupsInSecurityZones()}) unless the user has the
special "view all users" permission, in which case all groups are visible.
<p/>
Note that since this search takes its results from the UserGroup table,
users with no groups will not be returned.
   *
   * @return all visible user groups that match the criteria
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performGroupUserSearch")
  public external.gw.api.database.IQueryBeanResult performGroupUserSearch();

  /**
   * Performs a User search based on the passed-in criteria.
   *
   * @return a QueryProcessor containing the User search results
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearch")
  public external.gw.api.database.IQueryBeanResult performSearch();

  /**
   * Performs a search based on the criteria that have been established.  Results are returned as a query
of User(Base?) entities.
   *
   * @return a query of User entities
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearchByProximity")
  public external.gw.api.database.IQueryBeanResult performSearchByProximity();

  /**
   * Performs a search based on the criteria that have been established.
Excludes users that are inactive or lack required permissions.
Results are returned as a query of UserBase entities.
   *
   * @return a query of User entities
   * @param groupIds If not null or empty, the list will be used to restrict to search on users with
   * @param requiredPermissions permissions that users must have
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearchByProximityForAssignmentCandidateUsers")
  public external.gw.api.database.IQueryBeanResult performSearchByProximityForAssignmentCandidateUsers(gw.pl.external.entity.Key[] groupIds, com.guidewire.ab.external.typelist.SystemPermissionType[] requiredPermissions);

  /**
   * Performs a search based on the criteria that have been established, but requires that an organization has
been set and that the organization's id is not temporary.
   *
   * @return a QueryProcessor containing Users
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearchWithOrganization")
  public external.gw.api.database.IQueryBeanResult performSearchWithOrganization();


  /**
   * Utility class for initializing an instance of UserSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UserSearchCriteria.
     */
    public static UserSearchCriteria newInstance()
    {
      return (UserSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UserSearchCriteria.class);
    }
  }

}
