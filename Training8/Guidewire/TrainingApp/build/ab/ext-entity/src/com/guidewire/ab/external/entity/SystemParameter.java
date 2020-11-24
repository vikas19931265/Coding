package com.guidewire.ab.external.entity;

/**
 * Name/value pairs for system parameters.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SystemParameter extends gw.pl.external.entity.Entity
{


  /**
   * Property name. NOTE: when inserting a SystemParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Property name. NOTE: when inserting a SystemParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * Property value. NOTE: when inserting a SystemParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Value")
  public java.lang.String getValue();

  /**
   * Property value. NOTE: when inserting a SystemParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Value")
  public void setValue(java.lang.String value);


  /**
   * Utility class for initializing an instance of SystemParameter
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity SystemParameter.
     */
    public static SystemParameter newInstance()
    {
      return (SystemParameter) gw.pl.external.entity.EntityFactory.getInstance().newEntity(SystemParameter.class);
    }
  }

}
