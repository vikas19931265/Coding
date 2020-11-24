package com.guidewire.ab.external.entity;

/**
 * Joins a Role with the permissions granted by it.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface RolePrivilege extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Permission granted by the parent role. NOTE: when inserting a RolePrivilege this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Permission")
  public com.guidewire.ab.external.typelist.SystemPermissionType getPermission();

  /**
   * Permission granted by the parent role. NOTE: when inserting a RolePrivilege this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Permission")
  public void setPermission(com.guidewire.ab.external.typelist.SystemPermissionType value);


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
   * The parent role.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Role")
  public com.guidewire.ab.external.entity.Role getRole();

  /**
   * The parent role.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Role")
  public void setRole(com.guidewire.ab.external.entity.Role value);


  /**
   * Utility class for initializing an instance of RolePrivilege
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity RolePrivilege.
     */
    public static RolePrivilege newInstance()
    {
      return (RolePrivilege) gw.pl.external.entity.EntityFactory.getInstance().newEntity(RolePrivilege.class);
    }
  }

}
