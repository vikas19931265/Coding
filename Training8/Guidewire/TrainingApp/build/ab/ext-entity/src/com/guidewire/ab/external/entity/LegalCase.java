package com.guidewire.ab.external.entity;

/**
 * Legal case
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LegalCase extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Associated contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();

  /**
   * Associated contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ABContact")
  public void setABContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Type of case
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CaseType")
  public com.guidewire.ab.external.typelist.LegalCaseType getCaseType();

  /**
   * Type of case
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CaseType")
  public void setCaseType(com.guidewire.ab.external.typelist.LegalCaseType value);


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * Defendant of the lawsuit (if contact is the plaintiff)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Defendant")
  public java.lang.String getDefendant();

  /**
   * Defendant of the lawsuit (if contact is the plaintiff)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Defendant")
  public void setDefendant(java.lang.String value);


  /**
   * Date the case was filed with the courts
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FileDate")
  public java.util.Date getFileDate();

  /**
   * Date the case was filed with the courts
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FileDate")
  public void setFileDate(java.util.Date value);


  /**
   * Did the contact file this case?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FiledByContact")
  public java.lang.Boolean isFiledByContact();

  /**
   * Did the contact file this case?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FiledByContact")
  public void setFiledByContact(java.lang.Boolean value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Plaintiff of the lawsuit (if contact is defendant)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Plaintiff")
  public java.lang.String getPlaintiff();

  /**
   * Plaintiff of the lawsuit (if contact is defendant)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Plaintiff")
  public void setPlaintiff(java.lang.String value);


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * Status of case
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.LegalCaseStatus getStatus();

  /**
   * Status of case
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Status")
  public void setStatus(com.guidewire.ab.external.typelist.LegalCaseStatus value);


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * Utility class for initializing an instance of LegalCase
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LegalCase.
     */
    public static LegalCase newInstance()
    {
      return (LegalCase) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LegalCase.class);
    }
  }

}
