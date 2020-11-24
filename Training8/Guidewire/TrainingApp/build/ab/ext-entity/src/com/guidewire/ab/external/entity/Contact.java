package com.guidewire.ab.external.entity;

/**
 * 
        Represents a generic contact like a person or a business. The Contact is a primary object in the
        ClaimCenter system that is used in the management of your company's vendors and the
        participants in a Claim. Contact is an abstract supertype with subtypes such as Person, Company, and Place.
        Guidewire provides an initial hierarchy of Contact types that you can extend.
        From a Contact entity you can reach the expected Contact data such as physical address, phone, and fax
        information. (In general, only the Primary Address is used for location-based functionality like
        Assignment and Geocoding/Proximity Search.) Contact and its subtypes can also contain management-related
        information such as social security number, tax ID, organization type , and so forth.
        Within ClaimCenter, users create Contacts that are associated only with a particular Claim. For example,
        an injured party is a typical claim contact. ClaimCenter does not attempt to determine if a contact
        associated with one claim appears elsewhere on another claim. Thus, any claim contact that users create,
        like an auto body shop, can be a duplicate of one or more other claim contacts associated with different
        claims.
        If ClaimCenter is integrated with Guidewire's ContactManager application, your users can create contacts
        and then access them centrally through the linking feature.Your company can have both centrally
        managed contacts, such as a vendor business, and locally managed contacts, such as an injured
        party.
        To support this behavior, ContactManager and ClaimCenter have matching hierarchies of Contact
        entities, which they can keep synchronized. So, for example, an extension made to a ClaimCenter Contact
        entity should also be made to a ContactManager ABContact entity. See the Contact Management Guide
        for more information about the integration between ClaimCenter and ContactManager.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Contact extends com.guidewire.ab.external.entity.AddressBookConvertable, com.guidewire.ab.external.entity.CommonContact, com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.GlobalContactName, com.guidewire.ab.external.entity.Retireable, com.guidewire.ab.external.entity.Validatable, external.gw.api.contact.ContactLifecycle, external.gw.api.contact.ContactMinimalTags, gw.pl.external.entity.Entity
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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressOwner")
  public external.gw.api.address.AbstractAddressOwner getAddressOwner();


  /**
   * Gets all the Contact's Addresses. Includes the primary Address and secondary Addresses.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllAddresses")
  public com.guidewire.ab.external.entity.Address[] getAllAddresses();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllContactContacts")
  public com.guidewire.ab.external.entity.ContactContact[] getAllContactContacts();


  /**
   * A status code to indicate whether this entity allows auto-sync or not. Null means disallow.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutoSync")
  public com.guidewire.ab.external.typelist.AutoSync getAutoSync();

  /**
   * A status code to indicate whether this entity allows auto-sync or not. Null means disallow.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AutoSync")
  public void setAutoSync(com.guidewire.ab.external.typelist.AutoSync value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BureauIDOfficialID")
  public java.lang.String getBureauIDOfficialID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BureauIDOfficialID")
  public void setBureauIDOfficialID(java.lang.String value);


  /**
   * List of categories and their average scores, associated with this Contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CategoryScores")
  public com.guidewire.ab.external.entity.ContactCategoryScore[] getCategoryScores();

  /**
   * List of categories and their average scores, associated with this Contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CategoryScores")
  public void setCategoryScores(com.guidewire.ab.external.entity.ContactCategoryScore[] value);


  /**
   * CollectionAgency
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CollectionAgency")
  public com.guidewire.ab.external.entity.Company getCollectionAgency();

  /**
   * CollectionAgency
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CollectionAgency")
  public void setCollectionAgency(com.guidewire.ab.external.entity.Company value);


  /**
   * Returns this Contact as a Company
   * @deprecated Use instead: ( obj typeis Company ? obj : null )
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Company")
  public com.guidewire.ab.external.entity.Company getCompany();


  /**
   * Returns this Contact as a CompanyVendor
   * @deprecated Use instead: ( obj typeis CompanyVendor ? obj : null )
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CompanyVendor")
  public com.guidewire.ab.external.entity.CompanyVendor getCompanyVendor();


  /**
   * Secondary addresses associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactAddresses")
  public com.guidewire.ab.external.entity.ContactAddress[] getContactAddresses();

  /**
   * Secondary addresses associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactAddresses")
  public void setContactAddresses(com.guidewire.ab.external.entity.ContactAddress[] value);


  /**
   * Retreives the company from a contact.  If the contact itself is a company, returns null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactCompany")
  public com.guidewire.ab.external.entity.Company getContactCompany();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Country")
  public com.guidewire.ab.external.typelist.Country getCountry();


  /**
   * Returns the create status of the contact from Contact Manager
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateStatus")
  public com.guidewire.ab.external.typelist.ContactCreationApprovalStatus getCreateStatus();

  /**
   * Returns the create status of the contact from Contact Manager
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CreateStatus")
  public void setCreateStatus(com.guidewire.ab.external.typelist.ContactCreationApprovalStatus value);


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DOLIDOfficialID")
  public java.lang.String getDOLIDOfficialID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DOLIDOfficialID")
  public void setDOLIDOfficialID(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DUNSOfficialID")
  public java.lang.String getDUNSOfficialID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DUNSOfficialID")
  public void setDUNSOfficialID(java.lang.String value);


  /**
   * Primary email address associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EmailAddress1")
  public java.lang.String getEmailAddress1();

  /**
   * Primary email address associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EmailAddress1")
  public void setEmailAddress1(java.lang.String value);


  /**
   * Secondary email address associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EmailAddress2")
  public java.lang.String getEmailAddress2();

  /**
   * Secondary email address associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EmailAddress2")
  public void setEmailAddress2(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FEINOfficialID")
  public java.lang.String getFEINOfficialID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FEINOfficialID")
  public void setFEINOfficialID(java.lang.String value);


  /**
   * Fax number associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FaxPhone")
  public java.lang.String getFaxPhone();

  /**
   * Fax number associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FaxPhone")
  public void setFaxPhone(java.lang.String value);


  /**
   * Fax phone country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FaxPhoneCountry")
  public com.guidewire.ab.external.typelist.PhoneCountryCode getFaxPhoneCountry();

  /**
   * Fax phone country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FaxPhoneCountry")
  public void setFaxPhoneCountry(com.guidewire.ab.external.typelist.PhoneCountryCode value);


  /**
   * Fax phone extension.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FaxPhoneExtension")
  public java.lang.String getFaxPhoneExtension();

  /**
   * Fax phone extension.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FaxPhoneExtension")
  public void setFaxPhoneExtension(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FaxPhoneValue")
  public java.lang.String getFaxPhoneValue();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FaxPhoneValueIntl")
  public java.lang.String getFaxPhoneValueIntl();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GWFaxPhone")
  public external.gw.api.util.phone.GWPhoneNumber getGWFaxPhone();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GWFaxPhone")
  public void setGWFaxPhone(external.gw.api.util.phone.GWPhoneNumber value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GWHomePhone")
  public external.gw.api.util.phone.GWPhoneNumber getGWHomePhone();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GWHomePhone")
  public void setGWHomePhone(external.gw.api.util.phone.GWPhoneNumber value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GWWorkPhone")
  public external.gw.api.util.phone.GWPhoneNumber getGWWorkPhone();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GWWorkPhone")
  public void setGWWorkPhone(external.gw.api.util.phone.GWPhoneNumber value);


  /**
   * Returns whether contact has pending updates as reported by Contact Manager
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HasPendingUpdate")
  public java.lang.Boolean isHasPendingUpdate();


  /**
   * Home phone number associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HomePhone")
  public java.lang.String getHomePhone();

  /**
   * Home phone number associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HomePhone")
  public void setHomePhone(java.lang.String value);


  /**
   * Home phone country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HomePhoneCountry")
  public com.guidewire.ab.external.typelist.PhoneCountryCode getHomePhoneCountry();

  /**
   * Home phone country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HomePhoneCountry")
  public void setHomePhoneCountry(com.guidewire.ab.external.typelist.PhoneCountryCode value);


  /**
   * Home phone extension.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HomePhoneExtension")
  public java.lang.String getHomePhoneExtension();

  /**
   * Home phone extension.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HomePhoneExtension")
  public void setHomePhoneExtension(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HomePhoneValue")
  public java.lang.String getHomePhoneValue();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HomePhoneValueIntl")
  public java.lang.String getHomePhoneValueIntl();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Returns this Contact as a LegalVenue
   * @deprecated Use instead: ( obj typeis LegalVenue ? obj : null )
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LegalVenue")
  public com.guidewire.ab.external.entity.LegalVenue getLegalVenue();


  /**
   * true if the contact is linked to the address book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Linked")
  public boolean isLinked();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * This field is deprecated. It was formerly used to determine whether related contacts should be loaded from the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadRelatedContacts")
  public java.lang.Boolean isLoadRelatedContacts();

  /**
   * This field is deprecated. It was formerly used to determine whether related contacts should be loaded from the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadRelatedContacts")
  public void setLoadRelatedContacts(java.lang.Boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NCCIIDOfficialID")
  public java.lang.String getNCCIIDOfficialID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NCCIIDOfficialID")
  public void setNCCIIDOfficialID(java.lang.String value);


  /**
   * This contact's name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * This contact's name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * This contact's name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NameKanji")
  public java.lang.String getNameKanji();

  /**
   * This contact's name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NameKanji")
  public void setNameKanji(java.lang.String value);


  /**
   * Notes on this contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Notes")
  public java.lang.String getNotes();

  /**
   * Notes on this contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Notes")
  public void setNotes(java.lang.String value);


  /**
   * TaxIDs associated with this contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OfficialIDs")
  public com.guidewire.ab.external.entity.OfficialID[] getOfficialIDs();

  /**
   * TaxIDs associated with this contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OfficialIDs")
  public void setOfficialIDs(com.guidewire.ab.external.entity.OfficialID[] value);


  /**
   * Returns the PrimaryLanguage if it is not null, else the default LanguageType for the application
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrInferPrimaryLanguage")
  public com.guidewire.ab.external.typelist.LanguageType getOrInferPrimaryLanguage();


  /**
   * Returns the original values XML as an XMLElement
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OriginalValuesXMLElement")
  public external.gw.xml.XmlElement getOriginalValuesXMLElement();


  /**
   * Returns this Contact as a Person
   * @deprecated Use instead: ( obj typeis Person ? obj : null )
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Person")
  public com.guidewire.ab.external.entity.Person getPerson();


  /**
   * Returns this Contact as a PersonVendor
   * @deprecated Use instead: ( obj typeis PersonVendor ? obj : null )
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PersonVendor")
  public com.guidewire.ab.external.entity.PersonVendor getPersonVendor();


  /**
   * Returns this Contact as a Place
   * @deprecated Use instead: ( obj typeis Place ? obj : null )
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Place")
  public com.guidewire.ab.external.entity.Place getPlace();


  /**
   * Whether the vendor is a preferred vendor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Preferred")
  public java.lang.Boolean isPreferred();

  /**
   * Whether the vendor is a preferred vendor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Preferred")
  public void setPreferred(java.lang.Boolean value);


  /**
   * The contact's preferred currency.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreferredCurrency")
  public com.guidewire.ab.external.typelist.Currency getPreferredCurrency();

  /**
   * The contact's preferred currency.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PreferredCurrency")
  public void setPreferredCurrency(com.guidewire.ab.external.typelist.Currency value);


  /**
   * Primary address associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryAddress")
  public com.guidewire.ab.external.entity.Address getPrimaryAddress();

  /**
   * Primary address associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrimaryAddress")
  public void setPrimaryAddress(com.guidewire.ab.external.entity.Address value);


  /**
   * Returns the display value for this Contact's primary address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryAddressDisplayValue")
  public java.lang.String getPrimaryAddressDisplayValue();


  /**
   * PrimaryContact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryContact")
  public com.guidewire.ab.external.entity.Contact getPrimaryContact();

  /**
   * PrimaryContact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrimaryContact")
  public void setPrimaryContact(com.guidewire.ab.external.entity.Contact value);


  /**
   * PrimaryContactFor
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryContactFor")
  public com.guidewire.ab.external.entity.Contact[] getPrimaryContactFor();


  /**
   * The account's preferred language
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryLanguage")
  public com.guidewire.ab.external.typelist.LanguageType getPrimaryLanguage();

  /**
   * The account's preferred language
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrimaryLanguage")
  public void setPrimaryLanguage(com.guidewire.ab.external.typelist.LanguageType value);


  /**
   * The account's preferred locale
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryLocale")
  public com.guidewire.ab.external.typelist.LocaleType getPrimaryLocale();

  /**
   * The account's preferred locale
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrimaryLocale")
  public void setPrimaryLocale(com.guidewire.ab.external.typelist.LocaleType value);


  /**
   * Primary phone number type for the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryPhone")
  public com.guidewire.ab.external.typelist.PrimaryPhoneType getPrimaryPhone();

  /**
   * Primary phone number type for the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrimaryPhone")
  public void setPrimaryPhone(com.guidewire.ab.external.typelist.PrimaryPhoneType value);


  /**
   * Gets the value of the Contact's primary phone number.
<p/>
Limitation: This method is not extendable at this time.  It means that if a customer extends the
PrimaryPhone typelist, for example adding "parents phone number", they cannot make this method return the
parents number.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryPhoneValue")
  public java.lang.String getPrimaryPhoneValue();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryPhoneValueIntl")
  public java.lang.String getPrimaryPhoneValueIntl();


  /**
   * Returns the primary value used for sorting contact available to list views as sort criterion.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimarySortValue")
  public java.lang.String getPrimarySortValue();


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
   * Returns the quaternary (4th) value used for sorting contact available to list views as sort criterion.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QuaternarySortValue")
  public java.lang.String getQuaternarySortValue();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SSNOfficialID")
  public java.lang.String getSSNOfficialID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SSNOfficialID")
  public void setSSNOfficialID(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "STAXOfficialID")
  public java.lang.String getSTAXOfficialID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "STAXOfficialID")
  public void setSTAXOfficialID(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "STUNOfficialID")
  public java.lang.String getSTUNOfficialID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "STUNOfficialID")
  public void setSTUNOfficialID(java.lang.String value);


  /**
   * Overall review Score for this Contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Score")
  public java.lang.Integer getScore();

  /**
   * Overall review Score for this Contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Score")
  public void setScore(java.lang.Integer value);


  /**
   * Gets all the Contact's secondary Addresses.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SecondaryAddresses")
  public com.guidewire.ab.external.entity.Address[] getSecondaryAddresses();


  /**
   * Returns the secondary value used for sorting contact available to list views as sort criterion.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SecondarySortValue")
  public java.lang.String getSecondarySortValue();


  /**
   * List of categories associated with this ABContact and their scores.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SortedCategoryScores")
  public com.guidewire.ab.external.entity.ContactCategoryScore[] getSortedCategoryScores();


  /**
   * Contacts that point to this contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceRelatedContacts")
  public com.guidewire.ab.external.entity.ContactContact[] getSourceRelatedContacts();

  /**
   * Contacts that point to this contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceRelatedContacts")
  public void setSourceRelatedContacts(com.guidewire.ab.external.entity.ContactContact[] value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.Contact getSubtype();


  /**
   * true if the contact is synced to the address book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Synced")
  public boolean isSynced();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TUNSOfficialID")
  public java.lang.String getTUNSOfficialID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TUNSOfficialID")
  public void setTUNSOfficialID(java.lang.String value);


  /**
   * List of ContactTags.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tags")
  public com.guidewire.ab.external.entity.ContactTag[] getTags();

  /**
   * List of ContactTags.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Tags")
  public void setTags(com.guidewire.ab.external.entity.ContactTag[] value);


  /**
   * Contacts that this Contact points to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetRelatedContacts")
  public com.guidewire.ab.external.entity.ContactContact[] getTargetRelatedContacts();

  /**
   * Contacts that this Contact points to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetRelatedContacts")
  public void setTargetRelatedContacts(com.guidewire.ab.external.entity.ContactContact[] value);


  /**
   * Tax ID for the contact (SSN or EIN).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TaxID")
  public java.lang.String getTaxID();

  /**
   * Tax ID for the contact (SSN or EIN).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TaxID")
  public void setTaxID(java.lang.String value);


  /**
   * Status of the contact's tax ID; whether it is known or unknown.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TaxStatus")
  public com.guidewire.ab.external.typelist.TaxStatus getTaxStatus();

  /**
   * Status of the contact's tax ID; whether it is known or unknown.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TaxStatus")
  public void setTaxStatus(com.guidewire.ab.external.typelist.TaxStatus value);


  /**
   * Returns the tertiary (3rd) value used for sorting contact available to list views as sort criterion.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TertiarySortValue")
  public java.lang.String getTertiarySortValue();


  /**
   * Thirdpartyinsurer
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Thirdpartyinsurer")
  public com.guidewire.ab.external.entity.Company getThirdpartyinsurer();

  /**
   * Thirdpartyinsurer
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Thirdpartyinsurer")
  public void setThirdpartyinsurer(com.guidewire.ab.external.entity.Company value);


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * Returns this Contact as a UserContact
   * @deprecated Use instead: ( obj typeis UserContact ? obj : null )
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UserContact")
  public com.guidewire.ab.external.entity.UserContact getUserContact();


  /**
   * Validation level that this object passed (if any) before it was stored.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValidationLevel")
  public com.guidewire.ab.external.typelist.ValidationLevel getValidationLevel();

  /**
   * Validation level that this object passed (if any) before it was stored.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ValidationLevel")
  public void setValidationLevel(com.guidewire.ab.external.typelist.ValidationLevel value);


  /**
   * Vendor number for the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VendorNumber")
  public java.lang.String getVendorNumber();

  /**
   * Vendor number for the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VendorNumber")
  public void setVendorNumber(java.lang.String value);


  /**
   * The company's vendor type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VendorType")
  public com.guidewire.ab.external.typelist.VendorType getVendorType();

  /**
   * The company's vendor type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VendorType")
  public void setVendorType(com.guidewire.ab.external.typelist.VendorType value);


  /**
   * The contact's backup withholding rate, or null if backup withholding is not required or is not known to be required.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WithholdingRate")
  public java.math.BigDecimal getWithholdingRate();

  /**
   * The contact's backup withholding rate, or null if backup withholding is not required or is not known to be required.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WithholdingRate")
  public void setWithholdingRate(java.math.BigDecimal value);


  /**
   * Business phone number associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkPhone")
  public java.lang.String getWorkPhone();

  /**
   * Business phone number associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkPhone")
  public void setWorkPhone(java.lang.String value);


  /**
   * Work phone country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkPhoneCountry")
  public com.guidewire.ab.external.typelist.PhoneCountryCode getWorkPhoneCountry();

  /**
   * Work phone country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkPhoneCountry")
  public void setWorkPhoneCountry(com.guidewire.ab.external.typelist.PhoneCountryCode value);


  /**
   * Business phone extension.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkPhoneExtension")
  public java.lang.String getWorkPhoneExtension();

  /**
   * Business phone extension.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkPhoneExtension")
  public void setWorkPhoneExtension(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkPhoneValue")
  public java.lang.String getWorkPhoneValue();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkPhoneValueIntl")
  public java.lang.String getWorkPhoneValueIntl();

  /**
   * Adds the given address.  Does nothing if the Address already exists on the
Contact (either as the Primary Address or in the Contact Addresses array).  Adds as
primary if no primary exists.
   *
   * @param address 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAddress")
  public void addAddress(com.guidewire.ab.external.entity.Address address);

  /**
   * 
   *
   * @param contactContact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addContactContact")
  public void addContactContact(com.guidewire.ab.external.entity.ContactContact contactContact);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToCategoryScores")
  public void addToCategoryScores(com.guidewire.ab.external.entity.ContactCategoryScore element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToContactAddresses")
  public void addToContactAddresses(com.guidewire.ab.external.entity.ContactAddress element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToOfficialIDs")
  public void addToOfficialIDs(com.guidewire.ab.external.entity.OfficialID element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToSourceRelatedContacts")
  public void addToSourceRelatedContacts(com.guidewire.ab.external.entity.ContactContact element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTags")
  public void addToTags(com.guidewire.ab.external.entity.ContactTag element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTargetRelatedContacts")
  public void addToTargetRelatedContacts(com.guidewire.ab.external.entity.ContactContact element);

  /**
   * Finds potential duplicates in the Address Book for this contact.
   *
   * @return a QueryProcessor containing potential duplicates, if any
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findPotentialDuplicates")
  public external.gw.api.database.IQueryBeanResult findPotentialDuplicates();

  /**
   * 
   *
   * @param relationship 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getContactContactsByRelationship")
  public com.guidewire.ab.external.entity.ContactContact[] getContactContactsByRelationship(com.guidewire.ab.external.typelist.ContactBidiRel relationship);

  /**
   * Get official id by type (supports typinfo for XYZOfficialID) works only for non-state specific ids.
   *
   * @return the corresponding officialid
   * @param type type to retrieve
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOfficialID")
  public java.lang.String getOfficialID(com.guidewire.ab.external.typelist.OfficialIDType type);

  /**
   * Get official id by state and type.
   *
   * @return the corresponding officialid
   * @param type - which type of id (fein etc)
   * @param state - applying in which state (for per state types), use null if not state specific
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOfficialIDByTypeAndState")
  public com.guidewire.ab.external.entity.OfficialID getOfficialIDByTypeAndState(com.guidewire.ab.external.typelist.OfficialIDType type, com.guidewire.ab.external.typelist.Jurisdiction state);

  /**
   * 
   *
   * @param otherContact If <i>null</i> then then delegating to getPossibleBidiRels();
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPossibleBidiRelsToContact")
  public com.guidewire.ab.external.typelist.ContactBidiRel[] getPossibleBidiRelsToContact(com.guidewire.ab.external.entity.Contact otherContact);

  /**
   * Links this contact to the given contact. The given contact must have a valid AddressBookUID and be of a type
compatible with this contact.
   *
   * @param addressBookContact the contact to which to link this contact
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "link")
  public void link(com.guidewire.ab.external.entity.Contact addressBookContact);

  /**
   * Makes the given Address the primary Address. The previous primary Address, if any, is
added to the secondary Addresses. If the Address existed in secondary Addresses, it is
removed from that array.
   *
   * @param address 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makePrimaryAddress")
  public void makePrimaryAddress(com.guidewire.ab.external.entity.Address address);

  /**
   * Removes the given Address from the Contact. Does nothing if the
Contact does not have the given Address.
   *
   * @param address 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeAddress")
  public void removeAddress(com.guidewire.ab.external.entity.Address address);

  /**
   * 
   *
   * @param contactContact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeContactContact")
  public void removeContactContact(com.guidewire.ab.external.entity.ContactContact contactContact);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactCategoryScore from the CategoryScores array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCategoryScores")
  public void removeFromCategoryScores(com.guidewire.ab.external.entity.ContactCategoryScore element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactCategoryScore having id elementID from the CategoryScores array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCategoryScores")
  public void removeFromCategoryScores(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactAddress from the ContactAddresses array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromContactAddresses")
  public void removeFromContactAddresses(com.guidewire.ab.external.entity.ContactAddress element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactAddress having id elementID from the ContactAddresses array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromContactAddresses")
  public void removeFromContactAddresses(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.OfficialID from the OfficialIDs array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromOfficialIDs")
  public void removeFromOfficialIDs(com.guidewire.ab.external.entity.OfficialID element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.OfficialID having id elementID from the OfficialIDs array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromOfficialIDs")
  public void removeFromOfficialIDs(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactContact from the SourceRelatedContacts array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSourceRelatedContacts")
  public void removeFromSourceRelatedContacts(com.guidewire.ab.external.entity.ContactContact element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactContact having id elementID from the SourceRelatedContacts array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSourceRelatedContacts")
  public void removeFromSourceRelatedContacts(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactTag from the Tags array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTags")
  public void removeFromTags(com.guidewire.ab.external.entity.ContactTag element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactTag having id elementID from the Tags array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTags")
  public void removeFromTags(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactContact from the TargetRelatedContacts array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTargetRelatedContacts")
  public void removeFromTargetRelatedContacts(com.guidewire.ab.external.entity.ContactContact element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactContact having id elementID from the TargetRelatedContacts array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTargetRelatedContacts")
  public void removeFromTargetRelatedContacts(gw.pl.external.entity.Key elementID);

  /**
   * Sets the contact's creation approval status.  For internal use only.
   *
   * @param status the create status of this contact
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setCreateStatus")
  public void setCreateStatus_Method(com.guidewire.ab.external.typelist.ContactCreationApprovalStatus status);

  /**
   * Sets the official id by type.  Works only for non-state specific ids.
   *
   * @param type - Official id type
   * @param value - updated value
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setOfficialID")
  public void setOfficialID(com.guidewire.ab.external.typelist.OfficialIDType type, java.lang.String value);

  /**
   * Sets the original values xml from the xml element
   *
   * @param originalValuesXML the original values xml
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setOriginalValuesXML")
  public void setOriginalValuesXML(external.gw.xml.XmlElement originalValuesXML);


  /**
   * Utility class for initializing an instance of Contact
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Contact.
     */
    public static Contact newInstance()
    {
      return (Contact) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Contact.class);
    }
  }

}
