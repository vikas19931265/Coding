package external.gw.lang.parser.statements;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IClassStatement extends external.gw.lang.parser.IStatement
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ClassDeclaration")
  public external.gw.lang.parser.statements.IClassDeclaration getClassDeclaration();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ClassFileStatement")
  public external.gw.lang.parser.statements.IClassFileStatement getClassFileStatement();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GosuClass")
  public gw.pl.external.Type getGosuClass();
}
