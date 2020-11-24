package com.guidewire.ab.plugin.contact;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ValidateABContactCreationPlugin extends gw.plugin.IPlugin
{

  /**
   * null
   *
   * @param param ABContact
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateCanCreate")
  public com.guidewire.ab.plugin.contact.ValidateABContactCreationPluginResult validateCanCreate(com.guidewire.ab.external.entity.ABContact param);

}
