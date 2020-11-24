package com.guidewire.ab.external.entity;

/**
 * Maximum keys for each keyable entity type, used by key generator.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MaxKey extends gw.pl.external.entity.Entity
{


  /**
   * Name of table for keyable entity type NOTE: when inserting a MaxKey this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityTableName")
  public java.lang.String getEntityTableName();

  /**
   * Name of table for keyable entity type NOTE: when inserting a MaxKey this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EntityTableName")
  public void setEntityTableName(java.lang.String value);


  /**
   * Current maximum key for the entity type NOTE: when inserting a MaxKey this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxKey")
  public java.lang.Long getMaxKey();

  /**
   * Current maximum key for the entity type NOTE: when inserting a MaxKey this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaxKey")
  public void setMaxKey(java.lang.Long value);


  /**
   * Utility class for initializing an instance of MaxKey
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity MaxKey.
     */
    public static MaxKey newInstance()
    {
      return (MaxKey) gw.pl.external.entity.EntityFactory.getInstance().newEntity(MaxKey.class);
    }
  }

}
