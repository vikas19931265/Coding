package com.guidewire.ab.external.entity;

/**
 * 
        A component used as part of a larger search criteria entity. Encapsulates the information
        entered by the user to restrict the search to particular contact, specified by some combination
        of name, tax ID and official ID. One NameCriteria entity will be used for each field that needs to
        be restricted. For example if a search criteria was being constructed to specify searches for
        an entity which had two different contact fields, then the search criteria would likely
        contain two distinct NameCriteria components.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface NameCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The company name, if searching for a company.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CompanyName")
  public java.lang.String getCompanyName();

  /**
   * The company name, if searching for a company.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CompanyName")
  public void setCompanyName(java.lang.String value);


  /**
   * The first name, if searching for a person.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FirstName")
  public java.lang.String getFirstName();

  /**
   * The first name, if searching for a person.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FirstName")
  public void setFirstName(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * The last name, if searching for a person.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastName")
  public java.lang.String getLastName();

  /**
   * The last name, if searching for a person.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastName")
  public void setLastName(java.lang.String value);


  /**
   * The last name or the first name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * The last name or the first name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * Field matched against the OfficialIDValue of the OfficialID objects associated with Contacts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OfficialId")
  public java.lang.String getOfficialId();

  /**
   * Field matched against the OfficialIDValue of the OfficialID objects associated with Contacts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OfficialId")
  public void setOfficialId(java.lang.String value);


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
   * True if any of the fields in this criteria object are set. False if no fields are set, so the
criteria should not affect the search.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Set")
  public boolean isSet();


  /**
   * The contact's tax identification number.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TaxId")
  public java.lang.String getTaxId();

  /**
   * The contact's tax identification number.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TaxId")
  public void setTaxId(java.lang.String value);


  /**
   * Utility class for initializing an instance of NameCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity NameCriteria.
     */
    public static NameCriteria newInstance()
    {
      return (NameCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(NameCriteria.class);
    }
  }

}
