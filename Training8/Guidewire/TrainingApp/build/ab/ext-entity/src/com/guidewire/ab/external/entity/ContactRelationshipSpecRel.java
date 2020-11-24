package com.guidewire.ab.external.entity;

/**
 * 
      Wraps around contact relationships. See the <code>ContactRel</code> entity for a list of contact relationships.
      The <code.ContactRelationshipSpecRel</code> entity exists so that <code>ContactRelationshipSpec</code> can use its
      objects as entries in its arrays.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactRelationshipSpecRel extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
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
   * Type of relationship. NOTE: when inserting a ContactRelationshipSpecRel this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Relationship")
  public com.guidewire.ab.external.typelist.ContactRel getRelationship();

  /**
   * Type of relationship. NOTE: when inserting a ContactRelationshipSpecRel this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Relationship")
  public void setRelationship(com.guidewire.ab.external.typelist.ContactRel value);


  /**
   * Source relationship.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Source")
  public com.guidewire.ab.external.entity.ContactRelationshipSpec getSource();

  /**
   * Source relationship.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Source")
  public void setSource(com.guidewire.ab.external.entity.ContactRelationshipSpec value);


  /**
   * Target relationship.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Target")
  public com.guidewire.ab.external.entity.ContactRelationshipSpec getTarget();

  /**
   * Target relationship.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Target")
  public void setTarget(com.guidewire.ab.external.entity.ContactRelationshipSpec value);


  /**
   * Utility class for initializing an instance of ContactRelationshipSpecRel
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactRelationshipSpecRel.
     */
    public static ContactRelationshipSpecRel newInstance()
    {
      return (ContactRelationshipSpecRel) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactRelationshipSpecRel.class);
    }
  }

}
