package external.gw.lang;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDimension <S extends external.gw.lang.IDimension, T extends java.lang.Number>
{

  /**
   * Returns a separate instance of this type with the given number of units.
<p>
The Gosu runtime calls this method when performing default operations.
For instance, when adding two of the same dimension types, Gosu calls
toNumber() on each operand, adds the numbers, and then calls fromNumber()
for the result.
   *
   * @return a separate instance of this type given the number of units.
   * @param units 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "fromNumber")
  public S fromNumber(T units);



  /**
   * 
   *
   * @return The static Number derivation for this class. Must be the same
  as the T parameter.  Note this is only useful in Java where the type
  is lost at runtime due to type erasure.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "numberType")
  public java.lang.Class numberType();



  /**
   * The Gosu runtime calls this method when performing default operations.
For instance, when adding two of the same dimension types, Gosu calls
this method on each operand, adds the numbers, and then calls fromNumber()
for the result.
   *
   * @return the number of units for this dimension instance.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toNumber")
  public T toNumber();

}
