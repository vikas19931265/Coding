package external.gw.api.database;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DBDateRange extends external.gw.api.database.Range<java.util.Date>, java.io.Serializable
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllTime")
  public boolean isAllTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeginDate")
  public java.util.Date getBeginDate();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CommentForQuery")
  public java.lang.String getCommentForQuery();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndDate")
  public java.util.Date getEndDate();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "First")
  public java.util.Date getFirst();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Last")
  public java.util.Date getLast();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LowerBounded")
  public boolean isLowerBounded();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpperBoundInclusive")
  public boolean isUpperBoundInclusive();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpperBounded")
  public boolean isUpperBounded();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "normalizeDates")
  public void normalizeDates();

  /**
   * null
   *
   * @param param Date
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setBeginDate")
  public void setBeginDate(java.util.Date param, boolean param1);

  /**
   * null
   *
   * @param param Date
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setEndDate")
  public void setEndDate(java.util.Date param, boolean param1);


  /**
   * Utility class for initializing an instance of external.gw.api.database.DBDateRange
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static DBDateRange newInstance()
    {
      return (DBDateRange) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.DBDateRange.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param Date
     * @param param1 Date
     * @param param2 boolean

     */
    public static DBDateRange newInstance(java.util.Date param, java.util.Date param1, boolean param2)
    {
      return (DBDateRange) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.DBDateRange.class, new Class[]{ java.util.Date.class, java.util.Date.class, boolean.class} , new Object[]{ param, param1, param2});
    }

  }
}
