package com.guidewire.ab.external.entity;

/**
 * Attorney
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABAttorney extends com.guidewire.ab.external.entity.ABPersonVendor
{


  /**
   * Attorney's business license number.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttorneyLicense")
  public java.lang.String getAttorneyLicense();

  /**
   * Attorney's business license number.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AttorneyLicense")
  public void setAttorneyLicense(java.lang.String value);


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
   * Utility class for initializing an instance of ABAttorney
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABAttorney.
     */
    public static ABAttorney newInstance()
    {
      return (ABAttorney) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABAttorney.class);
    }
  }

}
