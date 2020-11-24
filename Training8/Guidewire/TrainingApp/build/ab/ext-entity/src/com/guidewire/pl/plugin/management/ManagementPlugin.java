package com.guidewire.pl.plugin.management;

/**
 * The ManagementPlugin interface serves as the external management interface for Guidewire systems.
As the application starts up and runs, GWMBeans will be registered and unregistered.  It's the job
of the plugin to expose these beans the external world however it sees fit (via JMX, via SNMP, etc.).
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ManagementPlugin extends gw.plugin.IPlugin
{

  /**
   * 
   *
   * @param bean 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "registerBean")
  public void registerBean(gw.plugin.management.GWMBean bean);



  /**
   * 
   *
   * @param notification 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "sendNotification")
  public void sendNotification(gw.plugin.management.Notification notification);



  /**
   * 
   *
   * @param handler 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAuthorizationCallbackHandler")
  public void setAuthorizationCallbackHandler(gw.plugin.management.ManagementAuthorizationCallbackHandler handler);



  /**
   * Start
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "start")
  public void start();



  /**
   * 
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "stop")
  public void stop();



  /**
   * 
   *
   * @param bean 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "unregisterBean")
  public void unregisterBean(gw.plugin.management.GWMBean bean);



  /**
   * 
   *
   * @param prefix 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "unregisterBeanByNamePrefix")
  public void unregisterBeanByNamePrefix(java.lang.String prefix);

}
