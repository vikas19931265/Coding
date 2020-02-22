package com.guidewire.ab.plugin.exchangerate;

/**
 * Plugin to create an ExchangeRateSet based on exchange rates pulled from an external source.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IExchangeRateSetPlugin extends gw.plugin.IPlugin
{

  /**
   * Creates and returns an ExchangeRateSet. An implementation will typically pull at minimum
n-1 exchange rates from an external source (where n is the number of configured currencies
in the system), one for each {reporting currency, non-reporting currency} ordered pair, and
create ExchangeRates from them. These are added to a new ExchangeRateSet. Upon commit,
the ExchangeRateSet will be populated for the remaining ExchangeRates that were not
specified. Optionally, the implementation may choose to provide more ExchangeRates than
the required minimum, if a specific exchange rate for a specific currency ordered pair is
desired.
   *
   * @return the newly created ExchangeRateSet
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createExchangeRateSet")
  public com.guidewire.ab.external.entity.ExchangeRateSet createExchangeRateSet();

}
