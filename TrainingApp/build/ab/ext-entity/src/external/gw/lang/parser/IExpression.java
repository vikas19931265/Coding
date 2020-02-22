package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IExpression extends external.gw.lang.parser.IHasType, external.gw.lang.parser.IParsedElement
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContextType")
  public gw.pl.external.Type getContextType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NullSafe")
  public boolean isNullSafe();


  /**
   * Evaluates this Expression and returns the result.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "evaluate")
  public java.lang.Object evaluate();



  /**
   * null
   *
   * @param param IExternalSymbolMap
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "evaluate")
  public java.lang.Object evaluate(external.gw.lang.reflect.gs.IExternalSymbolMap param);


  /**
   * Utility class for accessing static features for external.gw.lang.parser.IExpression
   * <ul>
   * <li>Access static properties for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    /**
     * 
     * 
     */
    public static external.gw.lang.parser.IExpression[] getEMPTY_ARRAY()
    {
      return (external.gw.lang.parser.IExpression[]) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.IExpression.class, "EMPTY_ARRAY");
    }

  }
}
