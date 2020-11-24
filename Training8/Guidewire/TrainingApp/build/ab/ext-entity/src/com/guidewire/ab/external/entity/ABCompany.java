package com.guidewire.ab.external.entity;

/**
 * Generic organization.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABCompany extends com.guidewire.ab.external.entity.ABContact, com.guidewire.ab.external.entity.GlobalContactName
{


  /**
   * Can employees be added to this company?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CanAddEmployees")
  public java.lang.Boolean isCanAddEmployees();

  /**
   * Can employees be added to this company?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CanAddEmployees")
  public void setCanAddEmployees(java.lang.Boolean value);


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
   * This score measures how satisfied the company's employees are with the company
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EmployeeScore")
  public java.lang.Integer getEmployeeScore();

  /**
   * This score measures how satisfied the company's employees are with the company
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EmployeeScore")
  public void setEmployeeScore(java.lang.Integer value);


  /**
   * Employees
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Employees")
  public com.guidewire.ab.external.entity.ABPerson[] getEmployees();


  /**
   * Date of business inspection
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InspectionDate")
  public java.util.Date getInspectionDate();

  /**
   * Date of business inspection
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "InspectionDate")
  public void setInspectionDate(java.util.Date value);


  /**
   * Is a business inspection required for this company?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InspectionRequired")
  public java.lang.Boolean isInspectionRequired();

  /**
   * Is a business inspection required for this company?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "InspectionRequired")
  public void setInspectionRequired(java.lang.Boolean value);


  /**
   * Returns length of Employees array
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumberOfEmployees")
  public int getNumberOfEmployees();


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
   * null
   *
   * @param value 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "maskTaxId")
  public java.lang.String maskTaxId(java.lang.String value);


  /**
   * Utility class for initializing an instance of ABCompany
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABCompany.
     */
    public static ABCompany newInstance()
    {
      return (ABCompany) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABCompany.class);
    }
  }

}
