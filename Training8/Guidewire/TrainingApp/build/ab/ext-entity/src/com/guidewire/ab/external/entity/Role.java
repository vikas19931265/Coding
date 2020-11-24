package com.guidewire.ab.external.entity;

/**
 * 
        A set of permissions defining a user Role. A User can be given multiple Roles and will be granted
        the union of all their Role permission sets.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Role extends com.guidewire.ab.external.entity.DecentralizedEntity, com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Returns all UserRoles associated with this role.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllUserRoles")
  public com.guidewire.ab.external.entity.UserRole[] getAllUserRoles();


  /**
   * Returns all the Users associated with this role.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllUsers")
  public java.util.List getAllUsers();


  /**
   * Returns all the Users associated with this Role. Includes additions and deletions in the bundle that have not yet
been committed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllUsersArray")
  public com.guidewire.ab.external.entity.User[] getAllUsersArray();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * If true, this role is applicable to users internal to the carrier organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CarrierInternalRole")
  public java.lang.Boolean isCarrierInternalRole();

  /**
   * If true, this role is applicable to users internal to the carrier organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CarrierInternalRole")
  public void setCarrierInternalRole(java.lang.Boolean value);


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
   * An optional, more detailed description of the role.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * An optional, more detailed description of the role.
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
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Displayable name of the role. NOTE: when inserting a Role this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Displayable name of the role. NOTE: when inserting a Role this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


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
   * The organization to which this role belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Organization")
  public com.guidewire.ab.external.entity.Organization getOrganization();

  /**
   * The organization to which this role belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Organization")
  public void setOrganization(com.guidewire.ab.external.entity.Organization value);


  /**
   * Privileges granted by membership in this role.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Privileges")
  public com.guidewire.ab.external.entity.RolePrivilege[] getPrivileges();

  /**
   * Privileges granted by membership in this role.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Privileges")
  public void setPrivileges(com.guidewire.ab.external.entity.RolePrivilege[] value);


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
   * Type of the role.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RoleType")
  public com.guidewire.ab.external.typelist.RoleType getRoleType();

  /**
   * Type of the role.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RoleType")
  public void setRoleType(com.guidewire.ab.external.typelist.RoleType value);


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
   * Adds this role to a user's list of roles.
   *
   * @param user 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addRoleToUser")
  public void addRoleToUser(com.guidewire.ab.external.entity.User user);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToPrivileges")
  public void addToPrivileges(com.guidewire.ab.external.entity.RolePrivilege element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.RolePrivilege from the Privileges array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromPrivileges")
  public void removeFromPrivileges(com.guidewire.ab.external.entity.RolePrivilege element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.RolePrivilege having id elementID from the Privileges array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromPrivileges")
  public void removeFromPrivileges(gw.pl.external.entity.Key elementID);

  /**
   * Removes this role from the user's list of roles.
   *
   * @param user 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeRoleFromUser")
  public void removeRoleFromUser(com.guidewire.ab.external.entity.User user);

  /**
   * The organization to which this role belongs.
   *
   * @param organization The organization to which this role belongs.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setOrganization")
  public void setOrganization_Method(com.guidewire.ab.external.entity.Organization organization);


  /**
   * Utility class for accessing static features for Role
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    /**
     * Create a new proxy instance of the external type Role.
     */
    public static Role newInstance()
    {
      return null;
    }

    // Static Properties for Role

    /**
     * The finder for Role
     * 
     */
    public static external.gw.api.admin.PublicRoleFinder getFinder()
    {
      return (external.gw.api.admin.PublicRoleFinder) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.ab.external.entity.Role.class, "Finder");
    }

    // Static Methods for Role
    
  }


  /**
   * Utility class for initializing an instance of Role
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Role.
     */
    public static Role newInstance()
    {
      return (Role) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Role.class);
    }
  }

}
