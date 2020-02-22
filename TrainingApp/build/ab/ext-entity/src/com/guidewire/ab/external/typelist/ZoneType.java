package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ZoneType implements TypeKey, Comparable<ZoneType> {
  /**
   * City
   */
  public static ZoneType CITY;
  /**
   * CityKanji
   */
  public static ZoneType CITYKANJI;
  /**
   * Country
   */
  public static ZoneType COUNTRY;
  /**
   * County
   */
  public static ZoneType COUNTY;
  /**
   * FSA
   */
  public static ZoneType FSA;
  /**
   * Post Code Area
   */
  public static ZoneType POSTCODEAREA;
  /**
   * Post Code Region
   */
  public static ZoneType POSTCODEREGION;
  /**
   * PostalCode
   */
  public static ZoneType POSTALCODE;
  /**
   * Prefecture
   */
  public static ZoneType PREFECTURE;
  /**
   * Province
   */
  public static ZoneType PROVINCE;
  /**
   * State
   */
  public static ZoneType STATE;
  /**
   * Zip code
   */
  public static ZoneType ZIP;
  /**
   * Placeholder typecode for fields that should be populated with another ZoneType
   */
  public static ZoneType UNKNOWN;
  private static final Map<String, ZoneType> ALL_CODES = new LinkedHashMap<String, ZoneType>();


  private static void initTypecodes0() {
    CITY = new ZoneType("city", 0);
    CITYKANJI = new ZoneType("citykanji", 1);
    COUNTRY = new ZoneType("country", 2);
    COUNTY = new ZoneType("county", 3);
    FSA = new ZoneType("fsa", 4);
    POSTCODEAREA = new ZoneType("postcodearea", 5);
    POSTCODEREGION = new ZoneType("postcoderegion", 6);
    POSTALCODE = new ZoneType("postalcode", 7);
    PREFECTURE = new ZoneType("prefecture", 8);
    PROVINCE = new ZoneType("province", 9);
    STATE = new ZoneType("state", 10);
    ZIP = new ZoneType("zip", 11);
    UNKNOWN = new ZoneType("unknown", 12);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ZoneType instance, or null if no such code is present in the list
   */
  public static ZoneType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ZoneType[] values() {
    Collection<ZoneType> keys = ALL_CODES.values();
    return keys.toArray(new ZoneType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ZoneType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ZoneType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ZoneType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ZoneType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ZoneType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ZoneType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ZoneType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ZoneType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ZoneType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ZoneType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ZoneType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ZoneType.class, "Categories");
  }

  /**
   * Compares two ZoneType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ZoneType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
