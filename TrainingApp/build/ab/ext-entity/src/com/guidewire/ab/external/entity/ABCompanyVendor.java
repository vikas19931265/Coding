package com.guidewire.ab.external.entity;

/**
 * Contact type representing vendors that are companies.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABCompanyVendor extends com.guidewire.ab.external.entity.ABCompany, com.guidewire.ab.external.entity.ABContact, com.guidewire.ab.external.entity.GlobalContactName
{


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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FinanceManager")
  public com.guidewire.ab.external.entity.ABPerson getFinanceManager();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FinanceManager")
  public void setFinanceManager(com.guidewire.ab.external.entity.ABPerson value);


  /**
   * Relationship To Finance Manager
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FinanceMgrRelationship")
  public com.guidewire.ab.external.typelist.ManagerRelationshipType getFinanceMgrRelationship();

  /**
   * Relationship To Finance Manager
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FinanceMgrRelationship")
  public void setFinanceMgrRelationship(com.guidewire.ab.external.typelist.ManagerRelationshipType value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PaymentContact")
  public com.guidewire.ab.external.entity.ABPerson getPaymentContact();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PaymentContact")
  public void setPaymentContact(com.guidewire.ab.external.entity.ABPerson value);


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
   * Utility class for initializing an instance of ABCompanyVendor
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABCompanyVendor.
     */
    public static ABCompanyVendor newInstance()
    {
      return (ABCompanyVendor) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABCompanyVendor.class);
    }
  }

}
