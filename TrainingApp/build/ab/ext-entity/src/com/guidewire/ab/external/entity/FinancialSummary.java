package com.guidewire.ab.external.entity;

/**
 * Financial information about a contact that holds one or more policies
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface FinancialSummary extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Related ABContact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();

  /**
   * Related ABContact
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
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Date of most recent claim (whether money was paid or not)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MostRecentClaim")
  public java.util.Date getMostRecentClaim();

  /**
   * Date of most recent claim (whether money was paid or not)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MostRecentClaim")
  public void setMostRecentClaim(java.util.Date value);


  /**
   * Number of claims made against policies held by contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumberOfClaims")
  public java.lang.Integer getNumberOfClaims();

  /**
   * Number of claims made against policies held by contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumberOfClaims")
  public void setNumberOfClaims(java.lang.Integer value);


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
   * Total amount of money paid for claims on policies held by contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalClaimPaymentsMade")
  public external.gw.api.financials.CurrencyAmount getTotalClaimPaymentsMade();

  /**
   * Total amount of money paid for claims on policies held by contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalClaimPaymentsMade")
  public void setTotalClaimPaymentsMade(external.gw.api.financials.CurrencyAmount value);


  /**
   * Total amount of money billed to contact for all policies held
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalPolicyPremiumBilled")
  public external.gw.api.financials.CurrencyAmount getTotalPolicyPremiumBilled();

  /**
   * Total amount of money billed to contact for all policies held
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalPolicyPremiumBilled")
  public void setTotalPolicyPremiumBilled(external.gw.api.financials.CurrencyAmount value);


  /**
   * Total amount of money paid by contact for all policies held
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalPolicyPremiumPaid")
  public external.gw.api.financials.CurrencyAmount getTotalPolicyPremiumPaid();

  /**
   * Total amount of money paid by contact for all policies held
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalPolicyPremiumPaid")
  public void setTotalPolicyPremiumPaid(external.gw.api.financials.CurrencyAmount value);


  /**
   * Total amount of money refunded to contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalPolicyPremiumRefunded")
  public external.gw.api.financials.CurrencyAmount getTotalPolicyPremiumRefunded();

  /**
   * Total amount of money refunded to contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalPolicyPremiumRefunded")
  public void setTotalPolicyPremiumRefunded(external.gw.api.financials.CurrencyAmount value);


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
   * Utility class for initializing an instance of FinancialSummary
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity FinancialSummary.
     */
    public static FinancialSummary newInstance()
    {
      return (FinancialSummary) gw.pl.external.entity.EntityFactory.getInstance().newEntity(FinancialSummary.class);
    }
  }

}
