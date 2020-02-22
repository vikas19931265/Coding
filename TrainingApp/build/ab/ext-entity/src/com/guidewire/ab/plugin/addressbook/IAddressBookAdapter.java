package com.guidewire.ab.plugin.addressbook;

/**
 * Guidewire application interface to an Address Book.

This plugin has been deprecated.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IAddressBookAdapter extends gw.plugin.IPlugin
{

  /**
   * Searches for a contact that definitively matches the given contact data.
   *
   * @param contactData 
   * @deprecated Since ClaimCenter 8.0 Use findDuplicates() in ContactSystemPlugin.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findDefinitiveMatch")
  public com.guidewire.ab.external.entity.ContactFindMatchResult findDefinitiveMatch(com.guidewire.ab.external.entity.Contact contactData) throws java.rmi.RemoteException;



  /**
   * Searches for all contacts that potentially match the given contact data. Results are specified by the given
SearchResultSpec.
   *
   * @param contactData 
   * @param searchResultSpec 
   * @deprecated Since ClaimCenter 8.0 Use findDuplicates() in ContactSystemPlugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findPotentialMatches")
  public com.guidewire.ab.external.entity.ContactSearchResult findPotentialMatches(com.guidewire.ab.external.entity.Contact contactData, gw.plugin.addressbook.AddressBookRemotableSearchResultSpec searchResultSpec) throws java.rmi.RemoteException;



  /**
   * Looks up the contact with the given Address Book ID. Specifies relationships to include with the given
ContactRelationshipSpec.
   *
   * @param addressBookUId 
   * @param contactRelationshipSpec 
   * @deprecated Since ClaimCenter 8.0 Use retrieveContact() in ContactSystemPlugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "retrieveContact")
  public com.guidewire.ab.external.entity.Contact retrieveContact(java.lang.String addressBookUId, com.guidewire.ab.external.entity.ContactRelationshipSpec contactRelationshipSpec) throws java.rmi.RemoteException;



  /**
   * Retrieves related contacts for a given Contact, for example if the Contact had originally been
retrieved with a restrictive ContactRelationshipSpec. Specifies relationships to include with
the given ContactRelationshipSpec.
   *
   * @return the modified contact.  This must be the same as the Contact provided.
   * @param contact a contact retrieved from an addressbook search.  This contact will populated with all related contacts retrieved from the addressbook.
   * @param contactRelationshipSpec 
   * @deprecated Since ClaimCenter 8.0 Use retrieveRelatedContacts() in ContactSystemPlugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "retrieveRelatedContacts")
  public com.guidewire.ab.external.entity.Contact retrieveRelatedContacts(com.guidewire.ab.external.entity.Contact contact, com.guidewire.ab.external.entity.ContactRelationshipSpec contactRelationshipSpec) throws java.rmi.RemoteException;



  /**
   * Searches for all contacts that match the given search criteria. Results are specified by the given
SearchResultSpec.
   *
   * @param searchCriteria 
   * @param searchResultSpec 
   * @deprecated Since ClaimCenter 8.0 Use searchContacts() in ContactSystemPlugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "searchContact")
  public com.guidewire.ab.external.entity.ContactSearchResult searchContact(com.guidewire.ab.external.entity.ContactSearchCriteria searchCriteria, gw.plugin.addressbook.AddressBookRemotableSearchResultSpec searchResultSpec) throws java.rmi.RemoteException;



  /**
   * Updates (or creates if not already exists) AddressBook Contacts as specified in the UpdateBatch parameter.
   *
   * @param updates the set of update operations to be performed in the address book
   * @param contact the Contact being updated or created
   * @deprecated Since ClaimCenter 8.0 Use updateContact() in ContactSystemPlugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "submitUpdates")
  public com.guidewire.ab.external.entity.ContactUpdateResult submitUpdates(com.guidewire.ab.external.entity.UpdateBatch updates, com.guidewire.ab.external.entity.Contact contact) throws java.rmi.RemoteException;


  /**
   * Utility class for accessing static features for com.guidewire.ab.plugin.addressbook.IAddressBookAdapter
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
    public static java.lang.String getADAPTER_NAME()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.ab.plugin.addressbook.IAddressBookAdapter.class, "ADAPTER_NAME");
    }

  }
}
