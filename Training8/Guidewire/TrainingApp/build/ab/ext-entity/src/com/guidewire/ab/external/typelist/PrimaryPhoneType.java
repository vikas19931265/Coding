package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of phone numbers
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class PrimaryPhoneType implements TypeKey, Comparable<PrimaryPhoneType> {
  /**
   * Work
   */
  public static PrimaryPhoneType WORK;
  /**
   * Home
   */
  public static PrimaryPhoneType HOME;
  /**
   * Mobile
   */
  public static PrimaryPhoneType MOBILE;
  private static final Map<String, PrimaryPhoneType> ALL_CODES = new LinkedHashMap<String, PrimaryPhoneType>();


  private static void initTypecodes0() {
    WORK = new PrimaryPhoneType("work", 0);
    HOME = new PrimaryPhoneType("home", 1);
    MOBILE = new PrimaryPhoneType("mobile", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate PrimaryPhoneType instance, or null if no such code is present in the list
   */
  public static PrimaryPhoneType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static PrimaryPhoneType[] values() {
    Collection<PrimaryPhoneType> keys = ALL_CODES.values();
    return keys.toArray(new PrimaryPhoneType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private PrimaryPhoneType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "PrimaryPhoneType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PrimaryPhoneType.class, "Categories");
  }

  /**
   * Compares two PrimaryPhoneType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(PrimaryPhoneType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
