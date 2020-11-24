package com.guidewire.ab.external.entity;

/**
 * 
      Represents the contact data for a system User as a Person.  One UserContact entity
      will normally exist in the system for each User, and is linked to by a direct foreign key from that User.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UserContact extends com.guidewire.ab.external.entity.Person
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
   * Employee ID number. Applies to user contacts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EmployeeNumber")
  public java.lang.String getEmployeeNumber();

  /**
   * Employee ID number. Applies to user contacts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EmployeeNumber")
  public void setEmployeeNumber(java.lang.String value);


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
   * Utility class for initializing an instance of UserContact
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UserContact.
     */
    public static UserContact newInstance()
    {
      return (UserContact) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UserContact.class);
    }
  }

}
