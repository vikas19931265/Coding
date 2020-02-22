package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface OverlapTable extends gw.pl.external.entity.Entity
{


  /**
   * Utility class for initializing an instance of OverlapTable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity OverlapTable.
     */
    public static OverlapTable newInstance()
    {
      return (OverlapTable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(OverlapTable.class);
    }
  }

}
