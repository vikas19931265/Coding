package com.guidewire.ab.external.entity;

/**
 * Stores date analysis data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DateAnalysisDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Average number of rows per date. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AvgRowsPerDate")
  public java.math.BigDecimal getAvgRowsPerDate();

  /**
   * Average number of rows per date. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AvgRowsPerDate")
  public void setAvgRowsPerDate(java.math.BigDecimal value);


  /**
   * Name of datetime column. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DatetimeColumnName")
  public java.lang.String getDatetimeColumnName();

  /**
   * Name of datetime column. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DatetimeColumnName")
  public void setDatetimeColumnName(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Maximum number of rows per date. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxRowsPerDate")
  public java.lang.Long getMaxRowsPerDate();

  /**
   * Maximum number of rows per date. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaxRowsPerDate")
  public void setMaxRowsPerDate(java.lang.Long value);


  /**
   * Minimum number of rows per date. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinRowsPerDate")
  public java.lang.Long getMinRowsPerDate();

  /**
   * Minimum number of rows per date. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinRowsPerDate")
  public void setMinRowsPerDate(java.lang.Long value);


  /**
   * Month NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Mnth")
  public java.lang.Integer getMnth();

  /**
   * Month NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Mnth")
  public void setMnth(java.lang.Integer value);


  /**
   * Number of distinct non-null dates. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumDistinctDates")
  public java.lang.Long getNumDistinctDates();

  /**
   * Number of distinct non-null dates. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumDistinctDates")
  public void setNumDistinctDates(java.lang.Long value);


  /**
   * Number of non-null, non-loadable rows. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumNonNullNonLoadableDates")
  public java.lang.Long getNumNonNullNonLoadableDates();

  /**
   * Number of non-null, non-loadable rows. NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumNonNullNonLoadableDates")
  public void setNumNonNullNonLoadableDates(java.lang.Long value);


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
   * TableDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableDataDist")
  public com.guidewire.ab.external.entity.TableDataDist getTableDataDist();

  /**
   * TableDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableDataDist")
  public void setTableDataDist(com.guidewire.ab.external.entity.TableDataDist value);


  /**
   * String of the format YYYY_MM, so that the value can be ordered
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "YearMonthString")
  public java.lang.String getYearMonthString();


  /**
   * Year NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Yr")
  public java.lang.Integer getYr();

  /**
   * Year NOTE: when inserting a DateAnalysisDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Yr")
  public void setYr(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of DateAnalysisDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DateAnalysisDataDist.
     */
    public static DateAnalysisDataDist newInstance()
    {
      return (DateAnalysisDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DateAnalysisDataDist.class);
    }
  }

}
