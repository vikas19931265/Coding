package external.gw.api.contact;

/**
 * Represents a contact that is managed by an external source.
An <i>External Source</i> of contacts can be either the AddressBookPlugin or a ContactSearchAdapter.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ExternalContact
{
  /**
   * Returns the contact this references.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.Contact getContact();

  /**
   * Either a {@link com.guidewire.pl.web.addressbook.AddressBookContactSourceImpl AddressBookContactSourceImpl}
or a {@link com.guidewire.pl.web.addressbook.ContactSearchAdapterContactSourceImpl ContactSearchAdapterContactSourceImpl}.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Source")
  public external.gw.api.contact.ExternalContactSource getSource();
}
