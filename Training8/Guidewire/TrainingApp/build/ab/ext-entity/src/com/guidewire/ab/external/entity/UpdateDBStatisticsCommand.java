package com.guidewire.ab.external.entity;

/**
 * DB statistics commands to run after a staging table load.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpdateDBStatisticsCommand extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommand")
  public com.guidewire.ab.external.entity.LoadCommand getLoadCommand();

  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadCommand")
  public void setLoadCommand(com.guidewire.ab.external.entity.LoadCommand value);


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
   * Update database statistics command to run. NOTE: when inserting a UpdateDBStatisticsCommand this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StatsCommand")
  public java.lang.String getStatsCommand();

  /**
   * Update database statistics command to run. NOTE: when inserting a UpdateDBStatisticsCommand this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StatsCommand")
  public void setStatsCommand(java.lang.String value);


  /**
   * Affected table. NOTE: when inserting a UpdateDBStatisticsCommand this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Affected table. NOTE: when inserting a UpdateDBStatisticsCommand this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableName")
  public void setTableName(java.lang.String value);


  /**
   * Utility class for initializing an instance of UpdateDBStatisticsCommand
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpdateDBStatisticsCommand.
     */
    public static UpdateDBStatisticsCommand newInstance()
    {
      return (UpdateDBStatisticsCommand) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpdateDBStatisticsCommand.class);
    }
  }

}
