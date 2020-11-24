package external.gw.lang.parser.expressions;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITypeVariableDefinition
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BoundingType")
  public gw.pl.external.Type getBoundingType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnclosingType")
  public gw.pl.external.Type getEnclosingType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EnclosingType")
  public void setEnclosingType(gw.pl.external.Type value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public gw.pl.external.Type getType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeVar")
  public external.gw.lang.reflect.gs.IGenericTypeVariable getTypeVar();


  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clone")
  public external.gw.lang.parser.expressions.ITypeVariableDefinition clone();

}
