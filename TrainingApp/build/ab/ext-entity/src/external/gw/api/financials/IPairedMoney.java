package external.gw.api.financials;

/**
 * Represents a monetary value that has an associated monetary value. Typically, this secondary value represents the
same amount in a different currency.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IPairedMoney extends external.gw.api.financials.IMoney
{
  /**
   * Gets the linked secondary money component, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SecondaryMoneyComponent")
  public external.gw.api.financials.IMoney getSecondaryMoneyComponent();


  /**
   * Calculates hypothetical secondary amount from the given primary amount, but does not update the secondary value.
   *
   * @return may be null
   * @param value primary amount
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "calcSecondaryAmount")
  public java.math.BigDecimal calcSecondaryAmount(java.math.BigDecimal value);

}
