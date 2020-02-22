package com.guidewire.ab.external.entity;

/**
 * 
      Global variables that can be created in Studio, then referenced in Gosu. Can be created in Guidewire Studio from the Tools menu -> Script Parameters.
      Created parameters can be referenced as static members off of the ScriptParameter class, for example <code>ScriptParameter.OUR_STANDARD_RATE</code>.
      Their values can be edited in the Guidewire applications from the Administration tab.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ScriptParameter extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Value if the parameter type is Bit.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BitValue")
  public java.lang.Boolean isBitValue();

  /**
   * Value if the parameter type is Bit.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BitValue")
  public void setBitValue(java.lang.Boolean value);


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
   * Value if the parameter type is Datetime.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DatetimeValue")
  public java.util.Date getDatetimeValue();

  /**
   * Value if the parameter type is Datetime.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DatetimeValue")
  public void setDatetimeValue(java.util.Date value);


  /**
   * Value if the parameter type is Decimal.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DecimalValue")
  public java.lang.String getDecimalValue();

  /**
   * Value if the parameter type is Decimal.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DecimalValue")
  public void setDecimalValue(java.lang.String value);


  /**
   * Returns localized description of the parameter
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();


  /**
   * Group value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Group")
  public com.guidewire.ab.external.entity.Group getGroup();

  /**
   * Group value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Group")
  public void setGroup(com.guidewire.ab.external.entity.Group value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Value if the parameter type is Int.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IntegerValue")
  public java.lang.Integer getIntegerValue();

  /**
   * Value if the parameter type is Int.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IntegerValue")
  public void setIntegerValue(java.lang.Integer value);


  /**
   * Value if the parameter type is Money.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MoneyValue")
  public java.math.BigDecimal getMoneyValue();

  /**
   * Value if the parameter type is Money.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MoneyValue")
  public void setMoneyValue(java.math.BigDecimal value);


  /**
   * Value if the parameter type is Monthly frequency.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MonthlyfrequencyValue")
  public java.lang.Integer getMonthlyfrequencyValue();

  /**
   * Value if the parameter type is Monthly frequency.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MonthlyfrequencyValue")
  public void setMonthlyfrequencyValue(java.lang.Integer value);


  /**
   * Value if the parameter type is a Non-negative integer.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NonnegativeintegerValue")
  public java.lang.Integer getNonnegativeintegerValue();

  /**
   * Value if the parameter type is a Non-negative integer.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NonnegativeintegerValue")
  public void setNonnegativeintegerValue(java.lang.Integer value);


  /**
   * Value if the parameter type is Non-negative money.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NonnegativemoneyValue")
  public java.math.BigDecimal getNonnegativemoneyValue();

  /**
   * Value if the parameter type is Non-negative money.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NonnegativemoneyValue")
  public void setNonnegativemoneyValue(java.math.BigDecimal value);


  /**
   * Name of the parameter. NOTE: when inserting a ScriptParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParameterName")
  public java.lang.String getParameterName();

  /**
   * Name of the parameter. NOTE: when inserting a ScriptParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParameterName")
  public void setParameterName(java.lang.String value);


  /**
   * Identifies the value type (string, integer, boolean, date, etc). NOTE: when inserting a ScriptParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParameterType")
  public com.guidewire.ab.external.typelist.ScriptParameterType getParameterType();

  /**
   * Identifies the value type (string, integer, boolean, date, etc). NOTE: when inserting a ScriptParameter this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParameterType")
  public void setParameterType(com.guidewire.ab.external.typelist.ScriptParameterType value);


  /**
   * Value if the parameter type is Percentage.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PercentageValue")
  public java.lang.Integer getPercentageValue();

  /**
   * Value if the parameter type is Percentage.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PercentageValue")
  public void setPercentageValue(java.lang.Integer value);


  /**
   * Value if the parameter type is Percentagedec.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PercentagedecValue")
  public java.math.BigDecimal getPercentagedecValue();

  /**
   * Value if the parameter type is Percentagedec.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PercentagedecValue")
  public void setPercentagedecValue(java.math.BigDecimal value);


  /**
   * Value if the parameter type is Phone.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PhoneValue")
  public java.lang.String getPhoneValue();

  /**
   * Value if the parameter type is Phone.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PhoneValue")
  public void setPhoneValue(java.lang.String value);


  /**
   * Value if the parameter type is Positive integer.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PositiveintegerValue")
  public java.lang.Integer getPositiveintegerValue();

  /**
   * Value if the parameter type is Positive integer.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PositiveintegerValue")
  public void setPositiveintegerValue(java.lang.Integer value);


  /**
   * Value if the parameter type is Positive money.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PositivemoneyValue")
  public java.math.BigDecimal getPositivemoneyValue();

  /**
   * Value if the parameter type is Positive money.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PositivemoneyValue")
  public void setPositivemoneyValue(java.math.BigDecimal value);


  /**
   * Value if the parameter type is PostalCode.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PostalCodeValue")
  public java.lang.String getPostalCodeValue();

  /**
   * Value if the parameter type is PostalCode.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PostalCodeValue")
  public void setPostalCodeValue(java.lang.String value);


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
   * Value if the parameter type is Risk.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RiskValue")
  public java.math.BigDecimal getRiskValue();

  /**
   * Value if the parameter type is Risk.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RiskValue")
  public void setRiskValue(java.math.BigDecimal value);


  /**
   * Value if the parameter type is Speed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SpeedValue")
  public java.lang.Integer getSpeedValue();

  /**
   * Value if the parameter type is Speed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SpeedValue")
  public void setSpeedValue(java.lang.Integer value);


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
   * User that created the script parameter.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();

  /**
   * User that created the script parameter.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "User")
  public void setUser(com.guidewire.ab.external.entity.User value);


  /**
   * Value if the parameter type is Varchar (i.e. String).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VarcharValue")
  public java.lang.String getVarcharValue();

  /**
   * Value if the parameter type is Varchar (i.e. String).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VarcharValue")
  public void setVarcharValue(java.lang.String value);


  /**
   * Value if the parameter type is Weekly frequency.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WeeklyfrequencyValue")
  public java.lang.Integer getWeeklyfrequencyValue();

  /**
   * Value if the parameter type is Weekly frequency.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WeeklyfrequencyValue")
  public void setWeeklyfrequencyValue(java.lang.Integer value);


  /**
   * Value if the parameter type is Year.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "YearValue")
  public java.lang.Integer getYearValue();

  /**
   * Value if the parameter type is Year.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "YearValue")
  public void setYearValue(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of ScriptParameter
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ScriptParameter.
     */
    public static ScriptParameter newInstance()
    {
      return (ScriptParameter) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ScriptParameter.class);
    }
  }

}
