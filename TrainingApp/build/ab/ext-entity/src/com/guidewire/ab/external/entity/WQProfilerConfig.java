package com.guidewire.ab.external.entity;

/**
 * Profiler configuration for a work queue
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WQProfilerConfig extends com.guidewire.ab.external.entity.ProfilerConfig
{


  /**
   * True to capture individual stacks; null or false to aggregate the stacks
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IndividualStacks")
  public java.lang.Boolean isIndividualStacks();

  /**
   * True to capture individual stacks; null or false to aggregate the stacks
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IndividualStacks")
  public void setIndividualStacks(java.lang.Boolean value);


  /**
   * Utility class for initializing an instance of WQProfilerConfig
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WQProfilerConfig.
     */
    public static WQProfilerConfig newInstance()
    {
      return (WQProfilerConfig) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WQProfilerConfig.class);
    }
  }

}
