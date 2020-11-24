package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of mailing addresses
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class AddressType implements TypeKey, Comparable<AddressType> {
  /**
   * Billing
   */
  public static AddressType BILLING;
  /**
   * Business
   */
  public static AddressType BUSINESS;
  /**
   * Home
   */
  public static AddressType HOME;
  /**
   * Other
   */
  public static AddressType OTHER;
  private static final Map<String, AddressType> ALL_CODES = new LinkedHashMap<String, AddressType>();


  private static void initTypecodes0() {
    BILLING = new AddressType("billing", 0);
    BUSINESS = new AddressType("business", 1);
    HOME = new AddressType("home", 2);
    OTHER = new AddressType("other", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate AddressType instance, or null if no such code is present in the list
   */
  public static AddressType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static AddressType[] values() {
    Collection<AddressType> keys = ALL_CODES.values();
    return keys.toArray(new AddressType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private AddressType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "AddressType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AddressType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AddressType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AddressType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AddressType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AddressType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AddressType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AddressType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AddressType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AddressType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AddressType.class, "Categories");
  }

  /**
   * Compares two AddressType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(AddressType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
