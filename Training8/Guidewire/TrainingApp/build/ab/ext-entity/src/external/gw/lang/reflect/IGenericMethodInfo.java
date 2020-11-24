package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGenericMethodInfo
{
  /**
   * An array of generic type variables if this feature corresponds with
        a generic type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeVariables")
  public external.gw.lang.reflect.gs.IGenericTypeVariable[] getTypeVariables();


  /**
   * null
   *
   * @param param IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getParameterizedParameterTypes")
  public gw.pl.external.Type[] getParameterizedParameterTypes(gw.pl.external.Type[] param);



  /**
   * null
   *
   * @param param IGosuClass
   * @param param1 IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getParameterizedParameterTypes2")
  public gw.pl.external.Type[] getParameterizedParameterTypes2(gw.pl.external.Type param, gw.pl.external.Type[] param1);



  /**
   * null
   *
   * @param param IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getParameterizedReturnType")
  public gw.pl.external.Type getParameterizedReturnType(gw.pl.external.Type[] param);



  /**
   * 
   *
   * @return A map of inferred type parameters based on the argTypes. The map
        contains only the types that could be inferred -- the map may be empty.
        <p/>
        E.g.,
        given generic method: <T> T[] toArray( T[] )
        and call: list.toArray( new String[list.size()] );
        => the toArray() method call should be automatically parameterized with <String>
        based on the new String[0].
   * @param argTypes The argument types from a generic method call.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "inferTypeParametersFromArgumentTypes")
  public external.gw.lang.parser.TypeVarToTypeMap inferTypeParametersFromArgumentTypes(gw.pl.external.Type[] argTypes);



  /**
   * null
   *
   * @param param IGosuClass
   * @param param1 IType[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "inferTypeParametersFromArgumentTypes2")
  public external.gw.lang.parser.TypeVarToTypeMap inferTypeParametersFromArgumentTypes2(gw.pl.external.Type param, gw.pl.external.Type[] param1);

}
