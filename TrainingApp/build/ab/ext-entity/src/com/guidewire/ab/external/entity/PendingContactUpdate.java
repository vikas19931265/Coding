package com.guidewire.ab.external.entity;

/**
 * 
        Entity to hold the information about an update request to an existing ABContact in ContactManager
        that requires approval.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PendingContactUpdate extends com.guidewire.ab.external.entity.PendingContactChange
{


  /**
   * XML representation of the contact change.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ChangeXML")
  public java.lang.String getChangeXML();

  /**
   * XML representation of the contact change.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ChangeXML")
  public void setChangeXML(java.lang.String value);


  /**
   * Utility class for initializing an instance of PendingContactUpdate
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity PendingContactUpdate.
     */
    public static PendingContactUpdate newInstance()
    {
      return (PendingContactUpdate) gw.pl.external.entity.EntityFactory.getInstance().newEntity(PendingContactUpdate.class);
    }
  }

}
