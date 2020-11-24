package external.gw.datatype;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public enum JdbcType implements gw.pl.external.ExternalEnum
{
  BIGINT,
  BIT,
  BLOB,
  BOOLEAN,
  CLOB,
  DECIMAL,
  DOUBLE,
  FLOAT,
  INTEGER,
  TIMESTAMP,
  VARCHAR,
  VARBINARY,
  SPATIAL_POINT,
  SPATIAL_POLYGON,
  ;


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Lob")
  public boolean isLob()
  {
    return (java.lang.Boolean) gw.pl.external.Invoker.getInstance().getProperty(this, external.gw.datatype.JdbcType.class, "Lob");
  }

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Spatial")
  public boolean isSpatial()
  {
    return (java.lang.Boolean) gw.pl.external.Invoker.getInstance().getProperty(this, external.gw.datatype.JdbcType.class, "Spatial");
  }

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeValue")
  public int getTypeValue()
  {
    return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getProperty(this, external.gw.datatype.JdbcType.class, "TypeValue");
  }

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValueClass")
  public java.lang.Class getValueClass()
  {
    return (java.lang.Class) gw.pl.external.Invoker.getInstance().getProperty(this, external.gw.datatype.JdbcType.class, "ValueClass");
  }

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "valueOf")
  public static external.gw.datatype.JdbcType valueOf(int param)
  {
    return (external.gw.datatype.JdbcType) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.datatype.JdbcType.class, "valueOf", new Class[]{ int.class} , new Object[]{ param});
  }

  /**
   * null
   *
   * @param param Class<Object>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "valueOf")
  public static external.gw.datatype.JdbcType valueOf(java.lang.Class param)
  {
    return (external.gw.datatype.JdbcType) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.datatype.JdbcType.class, "valueOf", new Class[]{ java.lang.Class.class} , new Object[]{ param});
  }
}

