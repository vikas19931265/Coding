package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * List of regions and their regional phone codes
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class PhoneType implements TypeKey, Comparable<PhoneType> {
  /**
   * Fax
   */
  public static PhoneType FAX;
  /**
   * Generic
   */
  public static PhoneType GENERIC;
  /**
   * Home
   */
  public static PhoneType HOME;
  /**
   * Mobile
   */
  public static PhoneType CELL;
  /**
   * Work
   */
  public static PhoneType WORK;
  private static final Map<String, PhoneType> ALL_CODES = new LinkedHashMap<String, PhoneType>();


  private static void initTypecodes0() {
    FAX = new PhoneType("Fax", 0);
    GENERIC = new PhoneType("Generic", 1);
    HOME = new PhoneType("Home", 2);
    CELL = new PhoneType("Cell", 3);
    WORK = new PhoneType("Work", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate PhoneType instance, or null if no such code is present in the list
   */
  public static PhoneType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static PhoneType[] values() {
    Collection<PhoneType> keys = ALL_CODES.values();
    return keys.toArray(new PhoneType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private PhoneType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "PhoneType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PhoneType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PhoneType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PhoneType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneType.class, "Categories");
  }

  /**
   * Compares two PhoneType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(PhoneType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
