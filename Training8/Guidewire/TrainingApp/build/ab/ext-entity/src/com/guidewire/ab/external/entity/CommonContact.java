package com.guidewire.ab.external.entity;

/**
 * 
      This is a shared delegate/interface which allows code to operate on those common
      properties held by either Contact or ABContact entities. This allows code-sharing in cases where code might
      be used by both ContactManager and another Guidewire application.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CommonContact extends gw.pl.external.entity.Entity
{


  /**
   * Utility class for initializing an instance of CommonContact
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity CommonContact.
     */
    public static CommonContact newInstance()
    {
      return (CommonContact) gw.pl.external.entity.EntityFactory.getInstance().newEntity(CommonContact.class);
    }
  }

}
