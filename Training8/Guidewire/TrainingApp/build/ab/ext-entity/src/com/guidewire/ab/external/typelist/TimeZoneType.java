package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Users' timezones
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class TimeZoneType implements TypeKey, Comparable<TimeZoneType> {
  /**
   * GMT -09:00
   */
  public static TimeZoneType US_ALASKA;
  /**
   * GMT -06:00
   */
  public static TimeZoneType US_CENTRAL;
  /**
   * GMT -05:00
   */
  public static TimeZoneType US_EAST_INDIANA;
  /**
   * GMT -05:00
   */
  public static TimeZoneType US_EASTERN;
  /**
   * GMT -10:00
   */
  public static TimeZoneType US_HAWAII;
  /**
   * GMT -10:00
   */
  public static TimeZoneType US_ALEUTIAN;
  /**
   * GMT -07:00
   */
  public static TimeZoneType US_ARIZONA;
  /**
   * GMT -07:00
   */
  public static TimeZoneType US_MOUNTAIN;
  /**
   * GMT -08:00
   */
  public static TimeZoneType US_PACIFIC;
  private static final Map<String, TimeZoneType> ALL_CODES = new LinkedHashMap<String, TimeZoneType>();


  private static void initTypecodes0() {
    US_ALASKA = new TimeZoneType("US.Alaska", 0);
    US_CENTRAL = new TimeZoneType("US.Central", 1);
    US_EAST_INDIANA = new TimeZoneType("US.East-Indiana", 2);
    US_EASTERN = new TimeZoneType("US.Eastern", 3);
    US_HAWAII = new TimeZoneType("US.Hawaii", 4);
    US_ALEUTIAN = new TimeZoneType("US.Aleutian", 5);
    US_ARIZONA = new TimeZoneType("US.Arizona", 6);
    US_MOUNTAIN = new TimeZoneType("US.Mountain", 7);
    US_PACIFIC = new TimeZoneType("US.Pacific", 8);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate TimeZoneType instance, or null if no such code is present in the list
   */
  public static TimeZoneType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static TimeZoneType[] values() {
    Collection<TimeZoneType> keys = ALL_CODES.values();
    return keys.toArray(new TimeZoneType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private TimeZoneType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "TimeZoneType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TimeZoneType.class, "Categories");
  }

  /**
   * Compares two TimeZoneType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(TimeZoneType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
