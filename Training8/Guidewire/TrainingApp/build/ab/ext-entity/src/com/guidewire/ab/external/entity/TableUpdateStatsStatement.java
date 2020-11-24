package com.guidewire.ab.external.entity;

/**
 * Database parameter row.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TableUpdateStatsStatement extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Object Name NOTE: when inserting a TableUpdateStatsStatement this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ObjectName")
  public java.lang.String getObjectName();

  /**
   * Object Name NOTE: when inserting a TableUpdateStatsStatement this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ObjectName")
  public void setObjectName(java.lang.String value);


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
   * Parent
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableUpdateStats")
  public com.guidewire.ab.external.entity.TableUpdateStats getTableUpdateStats();

  /**
   * Parent
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableUpdateStats")
  public void setTableUpdateStats(com.guidewire.ab.external.entity.TableUpdateStats value);


  /**
   * Update Statistics Statement NOTE: when inserting a TableUpdateStatsStatement this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateStatsStatement")
  public java.lang.String getUpdateStatsStatement();

  /**
   * Update Statistics Statement NOTE: when inserting a TableUpdateStatsStatement this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateStatsStatement")
  public void setUpdateStatsStatement(java.lang.String value);


  /**
   * Type of process running the operation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateStatsType")
  public com.guidewire.ab.external.typelist.TableUpdateStatsType getUpdateStatsType();

  /**
   * Type of process running the operation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateStatsType")
  public void setUpdateStatsType(com.guidewire.ab.external.typelist.TableUpdateStatsType value);


  /**
   * Utility class for initializing an instance of TableUpdateStatsStatement
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TableUpdateStatsStatement.
     */
    public static TableUpdateStatsStatement newInstance()
    {
      return (TableUpdateStatsStatement) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TableUpdateStatsStatement.class);
    }
  }

}
