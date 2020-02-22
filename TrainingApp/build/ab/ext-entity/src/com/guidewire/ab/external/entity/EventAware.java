package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EventAware extends gw.pl.external.entity.Entity
{

  /**
   * Associates an event with the bean, which will be fired when the bean is
committed. A bean with an event is considered changed.
   *
   * @param strEventId The event id.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addEvent")
  public void addEvent(java.lang.String strEventId);


  /**
   * Utility class for initializing an instance of EventAware
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity EventAware.
     */
    public static EventAware newInstance()
    {
      return (EventAware) gw.pl.external.entity.EntityFactory.getInstance().newEntity(EventAware.class);
    }
  }

}
