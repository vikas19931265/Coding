package com.guidewire.ab.plugin.contact;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IFindDuplicatesPlugin extends gw.plugin.IPlugin
{

  /**
   * null
   *
   * @param param ABContact
   * @param param1 ABContactAPISearchSpec
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findDuplicates")
  public external.gw.api.webservice.addressbook.contactapi.ABContactAPISearchResultHelper findDuplicates(com.guidewire.ab.external.entity.ABContact param, external.gw.api.webservice.addressbook.contactapi.ABContactAPISearchSpec param1);



  /**
   * null
   *
   * @param param ABContact
   * @param param1 ABContactSearchSpec
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findDuplicates")
  public external.gw.api.webservice.addressbook.contactapi.ABContactSearchResult findDuplicates(com.guidewire.ab.external.entity.ABContact param, external.gw.api.webservice.addressbook.contactapi.ABContactSearchSpec param1);

}
