package external.gw.api.financials;

/**
 * Represents a monetary value.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IMoney
{
  /**
   * The money amount.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Amount")
  public java.math.BigDecimal getAmount();

  /**
   * The currency of the Amount.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Currency")
  public com.guidewire.ab.external.typelist.Currency getCurrency();


  /**
   * Converts this IMoney into a CurrencyAmount. Returns null
if this IMoney's Amount is null. Otherwise, returns a
CurrencyAmount whose amount and currency are equal to
this IMoney's.
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toCurrencyAmount")
  public external.gw.api.financials.CurrencyAmount toCurrencyAmount();

}
