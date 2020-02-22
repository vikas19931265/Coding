package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDynamicSymbol extends external.gw.lang.parser.IFunctionSymbol
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GosuClass")
  public gw.pl.external.Type getGosuClass();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ScriptPart")
  public external.gw.lang.parser.IScriptPartId getScriptPart();
}
