package com.guidewire.pl.plugin.addressbook;

/**
 * This class serves as a simple pluggable interface to allow the username and
password used to access the external Address Book to be retrieved in some
other manner. This could include retrieving them from an external system,
decrypting the password, reading a file from the filesystem, etc.  The
resulting username and password will be substituted instead of the
IAddressBookAdapter configuration.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABAuthenticationPlugin extends gw.plugin.IPlugin
{

  /**
   * Return a username and password given a set of properties.
   *
   * @return the username and password to use
   * @param properties a map of name-value pairs as specified in the IAddressBookAdapter.xml config file
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "retrieveUsernameAndPassword")
  public gw.plugin.dbauth.UsernamePasswordPair retrieveUsernameAndPassword(java.util.Map properties);

}
