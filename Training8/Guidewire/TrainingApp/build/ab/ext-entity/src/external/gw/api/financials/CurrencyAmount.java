package external.gw.api.financials;

/**
 * Represents a monetary amount with a currency.
<p/>
CurrencyAmounts can be used in two "modes". "Strict" CurrencyAmounts
require a currency, and further require that their amounts have a scale appropriate for their currency. An attempt
to create a "strict" CurrencyAmount
({@link #getStrict(java.math.BigDecimal, com.guidewire.ab.external.typelist.Currency)} either with a null currency,
or with a value that cannot be set to the currency scale without rounding, will fail.
<p/>
"Non-strict" CurrencyAmounts can have any scale and have an optional currency. This mode exists primarily for
backwards-compatibility. The methods that operate in "non-strict" mode have been deprecated. In Gosu, mathematical
operators (e.g., <tt>+</tt>) can be used with CurrencyAmounts, and CurrencyAmounts are interchangeable with
{@link java.math.BigDecimal}s. These operations all occur in "non-strict" mode. That is, the results of these
operations should be considered "non-strict" CurrencyAmounts.
<p/>
This class contains many methods that exist on {@link java.math.BigDecimal}, in deprecated form. This is because
in prior versions, CurrencyAmount extended {@link java.math.BigDecimal}. Now, it composes a
{@link java.math.BigDecimal} and a {@link com.guidewire.ab.external.typelist.Currency}.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CurrencyAmount extends external.gw.api.financials.IMoney, external.gw.lang.IDimension<external.gw.api.financials.CurrencyAmount, java.math.BigDecimal>, external.gw.lang.reflect.interval.ISequenceable<external.gw.api.financials.CurrencyAmount, java.math.BigDecimal, com.guidewire.ab.external.typelist.Currency>, external.gw.pl.util.webservices.GWRemotable, java.lang.Comparable<external.gw.api.financials.CurrencyAmount>
{


  /**
   * The BigDecimal amount of the CurrencyAmount. This property will not return null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Amount")
  public java.math.BigDecimal getAmount();

  /**
   * The BigDecimal amount of the CurrencyAmount. This property will not return null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Amount")
  public void setAmount(java.math.BigDecimal value);


  /**
   * The Currency typekey of this CurrencyAmount.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Currency")
  public com.guidewire.ab.external.typelist.Currency getCurrency();

  /**
   * The Currency typekey of this CurrencyAmount.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Currency")
  public void setCurrency(com.guidewire.ab.external.typelist.Currency value);

  /**
   * java.math.BigDecimal analog method
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "abs")
  public external.gw.api.financials.CurrencyAmount abs();

  /**
   * java.math.BigDecimal analog method
   *
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "abs")
  public external.gw.api.financials.CurrencyAmount abs(java.math.MathContext mc);

  /**
   * Returns the absolute value of this CurrencyAmount.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "absStrict")
  public external.gw.api.financials.CurrencyAmount absStrict();

  /**
   * Add amount.getAmount() to this.getAmount()
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().add(amount.getAmount()) and
getCurrency() == this.getCurrency()
   * @param amount 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public external.gw.api.financials.CurrencyAmount add(external.gw.api.financials.CurrencyAmount amount);

  /**
   * Add amount to this
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().add(amount.getAmount(), mc) and
getCurrency() == this.getCurrency()
   * @param amount 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public external.gw.api.financials.CurrencyAmount add(external.gw.api.financials.CurrencyAmount amount, java.math.MathContext mc);

  /**
   * Add amount to this. This is a convenience method and makes this:

this.add(new BigDecimal(23))

semantically equivalent to

this.add(new CurrencyAmount(new BigDecimal(23), this.getCurrency())
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().add(amount) and
getCurrency() == this.getCurrency()
   * @param amount 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAsSameCurrency")
  public external.gw.api.financials.CurrencyAmount addAsSameCurrency(java.math.BigDecimal amount);

  /**
   * Add amount to this. This is a convenience method and makes this:

this.add(new BigDecimal(23), mc)

semantically equivalent to

this.add(new CurrencyAmount(new BigDecimal(23), this.getCurrency(), mc)
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().add(amount, mc) and
getCurrency() == this.getCurrency()
   * @param amount 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAsSameCurrency")
  public external.gw.api.financials.CurrencyAmount addAsSameCurrency(java.math.BigDecimal amount, java.math.MathContext mc);

  /**
   * Calculates the equivalent of this CurrencyAmount in the secondaryCurrency, and returns
a new CurrencyAmount with that secondary CurrencyAmount as the SecondaryMoneyComponent.
<p>
Does nothing if this.Currency and the secondaryCurrency are equal or null
   *
   * @return a new CurrencyAmount, same value as before, but with SecondaryMoneyComponent set.
   * @param secondaryCurrency 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addSecondaryMoneyComponent")
  public external.gw.api.financials.CurrencyAmountPair addSecondaryMoneyComponent(com.guidewire.ab.external.typelist.Currency secondaryCurrency);

  /**
   * Calculates the equivalent of this CurrencyAmount in the secondaryCurrency with the given exchangeRate,
and returns  a new CurrencyAmount with that secondary CurrencyAmount as the SecondaryMoneyComponent.
<p>
Does nothing if this.Currency and the secondaryCurrency are equal or null
   *
   * @return a new CurrencyAmount, same value as before, but with SecondaryMoneyComponent set.
   * @param secondaryCurrency 
   * @param exchangeRate 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addSecondaryMoneyComponent")
  public external.gw.api.financials.CurrencyAmountPair addSecondaryMoneyComponent(com.guidewire.ab.external.typelist.Currency secondaryCurrency, java.math.BigDecimal exchangeRate);

  /**
   * Calculates <tt>this + amount</tt>. If both specify a currency, then the currencies must match. If one specifies a
currency, then the result will be in that currency. If neither specifies a currency, then the result will be in
the default currency.
   *
   * @return a currency amount scaled appropriately for the associated currency.
   * @param amount 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addStrict")
  public external.gw.api.financials.CurrencyAmount addStrict(external.gw.api.financials.CurrencyAmount amount);

  /**
   * Compares this currency amount with another, which may be of a different currency. If both currency amounts specify
a currency, and the currencies are different, then the given currency amount is converted into this currency
amount's currency before the amounts are compared. The conversion is based on current market exchange rates and
the result is rounded using the default rounding mode.
<p/>
After possible conversion, the currency amounts are compared according to {@link #compareTo(CurrencyAmount)} .
   *
   * @param o 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "compareMultiCurrency")
  public int compareMultiCurrency(external.gw.api.financials.CurrencyAmount o);

  /**
   * Compares this currency amount with another by comparing their numeric amounts. If both currency amounts specify a
currency, then the currencies must be the same.
<p/>
See {@link java.lang.Comparable#compareTo} for an explanation of the int return value.
   *
   * @param o 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "compareTo")
  public int compareTo(external.gw.api.financials.CurrencyAmount o);

  /**
   * Converts this CurrencyAmount into one in the given currency, according to the current market exchange rate, with
the resulting amount rounded according to the given rounding mode.
<p/>
If either currency is null, or if the currencies are the same, returns this instance.
   *
   * @param toCurrency 
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "convert")
  public external.gw.api.financials.CurrencyAmount convert(com.guidewire.ab.external.typelist.Currency toCurrency, java.math.RoundingMode roundingMode);

  /**
   * Converts this CurrencyAmount into one in the given currency, according to the given exchange rate, with
the resulting amount rounded according to the given rounding mode.
<p/>
If either currency is null, or if the currencies are the same, returns this instance.
   *
   * @param toCurrency 
   * @param exchangeRateOverride 
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "convert")
  public external.gw.api.financials.CurrencyAmount convert(com.guidewire.ab.external.typelist.Currency toCurrency, java.math.BigDecimal exchangeRateOverride, java.math.RoundingMode roundingMode);

  /**
   * Returns true if Currency of given CurrencyAmount equals this Currency, or either is null.
   *
   * @param curAmt2 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "currenciesEqual")
  public boolean currenciesEqual(external.gw.api.financials.CurrencyAmount curAmt2);

  /**
   * Divide this by the given CurrencyAmount, which must have the same Currency as this.
   *
   * @return A BigDecimal that has a value this.getAmount().divide(amount, MathContext.DECIMAL128)
   * @param amount 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divide")
  public java.math.BigDecimal divide(external.gw.api.financials.CurrencyAmount amount);

  /**
   * Divide this by the given BigDecimal.
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().divide(amount, MathContext.DECIMAL128)
and getCurrency() == this.getCurrency()
   * @param amount 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divide")
  public external.gw.api.financials.CurrencyAmount divide(java.math.BigDecimal amount);

  /**
   * Divides this by the given CurrencyAmount, using the give MatchContext
   *
   * @return A BigDecimal where getAmount() == this.getAmount().divide(amount, mc)
   * @param amount 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divide")
  public java.math.BigDecimal divide(external.gw.api.financials.CurrencyAmount amount, java.math.MathContext mc);

  /**
   * Divides this by the given amount using the given RoundingMode
   *
   * @return A BigDecimal that == this.getAmount().divide(amount, roundingMode)
   * @param amount 
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divide")
  public java.math.BigDecimal divide(external.gw.api.financials.CurrencyAmount amount, java.math.RoundingMode roundingMode);

  /**
   * Divides this by the given amount using the given MatchContext.
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().divide(amount, mc)
and getCurrency() == this.getCurrency()
   * @param amount 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divide")
  public external.gw.api.financials.CurrencyAmount divide(java.math.BigDecimal amount, java.math.MathContext mc);

  /**
   * Divides this by the given amount.
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().divide(amount, roundingMode)
and getCurrency() == this.getCurrency()
   * @param amount 
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divide")
  public external.gw.api.financials.CurrencyAmount divide(java.math.BigDecimal amount, java.math.RoundingMode roundingMode);

  /**
   * Divides this by the given amount using the given scale and RoundingMode
   *
   * @return A BigDecimal that == this.getAmount().divide(amount, scale, roundingMode)
and getCurrency() == this.getCurrency()
   * @param amount 
   * @param scale 
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divide")
  public java.math.BigDecimal divide(external.gw.api.financials.CurrencyAmount amount, int scale, java.math.RoundingMode roundingMode);

  /**
   * Divides this by the given amount using the given scale and RoundingMode
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().divide(amount, scale, roundingMode)
and getCurrency() == this.getCurrency()
   * @param amount 
   * @param scale 
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divide")
  public external.gw.api.financials.CurrencyAmount divide(java.math.BigDecimal amount, int scale, java.math.RoundingMode roundingMode);

  /**
   * java.math.BigDecimal analog method
   *
   * @param divisor 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divideAndRemainder")
  public external.gw.api.financials.CurrencyAmount[] divideAndRemainder(java.math.BigDecimal divisor);

  /**
   * java.math.BigDecimal analog method
   *
   * @param divisor 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divideAndRemainder")
  public external.gw.api.financials.CurrencyAmount[] divideAndRemainder(java.math.BigDecimal divisor, java.math.MathContext mc);

  /**
   * Divides this CurrencyAmount by the given factor, rounding the result according to the given rounding mode.
   *
   * @return a currency amount scaled appropriately for the associated currency.
   * @param factor 
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divideStrict")
  public external.gw.api.financials.CurrencyAmount divideStrict(java.math.BigDecimal factor, java.math.RoundingMode roundingMode);

  /**
   * java.math.BigDecimal analog method
   *
   * @param divisor 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divideToIntegralValue")
  public external.gw.api.financials.CurrencyAmount divideToIntegralValue(java.math.BigDecimal divisor);

  /**
   * java.math.BigDecimal analog method
   *
   * @param divisor 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divideToIntegralValue")
  public external.gw.api.financials.CurrencyAmount divideToIntegralValue(java.math.BigDecimal divisor, java.math.MathContext mc);

  /**
   * Returns a CurrencyAmount with the same amount as this one, but with scale set to the appropriate value for the
currency, and the currency set to the default currency if null. The amount is rounded according to the given
rounding mode.
   *
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "fix")
  public external.gw.api.financials.CurrencyAmount fix(java.math.RoundingMode roundingMode);

  /**
   * java.math.BigDecimal analog method
   *
   * @param rhs 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "max")
  public external.gw.api.financials.CurrencyAmount max(external.gw.api.financials.CurrencyAmount rhs);

  /**
   * java.math.BigDecimal analog method
   *
   * @param rhs 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "min")
  public external.gw.api.financials.CurrencyAmount min(external.gw.api.financials.CurrencyAmount rhs);

  /**
   * java.math.BigDecimal analog method
   *
   * @param n 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "movePointLeft")
  public external.gw.api.financials.CurrencyAmount movePointLeft(int n);

  /**
   * java.math.BigDecimal analog method
   *
   * @param n 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "movePointRight")
  public external.gw.api.financials.CurrencyAmount movePointRight(int n);

  /**
   * Multiply this by the given BigDecimal.
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().multiply(amount)
and getCurrency() == this.getCurrency()
   * @param amount 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "multiply")
  public external.gw.api.financials.CurrencyAmount multiply(java.math.BigDecimal amount);

  /**
   * Multiply this by the given BigDecimal.
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().multiply(amount, mc)
and getCurrency() == this.getCurrency()
   * @param amount 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "multiply")
  public external.gw.api.financials.CurrencyAmount multiply(java.math.BigDecimal amount, java.math.MathContext mc);

  /**
   * Multiplies this CurrencyAmount by the given factor, rounding the result according to the given rounding mode.
   *
   * @return a currency amount scaled appropriately for the associated currency.
   * @param factor 
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "multiplyStrict")
  public external.gw.api.financials.CurrencyAmount multiplyStrict(java.math.BigDecimal factor, java.math.RoundingMode roundingMode);

  /**
   * java.math.BigDecimal analog method
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "negate")
  public external.gw.api.financials.CurrencyAmount negate();

  /**
   * java.math.BigDecimal analog method
   *
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "negate")
  public external.gw.api.financials.CurrencyAmount negate(java.math.MathContext mc);

  /**
   * Returns <tt>this * -1</tt>.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "negateStrict")
  public external.gw.api.financials.CurrencyAmount negateStrict();

  /**
   * java.math.BigDecimal analog method
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "plus")
  public external.gw.api.financials.CurrencyAmount plus();

  /**
   * java.math.BigDecimal analog method
   *
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "plus")
  public external.gw.api.financials.CurrencyAmount plus(java.math.MathContext mc);

  /**
   * java.math.BigDecimal analog method
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "precision")
  public int precision();

  /**
   * java.math.BigDecimal analog method
   *
   * @param divisor 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "remainder")
  public external.gw.api.financials.CurrencyAmount remainder(java.math.BigDecimal divisor);

  /**
   * java.math.BigDecimal analog method
   *
   * @param divisor 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "remainder")
  public external.gw.api.financials.CurrencyAmount remainder(java.math.BigDecimal divisor, java.math.MathContext mc);

  /**
   * java.math.BigDecimal analog method
   *
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "round")
  public external.gw.api.financials.CurrencyAmount round(java.math.MathContext mc);

  /**
   * java.math.BigDecimal analog method
   *
   * @param n 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "scaleByPowerOfTen")
  public external.gw.api.financials.CurrencyAmount scaleByPowerOfTen(int n);

  /**
   * java.math.BigDecimal analog method
   *
   * @param newScale 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setScale")
  public external.gw.api.financials.CurrencyAmount setScale(int newScale);

  /**
   * 
   *
   * @param newScale 
   * @param roundingMode 
   * @deprecated This class used to extend BigDecimal. This method is included for backward-compatibility. Instead,
for this and other BigDecimal methods, use {@link #getAmount()} to get the underlying BigDecimal, and call the
method on that.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setScale")
  public java.math.BigDecimal setScale(int newScale, int roundingMode);

  /**
   * java.math.BigDecimal analog method
   *
   * @param newScale 
   * @param roundingMode 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setScale")
  public external.gw.api.financials.CurrencyAmount setScale(int newScale, java.math.RoundingMode roundingMode);

  /**
   * Returns a CurrencyAmount with the same amount as this one, but with scale set to the appropriate value for the
currency. No rounding is allowed.
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setScaleToCurrency")
  public external.gw.api.financials.CurrencyAmount setScaleToCurrency();

  /**
   * Returns a CurrencyAmount with the same amount as this one, but with scale set to the appropriate value for the
currency. The amount is rounded according to the given rounding mode.
   *
   * @param roundingMode 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setScaleToCurrency")
  public external.gw.api.financials.CurrencyAmount setScaleToCurrency(java.math.RoundingMode roundingMode);

  /**
   * Since a CurrencyAmount is immutable, this will return a new CurrencyAmount with the
secondary component set if the current secondaryComponent and passed-in one are not equal.
   *
   * @param secondaryMoneyComponent 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setSecondaryMoneyComponent")
  public external.gw.api.financials.CurrencyAmountPair setSecondaryMoneyComponent(external.gw.api.financials.CurrencyAmount secondaryMoneyComponent);

  /**
   * Returns the sign of this CurrencyAmount.
   *
   * @return -1, 0, or 1 as the value of this CurrencyAmount
        is negative, zero, or positive.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "signum")
  public int signum();

  /**
   * java.math.BigDecimal analog method
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "stripTrailingZeros")
  public external.gw.api.financials.CurrencyAmount stripTrailingZeros();

  /**
   * Subtract amount.getAmount() from this.getAmount()
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().subtract(amount.getAmount()) and
getCurrency() == this.getCurrency()
   * @param amount 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "subtract")
  public external.gw.api.financials.CurrencyAmount subtract(external.gw.api.financials.CurrencyAmount amount);

  /**
   * Subtract amount.getAmount() from this.getAmount()
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().subtract(amount.getAmount(), mc) and
getCurrency() == this.getCurrency()
   * @param amount 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "subtract")
  public external.gw.api.financials.CurrencyAmount subtract(external.gw.api.financials.CurrencyAmount amount, java.math.MathContext mc);

  /**
   * Add amount to this. This is a convenience method and makes this:

this.add(new BigDecimal(23))

semantically equivalent to

this.add(new CurrencyAmount(new BigDecimal(23), this.getCurrency())
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().add(amount) and
getCurrency() == this.getCurrency()
   * @param amount 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "subtractAsSameCurrency")
  public external.gw.api.financials.CurrencyAmount subtractAsSameCurrency(java.math.BigDecimal amount);

  /**
   * Add amount to this. This is a convenience method and makes this:

this.add(new BigDecimal(23), mc)

semantically equivalent to

this.add(new CurrencyAmount(new BigDecimal(23), this.getCurrency(), mc)
   *
   * @return A CurrencyAmount where getAmount() == this.getAmount().add(amount, mc) and
getCurrency() == this.getCurrency()
   * @param amount 
   * @param mc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "subtractAsSameCurrency")
  public external.gw.api.financials.CurrencyAmount subtractAsSameCurrency(java.math.BigDecimal amount, java.math.MathContext mc);

  /**
   * Subtracts two CurrencyAmounts. If both specify a currency, then the currencies must match. If one specifies a
currency, then the result will be in that currency. If neither specifies a currency, then the result will be in
the default currency.
   *
   * @return a currency amount scaled appropriately for the associated currency.
   * @param amount 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "subtractStrict")
  public external.gw.api.financials.CurrencyAmount subtractStrict(external.gw.api.financials.CurrencyAmount amount);


  /**
   * Utility class for accessing static features for external.gw.api.financials.CurrencyAmount
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * A CurrencyAmount comparator based on the following rules:
  - Nulls are treated as less than all other values.
  - If two CurrencyAmounts have different Currencies, then uses their Currency priority values for comparison.
    Otherwise, uses their amount values (BigDecimals) for comparison.
     * 
     */
    public static java.util.Comparator getNULL_SAFE_CURRENCY_THEN_AMOUNT_COMPARATOR()
    {
      return (java.util.Comparator) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.financials.CurrencyAmount.class, "NULL_SAFE_CURRENCY_THEN_AMOUNT_COMPARATOR");
    }

        //Static Methods
    
    /**
     * Compares two money amounts, which may be null. Null money amounts are ordered before non-null money amounts.
<p/>
Otherwise, the currency amounts are compared according to {@link #compareTo(CurrencyAmount)} .
     *
     * @param amount1 
     * @param amount2 
     */
    public static int compare(external.gw.api.financials.CurrencyAmount amount1, external.gw.api.financials.CurrencyAmount amount2)
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.financials.CurrencyAmount.class, "compare", new Class[]{ external.gw.api.financials.CurrencyAmount.class, external.gw.api.financials.CurrencyAmount.class} , new Object[]{ amount1, amount2});
    }

    /**
     * Compares two money amounts, which may be null. Null money amounts are ordered before non-null money amounts.
<p/>
Otherwise, the currency amounts are compared according to {@link #compareMultiCurrency(CurrencyAmount)} .
     *
     * @param amount1 
     * @param amount2 
     */
    public static int compareMultiCurrency(external.gw.api.financials.CurrencyAmount amount1, external.gw.api.financials.CurrencyAmount amount2)
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.financials.CurrencyAmount.class, "compareMultiCurrency", new Class[]{ external.gw.api.financials.CurrencyAmount.class, external.gw.api.financials.CurrencyAmount.class} , new Object[]{ amount1, amount2});
    }

    /**
     * Constructs a CurrencyAmount from a BigDecimal amount and currency.
The currency parameter cannot be null. The amount will be scaled as appropriate for the
given currency, and the amount must not have more decimal digits than that scale allows.
Use {@link CurrencyUtil#roundToCurrencyScale} in preference to this method if rounding
is required when scaling the BigDecimal. For example, if it is the result of a
divide or multiply operation.
     *
     * @param amount 
     * @param currency 
     */
    public static external.gw.api.financials.CurrencyAmount getStrict(java.math.BigDecimal amount, com.guidewire.ab.external.typelist.Currency currency)
    {
      return (external.gw.api.financials.CurrencyAmount) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.financials.CurrencyAmount.class, "getStrict", new Class[]{ java.math.BigDecimal.class, com.guidewire.ab.external.typelist.Currency.class} , new Object[]{ amount, currency});
    }

    /**
     * Returns a {@link external.gw.api.financials.CurrencyAmount} whose amount and currency are equivalent to the given
money. Returns null if either <tt>money</tt> or <tt>money.getAmount()</tt> is null.
     *
     * @param money 
     */
    public static external.gw.api.financials.CurrencyAmount valueOf(external.gw.api.financials.IMoney money)
    {
      return (external.gw.api.financials.CurrencyAmount) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.financials.CurrencyAmount.class, "valueOf", new Class[]{ external.gw.api.financials.IMoney.class} , new Object[]{ money});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.api.financials.CurrencyAmount
   */
  public static class CONSTRUCT
  {

    /**
     * Convenience constructor.

NB: Using doubles for money is inherently risky. Doubles have a potentially lossy representation that can
lead to inaccuracies. Consult the java language specification for details on floating point representations.
     *
     * @param val Amount that will be converted to BigDecimal
     * @param currency The currency of the instance.

     */
    public static CurrencyAmount newInstance(double val, com.guidewire.ab.external.typelist.Currency currency)
    {
      return (CurrencyAmount) gw.pl.external.Invoker.getInstance().construct(external.gw.api.financials.CurrencyAmount.class, new Class[]{ double.class, com.guidewire.ab.external.typelist.Currency.class} , new Object[]{ val, currency});
    }

    /**
     * Convenience constructor.

NB: Using floats for money is inherently risky. Floats have a potentially lossy representation that can
lead to inaccuracies. Consult the java language specification for details on floating point representations.
     *
     * @param val Amount that will be converted to BigDecimal
     * @param currency The currency of the instance.

     */
    public static CurrencyAmount newInstance(float val, com.guidewire.ab.external.typelist.Currency currency)
    {
      return (CurrencyAmount) gw.pl.external.Invoker.getInstance().construct(external.gw.api.financials.CurrencyAmount.class, new Class[]{ float.class, com.guidewire.ab.external.typelist.Currency.class} , new Object[]{ val, currency});
    }

    /**
     * Convenience constructor
     *
     * @param val Non-null amount that is parseable by BigDecimal.
     * @param currency The currency of the instance.

     */
    public static CurrencyAmount newInstance(java.lang.String val, com.guidewire.ab.external.typelist.Currency currency)
    {
      return (CurrencyAmount) gw.pl.external.Invoker.getInstance().construct(external.gw.api.financials.CurrencyAmount.class, new Class[]{ java.lang.String.class, com.guidewire.ab.external.typelist.Currency.class} , new Object[]{ val, currency});
    }

    /**
     * Primary constructor
     *
     * @param amount Non-null amount.
     * @param currency The currency of the instance.

     */
    public static CurrencyAmount newInstance(java.math.BigDecimal amount, com.guidewire.ab.external.typelist.Currency currency)
    {
      return (CurrencyAmount) gw.pl.external.Invoker.getInstance().construct(external.gw.api.financials.CurrencyAmount.class, new Class[]{ java.math.BigDecimal.class, com.guidewire.ab.external.typelist.Currency.class} , new Object[]{ amount, currency});
    }

    /**
     * Convenience constructor
     *
     * @param val Non-null amount
     * @param currency The currency of the instance.

     */
    public static CurrencyAmount newInstance(java.math.BigInteger val, com.guidewire.ab.external.typelist.Currency currency)
    {
      return (CurrencyAmount) gw.pl.external.Invoker.getInstance().construct(external.gw.api.financials.CurrencyAmount.class, new Class[]{ java.math.BigInteger.class, com.guidewire.ab.external.typelist.Currency.class} , new Object[]{ val, currency});
    }

    /**
     * Convenience constructor
     *
     * @param val Amount that will be converted to BigDecimal
     * @param currency The currency of the instance.

     */
    public static CurrencyAmount newInstance(long val, com.guidewire.ab.external.typelist.Currency currency)
    {
      return (CurrencyAmount) gw.pl.external.Invoker.getInstance().construct(external.gw.api.financials.CurrencyAmount.class, new Class[]{ long.class, com.guidewire.ab.external.typelist.Currency.class} , new Object[]{ val, currency});
    }

    /**
     * Convenience constructor
     *
     * @param unscaledVal Non-null amount that will, along with scale, be converted to BigDecimal
     * @param scale The scale to use for the conversion to BigDecimal
     * @param currency The currency of the instance.

     */
    public static CurrencyAmount newInstance(java.math.BigInteger unscaledVal, int scale, com.guidewire.ab.external.typelist.Currency currency)
    {
      return (CurrencyAmount) gw.pl.external.Invoker.getInstance().construct(external.gw.api.financials.CurrencyAmount.class, new Class[]{ java.math.BigInteger.class, int.class, com.guidewire.ab.external.typelist.Currency.class} , new Object[]{ unscaledVal, scale, currency});
    }

  }
}
