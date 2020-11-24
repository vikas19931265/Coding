package com.guidewire.ab.external.entity;

/**
 * Generic contact (either a person or a company).
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContact extends com.guidewire.ab.external.entity.ABLinkable, com.guidewire.ab.external.entity.CommonContact, com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.GlobalContactName, com.guidewire.ab.external.entity.HistoryEventContainer, com.guidewire.ab.external.entity.Retireable, com.guidewire.ab.external.entity.Validatable, gw.pl.external.entity.Entity
{


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
  public com.guidewire.ab.external.entity.ABContactContact[] getAllContactContacts();


  /**
   * Assigned user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedUser")
  public com.guidewire.ab.external.entity.User getAssignedUser();

  /**
   * Assigned user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedUser")
  public void setAssignedUser(com.guidewire.ab.external.entity.User value);


  /**
   * Bank accounts
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BankAccounts")
  public com.guidewire.ab.external.entity.BankAccount[] getBankAccounts();

  /**
   * Bank accounts
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BankAccounts")
  public void setBankAccounts(com.guidewire.ab.external.entity.BankAccount[] value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Buildings
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Buildings_Ext")
  public com.guidewire.ab.external.entity.Building_Ext[] getBuildings_Ext();

  /**
   * Buildings
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Buildings_Ext")
  public void setBuildings_Ext(com.guidewire.ab.external.entity.Building_Ext[] value);


  /**
   * List of categories and their scores, associated with this Review.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CategoryScores")
  public com.guidewire.ab.external.entity.ABContactCategoryScore[] getCategoryScores();

  /**
   * List of categories and their scores, associated with this Review.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CategoryScores")
  public void setCategoryScores(com.guidewire.ab.external.entity.ABContactCategoryScore[] value);


  /**
   * Primary Address City, this is searchColumn for City on Address entity
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CityDenorm")
  public java.lang.String getCityDenorm();


  /**
   * Primary Address City in Kanji, this is searchColumn for CityKanji on Address entity
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CityKanjiDenorm")
  public java.lang.String getCityKanjiDenorm();


  /**
   * CollectionAgency
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CollectionAgency")
  public com.guidewire.ab.external.entity.ABCompany getCollectionAgency();

  /**
   * CollectionAgency
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CollectionAgency")
  public void setCollectionAgency(com.guidewire.ab.external.entity.ABCompany value);


  /**
   * Secondary addresses associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactAddresses")
  public com.guidewire.ab.external.entity.ABContactAddress[] getContactAddresses();

  /**
   * Secondary addresses associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactAddresses")
  public void setContactAddresses(com.guidewire.ab.external.entity.ABContactAddress[] value);


  /**
   * Notes
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactNotes")
  public com.guidewire.ab.external.entity.ContactNote[] getContactNotes();

  /**
   * Notes
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactNotes")
  public void setContactNotes(com.guidewire.ab.external.entity.ContactNote[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Country")
  public com.guidewire.ab.external.typelist.Country getCountry();


  /**
   * Primary Address Country, this is denormalized column for Country on Address entity
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CountryDenorm")
  public com.guidewire.ab.external.typelist.Country getCountryDenorm();


  /**
   * Creation status of this contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateStatus")
  public com.guidewire.ab.external.typelist.ContactCreationApprovalStatus getCreateStatus();

  /**
   * Creation status of this contact
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
   * Electronic Funds Transfer data for the contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EFTRecords")
  public com.guidewire.ab.external.entity.EFTData[] getEFTRecords();

  /**
   * Electronic Funds Transfer data for the contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EFTRecords")
  public void setEFTRecords(com.guidewire.ab.external.entity.EFTData[] value);


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
   * the name of the remote application updating this via remote API call.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternalUpdateApp")
  public java.lang.String getExternalUpdateApp();

  /**
   * the name of the remote application updating this via remote API call.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExternalUpdateApp")
  public void setExternalUpdateApp(java.lang.String value);


  /**
   * the name of the user updating this via remote API call.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternalUpdateUser")
  public java.lang.String getExternalUpdateUser();

  /**
   * the name of the user updating this via remote API call.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExternalUpdateUser")
  public void setExternalUpdateUser(java.lang.String value);


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
   * Financial summary for contact (if contact holds one or more policies)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FinancialSummary")
  public com.guidewire.ab.external.entity.FinancialSummary getFinancialSummary();

  /**
   * Financial summary for contact (if contact holds one or more policies)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FinancialSummary")
  public void setFinancialSummary(com.guidewire.ab.external.entity.FinancialSummary value);


  /**
   * Flag entries
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FlagEntries")
  public com.guidewire.ab.external.entity.FlagEntry[] getFlagEntries();

  /**
   * Flag entries
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FlagEntries")
  public void setFlagEntries(com.guidewire.ab.external.entity.FlagEntry[] value);


  /**
   * Returns whether there are PendingContactUpdates for this ABContact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HasPendingUpdates")
  public java.lang.Boolean isHasPendingUpdates();


  /**
   * Returns true if contact has at least one vendor evaluation
whose status is unverified or pending.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HasUnverifiedEvaluations")
  public boolean isHasUnverifiedEvaluations();


  /**
   * History entries on this contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "History")
  public com.guidewire.ab.external.entity.ContactHistory[] getHistory();

  /**
   * History entries on this contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "History")
  public void setHistory(com.guidewire.ab.external.entity.ContactHistory[] value);


  /**
   * History entries
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HistoryEntries")
  public com.guidewire.ab.external.entity.HistoryEntry[] getHistoryEntries();

  /**
   * History entries
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HistoryEntries")
  public void setHistoryEntries(com.guidewire.ab.external.entity.HistoryEntry[] value);


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
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Returns true if contact has at least one open FlagEntry
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IsFlagged")
  public boolean isIsFlagged();


  /**
   * Has this vendor contact been recommended to external service evaluation companies?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IsVendorRecommended")
  public java.lang.Boolean isIsVendorRecommended();

  /**
   * Has this vendor contact been recommended to external service evaluation companies?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IsVendorRecommended")
  public void setIsVendorRecommended(java.lang.Boolean value);


  /**
   * Keyword is the general term for Name (Companies and Places) and LastName (for Persons)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Keyword")
  public java.lang.String getKeyword();

  /**
   * Keyword is the general term for Name (Companies and Places) and LastName (for Persons)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Keyword")
  public void setKeyword(java.lang.String value);


  /**
   * KeywordKanji is the general term for the Kanji Name (Companies and Places) and LastName (for Persons)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "KeywordKanji")
  public java.lang.String getKeywordKanji();

  /**
   * KeywordKanji is the general term for the Kanji Name (Companies and Places) and LastName (for Persons)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "KeywordKanji")
  public void setKeywordKanji(java.lang.String value);


  /**
   * Date the last legal case report was received
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastLegalCaseReportDate")
  public java.util.Date getLastLegalCaseReportDate();

  /**
   * Date the last legal case report was received
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastLegalCaseReportDate")
  public void setLastLegalCaseReportDate(java.util.Date value);


  /**
   * Status of legal case reports
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LegalCaseReportStatus")
  public com.guidewire.ab.external.typelist.LegalCaseReportStatus getLegalCaseReportStatus();

  /**
   * Status of legal case reports
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LegalCaseReportStatus")
  public void setLegalCaseReportStatus(com.guidewire.ab.external.typelist.LegalCaseReportStatus value);


  /**
   * Legal cases
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LegalCases")
  public com.guidewire.ab.external.entity.LegalCase[] getLegalCases();

  /**
   * Legal cases
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LegalCases")
  public void setLegalCases(com.guidewire.ab.external.entity.LegalCase[] value);


  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LinkID")
  public java.lang.String getLinkID();

  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LinkID")
  public void setLinkID(java.lang.String value);


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Whether this entity has been verified by the VerifyMinimumCriteria batch process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinimumCriteriaVerified")
  public java.lang.Boolean isMinimumCriteriaVerified();

  /**
   * Whether this entity has been verified by the VerifyMinimumCriteria batch process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinimumCriteriaVerified")
  public void setMinimumCriteriaVerified(java.lang.Boolean value);


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
   * PendingContactChanges for which this is the associated ABContact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PendingContactChanges")
  public com.guidewire.ab.external.entity.PendingContactChange[] getPendingContactChanges();

  /**
   * PendingContactChanges for which this is the associated ABContact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PendingContactChanges")
  public void setPendingContactChanges(com.guidewire.ab.external.entity.PendingContactChange[] value);


  /**
   * Primary Address Postal code, this is searchColumn for Postal code on Address entity
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PostalCodeDenorm")
  public java.lang.String getPostalCodeDenorm();


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
   * Does this contact prefer to be contacted via email
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrefersContactByEmail")
  public java.lang.Boolean isPrefersContactByEmail();

  /**
   * Does this contact prefer to be contacted via email
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrefersContactByEmail")
  public void setPrefersContactByEmail(java.lang.Boolean value);


  /**
   * Primary address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryAddress")
  public com.guidewire.ab.external.entity.Address getPrimaryAddress();

  /**
   * Primary address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrimaryAddress")
  public void setPrimaryAddress(com.guidewire.ab.external.entity.Address value);


  /**
   * PrimaryContact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryContact")
  public com.guidewire.ab.external.entity.ABContact getPrimaryContact();

  /**
   * PrimaryContact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrimaryContact")
  public void setPrimaryContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * PrimaryContactFor
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryContactFor")
  public com.guidewire.ab.external.entity.ABContact[] getPrimaryContactFor();


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
   * the value of the Contact's primary phone number.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrimaryPhoneValue")
  public java.lang.String getPrimaryPhoneValue();


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
   * Returns the contact that replaced this contact via the replaceWith method.  Returns null if there
isn't one.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReplacementContact")
  public com.guidewire.ab.external.entity.ABContact getReplacementContact();


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
  public com.guidewire.ab.external.entity.ABContactCategoryScore[] getSortedCategoryScores();


  /**
   * Contacts that point to this contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceRelatedContacts")
  public com.guidewire.ab.external.entity.ABContactContact[] getSourceRelatedContacts();

  /**
   * Contacts that point to this contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceRelatedContacts")
  public void setSourceRelatedContacts(com.guidewire.ab.external.entity.ABContactContact[] value);


  /**
   * Returns the Contact's services.  The list returned is constructed so modifying the returned list
does not modify the contact's services.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SpecialistServices")
  public java.util.List getSpecialistServices();

  /**
   * Returns the Contact's services.  The list returned is constructed so modifying the returned list
does not modify the contact's services.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SpecialistServices")
  public void setSpecialistServices(java.util.List value);


  /**
   * Primary Address State, this is denormalized column for State on Address entity
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StateDenorm")
  public com.guidewire.ab.external.typelist.State getStateDenorm();


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.ABContact getSubtype();


  /**
   * List of ABContactTags.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tags")
  public com.guidewire.ab.external.entity.ABContactTag[] getTags();

  /**
   * List of ABContactTags.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Tags")
  public void setTags(com.guidewire.ab.external.entity.ABContactTag[] value);


  /**
   * Contacts that this Contact points to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetRelatedContacts")
  public com.guidewire.ab.external.entity.ABContactContact[] getTargetRelatedContacts();

  /**
   * Contacts that this Contact points to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetRelatedContacts")
  public void setTargetRelatedContacts(com.guidewire.ab.external.entity.ABContactContact[] value);


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
  public com.guidewire.ab.external.entity.ABCompany getThirdpartyinsurer();

  /**
   * Thirdpartyinsurer
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Thirdpartyinsurer")
  public void setThirdpartyinsurer(com.guidewire.ab.external.entity.ABCompany value);


  /**
   * Flag indicating the score needs to be updated because of new or deleted ReviewSummaries.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateScore")
  public java.lang.Boolean isUpdateScore();

  /**
   * Flag indicating the score needs to be updated because of new or deleted ReviewSummaries.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateScore")
  public void setUpdateScore(java.lang.Boolean value);


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
   * True if the contact is a vendor, i.e. it has the Vendor tag.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Vendor")
  public boolean isVendor();


  /**
   * The availability of a vendor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VendorAvailability")
  public com.guidewire.ab.external.typelist.VendorAvailabilityType getVendorAvailability();

  /**
   * The availability of a vendor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VendorAvailability")
  public void setVendorAvailability(com.guidewire.ab.external.typelist.VendorAvailabilityType value);


  /**
   * Vendor evaluations
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VendorEvaluations")
  public com.guidewire.ab.external.entity.VendorEvaluation[] getVendorEvaluations();

  /**
   * Vendor evaluations
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VendorEvaluations")
  public void setVendorEvaluations(com.guidewire.ab.external.entity.VendorEvaluation[] value);


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
   * ID for profile created by external service evaluation companies
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VendorProfileCode")
  public java.lang.String getVendorProfileCode();

  /**
   * ID for profile created by external service evaluation companies
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VendorProfileCode")
  public void setVendorProfileCode(java.lang.String value);


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
   * Message decribing a vendor's unavailability.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VendorUnavailableMessage")
  public java.lang.String getVendorUnavailableMessage();

  /**
   * Message decribing a vendor's unavailability.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VendorUnavailableMessage")
  public void setVendorUnavailableMessage(java.lang.String value);


  /**
   * Has W-9 form been received
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "W9Received")
  public java.lang.Boolean isW9Received();

  /**
   * Has W-9 form been received
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "W9Received")
  public void setW9Received(java.lang.Boolean value);


  /**
   * W-9 form received date
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "W9ReceivedDate")
  public java.util.Date getW9ReceivedDate();

  /**
   * W-9 form received date
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "W9ReceivedDate")
  public void setW9ReceivedDate(java.util.Date value);


  /**
   * W-9 valid start date
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "W9ValidFrom")
  public java.util.Date getW9ValidFrom();

  /**
   * W-9 valid start date
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "W9ValidFrom")
  public void setW9ValidFrom(java.util.Date value);


  /**
   * W-9 valid to date
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "W9ValidTo")
  public java.util.Date getW9ValidTo();

  /**
   * W-9 valid to date
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "W9ValidTo")
  public void setW9ValidTo(java.util.Date value);


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
   * Adds the given address.  Does nothing if the Address already exists on the
Contact (either as the Primary Address or in the Contact Addresses array).  Adds as
primary if no primary exists.
   *
   * @param address 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAddress")
  public void addAddress(com.guidewire.ab.external.entity.Address address);

  /**
   * Adds the given contact to this contact with the given relationship. Does nothing if the relationship
already exists. Returns a failure message if the Contact could not be added because it violated some relationship
constraint.
   *
   * @param relationship 
   * @param contact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addContactByRelationship")
  public void addContactByRelationship(com.guidewire.ab.external.typelist.ContactBidiRel relationship, com.guidewire.ab.external.entity.ABContact contact) throws java.lang.RuntimeException;

  /**
   * 
   *
   * @param contactContact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addContactContact")
  public void addContactContact(com.guidewire.ab.external.entity.ABContactContact contactContact);

  /**
   * This functions creates a new contact note associated to the ABContact.
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addContactNote")
  public com.guidewire.ab.external.entity.ContactNote addContactNote();

  /**
   * As of ContactManager 7.0, every new contact must have at least one contact tag.
This functionality is not relevant to TrainingApp, so all references to contact
tags have been removed from the UI. This method is used when a new contact is
being created and a default tag is needed (such as the NewContact page's
beforeCommit property).
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addDefaultTagToNewContact")
  public void addDefaultTagToNewContact();

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToBankAccounts")
  public void addToBankAccounts(com.guidewire.ab.external.entity.BankAccount element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToBuildings_Ext")
  public void addToBuildings_Ext(com.guidewire.ab.external.entity.Building_Ext element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToCategoryScores")
  public void addToCategoryScores(com.guidewire.ab.external.entity.ABContactCategoryScore element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToContactAddresses")
  public void addToContactAddresses(com.guidewire.ab.external.entity.ABContactAddress element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToContactNotes")
  public void addToContactNotes(com.guidewire.ab.external.entity.ContactNote element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToEFTRecords")
  public void addToEFTRecords(com.guidewire.ab.external.entity.EFTData element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToFlagEntries")
  public void addToFlagEntries(com.guidewire.ab.external.entity.FlagEntry element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToHistory")
  public void addToHistory(com.guidewire.ab.external.entity.ContactHistory element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToHistoryEntries")
  public void addToHistoryEntries(com.guidewire.ab.external.entity.HistoryEntry element);

  /**
   * null
   *
   * @param element 
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToKeptMergedContactPairs")
  public void addToKeptMergedContactPairs(com.guidewire.ab.external.entity.MergedContactPair element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToLegalCases")
  public void addToLegalCases(com.guidewire.ab.external.entity.LegalCase element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToPendingContactChanges")
  public void addToPendingContactChanges(com.guidewire.ab.external.entity.PendingContactChange element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToSourceRelatedContacts")
  public void addToSourceRelatedContacts(com.guidewire.ab.external.entity.ABContactContact element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTags")
  public void addToTags(com.guidewire.ab.external.entity.ABContactTag element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTargetRelatedContacts")
  public void addToTargetRelatedContacts(com.guidewire.ab.external.entity.ABContactContact element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToVendorEvaluations")
  public void addToVendorEvaluations(com.guidewire.ab.external.entity.VendorEvaluation element);

  /**
   * Clears all categoryscores associated with this contact. Should be used with caution.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearAllCategoryScores")
  public void clearAllCategoryScores();

  /**
   * Shallowly copies and marks a bean as not persisting, i.e. the bean will not be committed.
   *
   * @return The copied and marked bean
   * @param bean The bean to be copied and marked
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copyNonPersisting")
  public <T extends gw.pl.external.entity.Entity> T copyNonPersisting(T bean);

  /**
   * Deeply copies this contact and marks the copy as not persisting, i.e. it will not be committed.
   *
   * @return The copied and marked bean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "deepCopyNonPersisting")
  public com.guidewire.ab.external.entity.ABContact deepCopyNonPersisting();

  /**
   * This functions deletes all addresses associated to a contact except
for the current primary address.
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "deleteSecondaryAddresses")
  public void deleteSecondaryAddresses();

  /**
   * 
   *
   * @param otherContact If <i>null</i> then then delegating to getPossibleBidiRels();
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPossibleBidiRelsToContact")
  public com.guidewire.ab.external.typelist.ContactBidiRel[] getPossibleBidiRelsToContact(com.guidewire.ab.external.entity.ABContact otherContact);

  /**
   * null
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getSortValue")
  public java.lang.String getSortValue();

  /**
   * Make a specified address the primary address.  Old primary address will move to secondary addresses.
Sepcifed address can be new or an existing secondary-address.
Address will be removed from secondary addresses if found.
   *
   * @param address 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makePrimaryAddress")
  public void makePrimaryAddress(com.guidewire.ab.external.entity.Address address);

  /**
   * This function executes two actions. (1) It notes that the current user viewed the
given contact. This is used to determine which contact to display if the Contact
tab is clicked. (2) It creates a history event identifying that the given
contact was viewed by the current user. (This function does nothing
if the RecordInHistory-UserViewsOfContacts script parameter is set to false.)
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "recordContactViewed")
  public void recordContactViewed();

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
  public void removeContactContact(com.guidewire.ab.external.entity.ABContactContact contactContact);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BankAccount from the BankAccounts array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBankAccounts")
  public void removeFromBankAccounts(com.guidewire.ab.external.entity.BankAccount element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BankAccount having id elementID from the BankAccounts array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBankAccounts")
  public void removeFromBankAccounts(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.Building_Ext from the Buildings_Ext array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBuildings_Ext")
  public void removeFromBuildings_Ext(com.guidewire.ab.external.entity.Building_Ext element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.Building_Ext having id elementID from the Buildings_Ext array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBuildings_Ext")
  public void removeFromBuildings_Ext(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactCategoryScore from the CategoryScores array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCategoryScores")
  public void removeFromCategoryScores(com.guidewire.ab.external.entity.ABContactCategoryScore element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactCategoryScore having id elementID from the CategoryScores array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCategoryScores")
  public void removeFromCategoryScores(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactAddress from the ContactAddresses array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromContactAddresses")
  public void removeFromContactAddresses(com.guidewire.ab.external.entity.ABContactAddress element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactAddress having id elementID from the ContactAddresses array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromContactAddresses")
  public void removeFromContactAddresses(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactNote from the ContactNotes array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromContactNotes")
  public void removeFromContactNotes(com.guidewire.ab.external.entity.ContactNote element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactNote having id elementID from the ContactNotes array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromContactNotes")
  public void removeFromContactNotes(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.EFTData from the EFTRecords array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromEFTRecords")
  public void removeFromEFTRecords(com.guidewire.ab.external.entity.EFTData element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.EFTData having id elementID from the EFTRecords array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromEFTRecords")
  public void removeFromEFTRecords(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.FlagEntry from the FlagEntries array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromFlagEntries")
  public void removeFromFlagEntries(com.guidewire.ab.external.entity.FlagEntry element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.FlagEntry having id elementID from the FlagEntries array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromFlagEntries")
  public void removeFromFlagEntries(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactHistory from the History array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHistory")
  public void removeFromHistory(com.guidewire.ab.external.entity.ContactHistory element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactHistory having id elementID from the History array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHistory")
  public void removeFromHistory(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.HistoryEntry from the HistoryEntries array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHistoryEntries")
  public void removeFromHistoryEntries(com.guidewire.ab.external.entity.HistoryEntry element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.HistoryEntry having id elementID from the HistoryEntries array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHistoryEntries")
  public void removeFromHistoryEntries(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.MergedContactPair from the KeptMergedContactPairs array.
   *
   * @param element 
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromKeptMergedContactPairs")
  public void removeFromKeptMergedContactPairs(com.guidewire.ab.external.entity.MergedContactPair element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.MergedContactPair having id elementID from the KeptMergedContactPairs array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromKeptMergedContactPairs")
  public void removeFromKeptMergedContactPairs(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LegalCase from the LegalCases array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromLegalCases")
  public void removeFromLegalCases(com.guidewire.ab.external.entity.LegalCase element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LegalCase having id elementID from the LegalCases array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromLegalCases")
  public void removeFromLegalCases(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.PendingContactChange from the PendingContactChanges array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromPendingContactChanges")
  public void removeFromPendingContactChanges(com.guidewire.ab.external.entity.PendingContactChange element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.PendingContactChange having id elementID from the PendingContactChanges array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromPendingContactChanges")
  public void removeFromPendingContactChanges(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactContact from the SourceRelatedContacts array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSourceRelatedContacts")
  public void removeFromSourceRelatedContacts(com.guidewire.ab.external.entity.ABContactContact element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactContact having id elementID from the SourceRelatedContacts array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSourceRelatedContacts")
  public void removeFromSourceRelatedContacts(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactTag from the Tags array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTags")
  public void removeFromTags(com.guidewire.ab.external.entity.ABContactTag element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactTag having id elementID from the Tags array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTags")
  public void removeFromTags(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactContact from the TargetRelatedContacts array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTargetRelatedContacts")
  public void removeFromTargetRelatedContacts(com.guidewire.ab.external.entity.ABContactContact element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactContact having id elementID from the TargetRelatedContacts array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTargetRelatedContacts")
  public void removeFromTargetRelatedContacts(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.VendorEvaluation from the VendorEvaluations array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromVendorEvaluations")
  public void removeFromVendorEvaluations(com.guidewire.ab.external.entity.VendorEvaluation element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.VendorEvaluation having id elementID from the VendorEvaluations array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromVendorEvaluations")
  public void removeFromVendorEvaluations(gw.pl.external.entity.Key elementID);

  /**
   * Replaces this contact with keptContact.  This causes this contact to be removed and triggers a merge message
rather than a remove message for the replaced contact.
   *
   * @param keptContact the contact that is replacing this one.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "replaceWith")
  public void replaceWith(com.guidewire.ab.external.entity.ABContact keptContact);

  /**
   * 
   *
   * @param categoryScores map of ReviewCategories and scores to set.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAllCategoryScores")
  public void setAllCategoryScores(java.util.Map categoryScores);

  /**
   * 
   *
   * @param callingApp sets a property intended to store the name of the remote application updating this via remote API call.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setExternalUpdateApp")
  public void setExternalUpdateApp_Method(java.lang.String callingApp);

  /**
   * 
   *
   * @param externalUser sets a property intended to store the name of the user updating this via remote API call.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setExternalUpdateUser")
  public void setExternalUpdateUser_Method(java.lang.String externalUser);

  /**
   * Sets The contact's services
   *
   * @param services The Contact's services
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setSpecialistServices")
  public void setSpecialistServices_Method(java.util.List services);

  /**
   * 
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "updateScores")
  public void updateScores();


  /**
   * Utility class for initializing an instance of ABContact
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABContact.
     */
    public static ABContact newInstance()
    {
      return (ABContact) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABContact.class);
    }
  }

}
