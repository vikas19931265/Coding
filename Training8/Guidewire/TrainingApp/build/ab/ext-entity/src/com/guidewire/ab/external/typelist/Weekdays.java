package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * A list of weekdays
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class Weekdays implements TypeKey, Comparable<Weekdays> {
  /**
   * Sunday
   */
  public static Weekdays SUNDAY;
  /**
   * Monday
   */
  public static Weekdays MONDAY;
  /**
   * Tuesday
   */
  public static Weekdays TUESDAY;
  /**
   * Wednesday
   */
  public static Weekdays WEDNESDAY;
  /**
   * Thursday
   */
  public static Weekdays THURSDAY;
  /**
   * Friday
   */
  public static Weekdays FRIDAY;
  /**
   * Saturday
   */
  public static Weekdays SATURDAY;
  private static final Map<String, Weekdays> ALL_CODES = new LinkedHashMap<String, Weekdays>();


  private static void initTypecodes0() {
    SUNDAY = new Weekdays("Sunday", 0);
    MONDAY = new Weekdays("Monday", 1);
    TUESDAY = new Weekdays("Tuesday", 2);
    WEDNESDAY = new Weekdays("Wednesday", 3);
    THURSDAY = new Weekdays("Thursday", 4);
    FRIDAY = new Weekdays("Friday", 5);
    SATURDAY = new Weekdays("Saturday", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate Weekdays instance, or null if no such code is present in the list
   */
  public static Weekdays getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static Weekdays[] values() {
    Collection<Weekdays> keys = ALL_CODES.values();
    return keys.toArray(new Weekdays[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private Weekdays(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "Weekdays";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Weekdays.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Weekdays.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Weekdays.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Weekdays.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Weekdays.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Weekdays.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Weekdays.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Weekdays.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Weekdays.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Weekdays.class, "Categories");
  }

  /**
   * Compares two Weekdays instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(Weekdays o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
