package com.guidewire.pl.plugin;

import gw.pl.external.Invoker;
import gw.plugin.IPlugin;

/**
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class PluginRegistry {

  private static final PluginRegistry _instance = new PluginRegistry();

  private PluginRegistry() {
  }

  public static PluginRegistry getPluginRegistry() {
    return _instance;
  }

  public <T extends IPlugin> T getPlugin(Class<T> pluginInterface) {
    return pluginInterface.cast(getPluginByName(pluginInterface.getSimpleName()));
  }

  public IPlugin getPluginByName(String pluginName) {
    return (IPlugin) Invoker.getInstance().invokeStaticMethod(PluginRegistry.class, "getExternalPlugin", new Class<?>[] { String.class }, new Object[] { pluginName });
  }

}