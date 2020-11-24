package external.gw.api.database;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DatabaseParameterSet
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeNames")
  public java.lang.String[] getAttributeNames();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeValues")
  public java.lang.Object[][] getAttributeValues();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeValuesAsList")
  public java.util.List getAttributeValuesAsList();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeValuesAsStrings")
  public java.lang.String[][] getAttributeValuesAsStrings();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Classes")
  public external.gw.datatype.JdbcType[] getClasses();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Classes")
  public void setClasses(external.gw.datatype.JdbcType[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CompareColumns")
  public int[] getCompareColumns();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CompareColumns")
  public void setCompareColumns(int[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EscapeContents")
  public boolean[] getEscapeContents();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EscapeContents")
  public void setEscapeContents(boolean[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "KeyColumns")
  public int[] getKeyColumns();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "KeyColumns")
  public void setKeyColumns(int[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NameValuePairArrays")
  public external.gw.util.Pair[][] getNameValuePairArrays();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RenderName")
  public java.lang.String getRenderName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RenderName")
  public void setRenderName(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RowItemLabel")
  public java.lang.String getRowItemLabel();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RowItemLabel")
  public void setRowItemLabel(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SetNumber")
  public int getSetNumber();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SetNumber")
  public void setSetNumber(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SparseAttributeNames")
  public java.lang.String[] getSparseAttributeNames();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SparseColumnSetArray")
  public int[] getSparseColumnSetArray();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SparseColumnSetArray")
  public void setSparseColumnSetArray(int[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StorageSetType")
  public com.guidewire.ab.external.typelist.UpgradeDBStorageSetType getStorageSetType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StorageSetType")
  public void setStorageSetType(com.guidewire.ab.external.typelist.UpgradeDBStorageSetType value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SuperHeaderSpanColumns")
  public int[] getSuperHeaderSpanColumns();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SuperHeaderSpanColumns")
  public void setSuperHeaderSpanColumns(int[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SuperHeaders")
  public java.lang.String[] getSuperHeaders();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SuperHeaders")
  public void setSuperHeaders(java.lang.String[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableNameAttributeIndex")
  public int getTableNameAttributeIndex();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableNameAttributeIndex")
  public void setTableNameAttributeIndex(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TransformName")
  public java.lang.String getTransformName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TransformName")
  public void setTransformName(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Widths")
  public java.lang.String[] getWidths();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Widths")
  public void setWidths(java.lang.String[] value);

  /**
   * null
   *
   * @param param Object[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public void add(java.lang.Object[] param);

  /**
   * null
   *
   * @param param String
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAttributeValues")
  public java.util.List getAttributeValues(java.lang.String param, int param1);

  /**
   * null
   *
   * @param param int
   * @param param1 Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getHTMLLink")
  public java.lang.String getHTMLLink(int param, java.lang.Object param1);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mapAttributeToTableName")
  public void mapAttributeToTableName(int param);

  /**
   * null
   *
   * @param param int
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mapAttributeToTableName")
  public void mapAttributeToTableName(int param, java.lang.String param1);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reorderAttributeValuesByKeyColumns")
  public void reorderAttributeValuesByKeyColumns();

  /**
   * null
   *
   * @param param List<String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeNames")
  public void setAttributeNames(java.util.List param);

  /**
   * null
   *
   * @param param List<Object[]>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeValues")
  public void setAttributeValues(java.util.List param);

  /**
   * null
   *
   * @param param Integer[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setSuperHeaderSpanColumns")
  public void setSuperHeaderSpanColumns(java.lang.Integer[] param);

  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setTransformThisSet")
  public void setTransformThisSet(boolean param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "shouldTransformThisSet")
  public boolean shouldTransformThisSet();


  /**
   * Utility class for initializing an instance of external.gw.api.database.DatabaseParameterSet
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String[]

     */
    public static DatabaseParameterSet newInstance(java.lang.String[] param)
    {
      return (DatabaseParameterSet) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.DatabaseParameterSet.class, new Class[]{ java.lang.String[].class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param String[]
     * @param param1 int[]
     * @param param2 String

     */
    public static DatabaseParameterSet newInstance(java.lang.String[] param, int[] param1, java.lang.String param2)
    {
      return (DatabaseParameterSet) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.DatabaseParameterSet.class, new Class[]{ java.lang.String[].class, int[].class, java.lang.String.class} , new Object[]{ param, param1, param2});
    }

  }
}
