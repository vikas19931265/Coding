package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface FileNameAndLineNumber extends java.io.Serializable, java.lang.Comparable
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnNumber")
  public int getColumnNumber();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "File")
  public java.io.File getFile();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FileName")
  public java.lang.String getFileName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IFile")
  public external.gw.fs.IFile getIFile();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LineNumber")
  public int getLineNumber();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RealLocation")
  public external.gw.xml.FileNameAndLineNumber getRealLocation();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RealLocation")
  public void setRealLocation(external.gw.xml.FileNameAndLineNumber value);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "compareTo")
  public int compareTo(java.lang.Object param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "fromRealFile")
  public boolean fromRealFile();

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "fromSameFile")
  public boolean fromSameFile(java.lang.Object param);


  /**
   * Utility class for initializing an instance of external.gw.xml.FileNameAndLineNumber
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IFile
     * @param param1 int

     */
    public static FileNameAndLineNumber newInstance(external.gw.fs.IFile param, int param1)
    {
      return (FileNameAndLineNumber) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.FileNameAndLineNumber.class, new Class[]{ external.gw.fs.IFile.class, int.class} , new Object[]{ param, param1});
    }

    /**
     * null
     *
     * @param param File
     * @param param1 int

     */
    public static FileNameAndLineNumber newInstance(java.io.File param, int param1)
    {
      return (FileNameAndLineNumber) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.FileNameAndLineNumber.class, new Class[]{ java.io.File.class, int.class} , new Object[]{ param, param1});
    }

    /**
     * null
     *
     * @param param IFile
     * @param param1 int
     * @param param2 int

     */
    public static FileNameAndLineNumber newInstance(external.gw.fs.IFile param, int param1, int param2)
    {
      return (FileNameAndLineNumber) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.FileNameAndLineNumber.class, new Class[]{ external.gw.fs.IFile.class, int.class, int.class} , new Object[]{ param, param1, param2});
    }

    /**
     * null
     *
     * @param param IFile
     * @param param1 int
     * @param param2 int
     * @param param3 String

     */
    public static FileNameAndLineNumber newInstance(external.gw.fs.IFile param, int param1, int param2, java.lang.String param3)
    {
      return (FileNameAndLineNumber) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.FileNameAndLineNumber.class, new Class[]{ external.gw.fs.IFile.class, int.class, int.class, java.lang.String.class} , new Object[]{ param, param1, param2, param3});
    }

  }
}
