package com.guidewire.ab.external.entity;

/**
 * 
        Links a user to a group. The GroupUser entity also stores data used by the system when making assignments by
        workload. The system creates this object each time a user is added to a group.
        
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GroupUser extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The associated group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Group")
  public com.guidewire.ab.external.entity.Group getGroup();

  /**
   * The associated group.
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
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Percentage value of normal workload to be given to this user in this group. This is used for round-robin assignment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadFactor")
  public java.lang.Integer getLoadFactor();

  /**
   * Percentage value of normal workload to be given to this user in this group. This is used for round-robin assignment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadFactor")
  public void setLoadFactor(java.lang.Integer value);


  /**
   * Type of load factor privileges the user has.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadFactorType")
  public com.guidewire.ab.external.typelist.LoadFactorType getLoadFactorType();

  /**
   * Type of load factor privileges the user has.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadFactorType")
  public void setLoadFactorType(com.guidewire.ab.external.typelist.LoadFactorType value);


  /**
   * Flag indicating whether the user has permission to see activity within the group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Manager")
  public java.lang.Boolean isManager();

  /**
   * Flag indicating whether the user has permission to see activity within the group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Manager")
  public void setManager(java.lang.Boolean value);


  /**
   * Flag indicating whether the user is a working member of the group (for purposes of work assignment, for example), as opposed to simply being associated with the group as a manager or other auxiliary person.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Member")
  public java.lang.Boolean isMember();

  /**
   * Flag indicating whether the user is a working member of the group (for purposes of work assignment, for example), as opposed to simply being associated with the group as a manager or other auxiliary person.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Member")
  public void setMember(java.lang.Boolean value);


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
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TextField1")
  public java.lang.String getTextField1();

  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TextField1")
  public void setTextField1(java.lang.String value);


  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TextField2")
  public java.lang.String getTextField2();

  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TextField2")
  public void setTextField2(java.lang.String value);


  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TextField3")
  public java.lang.String getTextField3();

  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TextField3")
  public void setTextField3(java.lang.String value);


  /**
   * The associated user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();

  /**
   * The associated user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "User")
  public void setUser(com.guidewire.ab.external.entity.User value);


  /**
   * Utility class for initializing an instance of GroupUser
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GroupUser.
     */
    public static GroupUser newInstance()
    {
      return (GroupUser) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GroupUser.class);
    }
  }

}
