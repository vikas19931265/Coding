package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IFunctionSymbol extends external.gw.lang.parser.ISymbol
{
  /**
   * true if this function symbol came from a java superclass
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FromJava")
  public boolean isFromJava();

  /**
   * Returns the modifiers for this function symbol
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Modifiers")
  public int getModifiers();

  /**
   * Returns a description of arguments of the form ( < argName1 >, < argName2 >, etc. )
appropriate for display in a source editor ui.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SignatureDescription")
  public java.lang.String getSignatureDescription();

  /**
   * Returns true if the value of this function symbol is stored on the stack as a variable
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StackSymbol")
  public boolean isStackSymbol();


  /**
   * Invokes the method represented by this symbol.
   *
   * @param args An array of arguments to forward to the function.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "invoke")
  public java.lang.Object invoke(java.lang.Object[] args);

}
