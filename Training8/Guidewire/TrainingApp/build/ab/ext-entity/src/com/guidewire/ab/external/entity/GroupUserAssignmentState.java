package com.guidewire.ab.external.entity;

/**
 * 
        Joins a GroupAssignmentState entity to one or more Users. Also stores per user load information
        for round-robin assignment. This is an internal class which should only be used by the internals
        of the assignment engine.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GroupUserAssignmentState extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * The current load of the user for activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActivityLoad")
  public java.lang.Integer getActivityLoad();

  /**
   * The current load of the user for activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ActivityLoad")
  public void setActivityLoad(java.lang.Integer value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The associated group.   This property is deprecated for its misleading name, please use GroupAssignmentState property
   * @deprecated The associated group.   This property is deprecated for its misleading name, please use GroupAssignmentState property
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Group")
  public com.guidewire.ab.external.entity.GroupAssignmentState getGroup();

  /**
   * The associated group.   This property is deprecated for its misleading name, please use GroupAssignmentState property
   * @deprecated The associated group.   This property is deprecated for its misleading name, please use GroupAssignmentState property
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Group")
  public void setGroup(com.guidewire.ab.external.entity.GroupAssignmentState value);


  /**
   * returns the associated group assignment state base
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupAssignmentState")
  public com.guidewire.ab.external.entity.GroupAssignmentState getGroupAssignmentState();

  /**
   * returns the associated group assignment state base
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupAssignmentState")
  public void setGroupAssignmentState(com.guidewire.ab.external.entity.GroupAssignmentState value);


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
   * The current load of the user for assignment review activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReviewLoad")
  public java.lang.Integer getReviewLoad();

  /**
   * The current load of the user for assignment review activities.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReviewLoad")
  public void setReviewLoad(java.lang.Integer value);


  /**
   * The associated user. NOTE: when inserting a GroupUserAssignmentState this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();

  /**
   * The associated user. NOTE: when inserting a GroupUserAssignmentState this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "User")
  public void setUser(com.guidewire.ab.external.entity.User value);

  /**
   * set the group assignment state base
   *
   * @param value the state to set
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setGroupAssignmentState")
  public void setGroupAssignmentState_Method(com.guidewire.ab.external.entity.GroupAssignmentState value);


  /**
   * Utility class for initializing an instance of GroupUserAssignmentState
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GroupUserAssignmentState.
     */
    public static GroupUserAssignmentState newInstance()
    {
      return (GroupUserAssignmentState) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GroupUserAssignmentState.class);
    }
  }

}
