package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * The address of the contact.  Supercedes the separate fields of City, State, and PostalCode.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Address")
  public com.guidewire.ab.external.entity.Address getAddress();

  /**
   * The address of the contact.  Supercedes the separate fields of City, State, and PostalCode.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Address")
  public void setAddress(com.guidewire.ab.external.entity.Address value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Gets the Contact Subtype being searched for, or Contact.TYPE if no subtype is requested.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactIntrinsicType")
  public gw.pl.external.Type getContactIntrinsicType();


  /**
   * Contact class, like Person, Company, and Venue.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactSubtype")
  public com.guidewire.ab.external.typelist.Contact getContactSubtype();

  /**
   * Contact class, like Person, Company, and Venue.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactSubtype")
  public void setContactSubtype(com.guidewire.ab.external.typelist.Contact value);


  /**
   * Gets the source of the contacts to be returned by a search using this criteria object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternalContactSource")
  public external.gw.api.contact.ExternalContactSource getExternalContactSource();


  /**
   * Determines whether this is a search against an external Contact system. If true, then the search will be
made against the <code>IContactSearchAdapter</code> plugin.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternalSearch")
  public boolean isExternalSearch();


  /**
   * Whether or not external search is enabled. True for "picker" searches; false otherwise.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternalSearchEnabled")
  public java.lang.Boolean isExternalSearchEnabled();

  /**
   * Whether or not external search is enabled. True for "picker" searches; false otherwise.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExternalSearchEnabled")
  public void setExternalSearchEnabled(java.lang.Boolean value);


  /**
   * First Name
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FirstName")
  public java.lang.String getFirstName();

  /**
   * First Name
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FirstName")
  public void setFirstName(java.lang.String value);


  /**
   * First name in kanji
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FirstNameKanji")
  public java.lang.String getFirstNameKanji();

  /**
   * First name in kanji
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FirstNameKanji")
  public void setFirstNameKanji(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


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
   * KeywordKanji is the general term for NameKanji (Companies and Places) and LastNameKanji (for Persons)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "KeywordKanji")
  public java.lang.String getKeywordKanji();

  /**
   * KeywordKanji is the general term for NameKanji (Companies and Places) and LastNameKanji (for Persons)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "KeywordKanji")
  public void setKeywordKanji(java.lang.String value);


  /**
   * Match type requirement
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MatchType")
  public com.guidewire.ab.external.typelist.ContactMatchResultType getMatchType();

  /**
   * Match type requirement
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MatchType")
  public void setMatchType(com.guidewire.ab.external.typelist.ContactMatchResultType value);


  /**
   * Field matched against the OfficialIDValue of the OfficialID objects associated with Contacts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OfficialId")
  public java.lang.String getOfficialId();

  /**
   * Field matched against the OfficialIDValue of the OfficialID objects associated with Contacts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OfficialId")
  public void setOfficialId(java.lang.String value);


  /**
   * Matched against Contacts belonging to an Organization (such as of person's employer) matching this name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrganizationName")
  public java.lang.String getOrganizationName();

  /**
   * Matched against Contacts belonging to an Organization (such as of person's employer) matching this name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OrganizationName")
  public void setOrganizationName(java.lang.String value);


  /**
   * Preferred Vendors
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreferredVendors")
  public java.lang.Boolean isPreferredVendors();

  /**
   * Preferred Vendors
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PreferredVendors")
  public void setPreferredVendors(java.lang.Boolean value);


  /**
   * Checks if this search has been set up as a proximity search.
To be true, ProximitySearchParameters must be non-null, and sufficient fields in PSP
will be populated such that the application is able to perform the search.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProximitySearch")
  public boolean isProximitySearch();


  /**
   * The center for a proximity search. Ignored if location fields are set on the Proximity Search Parameters.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProximitySearchCenter")
  public com.guidewire.ab.external.entity.Address getProximitySearchCenter();

  /**
   * The center for a proximity search. Ignored if location fields are set on the Proximity Search Parameters.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProximitySearchCenter")
  public void setProximitySearchCenter(com.guidewire.ab.external.entity.Address value);


  /**
   * The parameters for a proximity search.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProximitySearchParameters")
  public com.guidewire.ab.external.entity.ProximitySearchParameters getProximitySearchParameters();

  /**
   * The parameters for a proximity search.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProximitySearchParameters")
  public void setProximitySearchParameters(com.guidewire.ab.external.entity.ProximitySearchParameters value);


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
   * External search type (external search only)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SearchType")
  public com.guidewire.ab.external.typelist.ContactSearchType getSearchType();

  /**
   * External search type (external search only)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SearchType")
  public void setSearchType(com.guidewire.ab.external.typelist.ContactSearchType value);


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
   * Creates a new empty Proximity Search Center associated with this Contact Search Criteria.
   *
   * @return the Proximity Search Center
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createProximitySearchCenter")
  public com.guidewire.ab.external.entity.Address createProximitySearchCenter();

  /**
   * Creates a new Proximity Search Center associated with this Contact Search Criteria,
and copies the relevant fields from a given Geocodable (typically, an Address) into
the Proximity Search Center.
   *
   * @return the Proximity Search Center
   * @param address a given Geocodable (typically, an Address) to be used as the search center
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createProximitySearchCenter")
  public com.guidewire.ab.external.entity.Address createProximitySearchCenter(com.guidewire.ab.external.entity.Address address);

  /**
   * Creates a new empty Proximity Search Parameters associated with this Contact Search Criteria,
   *
   * @return the Proximity Search Parameters created
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createProximitySearchParams")
  public com.guidewire.ab.external.entity.ProximitySearchParameters createProximitySearchParams();

  /**
   * Creates a new empty Proximity Search Parameters associated with this Contact Search Criteria,
and populates it with the basic information required, using the system-default UnitOfDistance.
   *
   * @return the Proximity Search Parameters created
   * @param isDistanceBased Set for true if a distance based ("search within n miles/km") search; false for an ordinal ("nearest n") search
   * @param number Range in miles/km for distance based searches; number of results to be returned for an ordinal search
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createProximitySearchParams")
  public com.guidewire.ab.external.entity.ProximitySearchParameters createProximitySearchParams(java.lang.Boolean isDistanceBased, java.lang.Integer number);

  /**
   * Creates a new Proximity Search Parameters associated with this Contact Search Criteria,
and populates it with the basic information required.
   *
   * @return the Proximity Search Parameters created
   * @param isDistanceBased Set for true if a distance based ("search within n miles/km") search; false for an ordinal ("nearest n") search
   * @param number Range in miles/km for distance based searches; number of results to be returned for an ordinal search
   * @param unitOfDistance For distance based searches, indicates the unit to be used for the search range; for ordinal searches, indicates what unit should be used for results (UnitOfDistance.TC_KILOMETER or UnitOfDistance.TC_MILE)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createProximitySearchParams")
  public com.guidewire.ab.external.entity.ProximitySearchParameters createProximitySearchParams(java.lang.Boolean isDistanceBased, java.lang.Integer number, com.guidewire.ab.external.typelist.UnitOfDistance unitOfDistance);

  /**
   * Gets the available subtypes that may be searched for, given the required type.
   *
   * @return Array containing available subtypes that may be searched for, given the required type
   * @param requiredContactType contact type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAvailableSubtypes")
  public com.guidewire.ab.external.typelist.Contact[] getAvailableSubtypes(gw.pl.external.Type requiredContactType);

  /**
   * Determines whether this criteria is searching for contacts of the given type.
   *
   * @return true, if criteria is searching for contacts of the given type.
   * @param contactType contact type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isSearchFor")
  public boolean isSearchFor(gw.pl.external.Type contactType);

  /**
   * Creates a new Proximity Search Parameters and Proximity Search center associated with this
Contact Search Criteria, and populates both with the basic information required.
   *
   * @return the Proximity Search Parameters created
   * @param address a given Geocodable (typically, an Address) to be used as the search center
   * @param isDistanceBased Set for true if a distance based ("search within n miles/km") search; false for an ordinal ("nearest n") search
   * @param number Range in miles/km for distance based searches; number of results to be returned for an ordinal search
   * @param unitOfDistance For distance based searches, indicates the unit to be used for the search range; for ordinal searches, indicates what unit should be used for results (UnitOfDistance.TC_KILOMETER or UnitOfDistance.TC_MILE)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setupProximitySearch")
  public com.guidewire.ab.external.entity.ProximitySearchParameters setupProximitySearch(com.guidewire.ab.external.entity.Address address, java.lang.Boolean isDistanceBased, java.lang.Integer number, com.guidewire.ab.external.typelist.UnitOfDistance unitOfDistance);


  /**
   * Utility class for initializing an instance of ContactSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactSearchCriteria.
     */
    public static ContactSearchCriteria newInstance()
    {
      return (ContactSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactSearchCriteria.class);
    }
  }

}
