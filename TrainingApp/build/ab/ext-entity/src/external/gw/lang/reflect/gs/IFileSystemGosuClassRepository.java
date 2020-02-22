package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IFileSystemGosuClassRepository extends external.gw.lang.reflect.gs.IGosuClassRepository
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourcePath")
  public external.gw.fs.IDirectory[] getSourcePath();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourcePath")
  public void setSourcePath(external.gw.fs.IDirectory[] value);


  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findAllFilesByExtension")
  public java.util.List findAllFilesByExtension(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findFirstFile")
  public external.gw.fs.IFile findFirstFile(java.lang.String param);



  /**
   * null
   *
   * @param param IDirectory
   * @param param1 IFile
   * @param param2 String[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getClassNameFromFile")
  public java.lang.String getClassNameFromFile(external.gw.fs.IDirectory param, external.gw.fs.IFile param1, java.lang.String[] param2);



  /**
   * null
   *
   * @param param URL
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getResourceName")
  public java.lang.String getResourceName(java.net.URL param);

}
