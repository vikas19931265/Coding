package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public enum ClassType implements gw.pl.external.ExternalEnum
{
  Enhancement,
  Program,
  Template,
  Eval,
  Interface,
  Enum,
  JavaClass,
  Unknown,
  ;


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Ext")
  public java.lang.String getExt()
  {
    return (java.lang.String) gw.pl.external.Invoker.getInstance().getProperty(this, external.gw.lang.reflect.gs.ClassType.class, "Ext");
  }

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Gosu")
  public boolean isGosu()
  {
    return (java.lang.Boolean) gw.pl.external.Invoker.getInstance().getProperty(this, external.gw.lang.reflect.gs.ClassType.class, "Gosu");
  }

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Java")
  public boolean isJava()
  {
    return (java.lang.Boolean) gw.pl.external.Invoker.getInstance().getProperty(this, external.gw.lang.reflect.gs.ClassType.class, "Java");
  }

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getFromFileName")
  public static external.gw.lang.reflect.gs.ClassType getFromFileName(java.lang.String param)
  {
    return (external.gw.lang.reflect.gs.ClassType) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.lang.reflect.gs.ClassType.class, "getFromFileName", new Class[]{ java.lang.String.class} , new Object[]{ param});
  }
}

