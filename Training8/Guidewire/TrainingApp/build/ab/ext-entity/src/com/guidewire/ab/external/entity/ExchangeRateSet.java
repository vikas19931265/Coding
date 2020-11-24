package com.guidewire.ab.external.entity;

/**
 * A collection of exchange rates.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ExchangeRateSet extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


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
   * A longer description of the rate set.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * A longer description of the rate set.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * The date and time this rate set becomes effective. NOTE: when inserting a ExchangeRateSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EffectiveDate")
  public java.util.Date getEffectiveDate();

  /**
   * The date and time this rate set becomes effective. NOTE: when inserting a ExchangeRateSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EffectiveDate")
  public void setEffectiveDate(java.util.Date value);


  /**
   * ExchangeRates in this ExchangeRateSet.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExchangeRates")
  public com.guidewire.ab.external.entity.ExchangeRate[] getExchangeRates();

  /**
   * ExchangeRates in this ExchangeRateSet.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExchangeRates")
  public void setExchangeRates(com.guidewire.ab.external.entity.ExchangeRate[] value);


  /**
   * The date and time this rate set is no longer effective.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExpireDate")
  public java.util.Date getExpireDate();

  /**
   * The date and time this rate set is no longer effective.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExpireDate")
  public void setExpireDate(java.util.Date value);


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
   * True if this rate set should be included in search for latest market rates. NOTE: when inserting a ExchangeRateSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MarketRates")
  public java.lang.Boolean isMarketRates();

  /**
   * True if this rate set should be included in search for latest market rates. NOTE: when inserting a ExchangeRateSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MarketRates")
  public void setMarketRates(java.lang.Boolean value);


  /**
   * The name of the rate set. NOTE: when inserting a ExchangeRateSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * The name of the rate set. NOTE: when inserting a ExchangeRateSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


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
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToExchangeRates")
  public void addToExchangeRates(com.guidewire.ab.external.entity.ExchangeRate element);

  /**
   * The exchange rate to multiply the base amount by, to get a new
amount in the price currency.
   *
   * @return r, such that (BaseCurrency Amount * r) gives you amount in PriceCurrency.
   * @param base base Currency you are starting in.
   * @param price Currency you are converting to.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getExchangeRate")
  public java.math.BigDecimal getExchangeRate(com.guidewire.ab.external.typelist.Currency base, com.guidewire.ab.external.typelist.Currency price);

  /**
   * The ExchangeRate entity in this ExchangeRateSet for the Base
Currency to Price Currency conversion rate.
   *
   * @return ExchangeRate entity with the given Base and Price currencies.
   * @param base base Currency you are starting in.
   * @param price Currency you are converting to.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getExchangeRateEntity")
  public com.guidewire.ab.external.entity.ExchangeRate getExchangeRateEntity(com.guidewire.ab.external.typelist.Currency base, com.guidewire.ab.external.typelist.Currency price);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ExchangeRate from the ExchangeRates array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromExchangeRates")
  public void removeFromExchangeRates(com.guidewire.ab.external.entity.ExchangeRate element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ExchangeRate having id elementID from the ExchangeRates array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromExchangeRates")
  public void removeFromExchangeRates(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of ExchangeRateSet
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ExchangeRateSet.
     */
    public static ExchangeRateSet newInstance()
    {
      return (ExchangeRateSet) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ExchangeRateSet.class);
    }
  }

}
