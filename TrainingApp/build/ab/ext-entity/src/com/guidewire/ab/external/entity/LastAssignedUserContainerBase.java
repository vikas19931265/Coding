package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LastAssignedUserContainerBase extends gw.pl.external.entity.Entity
{


  /**
   * The id of the last group that was assigned an activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastActivityGrp")
  public com.guidewire.ab.external.entity.Group getLastActivityGrp();

  /**
   * The id of the last group that was assigned an activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastActivityGrp")
  public void setLastActivityGrp(com.guidewire.ab.external.entity.Group value);


  /**
   * The id of the last user that was assigned an activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastActivityUser")
  public com.guidewire.ab.external.entity.User getLastActivityUser();

  /**
   * The id of the last user that was assigned an activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastActivityUser")
  public void setLastActivityUser(com.guidewire.ab.external.entity.User value);


  /**
   * The id of the last group that was assigned an assignment review activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastReviewGrp")
  public com.guidewire.ab.external.entity.Group getLastReviewGrp();

  /**
   * The id of the last group that was assigned an assignment review activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastReviewGrp")
  public void setLastReviewGrp(com.guidewire.ab.external.entity.Group value);


  /**
   * The id of the last user that was assigned an assignment review activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastReviewUser")
  public com.guidewire.ab.external.entity.User getLastReviewUser();

  /**
   * The id of the last user that was assigned an assignment review activity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastReviewUser")
  public void setLastReviewUser(com.guidewire.ab.external.entity.User value);


  /**
   * Utility class for initializing an instance of LastAssignedUserContainerBase
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LastAssignedUserContainerBase.
     */
    public static LastAssignedUserContainerBase newInstance()
    {
      return (LastAssignedUserContainerBase) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LastAssignedUserContainerBase.class);
    }
  }

}
