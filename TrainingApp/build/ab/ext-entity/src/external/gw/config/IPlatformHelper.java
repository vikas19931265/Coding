package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IPlatformHelper extends external.gw.config.IService
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IDEACachesDir")
  public java.lang.String getIDEACachesDir();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IDEACachesDirFile")
  public java.io.File getIDEACachesDirFile();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IDEACorruptionMarkerFile")
  public java.io.File getIDEACorruptionMarkerFile();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InIDE")
  public boolean isInIDE();


  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getIndexFile")
  public java.io.File getIndexFile(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPathIgnored")
  public boolean isPathIgnored(java.lang.String param);



  /**
   * null
   *
   * @param param IModule
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refresh")
  public void refresh(external.gw.lang.reflect.module.IModule param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "shouldCacheTypeNames")
  public boolean shouldCacheTypeNames();

}
