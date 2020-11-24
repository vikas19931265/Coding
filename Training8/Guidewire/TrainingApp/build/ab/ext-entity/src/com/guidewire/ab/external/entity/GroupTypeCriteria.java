package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GroupTypeCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Group")
  public com.guidewire.ab.external.entity.Group getGroup();

  /**
   * 
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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IncludeSubGroups")
  public java.lang.Boolean isIncludeSubGroups();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IncludeSubGroups")
  public void setIncludeSubGroups(java.lang.Boolean value);


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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RequiredGroupType")
  public com.guidewire.ab.external.typelist.GroupType getRequiredGroupType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RequiredGroupType")
  public void setRequiredGroupType(com.guidewire.ab.external.typelist.GroupType value);


  /**
   * Utility class for initializing an instance of GroupTypeCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GroupTypeCriteria.
     */
    public static GroupTypeCriteria newInstance()
    {
      return (GroupTypeCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GroupTypeCriteria.class);
    }
  }

}
