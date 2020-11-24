package com.guidewire.ab.external.entity;

/**
 * For internal Guidewire use only.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Parameter extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * For a boolean parameter, the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BooleanValue")
  public java.lang.Boolean isBooleanValue();

  /**
   * For a boolean parameter, the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BooleanValue")
  public void setBooleanValue(java.lang.Boolean value);


  /**
   * Component defining the parameter, or null if it is a system-wide parameter.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ComponentType")
  public com.guidewire.ab.external.typelist.ComponentType getComponentType();

  /**
   * Component defining the parameter, or null if it is a system-wide parameter.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ComponentType")
  public void setComponentType(com.guidewire.ab.external.typelist.ComponentType value);


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
   * For a date or time parameter, the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateValue")
  public java.util.Date getDateValue();

  /**
   * For a date or time parameter, the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateValue")
  public void setDateValue(java.util.Date value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * For an integer parameter, the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IntValue")
  public java.lang.Integer getIntValue();

  /**
   * For an integer parameter, the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IntValue")
  public void setIntValue(java.lang.Integer value);


  /**
   * For a long text parameter (clob), the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LongTextValue")
  public java.lang.String getLongTextValue();

  /**
   * For a long text parameter (clob), the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LongTextValue")
  public void setLongTextValue(java.lang.String value);


  /**
   * Name of the parameter NOTE: when inserting a Parameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParameterName")
  public java.lang.String getParameterName();

  /**
   * Name of the parameter NOTE: when inserting a Parameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParameterName")
  public void setParameterName(java.lang.String value);


  /**
   * Identifies the value type (string, longtext, integer, boolean, or date). NOTE: when inserting a Parameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParameterType")
  public com.guidewire.ab.external.typelist.ParameterType getParameterType();

  /**
   * Identifies the value type (string, longtext, integer, boolean, or date). NOTE: when inserting a Parameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParameterType")
  public void setParameterType(com.guidewire.ab.external.typelist.ParameterType value);


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
   * For a string parameter, the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StringValue")
  public java.lang.String getStringValue();

  /**
   * For a string parameter, the parameter value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StringValue")
  public void setStringValue(java.lang.String value);


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
   * Utility class for initializing an instance of Parameter
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Parameter.
     */
    public static Parameter newInstance()
    {
      return (Parameter) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Parameter.class);
    }
  }

}
