package external.gw.lang.reflect.module;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITypeLoaderStack
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultTypeLoader")
  public external.gw.lang.reflect.IDefaultTypeLoader getDefaultTypeLoader();

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeLoaderStack")
  public java.util.List getTypeLoaderStack();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeRefFactory")
  public external.gw.lang.reflect.ITypeRefFactory getTypeRefFactory();


  /**
   * null
   *
   * @param param Class<T>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypeLoader")
  public <T extends external.gw.lang.reflect.ITypeLoader> T getTypeLoader(java.lang.Class param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypeNames")
  public java.util.Set getTypeNames(java.lang.String param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshed")
  public void refreshed();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "shutdown")
  public void shutdown();

}
