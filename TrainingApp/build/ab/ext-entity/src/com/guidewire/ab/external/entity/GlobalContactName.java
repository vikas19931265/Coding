package com.guidewire.ab.external.entity;

/**
 * 
    This is a shared delegate/interface that allows multiple entities to share definitions of removable globalization fields associated with Contacts.
  
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GlobalContactName extends gw.pl.external.entity.Entity
{


  /**
   * This contact's name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NameKanji")
  public java.lang.String getNameKanji();

  /**
   * This contact's name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NameKanji")
  public void setNameKanji(java.lang.String value);


  /**
   * Utility class for initializing an instance of GlobalContactName
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GlobalContactName.
     */
    public static GlobalContactName newInstance()
    {
      return (GlobalContactName) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GlobalContactName.class);
    }
  }

}
