package external.gw.fs;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDirectory extends external.gw.fs.IResource
{

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearCaches")
  public void clearCaches();



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "dir")
  public external.gw.fs.IDirectory dir(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "file")
  public external.gw.fs.IFile file(java.lang.String param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "listDirs")
  public java.util.List listDirs();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "listFiles")
  public java.util.List listFiles();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mkdir")
  public boolean mkdir() throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param IResource
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "relativePath")
  public java.lang.String relativePath(external.gw.fs.IResource param);

}
