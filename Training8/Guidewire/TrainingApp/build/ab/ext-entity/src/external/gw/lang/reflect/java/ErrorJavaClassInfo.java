package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ErrorJavaClassInfo extends external.gw.lang.reflect.java.IJavaClassInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Annotation")
  public boolean isAnnotation();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Array")
  public boolean isArray();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArrayType")
  public external.gw.lang.reflect.java.IJavaClassInfo getArrayType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BackingClass")
  public java.lang.Class getBackingClass();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ComponentType")
  public external.gw.lang.reflect.java.IJavaClassInfo getComponentType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ConcreteType")
  public external.gw.lang.reflect.java.IJavaClassType getConcreteType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredAnnotations")
  public external.gw.lang.reflect.IAnnotationInfo[] getDeclaredAnnotations();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredClasses")
  public external.gw.lang.reflect.java.IJavaClassInfo[] getDeclaredClasses();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredConstructors")
  public external.gw.lang.reflect.java.IJavaClassConstructor[] getDeclaredConstructors();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredFields")
  public external.gw.lang.reflect.java.IJavaClassField[] getDeclaredFields();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredMethods")
  public external.gw.lang.reflect.java.IJavaClassMethod[] getDeclaredMethods();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnclosingClass")
  public external.gw.lang.reflect.java.IJavaClassInfo getEnclosingClass();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Enum")
  public boolean isEnum();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnumConstants")
  public java.lang.Object[] getEnumConstants();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Fields")
  public external.gw.lang.reflect.java.IJavaClassField[] getFields();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericInterfaces")
  public external.gw.lang.reflect.java.IJavaClassType[] getGenericInterfaces();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericSuperclass")
  public external.gw.lang.reflect.java.IJavaClassType getGenericSuperclass();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HiddenViaFeatureDescriptor")
  public boolean isHiddenViaFeatureDescriptor();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Interface")
  public boolean isInterface();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Interfaces")
  public external.gw.lang.reflect.java.IJavaClassInfo[] getInterfaces();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Internal")
  public boolean isInternal();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "JavaType")
  public gw.pl.external.Type getJavaType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MethodDescriptors")
  public external.gw.lang.reflect.java.IJavaMethodDescriptor[] getMethodDescriptors();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Module")
  public external.gw.lang.reflect.module.IModule getModule();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NameSignature")
  public java.lang.String getNameSignature();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Namespace")
  public java.lang.String getNamespace();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Primitive")
  public boolean isPrimitive();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Private")
  public boolean isPrivate();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PropertyDescriptors")
  public external.gw.lang.reflect.java.IJavaPropertyDescriptor[] getPropertyDescriptors();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Protected")
  public boolean isProtected();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Public")
  public boolean isPublic();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RelativeName")
  public java.lang.String getRelativeName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SimpleName")
  public java.lang.String getSimpleName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceFileHandle")
  public external.gw.lang.reflect.gs.ISourceFileHandle getSourceFileHandle();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Superclass")
  public external.gw.lang.reflect.java.IJavaClassInfo getSuperclass();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeParameters")
  public external.gw.lang.reflect.java.IJavaClassTypeVariable[] getTypeParameters();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createClassDocNode")
  public external.gw.lang.javadoc.IClassDocNode createClassDocNode();

  /**
   * null
   *
   * @param param TypeVarToTypeMap
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getActualType")
  public gw.pl.external.Type getActualType(external.gw.lang.parser.TypeVarToTypeMap param);

  /**
   * null
   *
   * @param param TypeVarToTypeMap
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getActualType")
  public gw.pl.external.Type getActualType(external.gw.lang.parser.TypeVarToTypeMap param, boolean param1);

  /**
   * null
   *
   * @param param Class<Annotation>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAnnotation")
  public external.gw.lang.reflect.IAnnotationInfo getAnnotation(java.lang.Class param);

  /**
   * null
   *
   * @param param IJavaClassInfo[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getConstructor")
  public external.gw.lang.reflect.java.IJavaClassConstructor getConstructor(external.gw.lang.reflect.java.IJavaClassInfo[] param) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param String
   * @param param1 IJavaClassInfo[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDeclaredMethod")
  public external.gw.lang.reflect.java.IJavaClassMethod getDeclaredMethod(java.lang.String param, external.gw.lang.reflect.java.IJavaClassInfo[] param1) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param String
   * @param param1 IJavaClassInfo[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMethod")
  public external.gw.lang.reflect.java.IJavaClassMethod getMethod(java.lang.String param, external.gw.lang.reflect.java.IJavaClassInfo[] param1) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasCustomBeanInfo")
  public boolean hasCustomBeanInfo();

  /**
   * null
   *
   * @param param Class<Annotation>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isAnnotationPresent")
  public boolean isAnnotationPresent(java.lang.Class param);

  /**
   * null
   *
   * @param param IJavaClassInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isAssignableFrom")
  public boolean isAssignableFrom(external.gw.lang.reflect.java.IJavaClassInfo param);

  /**
   * null
   *
   * @param param IScriptabilityModifier
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isVisibleViaFeatureDescriptor")
  public boolean isVisibleViaFeatureDescriptor(external.gw.lang.reflect.IScriptabilityModifier param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "newInstance")
  public java.lang.Object newInstance() throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resolveImport")
  public external.gw.lang.reflect.java.IJavaClassType resolveImport(java.lang.String param);

  /**
   * null
   *
   * @param param String
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resolveType")
  public external.gw.lang.reflect.java.IJavaClassType resolveType(java.lang.String param, int param1);

  /**
   * null
   *
   * @param param String
   * @param param1 IJavaClassInfo
   * @param param2 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resolveType")
  public external.gw.lang.reflect.java.IJavaClassType resolveType(java.lang.String param, external.gw.lang.reflect.java.IJavaClassInfo param1, int param2);


  /**
   * Utility class for initializing an instance of external.gw.lang.reflect.java.ErrorJavaClassInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static ErrorJavaClassInfo newInstance()
    {
      return (ErrorJavaClassInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.java.ErrorJavaClassInfo.class, new Class[]{ } , new Object[]{ });
    }

  }
}
