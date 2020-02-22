package external.gw.api.webservice.addressbook.contactapi;

/**
 * Represents a column to sort on as part of a search.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactSearchSortColumn extends external.gw.pl.util.webservices.GWRemotable
{


  /**
   * Determines whether or not to sort this column in ascending order or descending order.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Ascending")
  public boolean isAscending();

  /**
   * Determines whether or not to sort this column in ascending order or descending order.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Ascending")
  public void setAscending(boolean value);


  /**
   * Gets the column to sort on, in GW bean path notation. The first
element must be the root of the query. For example, "ABContact.PrimaryAddress.City".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanPath")
  public java.lang.String getBeanPath();

  /**
   * Gets the column to sort on, in GW bean path notation. The first
element must be the root of the query. For example, "ABContact.PrimaryAddress.City".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BeanPath")
  public void setBeanPath(java.lang.String value);


  /**
   * Utility class for initializing an instance of external.gw.api.webservice.addressbook.contactapi.ABContactSearchSortColumn
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static ABContactSearchSortColumn newInstance()
    {
      return (ABContactSearchSortColumn) gw.pl.external.Invoker.getInstance().construct(external.gw.api.webservice.addressbook.contactapi.ABContactSearchSortColumn.class, new Class[]{ } , new Object[]{ });
    }

  }
}
