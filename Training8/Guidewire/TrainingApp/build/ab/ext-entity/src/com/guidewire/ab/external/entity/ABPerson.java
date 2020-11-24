package com.guidewire.ab.external.entity;

/**
 * Generic person.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABPerson extends com.guidewire.ab.external.entity.ABContact, com.guidewire.ab.external.entity.GlobalPersonName
{


  /**
   * Calculates age as string if date of birth is known. Otherwise,
returns "Unknown".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Age")
  public java.lang.String getAge();


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
  public com.guidewire.ab.external.entity.ABCompany getEmployer();

  /**
   * Employer
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Employer")
  public void setEmployer(com.guidewire.ab.external.entity.ABCompany value);


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
   * Concatenates first name, middle name (if any), and last name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FullName")
  public java.lang.String getFullName();


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
  public com.guidewire.ab.external.entity.ABPerson getGuardian();

  /**
   * Guardian
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Guardian")
  public void setGuardian(com.guidewire.ab.external.entity.ABPerson value);


  /**
   * Last name. NOTE: when inserting a ABPerson this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastName")
  public java.lang.String getLastName();

  /**
   * Last name. NOTE: when inserting a ABPerson this field must be non-null.
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
   * Sets whichever phone is primary phone to given new phone number.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NewPrimaryPhone")
  public void setNewPrimaryPhone(java.lang.String value);


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
  public com.guidewire.ab.external.entity.ABCompany getThirdpartyinsurer();

  /**
   * Thirdpartyinsurer
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Thirdpartyinsurer")
  public void setThirdpartyinsurer(com.guidewire.ab.external.entity.ABCompany value);


  /**
   * Wards
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Wards")
  public com.guidewire.ab.external.entity.ABPerson[] getWards();

  /**
   * Generates occupation if occupation is not set. Results are either
"Attorney", "Doctor", "Employee of <employer name>", or "Unknown".
Not created as a setter because it doesn't receive a value to use
when determining how to set the Occupation field.
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignDefaultOccupation")
  public void assignDefaultOccupation();

  /**
   * null
   *
   * @param value 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "maskTaxId")
  public java.lang.String maskTaxId(java.lang.String value);


  /**
   * Utility class for initializing an instance of ABPerson
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABPerson.
     */
    public static ABPerson newInstance()
    {
      return (ABPerson) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABPerson.class);
    }
  }

}
