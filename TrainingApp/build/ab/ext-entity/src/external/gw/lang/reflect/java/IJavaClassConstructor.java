package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IJavaClassConstructor extends external.gw.lang.reflect.java.IJavaAnnotatedElement, java.io.Serializable
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Default")
  public boolean isDefault();

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Modifiers")
  public int getModifiers();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParameterTypes")
  public external.gw.lang.reflect.java.IJavaClassInfo[] getParameterTypes();


  /**
   * null
   *
   * @param param IFeatureInfo
   * @param param1 TypeVarToTypeMap
   * @param param2 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "convertGenericParameterTypes")
  public external.gw.lang.reflect.IParameterInfo[] convertGenericParameterTypes(external.gw.lang.reflect.IFeatureInfo param, external.gw.lang.parser.TypeVarToTypeMap param1, boolean param2);



  /**
   * null
   *
   * @param param Object[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "newInstance")
  public java.lang.Object newInstance(java.lang.Object[] param) throws gw.pl.external.GenericCheckedException;

}
