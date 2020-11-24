package com.guidewire.ab.external.entity;

/**
 * History of calls into startable plugins
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface StartablePluginHistory extends com.guidewire.ab.external.entity.InboundHistory
{


  /**
   * The name of the plugin. NOTE: when inserting a StartablePluginHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PluginName")
  public java.lang.String getPluginName();

  /**
   * The name of the plugin. NOTE: when inserting a StartablePluginHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PluginName")
  public void setPluginName(java.lang.String value);


  /**
   * Utility class for initializing an instance of StartablePluginHistory
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity StartablePluginHistory.
     */
    public static StartablePluginHistory newInstance()
    {
      return (StartablePluginHistory) gw.pl.external.entity.EntityFactory.getInstance().newEntity(StartablePluginHistory.class);
    }
  }

}
