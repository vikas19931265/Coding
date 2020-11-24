package external.gw.api.financials;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CurrencyAmountPair extends external.gw.api.financials.IPairedMoney, java.lang.Comparable<external.gw.api.financials.CurrencyAmountPair>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Amount")
  public java.math.BigDecimal getAmount();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Currency")
  public com.guidewire.ab.external.typelist.Currency getCurrency();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryAmount")
  public external.gw.api.financials.CurrencyAmount getPrimaryAmount();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SecondaryMoneyComponent")
  public external.gw.api.financials.CurrencyAmount getSecondaryMoneyComponent();

  /**
   * null
   *
   * @param param BigDecimal
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "calcSecondaryAmount")
  public java.math.BigDecimal calcSecondaryAmount(java.math.BigDecimal param);

  /**
   * null
   *
   * @param param CurrencyAmountPair
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "compareTo")
  public int compareTo(external.gw.api.financials.CurrencyAmountPair param);


  /**
   * Utility class for initializing an instance of external.gw.api.financials.CurrencyAmountPair
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param CurrencyAmount
     * @param param1 CurrencyAmount

     */
    public static CurrencyAmountPair newInstance(external.gw.api.financials.CurrencyAmount param, external.gw.api.financials.CurrencyAmount param1)
    {
      return (CurrencyAmountPair) gw.pl.external.Invoker.getInstance().construct(external.gw.api.financials.CurrencyAmountPair.class, new Class[]{ external.gw.api.financials.CurrencyAmount.class, external.gw.api.financials.CurrencyAmount.class} , new Object[]{ param, param1});
    }

  }
}
