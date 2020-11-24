package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TypeInfoBase extends external.gw.lang.reflect.ITypeInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Annotations")
  public java.util.List getAnnotations();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Container")
  public external.gw.lang.reflect.IFeatureInfo getContainer();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Deprecated")
  public boolean isDeprecated();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeprecatedReason")
  public java.lang.String getDeprecatedReason();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DisplayName")
  public java.lang.String getDisplayName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Events")
  public java.util.List getEvents();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAnnotation")
  public external.gw.lang.reflect.IAnnotationInfo getAnnotation(gw.pl.external.Type param);

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAnnotationsOfType")
  public java.util.List getAnnotationsOfType(gw.pl.external.Type param);

  /**
   * null
   *
   * @param param IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCallableConstructor")
  public external.gw.lang.reflect.IConstructorInfo getCallableConstructor(gw.pl.external.Type[] param);

  /**
   * null
   *
   * @param param CharSequence
   * @param param1 IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCallableMethod")
  public external.gw.lang.reflect.IMethodInfo getCallableMethod(java.lang.CharSequence param, gw.pl.external.Type[] param1);

  /**
   * null
   *
   * @param param IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getConstructor")
  public external.gw.lang.reflect.IConstructorInfo getConstructor(gw.pl.external.Type[] param);

  /**
   * null
   *
   * @param param CharSequence
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEvent")
  public external.gw.lang.reflect.IEventInfo getEvent(java.lang.CharSequence param);

  /**
   * null
   *
   * @param param CharSequence
   * @param param1 IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMethod")
  public external.gw.lang.reflect.IMethodInfo getMethod(java.lang.CharSequence param, gw.pl.external.Type[] param1);

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasAnnotation")
  public boolean hasAnnotation(gw.pl.external.Type param);

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasDeclaredAnnotation")
  public boolean hasDeclaredAnnotation(gw.pl.external.Type param);
}
