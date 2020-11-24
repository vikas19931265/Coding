package com.guidewire.ab.external.entity;

/**
 * 
      Indicates whether a Contact entity is linkable between a Guidewire application and ContactManager. This is an
      internal system entity.
  
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AddressBookConvertable extends gw.pl.external.entity.Entity
{


  /**
   * Represents the ID of the associated object in Address Book.  Null if the object is not linked to Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressBookUID")
  public java.lang.String getAddressBookUID();

  /**
   * Represents the ID of the associated object in Address Book.  Null if the object is not linked to Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressBookUID")
  public void setAddressBookUID(java.lang.String value);


  /**
   * Gets the Address Book Contact to which this Contact is linked.
Also brings related contacts in primary relationships with the linked contact.
<p/>
Performance note: This operation requires a remote access to the Address Book.
   * @deprecated Since ClaimCenter 8.0, use getLinkedContact() in ContactSystemUtil
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LinkedContact")
  public com.guidewire.ab.external.entity.Contact getLinkedContact();

  /**
   * Determines whether this AddressBookConvertable can link to the given Address Book Contact.
A AddressBookConvertable can link to another Contact if the following conditions are met:
<ul>
<li>The Address Book Contact has an AddressBookUID.</li>
<li>The Address Book Contact, when converted into an AddressBookConvertable, is the same type or is a
subtype of this AddressBookConvertable.</li>
</ul>
   *
   * @param addressBookContact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canLinkTo")
  public boolean canLinkTo(com.guidewire.ab.external.entity.Contact addressBookContact);

  /**
   * Copy data from <code>contact</code> to this <code>AddressBookConvertable</code> object.
   *
   * @return this AddressBookConvertable filled with contact information
   * @param sourceContact 
   * @deprecated Since ClaimCenter 8.0, use syncToContactSystem() in ContactSystemUtil
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copyFromContact")
  public com.guidewire.ab.external.entity.AddressBookConvertable copyFromContact(com.guidewire.ab.external.entity.Contact sourceContact);

  /**
   * Attempts to create a contact in the Address Book that has the same data as this AddressBookConvertable.
   *
   * @param onlyPrimaryRelationships 
   * @deprecated Since ClaimCenter 8.0, use createContact() in ContactSystemPlugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createInAddressBook")
  public void createInAddressBook(boolean onlyPrimaryRelationships);

  /**
   * Attempts to delete the Address Book entry to which this AddressBookConvertable is linked.
   *
   * @deprecated Since ClaimCenter 8.0, no longer available
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "deleteFromAddressBook")
  public void deleteFromAddressBook();

  /**
   * Gets this Contact's Address Book link status.
<p/>
<b>Notice:</b> Executing this method requires going over the wire to the addressbook, so if used in a pcf file it
should only be used in the initialValue of a variable.  For example:
<pre>&lt;Variable name="linkStatus" initialValue="Contact==null ? null : Contact.generateLinkStatus()" recalculateOnRefresh="true"/&gt; </pre>
   *
   * @deprecated Since ClaimCenter 8.0, use generateLinkStatus() in ContactSystemUtil
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "generateLinkStatus")
  public external.gw.api.contact.LinkStatus generateLinkStatus();

  /**
   * Links to the given contact, and syncs, then commits in a bundle.
   *
   * @param contact - the contact to link and sync
   * @deprecated Since ClaimCenter 8.0, use linkContact() in ContactSystemLinkPlugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "linkAndSyncToAB")
  public com.guidewire.ab.external.entity.AddressBookConvertable linkAndSyncToAB(com.guidewire.ab.external.entity.Contact contact);

  /**
   * Links this Contact to the given Address Book Contact.
   *
   * @param addressBookContact 
   * @deprecated Since ClaimCenter 8.0, use linkContact() in ContactSystemLinkPlugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "linkTo")
  public void linkTo(com.guidewire.ab.external.entity.Contact addressBookContact);

  /**
   * Update this AddressBookConvertable from the remote Address Book.
   *
   * @return the synced AddressBookConvertable. Note that this may be a different Java object than this
        AddressBookConvertable. This would happen if the Contact were downcast as part of the sync. Returns null if this
        AddressBookConvertable is not linked to the Address Book.
   * @deprecated Since ClaimCenter 8.0, use syncToContactSystem() in ContactSystemUtil
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "syncToAB")
  public com.guidewire.ab.external.entity.AddressBookConvertable syncToAB();

  /**
   * If the contact is linked and not in sync, update this AddressBookConvertable from the remote Address Book.

This routine is more efficient than calling isLinked() and isSynced() then calling syncToAB().
It will make only one call to AB versus three calls for the other calls.
.
   *
   * @return If updated, the synced AddressBookConvertable. Note that this may be a different Java object than this
        AddressBookConvertable. This would happen if the Contact were downcast as part of the sync. Returns null if this
        AddressBookConvertable is not linked to the Address Book.  If not updated, returns 'this'
   * @deprecated Since ClaimCenter 8.0, use syncToContactSystem() in ContactSystemUtil
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "syncToABIfNeeded")
  public com.guidewire.ab.external.entity.AddressBookConvertable syncToABIfNeeded();

  /**
   * Update this AddressBookConvertable from the remote Address Book without syncing related contacts.
This is primarily used when you have a stub contact which is itself a related contact. When adding that
stub contact to an application you need to sync the contact but you don't want to bring over it's related
contacts as well, which would bring over too many contacts.
   *
   * @return the synced AddressBookConvertable. Note that this may be a different Java object than this
        AddressBookConvertable. This would happen if the Contact were downcast as part of the sync. Returns null if this
        AddressBookConvertable is not linked to the Address Book.
   * @deprecated Since ClaimCenter 8.0, use syncToContactSystem() in ContactSystemUtil with false for syncRelatedContacts parameter
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "syncToABWithoutRelatedContacts")
  public com.guidewire.ab.external.entity.AddressBookConvertable syncToABWithoutRelatedContacts();

  /**
   * Returns the representation of this addressBookConvertable as a Contact.
   *
   * @return version of this as a Contact
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toContact")
  public com.guidewire.ab.external.entity.Contact toContact();

  /**
   * Unlinks this AddressBookConvertable from the Address Book.
This is done by marking this AddressBookConvertable out of sync, and clearing the AddressBookUID
field on every linked sub-object.
   *
   * @deprecated Since ClaimCenter 8.0, use link() in ContactSystemLinkPlugin with null for abuid
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "unlink")
  public void unlink();

  /**
   * Pushes the changes made on this AddressBookConvertable to the Address Book.
Changes are determined by looking up the latest data in the Address Book and diffing it
with the data on this AddressBookConvertable.
   *
   * @param onlyPrimaryRelationships 
   * @deprecated Since ClaimCenter 8.0, use updateContact() in ContactSystemPlugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "updateAddressBook")
  public void updateAddressBook(boolean onlyPrimaryRelationships);


  /**
   * Utility class for initializing an instance of AddressBookConvertable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity AddressBookConvertable.
     */
    public static AddressBookConvertable newInstance()
    {
      return (AddressBookConvertable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(AddressBookConvertable.class);
    }
  }

}
