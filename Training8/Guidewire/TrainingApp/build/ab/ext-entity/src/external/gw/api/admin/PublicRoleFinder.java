package external.gw.api.admin;

/**
 * Finder methods for Roles.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PublicRoleFinder
{

  /**
   * Return a query processor which will yield all the Role entities in the system sorted in ascending
order by name.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "allOrderedByName")
  public external.gw.api.database.IQueryBeanResult allOrderedByName();


  /**
   * Utility class for initializing an instance of external.gw.api.admin.PublicRoleFinder
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static PublicRoleFinder newInstance()
    {
      return (PublicRoleFinder) gw.pl.external.Invoker.getInstance().construct(external.gw.api.admin.PublicRoleFinder.class, new Class[]{ } , new Object[]{ });
    }

  }
}
