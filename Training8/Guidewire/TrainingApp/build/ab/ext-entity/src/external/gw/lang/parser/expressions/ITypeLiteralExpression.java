package external.gw.lang.parser.expressions;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITypeLiteralExpression extends external.gw.lang.parser.expressions.ILiteralExpression, java.lang.Cloneable
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PackageExpression")
  public external.gw.lang.parser.IExpression getPackageExpression();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public gw.pl.external.Type getType();


  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setType")
  public void setType(gw.pl.external.Type param);

}
