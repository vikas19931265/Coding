package com.guidewire.ab.external.entity;

/**
 * 
      Allows code to operate on those common properties held by either {@link ContactContact} or <code>ABContactContact</code>.
      This is a shared delegate/interface that allows code-sharing in cases where code might be used by both ContactManager
      and another Guidewire application.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CommonContactContact extends gw.pl.external.entity.Entity
{

  /**
   * This will return the bidirectional relationship type  from the other contact in this relationship
to the primaryContact
   *
   * @return the bidiRel for the otherContact
   * @param otherContact either source or target
   * @param bidiRel relatioship from primaryContact to otherContact
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOtherBidiRel")
  public com.guidewire.ab.external.typelist.ContactBidiRel getOtherBidiRel(com.guidewire.ab.external.entity.CommonContact otherContact, com.guidewire.ab.external.typelist.ContactBidiRel bidiRel);


  /**
   * Utility class for initializing an instance of CommonContactContact
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity CommonContactContact.
     */
    public static CommonContactContact newInstance()
    {
      return (CommonContactContact) gw.pl.external.entity.EntityFactory.getInstance().newEntity(CommonContactContact.class);
    }
  }

}
