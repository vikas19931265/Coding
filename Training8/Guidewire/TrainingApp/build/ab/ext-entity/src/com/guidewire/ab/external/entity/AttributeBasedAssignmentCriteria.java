package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AttributeBasedAssignmentCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeCriteria")
  public com.guidewire.ab.external.entity.AttributeCriteriaElement[] getAttributeCriteria();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AttributeCriteria")
  public void setAttributeCriteria(com.guidewire.ab.external.entity.AttributeCriteriaElement[] value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The Group within which the attribute-based search is being done. May be null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Group")
  public com.guidewire.ab.external.entity.Group getGroup();

  /**
   * The Group within which the attribute-based search is being done. May be null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Group")
  public void setGroup(com.guidewire.ab.external.entity.Group value);


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
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToAttributeCriteria")
  public void addToAttributeCriteria(com.guidewire.ab.external.entity.AttributeCriteriaElement element);

  /**
   * Add the addtribute to the set of attributes to be matched
   *
   * @param attribute 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addUserAttribute")
  public void addUserAttribute(com.guidewire.ab.external.entity.Attribute attribute);

  /**
   * Add the attribute and state filter to the criteria to be matched
   *
   * @param attribute 
   * @param state 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addUserAttributeState")
  public void addUserAttributeState(com.guidewire.ab.external.entity.Attribute attribute, com.guidewire.ab.external.typelist.State state);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AttributeCriteriaElement from the AttributeCriteria array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAttributeCriteria")
  public void removeFromAttributeCriteria(com.guidewire.ab.external.entity.AttributeCriteriaElement element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AttributeCriteriaElement having id elementID from the AttributeCriteria array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAttributeCriteria")
  public void removeFromAttributeCriteria(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of AttributeBasedAssignmentCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity AttributeBasedAssignmentCriteria.
     */
    public static AttributeBasedAssignmentCriteria newInstance()
    {
      return (AttributeBasedAssignmentCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(AttributeBasedAssignmentCriteria.class);
    }
  }

}
