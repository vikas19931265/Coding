package com.guidewire.ab.external.entity;

/**
 * Contact type representing policy entities that are people.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABPolicyPerson extends com.guidewire.ab.external.entity.ABContact, com.guidewire.ab.external.entity.ABPerson, com.guidewire.ab.external.entity.GlobalContactName, com.guidewire.ab.external.entity.GlobalPersonName
{


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
   * Is collateral (a deposit) required to insure this person?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CollateralRequired")
  public java.lang.Boolean isCollateralRequired();

  /**
   * Is collateral (a deposit) required to insure this person?
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
   * Returns the HeightInMeters field either in inches or in meters, based on the user's
preference. This getter is intended to be used in the user interface.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HeightBasedOnUserPreferences")
  public java.math.BigDecimal getHeightBasedOnUserPreferences();

  /**
   * Returns the HeightInMeters field either in inches or in meters, based on the user's
preference. This getter is intended to be used in the user interface.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HeightBasedOnUserPreferences")
  public void setHeightBasedOnUserPreferences(java.math.BigDecimal value);


  /**
   * Returns the HeightInMeters field in inches. This getter is intended to
be used in code that needs to work with the height in inches.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HeightInInches")
  public java.math.BigDecimal getHeightInInches();

  /**
   * Returns the HeightInMeters field in inches. This getter is intended to
be used in code that needs to work with the height in inches.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HeightInInches")
  public void setHeightInInches(java.math.BigDecimal value);


  /**
   * Height in meters, such as 1.9805
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HeightInMeters")
  public java.math.BigDecimal getHeightInMeters();

  /**
   * Height in meters, such as 1.9805
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HeightInMeters")
  public void setHeightInMeters(java.math.BigDecimal value);


  /**
   * YesNo
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PersonCollateralVerified")
  public com.guidewire.ab.external.typelist.YesNo getPersonCollateralVerified();

  /**
   * YesNo
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PersonCollateralVerified")
  public void setPersonCollateralVerified(com.guidewire.ab.external.typelist.YesNo value);


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
   * Utility class for initializing an instance of ABPolicyPerson
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABPolicyPerson.
     */
    public static ABPolicyPerson newInstance()
    {
      return (ABPolicyPerson) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABPolicyPerson.class);
    }
  }

}
