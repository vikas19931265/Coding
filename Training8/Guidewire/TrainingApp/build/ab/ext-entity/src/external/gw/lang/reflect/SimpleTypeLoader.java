package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SimpleTypeLoader extends external.gw.lang.reflect.TypeLoaderBase
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Extensions")
  public java.util.Set getExtensions();

  /**
   * null
   *
   * @param param IDirectory
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNamespaceForDirectory")
  public java.lang.String getNamespaceForDirectory(external.gw.fs.IDirectory param);

  /**
   * null
   *
   * @param param IFile
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypesForFile")
  public java.lang.String[] getTypesForFile(external.gw.fs.IFile param);

  /**
   * null
   *
   * @param param IDirectory
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesDirectory")
  public boolean handlesDirectory(external.gw.fs.IDirectory param);

  /**
   * null
   *
   * @param param IFile
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesFile")
  public boolean handlesFile(external.gw.fs.IFile param);

  /**
   * null
   *
   * @param param IFile
   * @param param1 String[]
   * @param param2 RefreshKind
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedFile")
  public external.gw.lang.reflect.RefreshKind refreshedFile(external.gw.fs.IFile param, java.lang.String[] param1, external.gw.lang.reflect.RefreshKind param2);
}
