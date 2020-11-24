package com.guidewire.ab.external.entity;

/**
 * Join table between the organization and the zone, to see which zones an organization can admin over.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface OrganizationZoneAdmin extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The country to which the zone belongs. NOTE: when inserting a OrganizationZoneAdmin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Country")
  public com.guidewire.ab.external.typelist.Country getCountry();

  /**
   * The country to which the zone belongs. NOTE: when inserting a OrganizationZoneAdmin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Country")
  public void setCountry(com.guidewire.ab.external.typelist.Country value);


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Fk to the Organization
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Organization")
  public com.guidewire.ab.external.entity.Organization getOrganization();

  /**
   * Fk to the Organization
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Organization")
  public void setOrganization(com.guidewire.ab.external.entity.Organization value);


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
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * Code of the zone NOTE: when inserting a OrganizationZoneAdmin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZoneCode")
  public java.lang.String getZoneCode();

  /**
   * Code of the zone NOTE: when inserting a OrganizationZoneAdmin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZoneCode")
  public void setZoneCode(java.lang.String value);


  /**
   * Type of zone. NOTE: when inserting a OrganizationZoneAdmin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZoneType")
  public com.guidewire.ab.external.typelist.ZoneType getZoneType();

  /**
   * Type of zone. NOTE: when inserting a OrganizationZoneAdmin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZoneType")
  public void setZoneType(com.guidewire.ab.external.typelist.ZoneType value);

  /**
   * Set the zone for this row
   *
   * @param zone the zone to set for this attribued
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setZone")
  public void setZone(com.guidewire.ab.external.entity.Zone zone);


  /**
   * Utility class for initializing an instance of OrganizationZoneAdmin
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity OrganizationZoneAdmin.
     */
    public static OrganizationZoneAdmin newInstance()
    {
      return (OrganizationZoneAdmin) gw.pl.external.entity.EntityFactory.getInstance().newEntity(OrganizationZoneAdmin.class);
    }
  }

}
