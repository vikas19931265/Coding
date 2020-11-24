package external.gw.api.contact;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AutocompleteHandler
{

  /**
   * Gets the auto-complete results
   *
   * @return an array of results, never null
   * @param textSoFar text entered to this auto-complete widget so far.
   * @param additionalArgs additionalArgs requested by the PCF configuration of this widget
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getSuggestions")
  public external.gw.api.contact.AutocompleteResult[] getSuggestions(java.lang.String textSoFar, java.lang.Object[] additionalArgs);



  /**
   * Returns true if the last call to {@link #getSuggestions(String, Object[])} did not return
all of the possible suggestions (e.g. due to the suggestion limit).
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "moreResultsExist")
  public boolean moreResultsExist();



  /**
   * Returns true if the autocomplete should wait for a user key press before fetching suggestions.
This can have big performance implications, so it should only return false if there are a small,
fixed number of possible suggestions.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "waitForKeypress")
  public boolean waitForKeypress();


  /**
   * Utility class for accessing static features for external.gw.api.contact.AutocompleteHandler
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
    public static int getSUGGESTION_LIMIT()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.contact.AutocompleteHandler.class, "SUGGESTION_LIMIT");
    }

  }
}
