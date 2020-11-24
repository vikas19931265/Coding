package external.gw.plugin.credentials;

/**
 * This class serves as a simple pluggable interface to allow a username/password
pair corresponding to some key to be retrieved in some manner defined by the
user, such as retrieving them from an external system, decrypting the password,
reading a file from the filesystem, and so on.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CredentialsPlugin extends gw.plugin.IPlugin
{

  /**
   * Return a username and password for the provided key.
   *
   * @return the username and password to use
   * @param key the name of the user/password pair for which authentication information
is being requested. This key can be anything you want. It simply identifies which
username/password pair you want.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "retrieveUsernameAndPassword")
  public gw.plugin.credentials.UsernamePasswordPairBase retrieveUsernameAndPassword(java.lang.String key);

}
