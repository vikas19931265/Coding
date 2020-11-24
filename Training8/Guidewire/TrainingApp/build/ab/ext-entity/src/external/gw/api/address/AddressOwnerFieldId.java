package external.gw.api.address;

/**
 * Used to provide typesafety for extendable fields and
contains the defined Field ID constants
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AddressOwnerFieldId
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();


  /**
   * 
   * @deprecated Replaced by 'Name' property
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Named")
  public java.lang.String getNamed();


  /**
   * Utility class for accessing static features for external.gw.api.address.AddressOwnerFieldId
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * Constants for available fields
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getADDRESSLINE1()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ADDRESSLINE1");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getADDRESSLINE1KANJI()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ADDRESSLINE1KANJI");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getADDRESSLINE1_CITY_STATE_ZIP()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ADDRESSLINE1_CITY_STATE_ZIP");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getADDRESSLINE1_FIELDS()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ADDRESSLINE1_FIELDS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getADDRESSLINE2()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ADDRESSLINE2");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getADDRESSLINE2KANJI()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ADDRESSLINE2KANJI");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getADDRESSLINE2_FIELDS()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ADDRESSLINE2_FIELDS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getADDRESSLINE3()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ADDRESSLINE3");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getADDRESSTYPE()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ADDRESSTYPE");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getALL_PCF_FIELDS()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "ALL_PCF_FIELDS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getCEDEX()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "CEDEX");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getCEDEXBUREAU()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "CEDEXBUREAU");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getCITY()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "CITY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getCITYKANJI()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "CITYKANJI");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getCITY_FIELDS()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "CITY_FIELDS");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getCITY_STATE_ZIP()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "CITY_STATE_ZIP");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getCOUNTRY()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "COUNTRY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getCOUNTY()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "COUNTY");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getDESCRIPTION()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "DESCRIPTION");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getHIDDEN_FOR_PROXIMITY_SEARCH()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "HIDDEN_FOR_PROXIMITY_SEARCH");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getHIDDEN_FOR_SEARCH()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "HIDDEN_FOR_SEARCH");
    }

    /**
     * Empty set of fields
     * 
     */
    public static java.util.Set getNO_FIELDS()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "NO_FIELDS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getPOSTALCODE()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "POSTALCODE");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getPOSTALCODE_FIELDS()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "POSTALCODE_FIELDS");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getSTATE()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "STATE");
    }

    /**
     * 
     * 
     */
    public static external.gw.api.address.AddressOwnerFieldId getVALIDUNTIL()
    {
      return (external.gw.api.address.AddressOwnerFieldId) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.address.AddressOwnerFieldId.class, "VALIDUNTIL");
    }

    
    
  }


  /**
   * Utility class for initializing an instance of external.gw.api.address.AddressOwnerFieldId
   */
  public static class CONSTRUCT
  {

  }
}
