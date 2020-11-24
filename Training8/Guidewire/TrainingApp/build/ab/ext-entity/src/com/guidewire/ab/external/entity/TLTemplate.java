package com.guidewire.ab.external.entity;

/**
 * Stores type keys
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TLTemplate extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Description of the type key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of the type key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Name of the type key. NOTE: when inserting a TLTemplate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Name of the type key. NOTE: when inserting a TLTemplate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * Priority of the type key within the list (for display)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Priority")
  public java.lang.Integer getPriority();

  /**
   * Priority of the type key within the list (for display)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Priority")
  public void setPriority(java.lang.Integer value);


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
   * Whether this type key is active NOTE: when inserting a TLTemplate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Retired")
  public java.lang.Boolean isRetired();

  /**
   * Whether this type key is active NOTE: when inserting a TLTemplate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Retired")
  public void setRetired(java.lang.Boolean value);


  /**
   * Code of the type key NOTE: when inserting a TLTemplate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeCode")
  public java.lang.String getTypeCode();

  /**
   * Code of the type key NOTE: when inserting a TLTemplate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeCode")
  public void setTypeCode(java.lang.String value);


  /**
   * Utility class for initializing an instance of TLTemplate
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TLTemplate.
     */
    public static TLTemplate newInstance()
    {
      return (TLTemplate) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TLTemplate.class);
    }
  }

}
