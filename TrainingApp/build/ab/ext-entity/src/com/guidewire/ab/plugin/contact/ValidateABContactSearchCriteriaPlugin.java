package com.guidewire.ab.plugin.contact;

/**
 * Used to validate the search criteria for ABContact
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ValidateABContactSearchCriteriaPlugin extends gw.plugin.IPlugin
{

  /**
   * 
   *
   * @return A ValidateABContactSearchCriteriaPluginResult
   * @param searchCriteria the search criteria to validate
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateCanSearch")
  public com.guidewire.ab.plugin.contact.ValidateABContactSearchCriteriaPluginResult validateCanSearch(com.guidewire.ab.external.entity.ABContactSearchCriteria searchCriteria);

}
