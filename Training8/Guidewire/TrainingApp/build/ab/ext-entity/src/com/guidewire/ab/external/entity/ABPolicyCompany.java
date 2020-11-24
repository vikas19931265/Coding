package com.guidewire.ab.external.entity;

/**
 * Contact type representing policy entities that are companies.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABPolicyCompany extends com.guidewire.ab.external.entity.ABCompany, com.guidewire.ab.external.entity.ABContact, com.guidewire.ab.external.entity.GlobalContactName
{


  /**
   * Case
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Case")
  public com.guidewire.ab.external.entity.ABContact[] getCase();


  /**
   * Amount of collateral required
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CollateralAmount")
  public java.lang.Integer getCollateralAmount();

  /**
   * Amount of collateral required
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CollateralAmount")
  public void setCollateralAmount(java.lang.Integer value);


  /**
   * Is collateral (a deposit) required to insure this company?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CollateralRequired")
  public java.lang.Boolean isCollateralRequired();

  /**
   * Is collateral (a deposit) required to insure this company?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CollateralRequired")
  public void setCollateralRequired(java.lang.Boolean value);


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
   * YesNo only
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CompanyCollateralVerified")
  public com.guidewire.ab.external.typelist.YesNo getCompanyCollateralVerified();

  /**
   * YesNo only
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CompanyCollateralVerified")
  public void setCompanyCollateralVerified(com.guidewire.ab.external.typelist.YesNo value);


  /**
   * Employees
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Employees")
  public com.guidewire.ab.external.entity.ABPerson[] getEmployees();


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
   * Utility class for initializing an instance of ABPolicyCompany
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABPolicyCompany.
     */
    public static ABPolicyCompany newInstance()
    {
      return (ABPolicyCompany) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABPolicyCompany.class);
    }
  }

}
