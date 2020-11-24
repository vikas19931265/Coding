package com.guidewire.ab.external.entity;

/**
 * 
        A queue of assignable entities. Entities can be assigned to a queue (rather than a user) and
        any entity assigned to a queue is said to be "in the queue". A queue belongs to a group
        and is typically used to organize items which can be handled by any user in its group.
        When a user has time to tackle a new item they look at the items in the queue and reassign
        the top item to themselves.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AssignableQueue extends com.guidewire.ab.external.entity.Retireable, external.gw.api.assignment.Assignee, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * The description of what this queue is for.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * The description of what this queue is for.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * The group to which the queue belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Group")
  public com.guidewire.ab.external.entity.Group getGroup();

  /**
   * The group to which the queue belongs.
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
   * The name of this queue.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * The name of this queue.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


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
   * If true the queue is visible from sub-groups of the group to which it belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SubGroupVisible")
  public java.lang.Boolean isSubGroupVisible();

  /**
   * If true the queue is visible from sub-groups of the group to which it belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SubGroupVisible")
  public void setSubGroupVisible(java.lang.Boolean value);


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * Utility class for accessing static features for AssignableQueue
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    /**
     * Create a new proxy instance of the external type AssignableQueue.
     */
    public static AssignableQueue newInstance()
    {
      return null;
    }

    // Static Properties for AssignableQueue

    /**
     * 
     * 
     */
    public static external.gw.api.assignment.PublicAssignableQueueFinder getFinder()
    {
      return (external.gw.api.assignment.PublicAssignableQueueFinder) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.ab.external.entity.AssignableQueue.class, "Finder");
    }

    // Static Methods for AssignableQueue
    
  }


  /**
   * Utility class for initializing an instance of AssignableQueue
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity AssignableQueue.
     */
    public static AssignableQueue newInstance()
    {
      return (AssignableQueue) gw.pl.external.entity.EntityFactory.getInstance().newEntity(AssignableQueue.class);
    }
  }

}
