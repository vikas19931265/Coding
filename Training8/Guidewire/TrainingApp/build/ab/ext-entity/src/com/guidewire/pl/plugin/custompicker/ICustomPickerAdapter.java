package com.guidewire.pl.plugin.custompicker;

/**
 * Multiple instances of a CustomPicker adapter can be registered with the
server.  Each instance requires its own unique endpoint name.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ICustomPickerAdapter extends gw.plugin.IPlugin
{

  /**
   * Get custom "picker" codes (code, description) given a set of input
parameters.
   *
   * @return Set of custom "picker" pairs (code, description).
   * @param params Input parameters.
   * @deprecated the custom picker adapter is only provided for backwards compatibility. You can now
  set up a PCF picker popup and call arbitrary Gosu to populate a list view with any kind of
  object (not just custom picker code items). The Gosu could also call a plugin - see the
  configuration and integration guides for details.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCustomCodes")
  public gw.plugin.custompicker.CustomPickerCode[] getCustomCodes(java.lang.String[] params) throws java.rmi.RemoteException;

}
