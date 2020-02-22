package com.guidewire.ab.external.entity;

/**
 * Profiler configuration for a startable plugin
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SPProfilerConfig extends com.guidewire.ab.external.entity.ProfilerConfig
{


  /**
   * Utility class for initializing an instance of SPProfilerConfig
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity SPProfilerConfig.
     */
    public static SPProfilerConfig newInstance()
    {
      return (SPProfilerConfig) gw.pl.external.entity.EntityFactory.getInstance().newEntity(SPProfilerConfig.class);
    }
  }

}
