package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Approvable extends gw.pl.external.entity.Entity
{


  /**
   * The date when the object was ultimately approved or rejected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ApprovalDate")
  public java.util.Date getApprovalDate();

  /**
   * The date when the object was ultimately approved or rejected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ApprovalDate")
  public void setApprovalDate(java.util.Date value);


  /**
   * The approval status of the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ApprovalStatus")
  public com.guidewire.ab.external.typelist.ApprovalStatus getApprovalStatus();

  /**
   * The approval status of the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ApprovalStatus")
  public void setApprovalStatus(com.guidewire.ab.external.typelist.ApprovalStatus value);


  /**
   * The user submitting the object for approval NOTE: when inserting a Approvable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RequestingUser")
  public com.guidewire.ab.external.entity.User getRequestingUser();

  /**
   * The user submitting the object for approval NOTE: when inserting a Approvable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RequestingUser")
  public void setRequestingUser(com.guidewire.ab.external.entity.User value);


  /**
   * Utility class for initializing an instance of Approvable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Approvable.
     */
    public static Approvable newInstance()
    {
      return (Approvable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Approvable.class);
    }
  }

}
