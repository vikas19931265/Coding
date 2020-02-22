package external.gw.plugin.system;

/**
 * Defines a pluggable interface for getting/setting the system time. The purpose of this plugin interface is to
facilitate testing date-sensitive operations. In production, this plugin should not be enabled.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITestingClock extends external.gw.api.startable.IStartablePlugin
{
  /**
   * Gets the current time, in milliseconds.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentTime")
  public long getCurrentTime();

  /**
   * Gets the current time, in milliseconds.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CurrentTime")
  public void setCurrentTime(long value);
}
