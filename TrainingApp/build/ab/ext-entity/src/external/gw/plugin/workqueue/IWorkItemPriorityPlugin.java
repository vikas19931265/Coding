package external.gw.plugin.workqueue;

/**
 * Plugin interface used to calculate the work item priority
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IWorkItemPriorityPlugin extends gw.plugin.IPlugin
{

  /**
   * Calculate the work item priority
   *
   * @return the value of the priority to set on the work item, null
   * @param workItem the work item to be prioritized
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getWorkItemPriority")
  public java.lang.Integer getWorkItemPriority(com.guidewire.ab.external.entity.WorkItem workItem);

}
