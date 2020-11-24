package external.gw.lang.parser.statements;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IUsesStatement extends external.gw.lang.parser.IStatement
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeName")
  public java.lang.String getTypeName();
}
