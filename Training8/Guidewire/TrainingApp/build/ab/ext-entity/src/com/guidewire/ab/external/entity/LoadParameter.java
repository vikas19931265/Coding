package com.guidewire.ab.external.entity;

/**
 * (parameter, value) pairs for load commands.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadParameter extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommand")
  public com.guidewire.ab.external.entity.LoadCommand getLoadCommand();

  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadCommand")
  public void setLoadCommand(com.guidewire.ab.external.entity.LoadCommand value);


  /**
   * Parameter name. NOTE: when inserting a LoadParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParameterName")
  public java.lang.String getParameterName();

  /**
   * Parameter name. NOTE: when inserting a LoadParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParameterName")
  public void setParameterName(java.lang.String value);


  /**
   * Parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParameterValue")
  public java.lang.String getParameterValue();

  /**
   * Parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParameterValue")
  public void setParameterValue(java.lang.String value);


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
   * Utility class for initializing an instance of LoadParameter
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadParameter.
     */
    public static LoadParameter newInstance()
    {
      return (LoadParameter) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadParameter.class);
    }
  }

}
