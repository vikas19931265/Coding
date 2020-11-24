package com.guidewire.ab.external.entity;

/**
 * 
      This is a shared delegate/interface which allows code to operate on those columns held by either
      ContactAddress or ABContactAddress entities. This allows code-sharing in cases where code might
      be used by both ContactManager and another Guidewire application.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CommonContactAddress extends gw.pl.external.entity.Entity
{


  /**
   * Utility class for initializing an instance of CommonContactAddress
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity CommonContactAddress.
     */
    public static CommonContactAddress newInstance()
    {
      return (CommonContactAddress) gw.pl.external.entity.EntityFactory.getInstance().newEntity(CommonContactAddress.class);
    }
  }

}
