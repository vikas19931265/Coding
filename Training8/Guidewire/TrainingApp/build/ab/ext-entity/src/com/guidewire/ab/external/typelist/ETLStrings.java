package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * ETLStrings
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ETLStrings implements TypeKey, Comparable<ETLStrings> {
  /**
   * NOT APPLICABLE
   */
  public static ETLStrings ETL_NOT_APPLICABLE;
  /**
   * NOT FOUND
   */
  public static ETLStrings ETL_NOT_FOUND;
  /**
   * RECORD NOT FOUND
   */
  public static ETLStrings ETL_RECORD_NOT_FOUND;
  /**
   * UNKNOWN
   */
  public static ETLStrings ETL_UNKNOWN;
  /**
   * NOT APPLICABLE
   */
  public static ETLStrings NOT_APPLICABLE;
  /**
   * NOT FOUND
   */
  public static ETLStrings NOT_FOUND;
  /**
   * RECORD NOT FOUND
   */
  public static ETLStrings RECORD_NOT_FOUND;
  /**
   * SUSPENSE_PAYMENT
   */
  public static ETLStrings SUSPENSE_PAYMENT;
  /**
   * UNKNOWN
   */
  public static ETLStrings UNKNOWN;
  private static final Map<String, ETLStrings> ALL_CODES = new LinkedHashMap<String, ETLStrings>();


  private static void initTypecodes0() {
    ETL_NOT_APPLICABLE = new ETLStrings("ETL_NOT_APPLICABLE", 0);
    ETL_NOT_FOUND = new ETLStrings("ETL_NOT_FOUND", 1);
    ETL_RECORD_NOT_FOUND = new ETLStrings("ETL_RECORD_NOT_FOUND", 2);
    ETL_UNKNOWN = new ETLStrings("ETL_UNKNOWN", 3);
    NOT_APPLICABLE = new ETLStrings("NOT_APPLICABLE", 4);
    NOT_FOUND = new ETLStrings("NOT_FOUND", 5);
    RECORD_NOT_FOUND = new ETLStrings("RECORD_NOT_FOUND", 6);
    SUSPENSE_PAYMENT = new ETLStrings("SUSPENSE_PAYMENT", 7);
    UNKNOWN = new ETLStrings("UNKNOWN", 8);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ETLStrings instance, or null if no such code is present in the list
   */
  public static ETLStrings getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ETLStrings[] values() {
    Collection<ETLStrings> keys = ALL_CODES.values();
    return keys.toArray(new ETLStrings[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ETLStrings(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ETLStrings";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ETLStrings.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ETLStrings.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ETLStrings.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ETLStrings.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ETLStrings.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ETLStrings.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ETLStrings.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ETLStrings.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ETLStrings.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ETLStrings.class, "Categories");
  }

  /**
   * Compares two ETLStrings instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ETLStrings o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
