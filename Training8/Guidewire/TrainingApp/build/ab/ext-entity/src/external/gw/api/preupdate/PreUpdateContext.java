package external.gw.api.preupdate;

/**
 * Provides access to the beans in the current transaction.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PreUpdateContext
{


  /**
   * Returns the list of beans that are being inserted by this transaction.  The
beans are not guaranteed to be orderered.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InsertedBeans")
  public java.util.List getInsertedBeans();


  /**
   * Returns the list of beans that are being removed by this transaction.  The
beans are not guaranteed to be orderered.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RemovedBeans")
  public java.util.List getRemovedBeans();


  /**
   * Returns the list of beans that are being updated by this transaction.  The
beans are not guaranteed to be orderered.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdatedBeans")
  public java.util.List getUpdatedBeans();


  /**
   * Utility class for initializing an instance of external.gw.api.preupdate.PreUpdateContext
   */
  public static class CONSTRUCT
  {

  }
}
