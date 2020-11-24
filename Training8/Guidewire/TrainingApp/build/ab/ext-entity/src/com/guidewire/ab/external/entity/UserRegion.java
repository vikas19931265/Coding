package com.guidewire.ab.external.entity;

/**
 * Joins a user to one or more regions.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UserRegion extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
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
   * Associated region. NOTE: when inserting a UserRegion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Region")
  public com.guidewire.ab.external.entity.Region getRegion();

  /**
   * Associated region. NOTE: when inserting a UserRegion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Region")
  public void setRegion(com.guidewire.ab.external.entity.Region value);


  /**
   * Associated user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();

  /**
   * Associated user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "User")
  public void setUser(com.guidewire.ab.external.entity.User value);


  /**
   * Utility class for initializing an instance of UserRegion
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UserRegion.
     */
    public static UserRegion newInstance()
    {
      return (UserRegion) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UserRegion.class);
    }
  }

}
