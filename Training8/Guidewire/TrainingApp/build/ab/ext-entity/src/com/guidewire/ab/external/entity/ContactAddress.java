package com.guidewire.ab.external.entity;

/**
 * 
      Table linking contacts to addresses. Note that Contacts can also be related to Addresses through
      a direct foreign key/relationship to their Primary Address.<p/>
      This is represented as a many-to-many relationship, although addresses created through the UI will always
      belong uniquely to only one contact.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactAddress extends com.guidewire.ab.external.entity.AddressBookLinkable, com.guidewire.ab.external.entity.CommonContactAddress, com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Associated address. NOTE: when inserting a ContactAddress this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Address")
  public com.guidewire.ab.external.entity.Address getAddress();

  /**
   * Associated address. NOTE: when inserting a ContactAddress this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Address")
  public void setAddress(com.guidewire.ab.external.entity.Address value);


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
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Associated contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.Contact getContact();

  /**
   * Associated contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contact")
  public void setContact(com.guidewire.ab.external.entity.Contact value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * Utility class for initializing an instance of ContactAddress
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactAddress.
     */
    public static ContactAddress newInstance()
    {
      return (ContactAddress) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactAddress.class);
    }
  }

}
