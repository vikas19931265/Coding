package com.guidewire.ab.plugin.contact;

/**
 * IContactSearchAdapter represents the interface to an external system that performs
a search and retreival of contact data.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IContactSearchAdapter extends gw.plugin.IPlugin
{

  /**
   * Search a contact store, returning contact summaries that match the supplied criteria.
<p>
If the search results is too big and causes a performance issue, the adapter should cap the results and
set ResultsCapped=true in the returned ExtContactSrchResult.  In that happens an appropriate message will be added to the search results UI.
<p>
It is up to the adapter's developer to decide what is the cap based on the performance requirements and resources available.
If more then one page or results is returned (as defined in the RowIterator  in AddressBookSearchLV.pcf - the default is 15)
 and the user is paging to the next page, the searchContacts() will be executed again.
   *
   * @return A non-null structure containing the contact search results.
   * @param criteria Contact search criteria
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "searchContacts")
  public com.guidewire.ab.external.entity.ExtContactSrchResult searchContacts(com.guidewire.ab.external.entity.ContactSearchCriteria criteria) throws java.rmi.RemoteException;

}
