package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactSearchCriteriaTag extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * ABContactSearchCriteria
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContactSearchCriteria")
  public com.guidewire.ab.external.entity.ABContactSearchCriteria getABContactSearchCriteria();


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
   * Type of this ContactTag. NOTE: when inserting a ABContactSearchCriteriaTag this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.ContactTagType getType();

  /**
   * Type of this ContactTag. NOTE: when inserting a ABContactSearchCriteriaTag this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.ContactTagType value);


  /**
   * Utility class for initializing an instance of ABContactSearchCriteriaTag
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABContactSearchCriteriaTag.
     */
    public static ABContactSearchCriteriaTag newInstance()
    {
      return (ABContactSearchCriteriaTag) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABContactSearchCriteriaTag.class);
    }
  }

}
