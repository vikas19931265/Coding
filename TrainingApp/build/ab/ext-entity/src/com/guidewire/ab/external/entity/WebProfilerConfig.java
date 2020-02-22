package com.guidewire.ab.external.entity;

/**
 * Profiler configuration for a web session
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WebProfilerConfig extends com.guidewire.ab.external.entity.ProfilerConfig
{


  /**
   * Utility class for initializing an instance of WebProfilerConfig
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WebProfilerConfig.
     */
    public static WebProfilerConfig newInstance()
    {
      return (WebProfilerConfig) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WebProfilerConfig.class);
    }
  }

}
