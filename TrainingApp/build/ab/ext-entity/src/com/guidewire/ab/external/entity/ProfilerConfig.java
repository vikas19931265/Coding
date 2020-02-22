package com.guidewire.ab.external.entity;

/**
 * Profiler configuration for an entry point
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProfilerConfig extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The threshold for generating a report using dbms counters for the interval (start of profiling session, end of profiling session). Use 0 to disable. Only meaningful if ProfilerEnabled is true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DbmsCounterThresholdMs")
  public java.lang.Integer getDbmsCounterThresholdMs();

  /**
   * The threshold for generating a report using dbms counters for the interval (start of profiling session, end of profiling session). Use 0 to disable. Only meaningful if ProfilerEnabled is true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DbmsCounterThresholdMs")
  public void setDbmsCounterThresholdMs(java.lang.Integer value);


  /**
   * Whether diffing DBMS counters is enabled. Only meaningful if ProfilerEnabled and DbmsCounterThresholdMs are true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DiffDbmsCounters")
  public java.lang.Boolean isDiffDbmsCounters();

  /**
   * Whether diffing DBMS counters is enabled. Only meaningful if ProfilerEnabled and DbmsCounterThresholdMs are true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DiffDbmsCounters")
  public void setDiffDbmsCounters(java.lang.Boolean value);


  /**
   * Name of entry point NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntryPoint")
  public java.lang.String getEntryPoint();

  /**
   * Name of entry point NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EntryPoint")
  public void setEntryPoint(java.lang.String value);


  /**
   * Whether extended query tracing is enabled. Only meaningful if ProfilerEnabled is true. NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExtendedQueryTracing")
  public java.lang.Boolean isExtendedQueryTracing();

  /**
   * Whether extended query tracing is enabled. Only meaningful if ProfilerEnabled is true. NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExtendedQueryTracing")
  public void setExtendedQueryTracing(java.lang.Boolean value);


  /**
   * Whether to use hi-resolution clock for timing (Windows only)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HiResClock")
  public java.lang.Boolean isHiResClock();

  /**
   * Whether to use hi-resolution clock for timing (Windows only)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HiResClock")
  public void setHiResClock(java.lang.Boolean value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Whether profiling is enabled for this entry point NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProfilerEnabled")
  public java.lang.Boolean isProfilerEnabled();

  /**
   * Whether profiling is enabled for this entry point NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProfilerEnabled")
  public void setProfilerEnabled(java.lang.Boolean value);


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * Whether query optimizer tracing is enabled. Only meaningful if ProfilerEnabled is true. NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueryOptimizerTracing")
  public java.lang.Boolean isQueryOptimizerTracing();

  /**
   * Whether query optimizer tracing is enabled. Only meaningful if ProfilerEnabled is true. NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "QueryOptimizerTracing")
  public void setQueryOptimizerTracing(java.lang.Boolean value);


  /**
   * Whether stack tracing is enabled. Only meaningful if ProfilerEnabled is true. NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StackTraceTracking")
  public java.lang.Boolean isStackTraceTracking();

  /**
   * Whether stack tracing is enabled. Only meaningful if ProfilerEnabled is true. NOTE: when inserting a ProfilerConfig this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StackTraceTracking")
  public void setStackTraceTracking(java.lang.Boolean value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.ProfilerConfig getSubtype();


  /**
   * Utility class for initializing an instance of ProfilerConfig
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ProfilerConfig.
     */
    public static ProfilerConfig newInstance()
    {
      return (ProfilerConfig) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ProfilerConfig.class);
    }
  }

}
