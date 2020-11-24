package external.gw.api.contact;

/**
 * Holds an autocomplete suggestion, typically displayed in a dropdown below the field
when the user has entered the first few characters of a field value.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AutocompleteResult
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DisplayText")
  public java.lang.String getDisplayText();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Terminal")
  public boolean isTerminal();


  /**
   * Suggestion text that appears in the dropdown
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Text")
  public java.lang.String getText();


  /**
   * Utility class for initializing an instance of external.gw.api.contact.AutocompleteResult
   */
  public static class CONSTRUCT
  {

  }
}
