package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LastAssignedUserContainer extends gw.pl.external.entity.Entity
{


  /**
   * Utility class for initializing an instance of LastAssignedUserContainer
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LastAssignedUserContainer.
     */
    public static LastAssignedUserContainer newInstance()
    {
      return (LastAssignedUserContainer) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LastAssignedUserContainer.class);
    }
  }

}
