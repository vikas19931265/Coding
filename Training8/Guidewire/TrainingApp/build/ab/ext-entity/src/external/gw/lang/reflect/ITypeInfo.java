package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITypeInfo extends external.gw.lang.reflect.IAnnotatedFeatureInfo
{
  /**
   * An <b>unmodifiable random access</b> list of <code>IConstructorInfo</code>
        instances. The list is sorted ascending by name. Returns an empty list if
        there are no constructors.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Constructors")
  public java.util.List getConstructors();

  /**
   * An <b>unmodifiable random access</b> list of <code>IEventInfo</code>
        instances. The list is sorted ascending by name. Returns an empty list if
        ther are no events.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Events")
  public java.util.List getEvents();

  /**
   * An <b>unmodifiable random access</b> list of <code>IMethodInfo</code>
        instances. The list is sorted ascending by name. Returns an empty list if
        there are no methods.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Methods")
  public external.gw.lang.reflect.MethodList getMethods();

  /**
   * An <b>unmodifiable random access</b> list of <code>IPropertyInfo</code>
        instances. The list is sorted ascending by name. Returns an empty list if
        there are no properties.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Properties")
  public java.util.List getProperties();


  /**
   * Returns a IConstructorInfo matching the specified parameter types or null
if no match is found.
   *
   * @return A IConstructorInfo matching the parameter types.
   * @param params Represents the <i>exact</i> number, order, and type of parameters
              in the constructor. A null value here is treated as an empty array.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCallableConstructor")
  public external.gw.lang.reflect.IConstructorInfo getCallableConstructor(gw.pl.external.Type[] params);



  /**
   * Returns a IMethodInfo matching the specified name and has parameter types that
produce the best match.
<p/>
If there is a tie with method names then this will throw an illegal argument exception.
   *
   * @return A IMethodInfo matching the name and parameter types.
   * @param method The name of the method to find.
   * @param params Represents the <i>exact</i> number, order, and type of parameters
              in the method. A null value here is treated as an empty array.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCallableMethod")
  public external.gw.lang.reflect.IMethodInfo getCallableMethod(java.lang.CharSequence method, gw.pl.external.Type[] params);



  /**
   * Returns a IConstructorInfo that has parameter types that produce the best match.
<p/>
If there is a tie with method names then this will throw an illegal argument exception.
   *
   * @return A IConstructorInfo matching the parameter types.
   * @param params Represents the <i>exact</i> number, order, and type of parameters
              in the constructor. A null value here is treated as an empty array.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getConstructor")
  public external.gw.lang.reflect.IConstructorInfo getConstructor(gw.pl.external.Type[] params);



  /**
   * Get an event mapped to the specified name.
   *
   * @return An IEventInfo corresponding to the event name.
   * @param event The event name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEvent")
  public external.gw.lang.reflect.IEventInfo getEvent(java.lang.CharSequence event);



  /**
   * Returns a IMethodInfo matching the specified name and parameter types or
null if no match is found.
<p/>
Note <code>params</code> must <i>exactly</i> match those of the target
method in number, order, and type. If null, <code>params</code> is treated
as an empty array.
   *
   * @return A IMethodInfo matching the name and parameter types.
   * @param methodName The name of the method to find.
   * @param params Represents the <i>exact</i> number, order, and type of parameters
                  in the method. A null value here is treated as an empty array.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMethod")
  public external.gw.lang.reflect.IMethodInfo getMethod(java.lang.CharSequence methodName, gw.pl.external.Type[] params);



  /**
   * Get a property mapped to the specified name.
   *
   * @return An IPropertyInfo corresponding to the property name.
   * @param propName The property name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getProperty")
  public external.gw.lang.reflect.IPropertyInfo getProperty(java.lang.CharSequence propName);


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.ITypeInfo
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
    public static java.lang.String getTYPEINFO_EXT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.ITypeInfo.class, "TYPEINFO_EXT");
    }

  }
}
