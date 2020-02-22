package com.guidewire.ab.external.entity;

/**
 * Transaction ids sent to create the illusion of idempotency
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TransactionId extends gw.pl.external.entity.Entity
{


  /**
   * Unique transaction id NOTE: when inserting a TransactionId this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tid")
  public java.lang.String getTid();

  /**
   * Unique transaction id NOTE: when inserting a TransactionId this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Tid")
  public void setTid(java.lang.String value);


  /**
   * Utility class for initializing an instance of TransactionId
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TransactionId.
     */
    public static TransactionId newInstance()
    {
      return (TransactionId) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TransactionId.class);
    }
  }

}
