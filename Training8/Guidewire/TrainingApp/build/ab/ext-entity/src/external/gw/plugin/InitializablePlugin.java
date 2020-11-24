package external.gw.plugin;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface InitializablePlugin
{

  /**
   * null
   *
   * @param param Map
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setParameters")
  public void setParameters(java.util.Map param);


  /**
   * Utility class for accessing static features for external.gw.plugin.InitializablePlugin
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
    public static java.lang.String getROOT_DIR()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.plugin.InitializablePlugin.class, "ROOT_DIR");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getTEMP_DIR()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.plugin.InitializablePlugin.class, "TEMP_DIR");
    }

  }
}
