package external.gw.api.address;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AddressOwnerBase extends external.gw.api.address.AddressOwner
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressDelegate")
  public external.gw.api.address.AddressFillableExtension getAddressDelegate();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine1Label")
  public java.lang.String getAddressLine1Label();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine1PhoneticLabel")
  public java.lang.String getAddressLine1PhoneticLabel();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressNameLabel")
  public java.lang.String getAddressNameLabel();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AlwaysShowSeparateFields")
  public boolean isAlwaysShowSeparateFields();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AlwaysShowSeparateFields")
  public void setAlwaysShowSeparateFields(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutofillEnabled")
  public boolean isAutofillEnabled();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AutofillEnabled")
  public void setAutofillEnabled(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutofillIconEnabled")
  public boolean isAutofillIconEnabled();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CountrySettings")
  public external.gw.api.address.AddressCountrySettings getCountrySettings();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InEditMode")
  public boolean isInEditMode();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "InEditMode")
  public void setInEditMode(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SelectedCountry")
  public com.guidewire.ab.external.typelist.Country getSelectedCountry();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SelectedCountry")
  public void setSelectedCountry(com.guidewire.ab.external.typelist.Country value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SelectedMode")
  public java.lang.String getSelectedMode();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShowAddressSummary")
  public boolean isShowAddressSummary();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "_delegate")
  public external.gw.api.address.AddressFillableExtension get_delegate();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "_delegate")
  public void set_delegate(external.gw.api.address.AddressFillableExtension value);

  /**
   * null
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearNonvisibleFields")
  public void clearNonvisibleFields();

  /**
   * null
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isAvailable")
  public boolean isAvailable(external.gw.api.address.AddressOwnerFieldId fieldId);

  /**
   * null
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isEditable")
  public boolean isEditable(external.gw.api.address.AddressOwnerFieldId fieldId);

  /**
   * null
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isHideIfReadOnly")
  public boolean isHideIfReadOnly(external.gw.api.address.AddressOwnerFieldId fieldId);

  /**
   * null
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isRequired")
  public boolean isRequired(external.gw.api.address.AddressOwnerFieldId fieldId);

  /**
   * null
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isVisible")
  public boolean isVisible(external.gw.api.address.AddressOwnerFieldId fieldId);
}
