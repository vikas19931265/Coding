package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProfilerTag extends external.gw.api.profiler.ProfilerFrame, external.gw.api.profiler.ProfilerTagBase, external.gw.lang.IReentrant
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Children")
  public java.util.List getChildren();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ChildrenElapsedTime")
  public int getChildrenElapsedTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Closed")
  public boolean isClosed();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentFrame")
  public external.gw.api.profiler.ProfilerFrame getCurrentFrame();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElapsedTime")
  public int getElapsedTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FrameTime")
  public int getFrameTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumChildren")
  public int getNumChildren();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Offset")
  public int getOffset();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public external.gw.api.profiler.ProfilerFrame getParent();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Path")
  public java.lang.String getPath();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PropertiesAndCounters")
  public java.util.Map getPropertiesAndCounters();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tag")
  public external.gw.api.profiler.ProfilerTag getTag();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "close")
  public void close();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "enter")
  public void enter();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "exit")
  public void exit();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCounterValue")
  public int getCounterValue(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPropertyValue")
  public java.lang.String getPropertyValue(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasCounter")
  public boolean hasCounter(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasProperty")
  public boolean hasProperty(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "incrementCounter")
  public int incrementCounter(java.lang.String param);

  /**
   * null
   *
   * @param param String
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setCounterValue")
  public void setCounterValue(java.lang.String param, int param1);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setProperty")
  public void setProperty(java.lang.String param);

  /**
   * null
   *
   * @param param String
   * @param param1 CharSequence
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setPropertyValue")
  public void setPropertyValue(java.lang.String param, java.lang.CharSequence param1);


  /**
   * Utility class for accessing static features for external.gw.api.profiler.ProfilerTag
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
    public static external.gw.api.profiler.ProfilerTag getACQUIRE_LOCK_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ACQUIRE_LOCK_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getACTION_SERVLET_INIT_THREAD()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ACTION_SERVLET_INIT_THREAD");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getALL_ENTRY_POINTS_AGGREGATED()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ALL_ENTRY_POINTS_AGGREGATED");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getALL_ENTRY_POINTS_SEPARATELY()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ALL_ENTRY_POINTS_SEPARATELY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getALL_NAMES_FOR_BEAN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ALL_NAMES_FOR_BEAN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_ALLOC_IDS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_ALLOC_IDS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_BACK_PROC()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_BACK_PROC");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_COPY_DOM_DATA()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_COPY_DOM_DATA");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_DATABASE_SETUP()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_DATABASE_SETUP");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_DELETE_BEAN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_DELETE_BEAN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_DETECT_FAIL()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_DETECT_FAIL");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_INSERT_ADMIN_DATA()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_INSERT_ADMIN_DATA");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_INSERT_ADMIN_ROWS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_INSERT_ADMIN_ROWS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_INSERT_ADMIN_SRC()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_INSERT_ADMIN_SRC");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_MARK_ROOT()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_MARK_ROOT");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_OPS_COMP()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_OPS_COMP");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_POP_DENORMED()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_POP_DENORMED");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_POP_KEY_ARCHIVE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_POP_KEY_ARCHIVE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_POP_KEY_SRC()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_POP_KEY_SRC");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_POP_MAP_TABLE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_POP_MAP_TABLE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_POP_TYPE_KEY()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_POP_TYPE_KEY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_REMOVE_NON_ADMIN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_REMOVE_NON_ADMIN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_START_WORKERS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_START_WORKERS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_STOP_WORKERS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_STOP_WORKERS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_TAG_ADMIN_ROWS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_TAG_ADMIN_ROWS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_TAG_ROOT()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_TAG_ROOT");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_TAG_ROWS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_TAG_ROWS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_TAG_TABLE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_TAG_TABLE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_TX()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_TX");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_UPDATE_ADMIN_DATA()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_UPDATE_ADMIN_DATA");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_UPDATE_GRAPH()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_UPDATE_GRAPH");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_UPDATE_SRC_BEAN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_UPDATE_SRC_BEAN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getARCHIVE_WORK_WRITER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ARCHIVE_WORK_WRITER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getASSIGN_LIST_ITEMS_IN_QUEUE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ASSIGN_LIST_ITEMS_IN_QUEUE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getASSIGN_NEXT_ITEM_IN_QUEUE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ASSIGN_NEXT_ITEM_IN_QUEUE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getAUTOMATED_MESSAGE_RETRY()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "AUTOMATED_MESSAGE_RETRY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getBATCH_PROCESS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "BATCH_PROCESS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getBATCH_PROCESS_ACT()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "BATCH_PROCESS_ACT");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getBATCH_PROCESS_DO_WORK()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "BATCH_PROCESS_DO_WORK");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getBATCH_PROCESS_INSTRUMENTATION()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "BATCH_PROCESS_INSTRUMENTATION");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getBATCH_PROCESS_PHASE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "BATCH_PROCESS_PHASE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getBATCH_PROCESS_SETUP()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "BATCH_PROCESS_SETUP");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getBUILD_DATABASE_SCHEMA()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "BUILD_DATABASE_SCHEMA");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getBUILD_LOCATION_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "BUILD_LOCATION_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getBUILD_SECTION_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "BUILD_SECTION_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCHAINED_BATCH_PROCESS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "CHAINED_BATCH_PROCESS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCHANGE_RUNLEVEL()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "CHANGE_RUNLEVEL");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCLEAR_TABLE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "CLEAR_TABLE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCLOSE_CONNECTION()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "CLOSE_CONNECTION");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCLUSTER_MESSAGE_RECEIVED()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "CLUSTER_MESSAGE_RECEIVED");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCOLLECT_OUT_OF_SEQUENCE_CHANGE_DIFFS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "COLLECT_OUT_OF_SEQUENCE_CHANGE_DIFFS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCOMMIT_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "COMMIT_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCOMPRESS_REVISABLES()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "COMPRESS_REVISABLES");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCREATE_ITERATOR_DATA_LIST()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "CREATE_ITERATOR_DATA_LIST");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCREATE_ITERATOR_DATA_QP()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "CREATE_ITERATOR_DATA_QP");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCREATE_NEW_BRANCH()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "CREATE_NEW_BRANCH");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getCREATE_SUPERSEDING_REVISIONS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "CREATE_SUPERSEDING_REVISIONS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getClAIM_CONTACT_DENORM()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ClAIM_CONTACT_DENORM");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getClAIM_PAYEE_DENORM()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ClAIM_PAYEE_DENORM");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getClAIM_RECOVERY_DENORM()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ClAIM_RECOVERY_DENORM");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDAEMONS_ENTER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DAEMONS_ENTER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDAEMONS_LEAVE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DAEMONS_LEAVE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDATA_DISTRIBUTION()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DATA_DISTRIBUTION");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDBCP_ACTIVATE_CONN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DBCP_ACTIVATE_CONN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDBCP_DESTROY_CONN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DBCP_DESTROY_CONN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDBCP_GET_NEW_CONN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DBCP_GET_NEW_CONN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDBCP_GET_NEW_CONN_FROM_DATABASE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DBCP_GET_NEW_CONN_FROM_DATABASE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDBCP_INIT_NEW_CONN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DBCP_INIT_NEW_CONN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDBCP_PASSIVATE_CONN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DBCP_PASSIVATE_CONN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDBCP_VALIDATE_CONN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DBCP_VALIDATE_CONN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDB_CONSISTENCY_CHECKS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DB_CONSISTENCY_CHECKS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDB_PERFORMANCE_TESTER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DB_PERFORMANCE_TESTER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDB_PERFORMANCE_TESTER_LOAD_DATA()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DB_PERFORMANCE_TESTER_LOAD_DATA");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDB_RESET_TOOL()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DB_RESET_TOOL");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDB_STATISTICS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DB_STATISTICS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDELETE_SUPERSEDING_REVISIONS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DELETE_SUPERSEDING_REVISIONS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getDISTRIBUTED_KEY_ALLOCATOR()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "DISTRIBUTED_KEY_ALLOCATOR");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_BATCH_UPDATE_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_BATCH_UPDATE_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_CALLBACKS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_CALLBACKS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_DATABASE_QUERY_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_DATABASE_QUERY_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_EVENTS_STEP_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_EVENTS_STEP_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_INTERNAL_FIELD_CALLBACKS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_INTERNAL_FIELD_CALLBACKS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_QUERY_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_QUERY_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_RULES_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_RULES_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_RULE_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_RULE_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_SINGLE_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_SINGLE_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXECUTE_UPDATE_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXECUTE_UPDATE_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXTERNAL_CONN_POOL_INIT_NEW_CONN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXTERNAL_CONN_POOL_INIT_NEW_CONN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXTERNAL_CONN_POOL_INIT_NEW_CONN_CHECK_STATEMENT()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXTERNAL_CONN_POOL_INIT_NEW_CONN_CHECK_STATEMENT");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getEXTERNAL_CONN_POOL_INIT_NEW_CONN_SET_STATEMENT()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "EXTERNAL_CONN_POOL_INIT_NEW_CONN_SET_STATEMENT");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getFLUSH_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "FLUSH_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getFORKED_TRANSACTION_THREAD()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "FORKED_TRANSACTION_THREAD");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getFOR_TESTS_ONLY()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "FOR_TESTS_ONLY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGENERATE_EVENTS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GENERATE_EVENTS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGENERATE_MESSAGES_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GENERATE_MESSAGES_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGENERATE_PAYLOAD()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GENERATE_PAYLOAD");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGENERIC_FINDER_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GENERIC_FINDER_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGET_BATCH_ITERATOR()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GET_BATCH_ITERATOR");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGET_CONNECTION()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GET_CONNECTION");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGET_PREPARED_STMT_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GET_PREPARED_STMT_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGET_READ_CONNECTION_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GET_READ_CONNECTION_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGET_WRITE_CONNECTION_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GET_WRITE_CONNECTION_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getGOSU_METHOD_WRAPPER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "GOSU_METHOD_WRAPPER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getHANDLE_REVISIONING_BEANS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "HANDLE_REVISIONING_BEANS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getHAS_NEXT()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "HAS_NEXT");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getINSERT_INTO_MAIN_BRANCH()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "INSERT_INTO_MAIN_BRANCH");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getINSERT_UPDATE_ARRAY_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "INSERT_UPDATE_ARRAY_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getISO_MESSAGE_SINK_TIMEOUT()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ISO_MESSAGE_SINK_TIMEOUT");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getITERATOR_NEXT()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ITERATOR_NEXT");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getLOAD_BEANS_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "LOAD_BEANS_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getLOAD_BEAN_REV_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "LOAD_BEAN_REV_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getLOAD_BEAN_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "LOAD_BEAN_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getLOAD_CURRENT_CONFLICTING_BEANS_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "LOAD_CURRENT_CONFLICTING_BEANS_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getLOAD_JOIN_ARRAY_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "LOAD_JOIN_ARRAY_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getLOAD_REVISION_DEPENDENT_ARRAY_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "LOAD_REVISION_DEPENDENT_ARRAY_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getLOAD_REVISION_INDEPENDENT_ARRAY_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "LOAD_REVISION_INDEPENDENT_ARRAY_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getLOAD_VIRTUAL_ARRAY_KEY_LIST_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "LOAD_VIRTUAL_ARRAY_KEY_LIST_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getLOAD_VIRTUAL_ARRAY_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "LOAD_VIRTUAL_ARRAY_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMEMORY_USAGE_MONITOR()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MEMORY_USAGE_MONITOR");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMENU_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MENU_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMERGE_OUT_OF_SEQUENCE_CHANGES_FORWARD()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MERGE_OUT_OF_SEQUENCE_CHANGES_FORWARD");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMESSAGE_PLUGIN_CALLBACK()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MESSAGE_PLUGIN_CALLBACK");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMESSAGE_SENDER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MESSAGE_SENDER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMESSAGE_WRITER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MESSAGE_WRITER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMESSAGING_BEFORE_SEND()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MESSAGING_BEFORE_SEND");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMESSAGING_EXECUTE_MESSAGE_UPDATE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MESSAGING_EXECUTE_MESSAGE_UPDATE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMESSAGING_GET_CROSSPRIMARY()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MESSAGING_GET_CROSSPRIMARY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMESSAGING_GET_PRIMARY()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MESSAGING_GET_PRIMARY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMESSAGING_SEND_AND_AFTER_SEND()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MESSAGING_SEND_AND_AFTER_SEND");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMESSAGING_WAITUNTILEMPTY()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MESSAGING_WAITUNTILEMPTY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMULTIUSER_ENTER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MULTIUSER_ENTER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getMULTIUSER_LEAVE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "MULTIUSER_LEAVE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getNAME_FOR_BEAN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "NAME_FOR_BEAN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getNAME_FOR_QUERY_ROW()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "NAME_FOR_QUERY_ROW");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getNODAEMONS_ENTER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "NODAEMONS_ENTER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getNODAEMONS_LEAVE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "NODAEMONS_LEAVE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getNULL()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "NULL");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getONE_OPERATION()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ONE_OPERATION");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPHONE_NORMALIZER_WORK_QUEUE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PHONE_NORMALIZER_WORK_QUEUE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPHONE_NORMALIZER_WORK_QUEUE_WORK_ITEM()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PHONE_NORMALIZER_WORK_QUEUE_WORK_ITEM");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPING_THREAD()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PING_THREAD");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPLUGIN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PLUGIN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPOPULATE_BEAN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "POPULATE_BEAN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPOSTSTARTUP()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "POSTSTARTUP");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPOST_PROC_MAP_TABLES()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "POST_PROC_MAP_TABLES");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPREP_BUNDLE_POST_ID()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PREP_BUNDLE_POST_ID");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPREP_BUNDLE_PRE_ID()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PREP_BUNDLE_PRE_ID");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPRESTARTUP()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PRESTARTUP");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPRE_RENDER_LOCATION()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PRE_RENDER_LOCATION");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPROCESS_CONCURRENT_DATA_CHANGE_EXCEPTION()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PROCESS_CONCURRENT_DATA_CHANGE_EXCEPTION");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPROCESS_MONITOR_THREAD()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PROCESS_MONITOR_THREAD");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPROCESS_WAITER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PROCESS_WAITER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPROFILER_AGGREGATE_DATA()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PROFILER_AGGREGATE_DATA");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPROFILER_TO_STRING()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PROFILER_TO_STRING");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPROMOTE_TO_MAIN_BRANCH()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PROMOTE_TO_MAIN_BRANCH");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPURGE_BATCH_PROCESS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PURGE_BATCH_PROCESS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getPURGE_PROFILE_DATA()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "PURGE_PROFILE_DATA");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getQUERY_ROW()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "QUERY_ROW");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getREAD_HANDLER_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "READ_HANDLER_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getREAD_ROWS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "READ_ROWS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getREAD_TYPES_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "READ_TYPES_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getREFRESH_BEANS_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "REFRESH_BEANS_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getREMOVE_JOIN_ARRAYS_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "REMOVE_JOIN_ARRAYS_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getRENDER_LOCATION()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "RENDER_LOCATION");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getREQUEST_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "REQUEST_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getRETIRE_INSERT_UPDATE_REMOVE_BEANS_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "RETIRE_INSERT_UPDATE_REMOVE_BEANS_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getROLLBACK_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ROLLBACK_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getROUND_ROBIN_GROUP_SELECTOR()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ROUND_ROBIN_GROUP_SELECTOR");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getROUND_ROBIN_USER_SELECTOR()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "ROUND_ROBIN_USER_SELECTOR");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getRUN_LEVEL_THREAD()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "RUN_LEVEL_THREAD");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getRUN_LIFECYCLE_STEPS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "RUN_LIFECYCLE_STEPS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getRUN_TESTS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "RUN_TESTS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSEARCH_COLUMN_DENORM()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SEARCH_COLUMN_DENORM");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSELECT_INTEGER_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SELECT_INTEGER_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSELECT_LONG_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SELECT_LONG_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSELECT_STRING_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SELECT_STRING_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSERVER_INITIALIZATION()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SERVER_INITIALIZATION");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSERVER_SHUTDOWN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SERVER_SHUTDOWN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSESSION_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SESSION_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSET_BUNDLE_TO_NULL()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SET_BUNDLE_TO_NULL");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSET_INSERTED_BEAN_IDS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SET_INSERTED_BEAN_IDS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSOAP_BODY_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SOAP_BODY_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSOAP_DESERIALIZE_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SOAP_DESERIALIZE_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSOAP_SERIALIZE_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SOAP_SERIALIZE_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSOAP_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SOAP_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSPAWN_INITIALIZATION_THREAD()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SPAWN_INITIALIZATION_THREAD");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSTARTABLE_PLUGIN()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "STARTABLE_PLUGIN");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSTARTABLE_PLUGINS_START()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "STARTABLE_PLUGINS_START");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSTARTABLE_PLUGINS_STOP()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "STARTABLE_PLUGINS_STOP");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSTART_SERVER_OUTSIDE_SERVLET_CONTAINER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "START_SERVER_OUTSIDE_SERVLET_CONTAINER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSUMMARIZE_PROFILER_DATA()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SUMMARIZE_PROFILER_DATA");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getSYNCH_INDEX_NAMES_IN_DM_TO_ON_DISK_NAMES()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "SYNCH_INDEX_NAMES_IN_DM_TO_ON_DISK_NAMES");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getTASK_QUEUE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "TASK_QUEUE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getTEST_HARNESS_HELPER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "TEST_HARNESS_HELPER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getUDP_LISTENER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "UDP_LISTENER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getUPDATE_TAG()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "UPDATE_TAG");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWORKER_CHECKOUT_WORK_ITEMS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WORKER_CHECKOUT_WORK_ITEMS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWORKER_PROCESS_PHASE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WORKER_PROCESS_PHASE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWORKER_PROCESS_WORK_ITEM()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WORKER_PROCESS_WORK_ITEM");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWORKER_RUNNER()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WORKER_RUNNER");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWORKFLOW_MONITOR()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WORKFLOW_MONITOR");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWORK_QUEUE_WRITER_CLEANUP_PHASE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WORK_QUEUE_WRITER_CLEANUP_PHASE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWORK_QUEUE_WRITER_LOOP_PHASE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WORK_QUEUE_WRITER_LOOP_PHASE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWORK_QUEUE_WRITER_SETUP_PHASE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WORK_QUEUE_WRITER_SETUP_PHASE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWRITE_BEANS()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WRITE_BEANS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.profiler.ProfilerTag getWRITE_TO_BCP_FILE()
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTag.class, "WRITE_TO_BCP_FILE");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param ProfilerTag
     */
    public static boolean isDBTag(external.gw.api.profiler.ProfilerTag param)
    {
      return (java.lang.Boolean) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.profiler.ProfilerTag.class, "isDBTag", new Class[]{ external.gw.api.profiler.ProfilerTag.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.ProfilerTag
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static ProfilerTag newInstance(java.lang.String param)
    {
      return (ProfilerTag) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.ProfilerTag.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

  }
}
