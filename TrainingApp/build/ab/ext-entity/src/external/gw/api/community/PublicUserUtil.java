package external.gw.api.community;

/**
 * Provides basic utility methods for retrieving current user and its related objects.
<p>
Access via User.util.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PublicUserUtil
{
  /**
   * Get the current user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentUser")
  public com.guidewire.ab.external.entity.User getCurrentUser();

  /**
   * Return the currently configured "unrestricted" user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnrestrictedUser")
  public com.guidewire.ab.external.entity.User getUnrestrictedUser();

  /**
   * Get a list of all users in the current user's group.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UsersInCurrentUsersGroup")
  public java.util.List getUsersInCurrentUsersGroup();
}
