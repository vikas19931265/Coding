package external.gw.plugin.addressautocomplete;

/**
 * Plugin for address auto complete/auto fill.  These methods are called from static methods in AddressAutocompleteUtil.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IAddressAutocompletePlugin extends gw.plugin.IPlugin
{
  /**
   * Returns true if the address autofill is configured correctly.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressAutofillAvailable")
  public boolean isAddressAutofillAvailable();


  /**
   * Autofills the address if there is a unique match.
   *
   * @param address the address to autofill.
   * @param triggerField name of the address field that triggered the autofill.
   * @param alwaysOverride if true, override the existing value with the match for every address field (note, it could be null). If false,
existing value for the field will not be overridden if the match is null.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "autofillAddress")
  public void autofillAddress(external.gw.api.address.AddressFillable address, java.lang.String triggerField, boolean alwaysOverride);



  /**
   * Create an AutocompleteHandler with the following arguments
   *
   * @param addressFieldName name of the field to autocomplete
   * @param additionalArgsNames list of field names used to generate suggestions
   * @param waitForKeyPress true indicates the autocomplete should wait for a user key press before fetching suggestions.
This can have big performance implications, so it should only return false if there are a small,
fixed number of possible suggestions.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createAutocompleteHandler")
  public external.gw.api.contact.AutocompleteHandler createAutocompleteHandler(java.lang.String addressFieldName, java.lang.String[] additionalArgsNames, boolean waitForKeyPress);



  /**
   * Gets the value for the specified address field named fieldName based on address auto-fill configuration.
Use this API if the country does not trigger reflection and is therefore not passed in the list of fields.
   *
   * @return the value for the specified field, if there is a unique match or if there are multiple matches and one of the matches
        matches the current value.
   * @param country the country; this is ignored if the array of fields passed in contains the country
   * @param fieldName the name of the field to autofill
   * @param fieldNames an array of the names of the fields on the address whose values will be used to determine the autofill value.
   * @param fieldValues an array of values of the fields on the address; there is a one-to-one correlation between the fieldNames and fieldValues
   * @param doOverride if true, override the existing value even if it is not null
   * @param triggerIndex the index of the field that triggered the autofill.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAutofillValue")
  public java.lang.Object getAutofillValue(com.guidewire.ab.external.typelist.Country country, java.lang.String fieldName, java.lang.String[] fieldNames, java.lang.Object[] fieldValues, boolean doOverride, java.lang.Integer triggerIndex);



  /**
   * Return the inputmask for the given address field; returns null if none defined.
   *
   * @return the input mask for the given address field
   * @param address the address
   * @param addressFieldName the address field name
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getInputMask")
  public java.lang.String getInputMask(external.gw.api.address.AddressFillable address, java.lang.String addressFieldName);



  /**
   * 
   *
   * @return the input mask for the given address field
   * @param country country
   * @param addressFieldName the address field name
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getInputMask")
  public java.lang.String getInputMask(com.guidewire.ab.external.typelist.Country country, java.lang.String addressFieldName);



  /**
   * Gets the states for the given country.
   *
   * @return an array of states
   * @param country only states for the specified country are returned.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getStates")
  public com.guidewire.ab.external.typelist.State[] getStates(com.guidewire.ab.external.typelist.Country country);



  /**
   * Get the value range for the desired field; the value range will be filtered by the other address
fields that are passed in.  For example, if the desired field is State, and the city is 'Paris'
(with all other fields being null), the result would be all States that have a city called 'Paris'.
   *
   * @return the value range for the desired field
   * @param desiredFieldName the name of the field whose value range is being calculated.
   * @param triggerFieldName the field that is triggering the value range calculation.
   * @param addr the address from whose fields the value range will be calculated
   * @param currentValue the current value of the desired field.
   * @param ofClass the class type of the value
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getValueRange")
  public <T> java.util.List getValueRange(java.lang.String desiredFieldName, java.lang.String triggerFieldName, external.gw.api.address.AddressFillable addr, java.lang.Object currentValue, java.lang.Class ofClass);



  /**
   * Get the value range for the desired field; the value range will be filtered by the other address
fields that are passed in.  For example, if the desired field is State, and the city is 'Paris'
(with all other fields being null), the result would be all States that have a city called 'Paris'.
   *
   * @return the value range for the desired field
   * @param country the country; note that this is ignored if country is in the array of fields
   * @param desiredFieldName the name of the field whose value range is being calculated.
   * @param fieldNames the names of the fields use to filter the value range
   * @param fieldValues the values of the fields that are used to filter the value range
   * @param triggerIndex the field that triggered this autofill call.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getValueRange")
  public java.lang.Object[] getValueRange(com.guidewire.ab.external.typelist.Country country, java.lang.String desiredFieldName, java.lang.String[] fieldNames, java.lang.Object[] fieldValues, java.lang.Integer triggerIndex);



  /**
   * Evaluate the expression that is defined for the given zone type against a specific
address
   *
   * @return the evaluated value
   * @param address address
   * @param zt zone type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getZoneValue")
  public java.lang.String getZoneValue(external.gw.api.address.AddressFillable address, com.guidewire.ab.external.typelist.ZoneType zt);



  /**
   * Look up the zone of the given zone type based on other zones in the address.
The lookup is determined by the lookup order defined in zone config.
   *
   * @return the zone if found, null otherwise.
   * @param address the address
   * @param zt the zone type that is being looked up
   * @param uniqueOnly if true, only return the zone if it uniquely links to the zone being used in the lookup.  If
                  there is more than one match, then no zone is returned.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "lookupZone")
  public com.guidewire.ab.external.entity.Zone lookupZone(external.gw.api.address.AddressFillable address, com.guidewire.ab.external.typelist.ZoneType zt, boolean uniqueOnly);



  /**
   * Validate the address field's format and value.  This validates the field's format against a validator (if defined) and
also validates that the field matches the other fields in the address (based on zone data).
Returns an error message if there is an error with the address field, otherwise, returns null.
   *
   * @return an error message if there is an error with the address field, otherwise, returns null.
   * @param address the address
   * @param addressFieldName the name of the address field
   * @param addressFieldLabel the user-displayable field label to use in error meesage
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validate")
  public java.lang.String validate(external.gw.api.address.AddressFillable address, java.lang.String addressFieldName, java.lang.String addressFieldLabel);



  /**
   * Validate the address field's format.  This validates the field against a validator (if defined).
Returns an error message if there is an error with the address field, otherwise, returns null.
   *
   * @return an error message if there is an error with the address field, otherwise, returns null.
   * @param address the address
   * @param addressFieldName the name of the address field
   * @param addressFieldLabel the user-displayable field label to use in error meesage
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyFieldFormat")
  public java.lang.String verifyFieldFormat(external.gw.api.address.AddressFillable address, java.lang.String addressFieldName, java.lang.String addressFieldLabel);



  /**
   * Validate the address field's format.  This validates the field against a validator (if defined).
Returns an error message if there is an error with the address field, otherwise, returns null.
   *
   * @return an error message String if there is an error with the address field, otherwise, returns null.
   * @param country country
   * @param addressFieldName the name of the address field
   * @param addressFieldValue the value of the address field
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyFieldFormat")
  public java.lang.String verifyFieldFormat(com.guidewire.ab.external.typelist.Country country, java.lang.String addressFieldName, java.lang.Object addressFieldValue);



  /**
   * Validate the address field's value.  This validates the field against a validator (if defined) and
also validates that the field matches the other fields in the address.
Returns an error message if there is an error with the address field, otherwise, returns null.
   *
   * @return true if the field validates, false otherwise.
   * @param address the address
   * @param addressFieldName the name of the address field
   * @param addressLabel 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyFieldValue")
  public java.lang.String verifyFieldValue(external.gw.api.address.AddressFillable address, java.lang.String addressFieldName, java.lang.String addressLabel);


  /**
   * Utility class for accessing static features for external.gw.plugin.addressautocomplete.IAddressAutocompletePlugin
   * <ul>
   * <li>Access static properties for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    /**
     * 
     * 
     */
    public static int getSUGGESTION_LIMIT()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.plugin.addressautocomplete.IAddressAutocompletePlugin.class, "SUGGESTION_LIMIT");
    }

  }
}
