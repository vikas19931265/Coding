package external.gw.plugin.upgrade;

/**
 * Provides details about configurable database upgrade options.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDatamodelUpgrade extends gw.plugin.IPlugin
{
  /**
   * A list of version triggers to execute after the automated upgrade. All applicable triggers are
executed in the order given.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AfterUpgradeDatamodelChanges")
  public java.util.List getAfterUpgradeDatamodelChanges();

  /**
   * A list of version triggers to execute before the automated upgrade. All applicable triggers are
executed in the order given.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeforeUpgradeDatamodelChanges")
  public java.util.List getBeforeUpgradeDatamodelChanges();

  /**
   * the major version of the datamodel to which this upgrade applies. For customer version triggers, using 0 is fine.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MajorVersion")
  public int getMajorVersion();
}
