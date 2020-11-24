package com.guidewire.ab.external.entity;

/**
 * Contact type representing vendors that are people.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABPersonVendor extends com.guidewire.ab.external.entity.ABContact, com.guidewire.ab.external.entity.ABPerson, com.guidewire.ab.external.entity.GlobalContactName, com.guidewire.ab.external.entity.GlobalPersonName
{


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
   * Date of check for convictions
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FraudConvictionsDate_Ext")
  public java.util.Date getFraudConvictionsDate_Ext();

  /**
   * Date of check for convictions
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FraudConvictionsDate_Ext")
  public void setFraudConvictionsDate_Ext(java.util.Date value);


  /**
   * Number of convictions for fraud
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FraudConvictions_Ext")
  public java.lang.Integer getFraudConvictions_Ext();

  /**
   * Number of convictions for fraud
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FraudConvictions_Ext")
  public void setFraudConvictions_Ext(java.lang.Integer value);


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
   * Is the vendor self-employed?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SelfEmployeed_Ext")
  public java.lang.Boolean isSelfEmployeed_Ext();

  /**
   * Is the vendor self-employed?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SelfEmployeed_Ext")
  public void setSelfEmployeed_Ext(java.lang.Boolean value);


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
   * Utility class for initializing an instance of ABPersonVendor
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABPersonVendor.
     */
    public static ABPersonVendor newInstance()
    {
      return (ABPersonVendor) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABPersonVendor.class);
    }
  }

}
