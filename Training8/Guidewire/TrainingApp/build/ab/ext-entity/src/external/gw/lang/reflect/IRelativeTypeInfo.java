package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IRelativeTypeInfo extends external.gw.lang.reflect.ITypeInfo
{
  /**
   * Returns a list of <code>IConstructorInfo</code> objects reflecting all the
constructors declared by the class represented by this
<code>IType</code> object. This includes public, protected, internal
access, and private constructors.  Interfaces and arrays always return an empty list.
The elements in the list are ordered by declaration order in the file.
This method returns an empty list if the type does not contain any methods
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredConstructors")
  public java.util.List getDeclaredConstructors();

  /**
   * Returns a list of <code>IMethodInfo</code> objects reflecting all the
methods declared by the class or interface represented by this
<code>IType</code> object. This includes public, protected, internal
access, and private methods, but excludes inherited methods.
The elements in the list are ordered by declaration order in the file.
This method returns an empty list if the type does not contain any methods
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredMethods")
  public java.util.List getDeclaredMethods();

  /**
   * Returns a list of <code>IPropertyInfo</code> objects reflecting all the
properties declared by the class or interface represented by this
<code>IType</code> object. This includes public, protected, internal
access, and private properties, but excludes inherited properties.
The elements in the list are ordered by declaration order in the file.
This method returns an empty list if the type does not contain any properties
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredProperties")
  public java.util.List getDeclaredProperties();


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
   * @param param IType
   * @param param1 CharSequence
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getProperty")
  public external.gw.lang.reflect.IPropertyInfo getProperty(gw.pl.external.Type param, java.lang.CharSequence param1);


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.IRelativeTypeInfo
   * <ul>
   * <li>Access static properties for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    /**
     * 
     * 
     */
    public static int getAccessibility_Size()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.IRelativeTypeInfo.class, "Accessibility_Size");
    }

  }
}
