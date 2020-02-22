package external.gw.fs;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IResource
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InJar")
  public boolean isInJar();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "JavaFile")
  public boolean isJavaFile();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public external.gw.fs.IDirectory getParent();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Path")
  public external.gw.fs.ResourcePath getPath();


  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "create")
  public boolean create();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "delete")
  public boolean delete() throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "exists")
  public boolean exists();



  /**
   * null
   *
   * @param param IDirectory
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isChildOf")
  public boolean isChildOf(external.gw.fs.IDirectory param);



  /**
   * null
   *
   * @param param IDirectory
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isDescendantOf")
  public boolean isDescendantOf(external.gw.fs.IDirectory param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toJavaFile")
  public java.io.File toJavaFile();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toURI")
  public java.net.URI toURI();

}
