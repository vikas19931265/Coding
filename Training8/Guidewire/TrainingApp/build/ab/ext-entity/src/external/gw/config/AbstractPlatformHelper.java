package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AbstractPlatformHelper extends external.gw.config.BaseService, external.gw.config.IPlatformHelper
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
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getIndexFile")
  public java.io.File getIndexFile(java.lang.String param);

  /**
   * null
   *
   * @param param IFile
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isConfigFile")
  public boolean isConfigFile(external.gw.fs.IFile param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPathIgnored")
  public boolean isPathIgnored(java.lang.String param);
}
