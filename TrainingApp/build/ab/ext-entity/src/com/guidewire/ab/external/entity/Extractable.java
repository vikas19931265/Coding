package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Extractable extends gw.pl.external.entity.Entity
{


  /**
   * Utility class for initializing an instance of Extractable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Extractable.
     */
    public static Extractable newInstance()
    {
      return (Extractable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Extractable.class);
    }
  }

}
