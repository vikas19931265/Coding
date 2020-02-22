package com.guidewire.ab.external.entity;

/**
 * The purpose of this table is to avoid a self-referencing foreign key on abcontact, and to allow contacts to     relate to one another in different ways.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactContact extends com.guidewire.ab.external.entity.ABLinkable, com.guidewire.ab.external.entity.CommonContactContact, com.guidewire.ab.external.entity.Validatable, com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LinkID")
  public java.lang.String getLinkID();

  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LinkID")
  public void setLinkID(java.lang.String value);


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * Role NOTE: when inserting a ABContactContact this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Rel")
  public com.guidewire.ab.external.typelist.ContactRel getRel();

  /**
   * Role NOTE: when inserting a ABContactContact this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Rel")
  public void setRel(com.guidewire.ab.external.typelist.ContactRel value);


  /**
   * Second contact in the relationship.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RelABContact")
  public com.guidewire.ab.external.entity.ABContact getRelABContact();

  /**
   * Second contact in the relationship.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RelABContact")
  public void setRelABContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * First contact in the relationship.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SrcABContact")
  public com.guidewire.ab.external.entity.ABContact getSrcABContact();

  /**
   * First contact in the relationship.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SrcABContact")
  public void setSrcABContact(com.guidewire.ab.external.entity.ABContact value);

  /**
   * Adds the appropriate History events depending on what has changed in the ABContactContact.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addHistoryEvents")
  public void addHistoryEvents();

  /**
   * This will return the relationship from the supplied contacts perspective
   *
   * @return the relationship type
   * @param primaryContact the contact to use
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getBidiRel")
  public com.guidewire.ab.external.typelist.ContactBidiRel getBidiRel(com.guidewire.ab.external.entity.ABContact primaryContact);

  /**
   * This will return the type of the other contact in this relationship
   *
   * @return the IType of the oposite contact
   * @param primaryContact either source or target
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOtherCommonContactType")
  public gw.pl.external.Type getOtherCommonContactType(com.guidewire.ab.external.entity.ABContact primaryContact);

  /**
   * This will return the other contact for this link.
   *
   * @return the contact
   * @param primaryContact the contact to exclude
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOtherContact")
  public com.guidewire.ab.external.entity.ABContact getOtherContact(com.guidewire.ab.external.entity.ABContact primaryContact);

  /**
   * This will change the relationship
   *
   * @param primaryContact the contact to use
   * @param contactBidiRel the new relationship
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setBidiRel")
  public void setBidiRel(com.guidewire.ab.external.entity.ABContact primaryContact, com.guidewire.ab.external.typelist.ContactBidiRel contactBidiRel);

  /**
   * Sets the other contact
   *
   * @param primaryContact the contact to keep the same
   * @param otherContact the contact to replace
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setOtherContact")
  public void setOtherContact(com.guidewire.ab.external.entity.ABContact primaryContact, com.guidewire.ab.external.entity.ABContact otherContact);


  /**
   * Utility class for initializing an instance of ABContactContact
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABContactContact.
     */
    public static ABContactContact newInstance()
    {
      return (ABContactContact) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABContactContact.class);
    }
  }

}
