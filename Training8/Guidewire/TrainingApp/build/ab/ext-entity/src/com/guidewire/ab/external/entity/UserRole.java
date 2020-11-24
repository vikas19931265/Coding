package com.guidewire.ab.external.entity;

/**
 * 
        Joins a User with their security roles. The system creates this entity when you assign a Role to a User.
        The User will be granted the union of all the permissions granted by their Roles.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UserRole extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
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
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


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
   * Security role granted to the user. NOTE: when inserting a UserRole this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Role")
  public com.guidewire.ab.external.entity.Role getRole();

  /**
   * Security role granted to the user. NOTE: when inserting a UserRole this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Role")
  public void setRole(com.guidewire.ab.external.entity.Role value);


  /**
   * Parent user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();

  /**
   * Parent user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "User")
  public void setUser(com.guidewire.ab.external.entity.User value);


  /**
   * Utility class for initializing an instance of UserRole
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UserRole.
     */
    public static UserRole newInstance()
    {
      return (UserRole) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UserRole.class);
    }
  }

}
