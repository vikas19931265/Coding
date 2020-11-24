package external.gw.fs;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ResourcePath
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FileSystemPathString")
  public java.lang.String getFileSystemPathString();


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
  public external.gw.fs.ResourcePath getParent();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PathString")
  public java.lang.String getPathString();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPathString")
  public java.lang.String getPathString(java.lang.String param);

  /**
   * null
   *
   * @param param ResourcePath
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isChild")
  public boolean isChild(external.gw.fs.ResourcePath param);

  /**
   * null
   *
   * @param param ResourcePath
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isDescendant")
  public boolean isDescendant(external.gw.fs.ResourcePath param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "join")
  public external.gw.fs.ResourcePath join(java.lang.String param);

  /**
   * null
   *
   * @param param ResourcePath
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "relativePath")
  public java.lang.String relativePath(external.gw.fs.ResourcePath param);

  /**
   * null
   *
   * @param param ResourcePath
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "relativePath")
  public java.lang.String relativePath(external.gw.fs.ResourcePath param, java.lang.String param1);


  /**
   * Utility class for accessing static features for external.gw.fs.ResourcePath
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static java.lang.String getWINDOWS_NETWORK_ROOT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.fs.ResourcePath.class, "WINDOWS_NETWORK_ROOT");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param String
     */
    public static external.gw.fs.ResourcePath parse(java.lang.String param)
    {
      return (external.gw.fs.ResourcePath) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.fs.ResourcePath.class, "parse", new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.fs.ResourcePath
   */
  public static class CONSTRUCT
  {

  }
}
