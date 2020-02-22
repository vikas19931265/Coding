package external.gw.processes;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkQueueInstrumentation
{

  /**
   * null
   *
   * @param param String
   * @param param1 double
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addDouble")
  public java.lang.Double addDouble(java.lang.String param, double param1);

  /**
   * null
   *
   * @param param String
   * @param param1 long
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addLong")
  public java.lang.Long addLong(java.lang.String param, long param1);

  /**
   * null
   *
   * @param param String
   * @param param1 Boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getBoolean")
  public java.lang.Boolean getBoolean(java.lang.String param, java.lang.Boolean param1);

  /**
   * null
   *
   * @param param String
   * @param param1 Date
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDate")
  public java.util.Date getDate(java.lang.String param, java.util.Date param1);

  /**
   * null
   *
   * @param param String
   * @param param1 Double
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDouble")
  public java.lang.Double getDouble(java.lang.String param, java.lang.Double param1);

  /**
   * null
   *
   * @param param String
   * @param param1 Long
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getLong")
  public java.lang.Long getLong(java.lang.String param, java.lang.Long param1);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getObject")
  public java.lang.Object getObject(java.lang.String param);

  /**
   * null
   *
   * @param param String
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getString")
  public java.lang.String getString(java.lang.String param, java.lang.String param1);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "length")
  public int length();

  /**
   * null
   *
   * @param param String
   * @param param1 Boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setBoolean")
  public void setBoolean(java.lang.String param, java.lang.Boolean param1);

  /**
   * null
   *
   * @param param String
   * @param param1 Date
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setDate")
  public void setDate(java.lang.String param, java.util.Date param1);

  /**
   * null
   *
   * @param param String
   * @param param1 Double
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setDouble")
  public void setDouble(java.lang.String param, java.lang.Double param1);

  /**
   * null
   *
   * @param param String
   * @param param1 Long
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setLong")
  public void setLong(java.lang.String param, java.lang.Long param1);

  /**
   * null
   *
   * @param param String
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setString")
  public void setString(java.lang.String param, java.lang.String param1);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toJSON")
  public java.lang.String toJSON();


  /**
   * Utility class for accessing static features for external.gw.processes.WorkQueueInstrumentation
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static external.gw.processes.WorkQueueInstrumentation getCurrent()
    {
      return (external.gw.processes.WorkQueueInstrumentation) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.processes.WorkQueueInstrumentation.class, "Current");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param Map<String, WorkQueueInstrumentationFieldType>
     */
    public static external.gw.processes.WorkQueueInstrumentation createEmpty(java.util.Map param)
    {
      return (external.gw.processes.WorkQueueInstrumentation) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.processes.WorkQueueInstrumentation.class, "createEmpty", new Class[]{ java.util.Map.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Map<String, WorkQueueInstrumentationFieldType>
     * @param param1 String
     */
    public static external.gw.processes.WorkQueueInstrumentation fromJSON(java.util.Map param, java.lang.String param1)
    {
      return (external.gw.processes.WorkQueueInstrumentation) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.processes.WorkQueueInstrumentation.class, "fromJSON", new Class[]{ java.util.Map.class, java.lang.String.class} , new Object[]{ param, param1});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.processes.WorkQueueInstrumentation
   */
  public static class CONSTRUCT
  {

  }
}
