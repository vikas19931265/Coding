package external.gw.plugin.processing;

/**
 * If this plugin is implemented and the given implementation will be delegated to
either create a new batch process a system level batch process.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IProcessesPlugin extends gw.plugin.IPlugin
{

  /**
   * This method will be called after platform does not succeeded in finding a batch process
If the customer has defined a batch process, they should construct that process and return
it from this method.

 A customer can define a batch process by extending {@link external.gw.processes.BatchProcessBase}
   *
   * @param type the BatchProcessType
   * @param args the args to be passed to the batch process
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createBatchProcess")
  public external.gw.processes.BatchProcess createBatchProcess(com.guidewire.ab.external.typelist.BatchProcessType type, java.lang.Object[] args);

}
