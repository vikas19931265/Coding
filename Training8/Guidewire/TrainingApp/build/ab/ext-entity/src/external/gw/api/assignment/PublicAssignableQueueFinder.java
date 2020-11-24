package external.gw.api.assignment;

/**
 * Utility with a set of finders for assignable queues.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PublicAssignableQueueFinder
{

  /**
   * Finds all activities from the group of the current user's queues.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findAllActivitiesFromQueuesFromGroupsOfCurrentUser")
  public external.gw.api.database.IQueryBeanResult findAllActivitiesFromQueuesFromGroupsOfCurrentUser();



  /**
   * Find all queues visible to the given user. A queue is visible if:
<ul>
<li>It is either in a group that is in one of the user's security zones, or
the user has the "view all queues" permission
<li>It is either in one of the user's groups or has the "sub group visible"
flag set
</ul>
   *
   * @param user 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findVisibleQueuesForUser")
  public external.gw.api.database.IQueryBeanResult findVisibleQueuesForUser(com.guidewire.ab.external.entity.User user);



  /**
   * Find all queues visible to the given user within the user's ancestor group tree (user's groups' ancestors). A queue will be returned if:
<ul>
<li>It is either in a group that is in one of the user's security zones, or
the user has the "view all queues" permission
<li>It is either in one of the user's groups or has the "sub group visible"
flag set and is in ancestor group.
</ul>
   *
   * @param user 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findVisibleQueuesInUserAndAncestorGroups")
  public external.gw.api.database.IQueryBeanResult findVisibleQueuesInUserAndAncestorGroups(com.guidewire.ab.external.entity.User user);

}
