package external.gw.lang.parser.statements;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IClassDeclaration extends external.gw.lang.parser.IParsedElementWithAtLeastOneDeclaration, external.gw.lang.parser.expressions.INameInDeclaration
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ClassName")
  public java.lang.CharSequence getClassName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GSClass")
  public gw.pl.external.Type getGSClass();
}
