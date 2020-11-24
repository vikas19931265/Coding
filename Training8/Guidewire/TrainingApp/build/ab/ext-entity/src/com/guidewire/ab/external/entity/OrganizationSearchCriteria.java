package com.guidewire.ab.external.entity;

/**
 * 
      Defines a organization search criteria. The OrganizationSearchCriteria entity exists only for the purposes of a
      search. It is not stored in the database.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface OrganizationSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Flag indicating whether the organization is a carrier.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Carrier")
  public java.lang.Boolean isCarrier();

  /**
   * Flag indicating whether the organization is a carrier.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Carrier")
  public void setCarrier(java.lang.Boolean value);


  /**
   * The contact city for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactCity")
  public java.lang.String getContactCity();

  /**
   * The contact city for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactCity")
  public void setContactCity(java.lang.String value);


  /**
   * The contact city kanji for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactCityKanji")
  public java.lang.String getContactCityKanji();

  /**
   * The contact city kanji for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactCityKanji")
  public void setContactCityKanji(java.lang.String value);


  /**
   * The contact country for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactCountry")
  public com.guidewire.ab.external.typelist.Country getContactCountry();

  /**
   * The contact country for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactCountry")
  public void setContactCountry(com.guidewire.ab.external.typelist.Country value);


  /**
   * The contact name for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactName")
  public java.lang.String getContactName();

  /**
   * The contact name for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactName")
  public void setContactName(java.lang.String value);


  /**
   * The contact zip code/postal code for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactPostal")
  public java.lang.String getContactPostal();

  /**
   * The contact zip code/postal code for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactPostal")
  public void setContactPostal(java.lang.String value);


  /**
   * The contact state for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactState")
  public com.guidewire.ab.external.typelist.State getContactState();

  /**
   * The contact state for the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactState")
  public void setContactState(com.guidewire.ab.external.typelist.State value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * The name of the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * The name of the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * The kanji name of the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NameKanji")
  public java.lang.String getNameKanji();

  /**
   * The kanji name of the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NameKanji")
  public void setNameKanji(java.lang.String value);


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * The type of the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.BusinessType getType();

  /**
   * The type of the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.BusinessType value);


  /**
   * Utility class for initializing an instance of OrganizationSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity OrganizationSearchCriteria.
     */
    public static OrganizationSearchCriteria newInstance()
    {
      return (OrganizationSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(OrganizationSearchCriteria.class);
    }
  }

}
