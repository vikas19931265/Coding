package external.gw.api.database;

/**
 * A QueryProcessor represents a result from a database query.  QueryProcessor
objects are materialized from a Query object. The Query is strictly a server
side entity, so this implies that query results can only be materialized on
in the server.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IQueryResult <QT extends gw.pl.external.entity.Entity, RT> extends external.gw.lang.reflect.IQueryResultSet<RT>, java.lang.Iterable<RT>
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AtMostOneRow")
  public RT getAtMostOneRow();

  /**
   * true if the search results had to be capped.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Capped")
  public boolean isCapped();

  /**
   * Returns the <i>approximate</i> count of entities in the results.
<p/>
<b>WARNING</b>: This executes a count(*) query so it is neither cheap nor
atomic. Thus when the results are counted and then subsequently retrieved,
the number of results may actually be different from the number returned by
the iterator. Nevertheless calling this method can be cheaper than
iterating over lots of entities (which are loaded into memory) and
maintaining a count to test whether or not to proceed with the iteration.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Count")
  public int getCount();

  /**
   * Returns true if and only if this query processor does not have any results.
Note that this method executes the query, so for performance reasons it should
not be followed by calls to any other methods of this interface that attempt to
count the number of query results or that attempt to get one or more of the
results themselves.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Empty")
  public boolean isEmpty();

  /**
   * Returns this processor's first result if it has one.  Otherwise returns
null. This method has the side effect of setting the chunking processor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FirstResult")
  public RT getFirstResult();


  /**
   * Clears all filters on this query.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearFilters")
  public void clearFilters();



  /**
   * Clears all sort columns that have been added
   *
   * @deprecated use orderBy or orderByDescending instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearSortColumns")
  public void clearSortColumns();



  /**
   * Returns the number of entities in the results limited by the given integer result. This is not cheap but may, on
some databases, be a little cheaper than calling getCount() > limit, because specifying the limit allows the
database to stop processing rows once the number of rows exceeds the given limit.
   *
   * @return An accurate count if the actual count is less than the limit, otherwise the limit.
   * @param limit Must be greater than zero
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCountLimitedBy")
  public int getCountLimitedBy(int limit);



  /**
   * Returns an iterator of beans for the results of this query starting at startRow. For example,
If the startRow value is 1, the next record will be the second row. If the startRow value is
negative, it will be ignored
   *
   * @return an iterator of beans for the results of this query starting at startRow
   * @param startRow the index of next row to return relative to the result set
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "iterator")
  public java.util.Iterator iterator(int startRow);



  /**
   * Orders by column in ascending order.
<p/>
This clears all other order by statements.  See <i>thenBy</i> to add incremental columns.
   *
   * @return this
   * @param column the column to order by
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "orderBy")
  public external.gw.api.database.IQueryResult orderBy(external.gw.entity.IEntityPropertyInfo column);



  /**
   * Orders by column in descending order.
<p/>
This clears all other order by statements.  See <i>thenBy</i> to add incremental columns.
   *
   * @return this
   * @param column the column to order by
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "orderByDescending")
  public external.gw.api.database.IQueryResult orderByDescending(external.gw.entity.IEntityPropertyInfo column);



  /**
   * Sets the page size in terms of the number of rows per page. Rows in the
results are fetched a page at a time when rows are iterated.
<p/>
A number less than or equal to zero indicates all rows are returned in a
single page. This is typically not an advisable setting.
   *
   * @param iRows Number of rows per page. If <= 0, all rows are included in a
             single page.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setPageSize")
  public void setPageSize(int iRows);



  /**
   * Orders by column in ascending order.
   *
   * @return this
   * @param column the column to order by
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "thenBy")
  public external.gw.api.database.IQueryResult thenBy(external.gw.entity.IEntityPropertyInfo column);



  /**
   * Orders by column in descending order.
   *
   * @return this
   * @param column the column to order by
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "thenByDescending")
  public external.gw.api.database.IQueryResult thenByDescending(external.gw.entity.IEntityPropertyInfo column);

}
