package com.guidewire.ab.external.entity;

/**
 * <p>Aggregates the information needed to display one PendingContactChange in the PendingContactChange.</p>
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PendingContactUpdateView extends com.guidewire.ab.external.entity.PendingContactChangeView
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PendingContactUpdate")
  public com.guidewire.ab.external.entity.PendingContactUpdate getPendingContactUpdate();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PendingContactUpdate")
  public void setPendingContactUpdate(com.guidewire.ab.external.entity.PendingContactUpdate value);


  /**
   * Utility class for initializing an instance of PendingContactUpdateView
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity PendingContactUpdateView.
     */
    public static PendingContactUpdateView newInstance()
    {
      return (PendingContactUpdateView) gw.pl.external.entity.EntityFactory.getInstance().newEntity(PendingContactUpdateView.class);
    }
  }

}
