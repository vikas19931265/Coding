package external.gw.api.address;

/**
 * Interface for a helper object passed to the standard Address input set. The
helper object provides a way to set/get a single address on the enclosing entity
(for example to set and get the primary address for a {@link com.guidewire.ab.external.entity.Contact}). It also contains
information about which fields should be visible, required etc.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AddressOwner
{
  /**
   * Property for the address in the enclosing object. Marked as autocreate so
that if the address starts out null then a Gosu expression of the form
"owner.Address.State = someState" will automatically create a new address,
rather than throwing a null pointer exception
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Address")
  public com.guidewire.ab.external.entity.Address getAddress();

  /**
   * Property for the address in the enclosing object. Marked as autocreate so
that if the address starts out null then a Gosu expression of the form
"owner.Address.State = someState" will automatically create a new address,
rather than throwing a null pointer exception
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Address")
  public void setAddress(com.guidewire.ab.external.entity.Address value);

  /**
   * Delegate used to access address fields
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressDelegate")
  public external.gw.api.address.AddressFillableExtension getAddressDelegate();

  /**
   * Label to show for AddressLine1
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine1Label")
  public java.lang.String getAddressLine1Label();

  /**
   * Label to show for AddressLine1 phonetic
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine1PhoneticLabel")
  public java.lang.String getAddressLine1PhoneticLabel();

  /**
   * Label to show for the AddressSummary
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressNameLabel")
  public java.lang.String getAddressNameLabel();

  /**
   * If true, autofill is enabled.  Disable for search screens.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutofillEnabled")
  public boolean isAutofillEnabled();

  /**
   * If true, enable the autofill icons.  Disable for search screens.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutofillIconEnabled")
  public boolean isAutofillIconEnabled();

  /**
   * Returns country-specific address configuration data
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CountrySettings")
  public external.gw.api.address.AddressCountrySettings getCountrySettings();

  /**
   * The set of fields that should be hidden, and not displayed in the UI
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HiddenFields")
  public java.util.Set getHiddenFields();

  /**
   * Used to save the value of the PCF's CurrentLocation.inEditMode
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InEditMode")
  public boolean isInEditMode();

  /**
   * Used to save the value of the PCF's CurrentLocation.inEditMode
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "InEditMode")
  public void setInEditMode(boolean value);

  /**
   * The set of fields that should be required in the UI
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RequiredFields")
  public java.util.Set getRequiredFields();

  /**
   * Return the currently selected country; either the actual address country
or the default country if the address is null
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SelectedCountry")
  public com.guidewire.ab.external.typelist.Country getSelectedCountry();

  /**
   * Return the currently selected country; either the actual address country
or the default country if the address is null
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SelectedCountry")
  public void setSelectedCountry(com.guidewire.ab.external.typelist.Country value);

  /**
   * Return the string identifiying the PCF mode used for the SelectedCountry
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SelectedMode")
  public java.lang.String getSelectedMode();

  /**
   * if true, show the address summary (when not in edit mode)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShowAddressSummary")
  public boolean isShowAddressSummary();


  /**
   * Clear address fields that are not used for the SelectedCountry
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearNonvisibleFields")
  public void clearNonvisibleFields();



  /**
   * True if the field is available
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isAvailable")
  public boolean isAvailable(external.gw.api.address.AddressOwnerFieldId fieldId);



  /**
   * True if the field is editable
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isEditable")
  public boolean isEditable(external.gw.api.address.AddressOwnerFieldId fieldId);



  /**
   * True if the field is hideIfReadOnly
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isHideIfReadOnly")
  public boolean isHideIfReadOnly(external.gw.api.address.AddressOwnerFieldId fieldId);



  /**
   * True if the field is required
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isRequired")
  public boolean isRequired(external.gw.api.address.AddressOwnerFieldId fieldId);



  /**
   * True if the field is visible
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isVisible")
  public boolean isVisible(external.gw.api.address.AddressOwnerFieldId fieldId);

}
