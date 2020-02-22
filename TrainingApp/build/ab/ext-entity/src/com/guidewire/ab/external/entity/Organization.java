package com.guidewire.ab.external.entity;

/**
 * Defines an organization that has a hierarchy of groups
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Organization extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * All users in this tree of organization. Does not include users in child organization trees.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllUsers")
  public external.gw.api.database.IQueryBeanResult getAllUsers();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Flag indicating whether this organization corresponds to the carrier itself.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Carrier")
  public java.lang.Boolean isCarrier();

  /**
   * Flag indicating whether this organization corresponds to the carrier itself.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Carrier")
  public void setCarrier(java.lang.Boolean value);


  /**
   * Contact entry related to the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.Contact getContact();

  /**
   * Contact entry related to the organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contact")
  public void setContact(com.guidewire.ab.external.entity.Contact value);


  /**
   * Returns the country to which this organization belongs.
The country is defined by the zones on the organization.
If no zones are defined for the organization, this returns
the default country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Countries")
  public java.util.List getCountries();


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
   * Date organization went or will go public
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IPODate_Ext")
  public java.util.Date getIPODate_Ext();

  /**
   * Date organization went or will go public
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IPODate_Ext")
  public void setIPODate_Ext(java.util.Date value);


  /**
   * Is this organization publicly owned?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IsPublic_Ext")
  public java.lang.Boolean isIsPublic_Ext();

  /**
   * Is this organization publicly owned?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IsPublic_Ext")
  public void setIsPublic_Ext(java.lang.Boolean value);


  /**
   * Is this organization tax exempt?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IsTaxExempt_Ext")
  public java.lang.Boolean isIsTaxExempt_Ext();

  /**
   * Is this organization tax exempt?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IsTaxExempt_Ext")
  public void setIsTaxExempt_Ext(java.lang.Boolean value);


  /**
   * Percent of claims over $5000
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LargeClaimPercent_Ext")
  public java.lang.Integer getLargeClaimPercent_Ext();

  /**
   * Percent of claims over $5000
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LargeClaimPercent_Ext")
  public void setLargeClaimPercent_Ext(java.lang.Integer value);


  /**
   * Flag indicating whether this organization is the superuser organization with admin powers over all organizations.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MasterAdmin")
  public java.lang.Boolean isMasterAdmin();

  /**
   * Flag indicating whether this organization is the superuser organization with admin powers over all organizations.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MasterAdmin")
  public void setMasterAdmin(java.lang.Boolean value);


  /**
   * The name of the organization. NOTE: when inserting a Organization this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();


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
   * Number of employees
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumberOfEmployees_Ext")
  public java.lang.Integer getNumberOfEmployees_Ext();

  /**
   * Number of employees
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumberOfEmployees_Ext")
  public void setNumberOfEmployees_Ext(java.lang.Integer value);


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
   * Is PO account verified?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PurchaseOrderAccountNumberVerified_Ext")
  public java.lang.Boolean isPurchaseOrderAccountNumberVerified_Ext();

  /**
   * Is PO account verified?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PurchaseOrderAccountNumberVerified_Ext")
  public void setPurchaseOrderAccountNumberVerified_Ext(java.lang.Boolean value);


  /**
   * Purchase order account number
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PurchaseOrderAccountNumber_Ext")
  public java.lang.String getPurchaseOrderAccountNumber_Ext();

  /**
   * Purchase order account number
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PurchaseOrderAccountNumber_Ext")
  public void setPurchaseOrderAccountNumber_Ext(java.lang.String value);


  /**
   * Risk to insure
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RiskFactor_Ext")
  public java.math.BigDecimal getRiskFactor_Ext();

  /**
   * Risk to insure
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RiskFactor_Ext")
  public void setRiskFactor_Ext(java.math.BigDecimal value);


  /**
   * The organization's root group. NOTE: when inserting a Organization this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RootGroup")
  public com.guidewire.ab.external.entity.Group getRootGroup();


  /**
   * Tests if the organization can be safely deleted. Returns false if
<ul>
<li>The organization is the carrier organization.
<li>The organization has any users.
<li>The root group of the organization cannot be
{@link Group#isSafeToDelete() safely deleted}.
</ul>
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SafeToDelete")
  public boolean isSafeToDelete();


  /**
   * Price per share (in dollars)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StockPrice_Ext")
  public external.gw.api.financials.CurrencyAmount getStockPrice_Ext();

  /**
   * Price per share (in dollars)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StockPrice_Ext")
  public void setStockPrice_Ext(external.gw.api.financials.CurrencyAmount value);


  /**
   * Stock market symbol
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StockTicker_Ext")
  public java.lang.String getStockTicker_Ext();

  /**
   * Stock market symbol
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StockTicker_Ext")
  public void setStockTicker_Ext(java.lang.String value);


  /**
   * Returns true if this is a temporary Organization.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Temporary")
  public boolean isTemporary();


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
   * Returns the business week's zones.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZonesArray")
  public java.lang.String[] getZonesArray();

  /**
   * Returns the business week's zones.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZonesArray")
  public void setZonesArray(java.lang.String[] value);


  /**
   * Returns the zones that t.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZonesString")
  public java.lang.String getZonesString();

  /**
   * Returns the zones that t.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZonesString")
  public void setZonesString(java.lang.String value);


  /**
   * Link to joiner table for zones to admin.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZonesToAdmin")
  public com.guidewire.ab.external.entity.OrganizationZoneAdmin[] getZonesToAdmin();

  /**
   * Link to joiner table for zones to admin.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZonesToAdmin")
  public void setZonesToAdmin(com.guidewire.ab.external.entity.OrganizationZoneAdmin[] value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToZonesToAdmin")
  public void addToZonesToAdmin(com.guidewire.ab.external.entity.OrganizationZoneAdmin element);

  /**
   * Return an array of the zone codes of all zones that are of the
specified type and linked to the specified zone and that are
visible to this organization.
   *
   * @return an array of zone codes satisfying the above criteria.
   * @param zoneType the zone type
   * @param linkedZone the linked zone, can be null; it is assumed
that the linked zone is visible to the organzation.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findVisibleZoneCodes")
  public java.lang.String[] findVisibleZoneCodes(com.guidewire.ab.external.typelist.ZoneType zoneType, com.guidewire.ab.external.entity.Zone linkedZone);

  /**
   * Sets the business week's zones. If there are elements in the input array,
AppliesToAllZones will go to false.
   *
   * @param zoneType 
   * @param zoneCodes the codes of the zones to set
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZones")
  public com.guidewire.ab.external.entity.Zone[] findZones(com.guidewire.ab.external.typelist.ZoneType zoneType, java.lang.String[] zoneCodes);

  /**
   * Returns the available zones.
   *
   * @return an array of the available zone codes
   * @param zoneType the desired type of zones
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getZoneRange")
  public java.lang.String[] getZoneRange(com.guidewire.ab.external.typelist.ZoneType zoneType);

  /**
   * Returns true if the provided zone is set as an AdminZone on this Organization.
   *
   * @return true if the zone exists for this Org
   * @param zoneCode the desired type of zones
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasZone")
  public boolean hasZone(java.lang.String zoneCode);

  /**
   * Determines if the input zone is visible to this organization.
   *
   * @return true if the zone is visible to the organization
and it exists in the zone lookup table, false otherwise.
   * @param country the country
   * @param zoneType the zone type
   * @param zoneCode the zone code
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isZoneVisible")
  public boolean isZoneVisible(com.guidewire.ab.external.typelist.Country country, com.guidewire.ab.external.typelist.ZoneType zoneType, java.lang.String zoneCode);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.OrganizationZoneAdmin from the ZonesToAdmin array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromZonesToAdmin")
  public void removeFromZonesToAdmin(com.guidewire.ab.external.entity.OrganizationZoneAdmin element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.OrganizationZoneAdmin having id elementID from the ZonesToAdmin array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromZonesToAdmin")
  public void removeFromZonesToAdmin(gw.pl.external.entity.Key elementID);

  /**
   * Sets the name of the organization to name and if the root group is non-null sets its name as well.
   *
   * @param name the name to set
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setNameAndRootGroupName")
  public void setNameAndRootGroupName(java.lang.String name);

  /**
   * Sets the business week's zones. If there are elements in the input array,
AppliesToAllZones will go to false.
   *
   * @param zoneCodes the codes of the zones to set
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setZonesArray")
  public void setZonesArray_Method(java.lang.String[] zoneCodes);

  /**
   * Sets the zones that use this business week.
   *
   * @param zonesString a comma-separated string of the string codes of the zones that use this business week
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setZonesString")
  public void setZonesString_Method(java.lang.String zonesString);


  /**
   * Utility class for initializing an instance of Organization
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Organization.
     */
    public static Organization newInstance()
    {
      return (Organization) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Organization.class);
    }
  }

}
