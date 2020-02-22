package com.guidewire.ab.external.entity;

/**
 * 
        Represents a person as a primary subtype of Contact.<p/>
        Person extends Contact with additional information about individuals that is not applicable to companies or
        places.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Person extends com.guidewire.ab.external.entity.Contact, com.guidewire.ab.external.entity.GlobalPersonName
{


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
   * Mobile phone number associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CellPhone")
  public java.lang.String getCellPhone();

  /**
   * Mobile phone number associated with the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CellPhone")
  public void setCellPhone(java.lang.String value);


  /**
   * Mobile phone country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CellPhoneCountry")
  public com.guidewire.ab.external.typelist.PhoneCountryCode getCellPhoneCountry();

  /**
   * Mobile phone country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CellPhoneCountry")
  public void setCellPhoneCountry(com.guidewire.ab.external.typelist.PhoneCountryCode value);


  /**
   * Mobile phone extension.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CellPhoneExtension")
  public java.lang.String getCellPhoneExtension();

  /**
   * Mobile phone extension.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CellPhoneExtension")
  public void setCellPhoneExtension(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CellPhoneValue")
  public java.lang.String getCellPhoneValue();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CellPhoneValueIntl")
  public java.lang.String getCellPhoneValueIntl();


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
   * Date of birth.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateOfBirth")
  public java.util.Date getDateOfBirth();

  /**
   * Date of birth.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateOfBirth")
  public void setDateOfBirth(java.util.Date value);


  /**
   * Employer
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Employer")
  public com.guidewire.ab.external.entity.Company getEmployer();

  /**
   * Employer
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Employer")
  public void setEmployer(com.guidewire.ab.external.entity.Company value);


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
   * First name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FirstName")
  public java.lang.String getFirstName();

  /**
   * First name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FirstName")
  public void setFirstName(java.lang.String value);


  /**
   * First name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FirstNameKanji")
  public java.lang.String getFirstNameKanji();

  /**
   * First name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FirstNameKanji")
  public void setFirstNameKanji(java.lang.String value);


  /**
   * Person's former name, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FormerName")
  public java.lang.String getFormerName();

  /**
   * Person's former name, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FormerName")
  public void setFormerName(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GWCellPhone")
  public external.gw.api.util.phone.GWPhoneNumber getGWCellPhone();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GWCellPhone")
  public void setGWCellPhone(external.gw.api.util.phone.GWPhoneNumber value);


  /**
   * Gender.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Gender")
  public com.guidewire.ab.external.typelist.GenderType getGender();

  /**
   * Gender.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Gender")
  public void setGender(com.guidewire.ab.external.typelist.GenderType value);


  /**
   * Guardian
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Guardian")
  public com.guidewire.ab.external.entity.Person getGuardian();

  /**
   * Guardian
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Guardian")
  public void setGuardian(com.guidewire.ab.external.entity.Person value);


  /**
   * Last name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastName")
  public java.lang.String getLastName();

  /**
   * Last name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastName")
  public void setLastName(java.lang.String value);


  /**
   * Last name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastNameKanji")
  public java.lang.String getLastNameKanji();

  /**
   * Last name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastNameKanji")
  public void setLastNameKanji(java.lang.String value);


  /**
   * Driver's license number.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LicenseNumber")
  public java.lang.String getLicenseNumber();

  /**
   * Driver's license number.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LicenseNumber")
  public void setLicenseNumber(java.lang.String value);


  /**
   * Driver's license jurisdiction.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LicenseState")
  public com.guidewire.ab.external.typelist.Jurisdiction getLicenseState();

  /**
   * Driver's license jurisdiction.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LicenseState")
  public void setLicenseState(com.guidewire.ab.external.typelist.Jurisdiction value);


  /**
   * Marital status.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaritalStatus")
  public com.guidewire.ab.external.typelist.MaritalStatus getMaritalStatus();

  /**
   * Marital status.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaritalStatus")
  public void setMaritalStatus(com.guidewire.ab.external.typelist.MaritalStatus value);


  /**
   * Middle name or initial.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MiddleName")
  public java.lang.String getMiddleName();

  /**
   * Middle name or initial.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MiddleName")
  public void setMiddleName(java.lang.String value);


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
   * Number of dependents the employee has.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumDependents")
  public java.lang.Integer getNumDependents();

  /**
   * Number of dependents the employee has.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumDependents")
  public void setNumDependents(java.lang.Integer value);


  /**
   * Number of dependents under 18.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumDependentsU18")
  public java.lang.Integer getNumDependentsU18();

  /**
   * Number of dependents under 18.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumDependentsU18")
  public void setNumDependentsU18(java.lang.Integer value);


  /**
   * Number of dependents over 18 and under 25.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumDependentsU25")
  public java.lang.Integer getNumDependentsU25();

  /**
   * Number of dependents over 18 and under 25.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumDependentsU25")
  public void setNumDependentsU25(java.lang.Integer value);


  /**
   * Occupation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Occupation")
  public java.lang.String getOccupation();

  /**
   * Occupation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Occupation")
  public void setOccupation(java.lang.String value);


  /**
   * Particle, such as 'de', 'von' (used for French names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Particle")
  public java.lang.String getParticle();

  /**
   * Particle, such as 'de', 'von' (used for French names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Particle")
  public void setParticle(java.lang.String value);


  /**
   * Prefix for the person's name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Prefix")
  public com.guidewire.ab.external.typelist.NamePrefix getPrefix();

  /**
   * Prefix for the person's name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Prefix")
  public void setPrefix(com.guidewire.ab.external.typelist.NamePrefix value);


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
   * Suffix for the person's name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Suffix")
  public com.guidewire.ab.external.typelist.NameSuffix getSuffix();

  /**
   * Suffix for the person's name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Suffix")
  public void setSuffix(com.guidewire.ab.external.typelist.NameSuffix value);


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
   * State-specific field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TaxFilingStatus")
  public com.guidewire.ab.external.typelist.TaxFilingStatusType getTaxFilingStatus();

  /**
   * State-specific field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TaxFilingStatus")
  public void setTaxFilingStatus(com.guidewire.ab.external.typelist.TaxFilingStatusType value);


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
   * Wards
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Wards")
  public com.guidewire.ab.external.entity.Person[] getWards();


  /**
   * Utility class for initializing an instance of Person
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Person.
     */
    public static Person newInstance()
    {
      return (Person) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Person.class);
    }
  }

}
