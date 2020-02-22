package com.guidewire.ab.external.entity;

/**
 * 
      This delegate indicates that this bean can be linked/synced with an external Address Book as a "child" entity of
      an AddressBookConvertable; entities implementing this interface must have an AddressBookUID field.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AddressBookLinkable extends gw.pl.external.entity.Entity
{


  /**
   * Utility class for initializing an instance of AddressBookLinkable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity AddressBookLinkable.
     */
    public static AddressBookLinkable newInstance()
    {
      return (AddressBookLinkable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(AddressBookLinkable.class);
    }
  }

}
