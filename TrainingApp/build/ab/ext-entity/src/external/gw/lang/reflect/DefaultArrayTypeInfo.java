package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DefaultArrayTypeInfo extends external.gw.lang.reflect.IRelativeTypeInfo, external.gw.lang.reflect.TypeInfoBase
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Constructors")
  public java.util.List getConstructors();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredAnnotations")
  public java.util.List getDeclaredAnnotations();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredConstructors")
  public java.util.List getDeclaredConstructors();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredMethods")
  public java.util.List getDeclaredMethods();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredProperties")
  public java.util.List getDeclaredProperties();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Methods")
  public external.gw.lang.reflect.MethodList getMethods();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OwnersType")
  public gw.pl.external.Type getOwnersType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Properties")
  public java.util.List getProperties();

  /**
   * null
   *
   * @param param IType
   * @param param1 IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getConstructor")
  public external.gw.lang.reflect.IConstructorInfo getConstructor(gw.pl.external.Type param, gw.pl.external.Type[] param1);

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getConstructors")
  public java.util.List getConstructors(gw.pl.external.Type param);

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
   * @param param IType
   * @param param1 CharSequence
   * @param param2 IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMethod")
  public external.gw.lang.reflect.IMethodInfo getMethod(gw.pl.external.Type param, java.lang.CharSequence param1, gw.pl.external.Type[] param2);

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMethods")
  public external.gw.lang.reflect.MethodList getMethods(gw.pl.external.Type param);

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getProperties")
  public java.util.List getProperties(gw.pl.external.Type param);

  /**
   * null
   *
   * @param param CharSequence
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getProperty")
  public external.gw.lang.reflect.IPropertyInfo getProperty(java.lang.CharSequence param);

  /**
   * null
   *
   * @param param IType
   * @param param1 CharSequence
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getProperty")
  public external.gw.lang.reflect.IPropertyInfo getProperty(gw.pl.external.Type param, java.lang.CharSequence param1);

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasAnnotation")
  public boolean hasAnnotation(gw.pl.external.Type param);


  /**
   * Utility class for initializing an instance of external.gw.lang.reflect.DefaultArrayTypeInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IDefaultArrayType

     */
    public static DefaultArrayTypeInfo newInstance(gw.pl.external.Type param)
    {
      return (DefaultArrayTypeInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.DefaultArrayTypeInfo.class, new Class[]{ gw.pl.external.Type.class} , new Object[]{ param});
    }

  }
}
