package com.guidewire.ab.external.entity;

/**
 * Electronic funds transfer or EFT refers to the computer-based systems used to perform financial transactions electronically.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EFTData extends com.guidewire.ab.external.entity.ABLinkable, com.guidewire.ab.external.entity.EFTDataDelegate, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * The name on the account
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AccountName")
  public java.lang.String getAccountName();

  /**
   * The name on the account
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AccountName")
  public void setAccountName(java.lang.String value);


  /**
   * The bank account number
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BankAccountNumber")
  public java.lang.String getBankAccountNumber();

  /**
   * The bank account number
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BankAccountNumber")
  public void setBankAccountNumber(java.lang.String value);


  /**
   * The type of bank accout e.g. checking, savings etc
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BankAccountType")
  public com.guidewire.ab.external.typelist.BankAccountType getBankAccountType();

  /**
   * The type of bank accout e.g. checking, savings etc
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BankAccountType")
  public void setBankAccountType(com.guidewire.ab.external.typelist.BankAccountType value);


  /**
   * The name of the bank
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BankName")
  public java.lang.String getBankName();

  /**
   * The name of the bank
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BankName")
  public void setBankName(java.lang.String value);


  /**
   * The routing number is a nine digit bank code used in the United States
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BankRoutingNumber")
  public java.lang.String getBankRoutingNumber();

  /**
   * The routing number is a nine digit bank code used in the United States
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BankRoutingNumber")
  public void setBankRoutingNumber(java.lang.String value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Contact this EFT record relates to
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.ABContact getContact();

  /**
   * Contact this EFT record relates to
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contact")
  public void setContact(com.guidewire.ab.external.entity.ABContact value);


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
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Indicates if this is the primary EFT record for the contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IsPrimary")
  public java.lang.Boolean isIsPrimary();

  /**
   * Indicates if this is the primary EFT record for the contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IsPrimary")
  public void setIsPrimary(java.lang.Boolean value);


  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LinkID")
  public java.lang.String getLinkID();

  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LinkID")
  public void setLinkID(java.lang.String value);


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


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
   * Utility class for initializing an instance of EFTData
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity EFTData.
     */
    public static EFTData newInstance()
    {
      return (EFTData) gw.pl.external.entity.EntityFactory.getInstance().newEntity(EFTData.class);
    }
  }

}
