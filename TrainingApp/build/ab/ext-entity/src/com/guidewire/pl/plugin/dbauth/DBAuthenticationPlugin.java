package com.guidewire.pl.plugin.dbauth;

/**
 * This class serves as a simple pluggable interface to allow the username and
password used to access the database to be retrieved in some other manner.
This could include retrieving them from an external system, decrypting the
password, reading a file from the filesystem, etc.  The resulting username
and password will be substituted into the database configuration anywhere
that ${username} or ${password} are found in the database param elements.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DBAuthenticationPlugin extends gw.plugin.IPlugin
{

  /**
   * Return a username and password for the database identified by the given name.
   *
   * @return the username and password to use
   * @param dbName the name of the database for which authentication information is being requested. This will
match the value of the <tt>name</tt> attribute on the <tt>database</tt> or <tt>archive</tt> config elements.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "retrieveUsernameAndPassword")
  public gw.plugin.dbauth.UsernamePasswordPair retrieveUsernameAndPassword(java.lang.String dbName);

}
