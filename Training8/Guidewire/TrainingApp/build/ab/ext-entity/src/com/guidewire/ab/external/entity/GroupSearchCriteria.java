package com.guidewire.ab.external.entity;

/**
 * 
        Defines a group search criteria. The GroupSearchCriteria entity exists only for the purposes of a search.
        It is not stored in the database.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GroupSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Whether to exclude the root group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExcludeRootGroup")
  public java.lang.Boolean isExcludeRootGroup();

  /**
   * Whether to exclude the root group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExcludeRootGroup")
  public void setExcludeRootGroup(java.lang.Boolean value);


  /**
   * Group name to search for.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupName")
  public java.lang.String getGroupName();

  /**
   * Group name to search for.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupName")
  public void setGroupName(java.lang.String value);


  /**
   * Group name to search for (kanji).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupNameKanji")
  public java.lang.String getGroupNameKanji();

  /**
   * Group name to search for (kanji).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupNameKanji")
  public void setGroupNameKanji(java.lang.String value);


  /**
   * Group type to search for.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupType")
  public com.guidewire.ab.external.typelist.GroupType getGroupType();

  /**
   * Group type to search for.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupType")
  public void setGroupType(com.guidewire.ab.external.typelist.GroupType value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Organization that the group belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Organization")
  public com.guidewire.ab.external.entity.Organization getOrganization();

  /**
   * Organization that the group belongs to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Organization")
  public void setOrganization(com.guidewire.ab.external.entity.Organization value);


  /**
   * Group parent to search for.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParentGroup")
  public com.guidewire.ab.external.entity.Group getParentGroup();

  /**
   * Group parent to search for.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParentGroup")
  public void setParentGroup(com.guidewire.ab.external.entity.Group value);


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
   * Finds Groups that match this search criteria
   *
   * @return a QueryProcessor containing the Groups that match this search criteria
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearch")
  public external.gw.api.database.IQueryBeanResult performSearch();


  /**
   * Utility class for initializing an instance of GroupSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GroupSearchCriteria.
     */
    public static GroupSearchCriteria newInstance()
    {
      return (GroupSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GroupSearchCriteria.class);
    }
  }

}
