package com.guidewire.ab.external.entity;

/**
 * <p>
      Links <code>Contact</code> objects to other contacts. Each link has a specific relationship. See the <code>ContactRel</code> typelist for
      a list of the possible link relationships. The purpose of this table is to avoid a self-referencing foreign key on
      <code>Contact</code>, and to allow contacts to relate to one another in different ways.</p>
      <p>For example, imagine a <code>ContactContact</code> entity with the following values:</p>
      <ul><li>SourceContactID: ID of Person A</li>
          <li>Relationship: Employer</li>
          <li>RelatedContactID: ID of Company B</li>
      </ul>
      <p>
      Then the relationship between A and B is: Company B is the Employer of Person A.</p>
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactContact extends com.guidewire.ab.external.entity.AddressBookLinkable, com.guidewire.ab.external.entity.CommonContactContact, com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Represents the ID of the associated object in Address Book.  Null if the object is not linked to Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressBookUID")
  public java.lang.String getAddressBookUID();

  /**
   * Represents the ID of the associated object in Address Book.  Null if the object is not linked to Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressBookUID")
  public void setAddressBookUID(java.lang.String value);


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
   * "RelatedContactID" is the "Relationship" of "SourceContactID".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RelatedContact")
  public com.guidewire.ab.external.entity.Contact getRelatedContact();

  /**
   * "RelatedContactID" is the "Relationship" of "SourceContactID".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RelatedContact")
  public void setRelatedContact(com.guidewire.ab.external.entity.Contact value);


  /**
   * Relationship between the two contacts. NOTE: when inserting a ContactContact this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Relationship")
  public com.guidewire.ab.external.typelist.ContactRel getRelationship();

  /**
   * Relationship between the two contacts. NOTE: when inserting a ContactContact this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Relationship")
  public void setRelationship(com.guidewire.ab.external.typelist.ContactRel value);


  /**
   * "SourceContactID" has "RelatedContactID" as "Relationship".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceContact")
  public com.guidewire.ab.external.entity.Contact getSourceContact();

  /**
   * "SourceContactID" has "RelatedContactID" as "Relationship".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceContact")
  public void setSourceContact(com.guidewire.ab.external.entity.Contact value);

  /**
   * This will return the relationship from the supplied contacts perspective
   *
   * @return the relationship type
   * @param primaryContact the contact to use
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getBidiRel")
  public com.guidewire.ab.external.typelist.ContactBidiRel getBidiRel(com.guidewire.ab.external.entity.Contact primaryContact);

  /**
   * This will return the type of the other contact in this relationship
   *
   * @return the IType of the oposite contact
   * @param primaryContact either source or target
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOtherCommonContactType")
  public gw.pl.external.Type getOtherCommonContactType(com.guidewire.ab.external.entity.CommonContact primaryContact);

  /**
   * This will return the other contact for this link.
   *
   * @return the contact
   * @param primaryContact the contact to exclude
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOtherContact")
  public com.guidewire.ab.external.entity.Contact getOtherContact(com.guidewire.ab.external.entity.Contact primaryContact);

  /**
   * This will change the relationship
   *
   * @param primaryContact the contact to use
   * @param contactBidiRel the new relationship
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setBidiRel")
  public void setBidiRel(com.guidewire.ab.external.entity.Contact primaryContact, com.guidewire.ab.external.typelist.ContactBidiRel contactBidiRel);

  /**
   * Sets the other contact
   *
   * @param primaryContact the contact to keep the same
   * @param otherContact the contact to replace
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setOtherContact")
  public void setOtherContact(com.guidewire.ab.external.entity.Contact primaryContact, com.guidewire.ab.external.entity.Contact otherContact);


  /**
   * Utility class for initializing an instance of ContactContact
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactContact.
     */
    public static ContactContact newInstance()
    {
      return (ContactContact) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactContact.class);
    }
  }

}
