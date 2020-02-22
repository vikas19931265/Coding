package external.gw.lang.javadoc;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IMethodNode extends external.gw.lang.javadoc.IBaseFeatureNode
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Exceptions")
  public java.util.List getExceptions();

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Params")
  public java.util.List getParams();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReturnDescription")
  public java.lang.String getReturnDescription();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReturnDescription")
  public void setReturnDescription(java.lang.String value);


  /**
   * null
   *
   * @param param IExceptionNode
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addException")
  public void addException(external.gw.lang.javadoc.IExceptionNode param);



  /**
   * null
   *
   * @param param IParamNode
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addParam")
  public void addParam(external.gw.lang.javadoc.IParamNode param);



  /**
   * null
   *
   * @param param IJavaClassInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getException")
  public external.gw.lang.javadoc.IExceptionNode getException(external.gw.lang.reflect.java.IJavaClassInfo param);

}
