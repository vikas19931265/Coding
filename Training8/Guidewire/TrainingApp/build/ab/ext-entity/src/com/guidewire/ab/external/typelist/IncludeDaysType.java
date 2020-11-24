package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Which days to include in the day count
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class IncludeDaysType implements TypeKey, Comparable<IncludeDaysType> {
  /**
   * The number of business days since the starting point; does not include weekends and holidays
   */
  public static IncludeDaysType BUSINESSDAYS;
  /**
   * The number of calendar days elapsed since the starting point; includes all weekends and holidays
   */
  public static IncludeDaysType ELAPSED;
  private static final Map<String, IncludeDaysType> ALL_CODES = new LinkedHashMap<String, IncludeDaysType>();


  private static void initTypecodes0() {
    BUSINESSDAYS = new IncludeDaysType("businessdays", 0);
    ELAPSED = new IncludeDaysType("elapsed", 1);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate IncludeDaysType instance, or null if no such code is present in the list
   */
  public static IncludeDaysType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static IncludeDaysType[] values() {
    Collection<IncludeDaysType> keys = ALL_CODES.values();
    return keys.toArray(new IncludeDaysType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private IncludeDaysType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "IncludeDaysType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.IncludeDaysType.class, "Categories");
  }

  /**
   * Compares two IncludeDaysType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(IncludeDaysType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
