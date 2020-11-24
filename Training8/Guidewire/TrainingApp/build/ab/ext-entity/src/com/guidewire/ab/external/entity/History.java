package com.guidewire.ab.external.entity;

/**
 * Events in the contact audit trail.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface History extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Customer-defined history event type. This is used to support rules that execute only once per claim.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CustomType")
  public com.guidewire.ab.external.typelist.CustomHistoryType getCustomType();

  /**
   * Customer-defined history event type. This is used to support rules that execute only once per claim.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CustomType")
  public void setCustomType(com.guidewire.ab.external.typelist.CustomHistoryType value);


  /**
   * Description of the history event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of the history event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Timestamp when the event occurred.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EventTimestamp")
  public java.util.Date getEventTimestamp();

  /**
   * Timestamp when the event occurred.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EventTimestamp")
  public void setEventTimestamp(java.util.Date value);


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
   * The unique id of the rule that caused this history event to be created. Optional.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RuleUID")
  public java.lang.String getRuleUID();

  /**
   * The unique id of the rule that caused this history event to be created. Optional.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RuleUID")
  public void setRuleUID(java.lang.String value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.History getSubtype();


  /**
   * Tracked changes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TrackedChanges")
  public com.guidewire.ab.external.entity.TrackedChange[] getTrackedChanges();

  /**
   * Tracked changes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TrackedChanges")
  public void setTrackedChanges(com.guidewire.ab.external.entity.TrackedChange[] value);


  /**
   * Type of claim or exposure event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.HistoryType getType();

  /**
   * Type of claim or exposure event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.HistoryType value);


  /**
   * User who created this history event. Optional.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();

  /**
   * User who created this history event. Optional.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "User")
  public void setUser(com.guidewire.ab.external.entity.User value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTrackedChanges")
  public void addToTrackedChanges(com.guidewire.ab.external.entity.TrackedChange element);

  /**
   * null
   *
   * @param param KeyableBean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createTrackedChanges")
  public void createTrackedChanges(gw.pl.external.entity.KeyableEntity param);

  /**
   * null
   *
   * @param param KeyableBean
   * @param param1 Map<String, String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createTrackedChanges")
  public void createTrackedChanges(gw.pl.external.entity.KeyableEntity param, java.util.Map param1);

  /**
   * null
   *
   * @param param String
   * @param param1 String
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createTrackedChangesNoOriginalValues")
  public void createTrackedChangesNoOriginalValues(java.lang.String param, java.lang.String param1, java.lang.String param2);

  /**
   * null
   *
   * @param param KeyableBean
   * @param param1 Map<String, String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createTrackedChangesNoRestrict")
  public void createTrackedChangesNoRestrict(gw.pl.external.entity.KeyableEntity param, java.util.Map param1);

  /**
   * null
   *
   * @param param CustomHistoryType
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateBaseFields")
  public void populateBaseFields(com.guidewire.ab.external.typelist.CustomHistoryType param, java.lang.String param1);

  /**
   * null
   *
   * @param param CustomHistoryType
   * @param param1 String
   * @param param2 User
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateBaseFields")
  public void populateBaseFields(com.guidewire.ab.external.typelist.CustomHistoryType param, java.lang.String param1, com.guidewire.ab.external.entity.User param2);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TrackedChange from the TrackedChanges array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTrackedChanges")
  public void removeFromTrackedChanges(com.guidewire.ab.external.entity.TrackedChange element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TrackedChange having id elementID from the TrackedChanges array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTrackedChanges")
  public void removeFromTrackedChanges(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of History
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity History.
     */
    public static History newInstance()
    {
      return (History) gw.pl.external.entity.EntityFactory.getInstance().newEntity(History.class);
    }
  }

}
