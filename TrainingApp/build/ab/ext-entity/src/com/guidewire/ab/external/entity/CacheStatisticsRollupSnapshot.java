package com.guidewire.ab.external.entity;

/**
 * Rollup snapshot for the global cache for a particular time slice
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CacheStatisticsRollupSnapshot extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Average number of hits for this time slice NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AverageNumHits")
  public java.lang.Long getAverageNumHits();

  /**
   * Average number of hits for this time slice NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AverageNumHits")
  public void setAverageNumHits(java.lang.Long value);


  /**
   * Average number of misses for this time slice NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AverageNumMisses")
  public java.lang.Long getAverageNumMisses();

  /**
   * Average number of misses for this time slice NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AverageNumMisses")
  public void setAverageNumMisses(java.lang.Long value);


  /**
   * Average number of misses because the item was evicted when the cache was full for this time slice NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AverageNumMissesWhenCacheFull")
  public java.lang.Long getAverageNumMissesWhenCacheFull();

  /**
   * Average number of misses because the item was evicted when the cache was full for this time slice NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AverageNumMissesWhenCacheFull")
  public void setAverageNumMissesWhenCacheFull(java.lang.Long value);


  /**
   * Average space retained in bytes for this time slice NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AverageSpaceRetained")
  public java.lang.Long getAverageSpaceRetained();

  /**
   * Average space retained in bytes for this time slice NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AverageSpaceRetained")
  public void setAverageSpaceRetained(java.lang.Long value);


  /**
   * String representing the line in CSV formatPLC
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CSVLine")
  public java.lang.String getCSVLine();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


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
   * ServerId of the host that generated the statistics NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServerId")
  public java.lang.String getServerId();

  /**
   * ServerId of the host that generated the statistics NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServerId")
  public void setServerId(java.lang.String value);


  /**
   * Lower end of this time slice, i.e 00:00:00,000 for the range 00:00:00,000 to 00:29:59,999 NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SliceTimestamp")
  public java.util.Date getSliceTimestamp();

  /**
   * Lower end of this time slice, i.e 00:00:00,000 for the range 00:00:00,000 to 00:29:59,999 NOTE: when inserting a CacheStatisticsRollupSnapshot this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SliceTimestamp")
  public void setSliceTimestamp(java.util.Date value);


  /**
   * Utility class for initializing an instance of CacheStatisticsRollupSnapshot
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity CacheStatisticsRollupSnapshot.
     */
    public static CacheStatisticsRollupSnapshot newInstance()
    {
      return (CacheStatisticsRollupSnapshot) gw.pl.external.entity.EntityFactory.getInstance().newEntity(CacheStatisticsRollupSnapshot.class);
    }
  }

}
