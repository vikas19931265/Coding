package com.guidewire.ab.plugin.contact;

/**
 * Interface description...
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IABContactScoringPlugin extends gw.plugin.IPlugin
{

  /**
   * 
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findContactsToScore")
  public java.util.Iterator findContactsToScore();



  /**
   * 
   *
   * @param contact 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "scoreABContact")
  public java.lang.Integer scoreABContact(com.guidewire.ab.external.entity.ABContact contact);

}
