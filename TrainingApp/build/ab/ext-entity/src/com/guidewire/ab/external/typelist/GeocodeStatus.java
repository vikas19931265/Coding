package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Describes the status of a geocode on an Address: customers may modify it for different geocoding providers.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class GeocodeStatus implements TypeKey, Comparable<GeocodeStatus> {
  /**
   * The Geocoding service was only able to locate the city from the supplied address.
   */
  public static GeocodeStatus CITY;
  /**
   * The Geocoding service was able to find an exact match for the supplied address.
   */
  public static GeocodeStatus EXACT;
  /**
   * The Geocoding service was unable to geocode the address.
   */
  public static GeocodeStatus FAILURE;
  /**
   * An Address has never been submitted for geocoding.
   */
  public static GeocodeStatus NONE;
  /**
   * The Geocoding service was only able to locate the postal code from the supplied address.
   */
  public static GeocodeStatus POSTALCODE;
  /**
   * The Geocoding service was only able to locate the street from the supplied address.
   */
  public static GeocodeStatus STREET;
  private static final Map<String, GeocodeStatus> ALL_CODES = new LinkedHashMap<String, GeocodeStatus>();


  private static void initTypecodes0() {
    CITY = new GeocodeStatus("city", 0);
    EXACT = new GeocodeStatus("exact", 1);
    FAILURE = new GeocodeStatus("failure", 2);
    NONE = new GeocodeStatus("none", 3);
    POSTALCODE = new GeocodeStatus("postalcode", 4);
    STREET = new GeocodeStatus("street", 5);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate GeocodeStatus instance, or null if no such code is present in the list
   */
  public static GeocodeStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static GeocodeStatus[] values() {
    Collection<GeocodeStatus> keys = ALL_CODES.values();
    return keys.toArray(new GeocodeStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private GeocodeStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "GeocodeStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GeocodeStatus.class, "Categories");
  }

  /**
   * Compares two GeocodeStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(GeocodeStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
