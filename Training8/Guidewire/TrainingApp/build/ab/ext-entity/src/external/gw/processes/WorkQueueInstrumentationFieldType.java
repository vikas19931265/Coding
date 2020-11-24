package external.gw.processes;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public enum WorkQueueInstrumentationFieldType implements gw.pl.external.ExternalEnum
{
  STRING,
  LONG,
  BOOLEAN,
  DOUBLE,
  DATE,
  ;


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "JavaType")
  public java.lang.Class getJavaType()
  {
    return (java.lang.Class) gw.pl.external.Invoker.getInstance().getProperty(this, external.gw.processes.WorkQueueInstrumentationFieldType.class, "JavaType");
  }
}

