package external.gw.api.database;

/**
 * A IQueryBeanResult represents a result from a database query.  IQueryBeanResult
objects are materialized from a Query object. The Query is strictly a server
side entity, so this implies that query results can only be materialized on
in the server.
<p/>
A query result is the result representation of a query in that it will
retrieve results based on the query it was materialized from. While the query
represents what underlying data is returned, the query result determines the
actual fields that will be fetched. These fields can be specified with the
functions retrieveResultsAsColumns and retrieveResultsAsBeans.
<p/>
The ordering of the results are specified by the order by columns.  Multiple
order by columns are specified using the setOrderByColumns function.  Sorting
can occur whether or not this QueryProcessor is a chuncking query result or
all of its results are fetched at once.
<p/>
Chunking can be enabled on the QueryProcessor object.  Chuncking allows the
developer to fetch a subset of the data at any given time. Chunking is a
method to prevent unbounded memory consumption by the query layer.
<p/>
Results are retuned from a QueryProcessor through the iterator methods.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IQueryBeanResult <T extends gw.pl.external.entity.Entity> extends external.gw.api.database.IQueryResult<T, T>, external.gw.lang.reflect.gs.IGosuObject, java.io.Serializable
{

  /**
   * 
   *
   * @return an iterator of keys for the results of this query
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "keyIterator")
  public java.util.Iterator keyIterator();



  /**
   * 
   *
   * @return an iterator of keys for the results of this query starting at startRow
   * @param startRow 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "keyIterator")
  public java.util.Iterator keyIterator(int startRow);

}
