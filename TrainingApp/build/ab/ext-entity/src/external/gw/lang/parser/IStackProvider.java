package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IStackProvider
{
  /**
   * For compile-time assignment of stack indexes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NextStackIndex")
  public int getNextStackIndex();


  /**
   * For compile-time assignment of stack indexes at a particular scope.
   *
   * @param scope 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNextStackIndexForScope")
  public int getNextStackIndexForScope(external.gw.lang.parser.IScope scope);



  /**
   * For compile-time use. Returns true iff an isolated scope is visible.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasIsolatedScope")
  public boolean hasIsolatedScope();


  /**
   * Utility class for accessing static features for external.gw.lang.parser.IStackProvider
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
    public static int getSTART_POS()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.IStackProvider.class, "START_POS");
    }

    /**
     * 
     * 
     */
    public static int getSUPER_POS()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.IStackProvider.class, "SUPER_POS");
    }

    /**
     * 
     * 
     */
    public static int getTHIS_POS()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.IStackProvider.class, "THIS_POS");
    }

  }
}
