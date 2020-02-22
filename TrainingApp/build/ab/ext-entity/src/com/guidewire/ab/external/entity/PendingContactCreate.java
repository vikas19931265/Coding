package com.guidewire.ab.external.entity;

/**
 * 
        Entity to hold the information about a request to create a new ABContact in ContactManager
        that requires approval.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PendingContactCreate extends com.guidewire.ab.external.entity.PendingContactChange
{


  /**
   * Utility class for initializing an instance of PendingContactCreate
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity PendingContactCreate.
     */
    public static PendingContactCreate newInstance()
    {
      return (PendingContactCreate) gw.pl.external.entity.EntityFactory.getInstance().newEntity(PendingContactCreate.class);
    }
  }

}
