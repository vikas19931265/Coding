package com.guidewire.ab.external.entity;

/**
 * 
        A component used as part of a larger search criteria entity. Encapsulates the information
        entered by the user to restrict the search to particular group or to a particular group and
        its sub-groups. One GroupSearchCriterion entity will be used for each field that needs to
        be restricted. For example if a search criteria was being constructed to specify searches for
        an entity which had two different group fields, then the search criteria would probably
        contain two separate GroupSearchCriterion components.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GroupSearchCriterion extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * The id of the group to which the search should be restricted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedToGroup")
  public com.guidewire.ab.external.entity.Group getAssignedToGroup();

  /**
   * The id of the group to which the search should be restricted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedToGroup")
  public void setAssignedToGroup(com.guidewire.ab.external.entity.Group value);


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
   * Should the search be restricted to just the given group, or to the group and all its sub-groups.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IncludeSubGroups")
  public java.lang.Boolean isIncludeSubGroups();

  /**
   * Should the search be restricted to just the given group, or to the group and all its sub-groups.
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
   * True if any of the fields in this criteria object are set. False if no fields are set, so the
criteria should not affect the search.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Set")
  public boolean isSet();


  /**
   * Utility class for initializing an instance of GroupSearchCriterion
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GroupSearchCriterion.
     */
    public static GroupSearchCriterion newInstance()
    {
      return (GroupSearchCriterion) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GroupSearchCriterion.class);
    }
  }

}
