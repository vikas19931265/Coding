package external.gw.api.contact;

/**
 * PCF interface to an external Contact source.
<p>An <b>external contact source</b> can be either the
{@link com.guidewire.pl.web.addressbook.AddressBookContactSourceImpl Address Book} or a
{@link com.guidewire.pl.web.addressbook.ContactSearchAdapterContactSourceImpl ContactSearchAdapter}.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ExternalContactSource
{

  /**
   * Creates a local copy of the given addressbookContact.
This is used when picking a addressbookContact from the addressbook or the IContactSearchAdapter (ie. external addressbookContact search)
to be added to the local object.
In the case of addressbook, we use the addressbookContact.AddressBookUID to load the full addressbookContact from addressbook.
In the case of IContactSearchAdapter, we just return a copy of the given addressbookContact.
   *
   * @return A fully populated Contact suitable for storing on a local object.
   * @param addressbookContact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createLocal")
  public com.guidewire.ab.external.entity.Contact createLocal(com.guidewire.ab.external.entity.Contact addressbookContact);



  /**
   * Deletes the given contact from the external source.
   *
   * @param contact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "delete")
  public void delete(com.guidewire.ab.external.entity.Contact contact);



  /**
   * Indicates whether the given contact is new with respect to the external contact source.
   *
   * @param contact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isNewContact")
  public boolean isNewContact(com.guidewire.ab.external.entity.Contact contact);



  /**
   * Loads the given partially populated Contact into the current edit context, with a flag to indicate whether to load
all related contacts or just primary relationships.
Loading from ContactSearchAdapter does almost nothing, just returns a cloned version of the parameter.
   *
   * @param contact Partially populated Contact. For loading from AddressBook only the AddressBookUID needs to be populated.
   * @param onlyPrimaryRelationships if set, only load primary contact relationships, rather than all.  Note that unlike "Syncable" this does not set fingerprints.  This is ignored by ContactSearchAdapter
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "loadContact")
  public com.guidewire.ab.external.entity.Contact loadContact(com.guidewire.ab.external.entity.Contact contact, boolean onlyPrimaryRelationships);



  /**
   * Creates a new contact in the current edit context.
   *
   * @return A new non-persistent contact in the current edit context
   * @param newContactType 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "newContact")
  public com.guidewire.ab.external.entity.Contact newContact(gw.pl.external.Type newContactType);



  /**
   * Loads the remaining related contacts into the provided contact, which must be in the current edit context.
   *
   * @param contact (in/out) Partially populated Contact. For loading from AddressBook only the AddressBookUID needs to be populated.  After this method call, this contact should be populated.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateRelatedContacts")
  public void populateRelatedContacts(com.guidewire.ab.external.entity.Contact contact);



  /**
   * Indicates whether this external contact source supports deletes.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "supportsDelete")
  public boolean supportsDelete();



  /**
   * Indicates whether this external contact source supports linking.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "supportsLinking")
  public boolean supportsLinking();



  /**
   * Indicates whether this external contact source supports updates.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "supportsUpdate")
  public boolean supportsUpdate();



  /**
   * Wraps the given partially populated Contact in an ExternalContact, for use with Address Book pages.
   *
   * @param contact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "wrap")
  public external.gw.api.contact.ExternalContact wrap(com.guidewire.ab.external.entity.Contact contact);

}
