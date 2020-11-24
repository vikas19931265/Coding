package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IExtensionFolderLocator extends external.gw.config.IService
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExtensionFolderPath")
  public java.io.File getExtensionFolderPath();
}
