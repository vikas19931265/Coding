package com.guidewire.ab.external.entity;

/**
 * 
      Represents a specification of relationships to retrieve/sync from the Address Book. The set of relationships to
      retrieve from the Address Book is specified in contact-sync-config.xml. Each of the contactBidiRel that is specified
      in &lt;IncludeRelationship&gt; in the contact-sync-config.xml is called "Syncable Relationship". A ContactRelationshipSpec
      contains two sets of syncable relationships, "SourceRelationships" and "TargetRelationships" which is grouped according to
      the contactBidiRel. This entity has been deprecated as of ClaimCenter 8.0 along with the IAddressBookAdapter plugin.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactRelationshipSpec extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
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
   * Relationships that the contact is on the source side.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceRelationships")
  public com.guidewire.ab.external.entity.ContactRelationshipSpecRel[] getSourceRelationships();

  /**
   * Relationships that the contact is on the source side.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceRelationships")
  public void setSourceRelationships(com.guidewire.ab.external.entity.ContactRelationshipSpecRel[] value);


  /**
   * Relationships that the contact is on the target side.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetRelationships")
  public com.guidewire.ab.external.entity.ContactRelationshipSpecRel[] getTargetRelationships();

  /**
   * Relationships that the contact is on the target side.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetRelationships")
  public void setTargetRelationships(com.guidewire.ab.external.entity.ContactRelationshipSpecRel[] value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToSourceRelationships")
  public void addToSourceRelationships(com.guidewire.ab.external.entity.ContactRelationshipSpecRel element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTargetRelationships")
  public void addToTargetRelationships(com.guidewire.ab.external.entity.ContactRelationshipSpecRel element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactRelationshipSpecRel from the SourceRelationships array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSourceRelationships")
  public void removeFromSourceRelationships(com.guidewire.ab.external.entity.ContactRelationshipSpecRel element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactRelationshipSpecRel having id elementID from the SourceRelationships array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSourceRelationships")
  public void removeFromSourceRelationships(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactRelationshipSpecRel from the TargetRelationships array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTargetRelationships")
  public void removeFromTargetRelationships(com.guidewire.ab.external.entity.ContactRelationshipSpecRel element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactRelationshipSpecRel having id elementID from the TargetRelationships array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTargetRelationships")
  public void removeFromTargetRelationships(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of ContactRelationshipSpec
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactRelationshipSpec.
     */
    public static ContactRelationshipSpec newInstance()
    {
      return (ContactRelationshipSpec) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactRelationshipSpec.class);
    }
  }

}
