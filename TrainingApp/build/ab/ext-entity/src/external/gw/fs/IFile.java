package external.gw.fs;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IFile extends external.gw.fs.IResource
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BaseName")
  public java.lang.String getBaseName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Extension")
  public java.lang.String getExtension();


  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "openInputStream")
  public java.io.InputStream openInputStream() throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "openOutputStream")
  public java.io.OutputStream openOutputStream() throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "openOutputStreamForAppend")
  public java.io.OutputStream openOutputStreamForAppend() throws gw.pl.external.GenericCheckedException;


  /**
   * Utility class for accessing static features for external.gw.fs.IFile
   * <ul>
   * <li>Access static properties for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    /**
     * 
     * 
     */
    public static external.gw.fs.IFile[] getEMPTY_ARRAY()
    {
      return (external.gw.fs.IFile[]) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.fs.IFile.class, "EMPTY_ARRAY");
    }

  }
}
