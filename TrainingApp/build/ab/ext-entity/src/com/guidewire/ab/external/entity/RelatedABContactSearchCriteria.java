package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface RelatedABContactSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


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
   * ABContact class, like ABPerson, ABCompany, and ABVenue. NOTE: when inserting a RelatedABContactSearchCriteria this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactSubtype")
  public com.guidewire.ab.external.typelist.ABContact getContactSubtype();

  /**
   * ABContact class, like ABPerson, ABCompany, and ABVenue. NOTE: when inserting a RelatedABContactSearchCriteria this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactSubtype")
  public void setContactSubtype(com.guidewire.ab.external.typelist.ABContact value);


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
   * The related contact, if known.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RelatedContact")
  public com.guidewire.ab.external.entity.ABContact getRelatedContact();

  /**
   * The related contact, if known.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RelatedContact")
  public void setRelatedContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * Role of related contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RoleOfRelatedContact")
  public com.guidewire.ab.external.typelist.ContactBidiRel getRoleOfRelatedContact();

  /**
   * Role of related contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RoleOfRelatedContact")
  public void setRoleOfRelatedContact(com.guidewire.ab.external.typelist.ContactBidiRel value);


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
   * Utility class for initializing an instance of RelatedABContactSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity RelatedABContactSearchCriteria.
     */
    public static RelatedABContactSearchCriteria newInstance()
    {
      return (RelatedABContactSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(RelatedABContactSearchCriteria.class);
    }
  }

}
