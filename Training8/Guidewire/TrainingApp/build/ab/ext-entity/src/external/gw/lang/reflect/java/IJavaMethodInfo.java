package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IJavaMethodInfo extends external.gw.lang.javadoc.JavaHasParams, external.gw.lang.reflect.IAttributedFeatureInfo, external.gw.lang.reflect.IGenericMethodInfo, external.gw.lang.reflect.IMethodInfo
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericParameters")
  public external.gw.lang.reflect.IParameterInfo[] getGenericParameters();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericReturnType")
  public gw.pl.external.Type getGenericReturnType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Method")
  public external.gw.lang.reflect.java.IJavaClassMethod getMethod();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MethodDocs")
  public external.gw.lang.javadoc.IDocRef getMethodDocs();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Modifiers")
  public int getModifiers();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RawMethod")
  public java.lang.reflect.Method getRawMethod();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShortDescription")
  public java.lang.String getShortDescription();
}
