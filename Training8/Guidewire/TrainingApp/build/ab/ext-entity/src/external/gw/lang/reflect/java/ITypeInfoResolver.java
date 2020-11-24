package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITypeInfoResolver
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Module")
  public external.gw.lang.reflect.module.IModule getModule();


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

}
