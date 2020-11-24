package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * MeasurementSystem
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class MeasurementSystem implements TypeKey, Comparable<MeasurementSystem> {
  /**
   * Metric system
   */
  public static MeasurementSystem METRIC;
  /**
   * US Customary system
   */
  public static MeasurementSystem US_CUSTOMARY;
  private static final Map<String, MeasurementSystem> ALL_CODES = new LinkedHashMap<String, MeasurementSystem>();


  private static void initTypecodes0() {
    METRIC = new MeasurementSystem("metric", 0);
    US_CUSTOMARY = new MeasurementSystem("us_customary", 1);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate MeasurementSystem instance, or null if no such code is present in the list
   */
  public static MeasurementSystem getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static MeasurementSystem[] values() {
    Collection<MeasurementSystem> keys = ALL_CODES.values();
    return keys.toArray(new MeasurementSystem[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private MeasurementSystem(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "MeasurementSystem";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MeasurementSystem.class, "Categories");
  }

  /**
   * Compares two MeasurementSystem instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(MeasurementSystem o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
