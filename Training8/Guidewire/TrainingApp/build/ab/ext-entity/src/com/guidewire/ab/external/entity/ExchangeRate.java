package com.guidewire.ab.external.entity;

/**
 * A rate for converting one currency to another.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ExchangeRate extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * From Currency. The Currency this ExchangeRate converts from. NOTE: when inserting a ExchangeRate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BaseCurrency")
  public com.guidewire.ab.external.typelist.Currency getBaseCurrency();

  /**
   * From Currency. The Currency this ExchangeRate converts from. NOTE: when inserting a ExchangeRate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BaseCurrency")
  public void setBaseCurrency(com.guidewire.ab.external.typelist.Currency value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


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
   * The ExchangeRateSet this ExchangeRate belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExchangeRateSet")
  public com.guidewire.ab.external.entity.ExchangeRateSet getExchangeRateSet();

  /**
   * The ExchangeRateSet this ExchangeRate belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExchangeRateSet")
  public void setExchangeRateSet(com.guidewire.ab.external.entity.ExchangeRateSet value);


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
   * BaseUnits of BaseCurrency = NormalizedRate * 10^-RateScale * PriceUnits of PriceCurrency. NOTE: when inserting a ExchangeRate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NormalizedRate")
  public java.math.BigDecimal getNormalizedRate();

  /**
   * BaseUnits of BaseCurrency = NormalizedRate * 10^-RateScale * PriceUnits of PriceCurrency. NOTE: when inserting a ExchangeRate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NormalizedRate")
  public void setNormalizedRate(java.math.BigDecimal value);


  /**
   * To Currency. The Currency this ExchangeRate converts to. NOTE: when inserting a ExchangeRate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PriceCurrency")
  public com.guidewire.ab.external.typelist.Currency getPriceCurrency();

  /**
   * To Currency. The Currency this ExchangeRate converts to. NOTE: when inserting a ExchangeRate this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PriceCurrency")
  public void setPriceCurrency(com.guidewire.ab.external.typelist.Currency value);


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
   * The actual exchange rate, without any of the scaling that occurs internally. This should be the value presented to users.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Rate")
  public java.math.BigDecimal getRate();

  /**
   * The actual exchange rate, without any of the scaling that occurs internally. This should be the value presented to users.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Rate")
  public void setRate(java.math.BigDecimal value);


  /**
   * Amount by which NormalizedRate was scaled. ExchangeRates are stored as a normalized value plus a scale so that exact floating-point exchange rates can be stored in fixed-width database columnns.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RateScale")
  public java.lang.Integer getRateScale();

  /**
   * Amount by which NormalizedRate was scaled. ExchangeRates are stored as a normalized value plus a scale so that exact floating-point exchange rates can be stored in fixed-width database columnns.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RateScale")
  public void setRateScale(java.lang.Integer value);


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
   * The actual exchange rate, without any scaling. Exchange rate values received from users should be passed to this
method. Internally, a scale will be extracted from value, and the result and its scale will be stored
in the NormalizedRate and RateScale properties. However, the original (unscaled) value can be retrieved from
getRate()
   *
   * @param value 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setRate")
  public void setRate_Method(java.math.BigDecimal value);


  /**
   * Utility class for initializing an instance of ExchangeRate
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ExchangeRate.
     */
    public static ExchangeRate newInstance()
    {
      return (ExchangeRate) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ExchangeRate.class);
    }
  }

}
