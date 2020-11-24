package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Versionable extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
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
   * Mark the bean as updated by forcing its version to change, even if no other
fields have changed. For example, this can be useful for forcing validation
or pre-update rules to run on a bean if only its sub beans have changed.

WARNING: This sets the bean version to NULL which makes this bean instance the "current" version.
    <b>If this bean is already retired, this will unretire the bean</b>
   *
   * @deprecated please update a field instead or set the bean version yourself
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "touch")
  public void touch();


  /**
   * Utility class for initializing an instance of Versionable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Versionable.
     */
    public static Versionable newInstance()
    {
      return (Versionable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Versionable.class);
    }
  }

}
