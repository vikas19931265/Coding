package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Units of distance
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class UnitOfDistance implements TypeKey, Comparable<UnitOfDistance> {
  /**
   * Foot
   */
  public static UnitOfDistance FOOT;
  /**
   * Kilometer
   */
  public static UnitOfDistance KILOMETER;
  /**
   * Meter
   */
  public static UnitOfDistance METER;
  /**
   * International statute mile
   */
  public static UnitOfDistance MILE;
  private static final Map<String, UnitOfDistance> ALL_CODES = new LinkedHashMap<String, UnitOfDistance>();


  private static void initTypecodes0() {
    FOOT = new UnitOfDistance("Foot", 0);
    KILOMETER = new UnitOfDistance("Kilometer", 1);
    METER = new UnitOfDistance("Meter", 2);
    MILE = new UnitOfDistance("Mile", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate UnitOfDistance instance, or null if no such code is present in the list
   */
  public static UnitOfDistance getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static UnitOfDistance[] values() {
    Collection<UnitOfDistance> keys = ALL_CODES.values();
    return keys.toArray(new UnitOfDistance[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private UnitOfDistance(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "UnitOfDistance";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UnitOfDistance.class, "Categories");
  }

  /**
   * Compares two UnitOfDistance instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(UnitOfDistance o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
