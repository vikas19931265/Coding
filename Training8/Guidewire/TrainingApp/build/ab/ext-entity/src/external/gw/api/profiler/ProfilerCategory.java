package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public enum ProfilerCategory implements gw.pl.external.ExternalEnum
{
  Database,
  Rule,
  Plugin,
  Integration,
  Web,
  Other,
  ;


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Color")
  public java.awt.Color getColor()
  {
    return (java.awt.Color) gw.pl.external.Invoker.getInstance().getProperty(this, external.gw.api.profiler.ProfilerCategory.class, "Color");
  }
}

