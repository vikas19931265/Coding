package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABAutoRepairShop extends com.guidewire.ab.external.entity.ABCompanyVendor
{


  /**
   * Auto repair shop business license number
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutoRepairLicense")
  public java.lang.String getAutoRepairLicense();

  /**
   * Auto repair shop business license number
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AutoRepairLicense")
  public void setAutoRepairLicense(java.lang.String value);


  /**
   * Case
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Case")
  public com.guidewire.ab.external.entity.ABContact[] getCase();


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
   * Employees
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Employees")
  public com.guidewire.ab.external.entity.ABPerson[] getEmployees();


  /**
   * Is this agency a franchise?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IsFranchise")
  public java.lang.Boolean isIsFranchise();

  /**
   * Is this agency a franchise?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IsFranchise")
  public void setIsFranchise(java.lang.Boolean value);


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
   * Thirdpartyinsured
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Thirdpartyinsured")
  public com.guidewire.ab.external.entity.ABContact[] getThirdpartyinsured();


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
   * Secondary towing provider
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TowingProvider")
  public java.lang.String getTowingProvider();

  /**
   * Secondary towing provider
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TowingProvider")
  public void setTowingProvider(java.lang.String value);


  /**
   * Utility class for initializing an instance of ABAutoRepairShop
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABAutoRepairShop.
     */
    public static ABAutoRepairShop newInstance()
    {
      return (ABAutoRepairShop) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABAutoRepairShop.class);
    }
  }

}
