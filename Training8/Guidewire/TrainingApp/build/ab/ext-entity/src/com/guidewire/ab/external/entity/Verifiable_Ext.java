package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Verifiable_Ext extends gw.pl.external.entity.Entity
{


  /**
   * Priority of the verification
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Priority")
  public com.guidewire.ab.external.typelist.Priority getPriority();

  /**
   * Priority of the verification
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Priority")
  public void setPriority(com.guidewire.ab.external.typelist.Priority value);


  /**
   * Does this object need verification?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RequiresVerification")
  public java.lang.Boolean isRequiresVerification();

  /**
   * Does this object need verification?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RequiresVerification")
  public void setRequiresVerification(java.lang.Boolean value);


  /**
   * Date object was verified
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VerificationDate")
  public java.util.Date getVerificationDate();

  /**
   * Date object was verified
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VerificationDate")
  public void setVerificationDate(java.util.Date value);


  /**
   * Date by which object should be verified
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VerificationDueDate")
  public java.util.Date getVerificationDueDate();

  /**
   * Date by which object should be verified
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VerificationDueDate")
  public void setVerificationDueDate(java.util.Date value);

  /**
   * This functions sets the due date for a verification based on the
priority. High and urgent objects are set for 3 days. Normal objects
(and objects without a priority) are set to 7 days. Low-priority
objects are set for 14 days.
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setDueDateFromPriority")
  public void setDueDateFromPriority();


  /**
   * Utility class for initializing an instance of Verifiable_Ext
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Verifiable_Ext.
     */
    public static Verifiable_Ext newInstance()
    {
      return (Verifiable_Ext) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Verifiable_Ext.class);
    }
  }

}
