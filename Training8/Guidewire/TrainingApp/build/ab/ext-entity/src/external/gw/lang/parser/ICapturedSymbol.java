package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ICapturedSymbol extends external.gw.lang.parser.IFunctionSymbol
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReferredSymbol")
  public external.gw.lang.parser.ISymbol getReferredSymbol();
}
