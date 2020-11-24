package com.guidewire.ab.external.entity;

/**
 * Profiler configuration for a web service
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WSProfilerConfig extends com.guidewire.ab.external.entity.ProfilerConfig
{


  /**
   * Utility class for initializing an instance of WSProfilerConfig
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WSProfilerConfig.
     */
    public static WSProfilerConfig newInstance()
    {
      return (WSProfilerConfig) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WSProfilerConfig.class);
    }
  }

}
