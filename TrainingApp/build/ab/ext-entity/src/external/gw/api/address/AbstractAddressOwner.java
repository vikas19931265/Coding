package external.gw.api.address;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AbstractAddressOwner extends external.gw.api.address.AddressOwner, external.gw.api.address.AddressOwnerBase
{


  /**
   * The default country, used if the address is null or does not have a
country set up. The default implementation returns the default country
as specified by BaseAdminUtil.getDefaultCountry()
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultCountry")
  public com.guidewire.ab.external.typelist.Country getDefaultCountry();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HiddenFields")
  public java.util.Set getHiddenFields();


  /**
   * Determine which fields must be populated in order to create/edit a Contact
based on the country field of the contact. If the country field is not set,
the default country is used.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RequiredFields")
  public java.util.Set getRequiredFields();


  /**
   * The currently selected country. If the current address specifies a country
then return that, otherwise return the default country
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SelectedCountry")
  public com.guidewire.ab.external.typelist.Country getSelectedCountry();

  /**
   * The currently selected country. If the current address specifies a country
then return that, otherwise return the default country
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SelectedCountry")
  public void setSelectedCountry(com.guidewire.ab.external.typelist.Country value);

  /**
   * null
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPlace")
  public boolean isPlace();
}
