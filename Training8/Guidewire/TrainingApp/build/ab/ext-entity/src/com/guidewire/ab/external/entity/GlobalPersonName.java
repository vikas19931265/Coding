package com.guidewire.ab.external.entity;

/**
 * 
    This is a shared delegate/interface that allows multiple entities to share definitions of removable globalization fields associated with Persons.
  
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GlobalPersonName extends gw.pl.external.entity.Entity
{


  /**
   * First name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FirstNameKanji")
  public java.lang.String getFirstNameKanji();

  /**
   * First name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FirstNameKanji")
  public void setFirstNameKanji(java.lang.String value);


  /**
   * Last name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastNameKanji")
  public java.lang.String getLastNameKanji();

  /**
   * Last name in kanji (used only for Japanese names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastNameKanji")
  public void setLastNameKanji(java.lang.String value);


  /**
   * Particle, such as 'de', 'von' (used for French names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Particle")
  public java.lang.String getParticle();

  /**
   * Particle, such as 'de', 'von' (used for French names and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Particle")
  public void setParticle(java.lang.String value);


  /**
   * Utility class for initializing an instance of GlobalPersonName
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GlobalPersonName.
     */
    public static GlobalPersonName newInstance()
    {
      return (GlobalPersonName) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GlobalPersonName.class);
    }
  }

}
