package external.gw.transaction;

/**
 * Defines a block of code that can be registered with a bundle to run
during the database transaction used when the bundle is committed.
<p/>The methods of this class are invoked according to the commit ordering defined in {@link external.gw.pl.persistence.core.Bundle}
<p/>
WARNING: Using the callback methods in the class incorrectly could lead to data corruption and other bad things.
  Use at your own risk.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BundleTransactionCallback
{

  /**
   * Called as the last step in the commit process. The bundle will have been cleared of all it's
BundleTransactionCallback. If you need to re-add a callback to the bundle this is the place to do it.

<p/><b>WARNING: </b>Modifications the the bundle at or after this event are forbidden.
<p/>See {@link external.gw.pl.persistence.core.Bundle} for all of the callback events and the order that they are fired.
   *
   * @param bundle 
   * @param commitSucceeded If the commit succeeded which means that data has been persisted in the DB
and the global cache is coherent with the DB. Note that coherent means only that the cache will not
have data in it that is incorrect with respect to the DB. An empty cache satisfies this definition.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "afterCommit")
  public void afterCommit(external.gw.pl.persistence.core.Bundle bundle, boolean commitSucceeded);



  /**
   * Called after the pre update rules have fired.
<p/><b>WARNING: </b>Modifications the the bundle at or after this event should be done with caution.
<br/>The beans added, removed, more modified in the bundle will:
<ul>
<li>NOT fire pre update rules</li>
</ul>
<p/>See {@link external.gw.pl.persistence.core.Bundle} for all of the callback events and the order that they are fired.
   *
   * @param bundle 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "afterPreUpdate")
  public void afterPreUpdate(external.gw.pl.persistence.core.Bundle bundle);



  /**
   * Called after bean callbacks have been executed and after search denorm beans have been inserted into the
bundle

<p/><b>WARNING: </b>Modifications the the bundle at or after this event should be done with caution.
<br/>The beans added, removed, more modified in the bundle will:
<ul>
<li>NOT fire pre update rules</li>
<li>NOT change search denorm values</li>
</ul>
<p/>See {@link external.gw.pl.persistence.core.Bundle} for all of the callback events and the order that they are fired.
   *
   * @param bundle 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "afterSearchDenormObjects")
  public void afterSearchDenormObjects(external.gw.pl.persistence.core.Bundle bundle);



  /**
   * Called after all ids and public ids have been set.  Foreign key references will also be set before this event.
<p/><b>WARNING: </b>Modifications the the bundle at or after this event are forbidden.
<p/>See {@link external.gw.pl.persistence.core.Bundle} for all of the callback events and the order that they are fired.
   *
   * @param bundle 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "afterSetIds")
  public void afterSetIds(external.gw.pl.persistence.core.Bundle bundle);



  /**
   * Called after the validation events have been fired.
<p/><b>WARNING: </b>Modifications the the bundle at or after this event should be done with caution.
<br/>The beans added, removed, more modified in the bundle will:
<ul>
<li>NOT fire pre update rules</li>
<li>NOT change search denorm values</li>*
<li>NOT fire validation rules</li>
</ul>
<p/>See {@link external.gw.pl.persistence.core.Bundle} for all of the callback events and the order that they are fired.
   *
   * @param bundle 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "afterValidation")
  public void afterValidation(external.gw.pl.persistence.core.Bundle bundle);



  /**
   * Called after all data has been written to the database but before the transaction has been committed.
 The database will reflect all changes in the bundle for the connection associated with the current thread.
<p/><b>WARNING: </b>Modifications the the bundle at or after this event are forbidden.
<p/>See {@link external.gw.pl.persistence.core.Bundle} for all of the callback events and the order that they are fired.
   *
   * @param bundle 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "afterWriteToDatabase")
  public void afterWriteToDatabase(external.gw.pl.persistence.core.Bundle bundle);



  /**
   * Called before the bundle is committed to the database and before any processing on the bundle is done.
I.e. this is called before any of the operations defined in {@link external.gw.pl.persistence.core.Bundle}
   *
   * @param bundle 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "beforeCommit")
  public void beforeCommit(external.gw.pl.persistence.core.Bundle bundle);



  /**
   * Called before search denormed objects are added to the bundle. This is the place to
apply last chance changes to beans in the bundle.

<p/><b>WARNING: </b>Modifications the the bundle at or after this event should be done with caution.
<br/>The beans added, removed, more modified in the bundle will:
<ul>
<li>NOT fire pre update rules</li>
</ul>
<p/>See {@link external.gw.pl.persistence.core.Bundle} for all of the callback events and the order that they are fired.
   *
   * @param bundle 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "beforeSearchDenormObjects")
  public void beforeSearchDenormObjects(external.gw.pl.persistence.core.Bundle bundle);

}
