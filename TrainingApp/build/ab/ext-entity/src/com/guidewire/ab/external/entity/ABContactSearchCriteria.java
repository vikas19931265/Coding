package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
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
   * Adjudicative Domain
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AdjudicativeDomain")
  public com.guidewire.ab.external.typelist.AdjudicativeDomain getAdjudicativeDomain();

  /**
   * Adjudicative Domain
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AdjudicativeDomain")
  public void setAdjudicativeDomain(com.guidewire.ab.external.typelist.AdjudicativeDomain value);


  /**
   * If true, Contacts must have all the tags to match, if false, Contacts must have at least one of the tags to match.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllTagsRequired")
  public java.lang.Boolean isAllTagsRequired();

  /**
   * If true, Contacts must have all the tags to match, if false, Contacts must have at least one of the tags to match.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AllTagsRequired")
  public void setAllTagsRequired(java.lang.Boolean value);


  /**
   * Attorney's specialty
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttorneySpecialty")
  public com.guidewire.ab.external.typelist.LegalSpecialty getAttorneySpecialty();

  /**
   * Attorney's specialty
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AttorneySpecialty")
  public void setAttorneySpecialty(com.guidewire.ab.external.typelist.LegalSpecialty value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * ABContact class, like ABPerson, ABCompany, and ABVenue. NOTE: when inserting a ABContactSearchCriteria this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactSubtype")
  public com.guidewire.ab.external.typelist.ABContact getContactSubtype();

  /**
   * ABContact class, like ABPerson, ABCompany, and ABVenue. NOTE: when inserting a ABContactSearchCriteria this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactSubtype")
  public void setContactSubtype(com.guidewire.ab.external.typelist.ABContact value);


  /**
   * the contact subtype as an intrinsic type
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactSubtypeType")
  public gw.pl.external.Type getContactSubtypeType();


  /**
   * Doctor's specialty
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DoctorSpecialty")
  public com.guidewire.ab.external.typelist.SpecialtyType getDoctorSpecialty();

  /**
   * Doctor's specialty
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DoctorSpecialty")
  public void setDoctorSpecialty(com.guidewire.ab.external.typelist.SpecialtyType value);


  /**
   * Employee ID number. Applies to UserContacts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EmployeeNumber")
  public java.lang.String getEmployeeNumber();

  /**
   * Employee ID number. Applies to UserContacts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EmployeeNumber")
  public void setEmployeeNumber(java.lang.String value);


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
   * First name in kanji.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FirstNameKanji")
  public java.lang.String getFirstNameKanji();

  /**
   * First name in kanji.
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
   * Name/LastName in kanji.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "KeywordKanji")
  public java.lang.String getKeywordKanji();

  /**
   * Name/LastName in kanji.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "KeywordKanji")
  public void setKeywordKanji(java.lang.String value);


  /**
   * Law firm Specialty
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LawFirmSpecialty")
  public com.guidewire.ab.external.typelist.LegalSpecialty getLawFirmSpecialty();

  /**
   * Law firm Specialty
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LawFirmSpecialty")
  public void setLawFirmSpecialty(com.guidewire.ab.external.typelist.LegalSpecialty value);


  /**
   * Medical specialty type
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MedicalOrgSpecialty")
  public com.guidewire.ab.external.typelist.SpecialtyType getMedicalOrgSpecialty();

  /**
   * Medical specialty type
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MedicalOrgSpecialty")
  public void setMedicalOrgSpecialty(com.guidewire.ab.external.typelist.SpecialtyType value);


  /**
   * Name of person's employer
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrganizationName")
  public java.lang.String getOrganizationName();

  /**
   * Name of person's employer
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OrganizationName")
  public void setOrganizationName(java.lang.String value);


  /**
   * Preferred vendors only
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreferredVendors")
  public java.lang.Boolean isPreferredVendors();

  /**
   * Preferred vendors only
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
   * The center for a proximity search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProximitySearchCenter")
  public com.guidewire.ab.external.entity.Address getProximitySearchCenter();

  /**
   * The center for a proximity search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProximitySearchCenter")
  public void setProximitySearchCenter(com.guidewire.ab.external.entity.Address value);


  /**
   * The parameters for a proximity search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProximitySearchParameters")
  public com.guidewire.ab.external.entity.ProximitySearchParameters getProximitySearchParameters();

  /**
   * The parameters for a proximity search
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
   * The criteria for related contacts
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RelatedABContactSearchCriteria")
  public com.guidewire.ab.external.entity.RelatedABContactSearchCriteria getRelatedABContactSearchCriteria();

  /**
   * The criteria for related contacts
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RelatedABContactSearchCriteria")
  public void setRelatedABContactSearchCriteria(com.guidewire.ab.external.entity.RelatedABContactSearchCriteria value);


  /**
   * Minimum Score for returned Contacts
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Score")
  public java.lang.Integer getScore();

  /**
   * Minimum Score for returned Contacts
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Score")
  public void setScore(java.lang.Integer value);


  /**
   * List of ABContactSearchCriteriaSpecialistServices.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SpecialistServices")
  public com.guidewire.ab.external.entity.ABContactSearchCriteriaSpecialistService[] getSpecialistServices();

  /**
   * List of ABContactSearchCriteriaSpecialistServices.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SpecialistServices")
  public void setSpecialistServices(com.guidewire.ab.external.entity.ABContactSearchCriteriaSpecialistService[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TagTypes")
  public com.guidewire.ab.external.typelist.ContactTagType[] getTagTypes();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TagTypes")
  public void setTagTypes(com.guidewire.ab.external.typelist.ContactTagType[] value);


  /**
   * List of ABContactSearchCriteriaTags.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tags")
  public com.guidewire.ab.external.entity.ABContactSearchCriteriaTag[] getTags();

  /**
   * List of ABContactSearchCriteriaTags.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Tags")
  public void setTags(com.guidewire.ab.external.entity.ABContactSearchCriteriaTag[] value);


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
   * true if this search criteria is validly configured for proximity search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValidProximitySearch")
  public boolean isValidProximitySearch();


  /**
   * The contact's vendor availability type for example, available, unavailable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VendorAvailability")
  public com.guidewire.ab.external.typelist.VendorAvailabilityType getVendorAvailability();

  /**
   * The contact's vendor availability type for example, available, unavailable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VendorAvailability")
  public void setVendorAvailability(com.guidewire.ab.external.typelist.VendorAvailabilityType value);


  /**
   * The contact's vendor type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VendorType")
  public com.guidewire.ab.external.typelist.VendorType getVendorType();

  /**
   * The contact's vendor type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VendorType")
  public void setVendorType(com.guidewire.ab.external.typelist.VendorType value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToSpecialistServices")
  public void addToSpecialistServices(com.guidewire.ab.external.entity.ABContactSearchCriteriaSpecialistService element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTags")
  public void addToTags(com.guidewire.ab.external.entity.ABContactSearchCriteriaTag element);

  /**
   * 
   *
   * @return the available subtypes that may be searched for, given the required type.
   * @param requiredContactType the required type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAvailableSubtypes")
  public com.guidewire.ab.external.typelist.ABContact[] getAvailableSubtypes(gw.pl.external.Type requiredContactType);

  /**
   * 
   *
   * @return An IQueryBeanResult of ABContact beans.
   * @param isClearBundle - if true, then the bundle of the ABContactSearchCriteria will be cleared
                     before performing the search so that only the criteria is left in the bundle.
                     Should set this to true if calling from UI because Pebbles will not clear the
                     bundle when user stays on the same page. (See jira CC-28078 for more details)   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearch")
  public external.gw.api.database.IQueryBeanResult performSearch(boolean isClearBundle);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactSearchCriteriaSpecialistService from the SpecialistServices array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSpecialistServices")
  public void removeFromSpecialistServices(com.guidewire.ab.external.entity.ABContactSearchCriteriaSpecialistService element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactSearchCriteriaSpecialistService having id elementID from the SpecialistServices array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSpecialistServices")
  public void removeFromSpecialistServices(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactSearchCriteriaTag from the Tags array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTags")
  public void removeFromTags(com.guidewire.ab.external.entity.ABContactSearchCriteriaTag element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ABContactSearchCriteriaTag having id elementID from the Tags array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTags")
  public void removeFromTags(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of ABContactSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABContactSearchCriteria.
     */
    public static ABContactSearchCriteria newInstance()
    {
      return (ABContactSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABContactSearchCriteria.class);
    }
  }

}
