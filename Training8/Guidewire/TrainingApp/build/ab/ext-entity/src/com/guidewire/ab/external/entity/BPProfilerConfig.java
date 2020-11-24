package com.guidewire.ab.external.entity;

/**
 * Profiler configuration for a batch process
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BPProfilerConfig extends com.guidewire.ab.external.entity.ProfilerConfig
{


  /**
   * Utility class for initializing an instance of BPProfilerConfig
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity BPProfilerConfig.
     */
    public static BPProfilerConfig newInstance()
    {
      return (BPProfilerConfig) gw.pl.external.entity.EntityFactory.getInstance().newEntity(BPProfilerConfig.class);
    }
  }

}
