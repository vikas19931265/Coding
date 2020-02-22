package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface HistoryEventContainer extends gw.pl.external.entity.Entity
{

  /**
   * This method is meant to be called directly from gosu to generate history events.
   *
   * @return newly created History event
   * @param type type of this history event
   * @param description a text description for this history event
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addHistory")
  public com.guidewire.ab.external.entity.History addHistory(com.guidewire.ab.external.typelist.CustomHistoryType type, java.lang.String description);


  /**
   * Utility class for initializing an instance of HistoryEventContainer
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity HistoryEventContainer.
     */
    public static HistoryEventContainer newInstance()
    {
      return (HistoryEventContainer) gw.pl.external.entity.EntityFactory.getInstance().newEntity(HistoryEventContainer.class);
    }
  }

}
