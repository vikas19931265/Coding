package external.gw.api.webservice.addressbook.contactapi;

/**
 * Used to restrict contact search results to those contacts which have the specified set of tags.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactTagMatcher
{
  /**
   * Return true if this matcher is configured to match all tags in the current list; false means it will match "any" tag
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MatchAllTags")
  public boolean isMatchAllTags();

  /**
   * Return true if this matcher is configured to match all tags in the current list; false means it will match "any" tag
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MatchAllTags")
  public void setMatchAllTags(boolean value);

  /**
   * Return an array containing all the tags to match during search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tags")
  public com.guidewire.ab.external.typelist.ContactTagType[] getTags();


  /**
   * Add the given tag to the list of tags
   *
   * @param tag the tag to add
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addTag")
  public void addTag(com.guidewire.ab.external.typelist.ContactTagType tag);



  /**
   * Remove the given tag from the list of tags
   *
   * @param tag the tag to remove
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeTag")
  public void removeTag(com.guidewire.ab.external.typelist.ContactTagType tag);

}
