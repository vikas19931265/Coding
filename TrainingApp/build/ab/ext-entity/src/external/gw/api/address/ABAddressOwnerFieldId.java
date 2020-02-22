package external.gw.api.address;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABAddressOwnerFieldId extends external.gw.api.address.AddressOwnerFieldId
{


  /**
   * Utility class for accessing static features for external.gw.api.address.ABAddressOwnerFieldId
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * Required contact fields for countries that do not have states/provinces
     * 
     */
    public static java.util.Set getCOUNTRY_WITHOUT_STATES_PLACE_REQUIRED()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.ABAddressOwnerFieldId.class, "COUNTRY_WITHOUT_STATES_PLACE_REQUIRED");
    }

    /**
     * Required contact fields for countries that have states (such as US, Canada, Australia).
Same as PLACE_REQUIRED, but requires State to be present as well.
     * 
     */
    public static java.util.Set getCOUNTRY_WITH_STATES_PLACE_REQUIRED()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.ABAddressOwnerFieldId.class, "COUNTRY_WITH_STATES_PLACE_REQUIRED");
    }

    
    
  }


  /**
   * Utility class for initializing an instance of external.gw.api.address.ABAddressOwnerFieldId
   */
  public static class CONSTRUCT
  {

  }
}
