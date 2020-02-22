package com.guidewire.ab.external.entity;

/**
 * Delegate used by ABContact to store Electronic funds transfer data
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EFTDataDelegate extends gw.pl.external.entity.Entity
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
   * null
   *
   * @param val 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "maskBankAccountNumber")
  public java.lang.String maskBankAccountNumber(java.lang.String val);


  /**
   * Utility class for initializing an instance of EFTDataDelegate
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity EFTDataDelegate.
     */
    public static EFTDataDelegate newInstance()
    {
      return (EFTDataDelegate) gw.pl.external.entity.EntityFactory.getInstance().newEntity(EFTDataDelegate.class);
    }
  }

}
