package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IJavaClassMethod extends external.gw.lang.reflect.java.IJavaAnnotatedElement, java.io.Serializable, java.lang.Comparable<external.gw.lang.reflect.java.IJavaClassMethod>
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Bridge")
  public boolean isBridge();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultValue")
  public java.lang.Object getDefaultValue();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExceptionTypes")
  public external.gw.lang.reflect.java.IJavaClassInfo[] getExceptionTypes();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericParameterTypes")
  public external.gw.lang.reflect.java.IJavaClassType[] getGenericParameterTypes();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericReturnType")
  public external.gw.lang.reflect.java.IJavaClassType getGenericReturnType();

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParameterTypes")
  public external.gw.lang.reflect.java.IJavaClassInfo[] getParameterTypes();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReturnClassInfo")
  public external.gw.lang.reflect.java.IJavaClassInfo getReturnClassInfo();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReturnType")
  public gw.pl.external.Type getReturnType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReturnTypeName")
  public java.lang.String getReturnTypeName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Synthetic")
  public boolean isSynthetic();


  /**
   * null
   *
   * @param param IJavaMethodInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypeVariables")
  public external.gw.lang.reflect.gs.IGenericTypeVariable[] getTypeVariables(external.gw.lang.reflect.java.IJavaMethodInfo param);



  /**
   * null
   *
   * @param param Object
   * @param param1 Object[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "invoke")
  public java.lang.Object invoke(java.lang.Object param, java.lang.Object[] param1) throws gw.pl.external.GenericCheckedException;

}
