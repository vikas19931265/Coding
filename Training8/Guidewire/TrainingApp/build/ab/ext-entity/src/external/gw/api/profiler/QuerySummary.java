package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface QuerySummary
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Args")
  public java.lang.String getArgs();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArgsFP")
  public external.gw.util.fingerprint.FP64 getArgsFP();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FilteredStackTrace")
  public java.lang.String getFilteredStackTrace();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FullStackTrace")
  public java.lang.String getFullStackTrace();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FullStackTraceFP")
  public external.gw.util.fingerprint.FP64 getFullStackTraceFP();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PcfStackTrace")
  public java.lang.String getPcfStackTrace();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PcfStackTraceFP")
  public external.gw.util.fingerprint.FP64 getPcfStackTraceFP();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrettyPrintedSQL")
  public java.lang.String getPrettyPrintedSQL();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueryFP")
  public external.gw.util.fingerprint.FP64 getQueryFP();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueryString")
  public java.lang.String getQueryString();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RowCount")
  public int getRowCount();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Time")
  public int getTime();

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDomainStackTrace")
  public java.lang.String getDomainStackTrace(int param);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getShortArgs")
  public java.lang.String getShortArgs(int param);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getShortQueryString")
  public java.lang.String getShortQueryString(int param);


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.QuerySummary
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param ProfilerFrame

     */
    public static QuerySummary newInstance(external.gw.api.profiler.ProfilerFrame param)
    {
      return (QuerySummary) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.QuerySummary.class, new Class[]{ external.gw.api.profiler.ProfilerFrame.class} , new Object[]{ param});
    }

  }
}
