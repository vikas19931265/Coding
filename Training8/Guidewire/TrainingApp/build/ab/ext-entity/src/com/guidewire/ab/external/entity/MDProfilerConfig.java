package com.guidewire.ab.external.entity;

/**
 * Profiler configuration for a message writer
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MDProfilerConfig extends com.guidewire.ab.external.entity.ProfilerConfig
{


  /**
   * Utility class for initializing an instance of MDProfilerConfig
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity MDProfilerConfig.
     */
    public static MDProfilerConfig newInstance()
    {
      return (MDProfilerConfig) gw.pl.external.entity.EntityFactory.getInstance().newEntity(MDProfilerConfig.class);
    }
  }

}
