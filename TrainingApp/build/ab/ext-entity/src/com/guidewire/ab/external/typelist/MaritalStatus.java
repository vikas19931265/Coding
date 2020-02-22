package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * An individual's marital status
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class MaritalStatus implements TypeKey, Comparable<MaritalStatus> {
  /**
   * Single
   */
  public static MaritalStatus SINGLE;
  /**
   * Married
   */
  public static MaritalStatus MARRIED;
  /**
   * Divorced
   */
  public static MaritalStatus DIVORCED;
  /**
   * Spouse deceased
   */
  public static MaritalStatus WIDOWED;
  /**
   * Common law spouse
   */
  public static MaritalStatus COMMON;
  /**
   * Separated
   */
  public static MaritalStatus SEPARATED;
  /**
   * Unknown
   */
  public static MaritalStatus UNKNOWN;
  private static final Map<String, MaritalStatus> ALL_CODES = new LinkedHashMap<String, MaritalStatus>();


  private static void initTypecodes0() {
    SINGLE = new MaritalStatus("single", 0);
    MARRIED = new MaritalStatus("married", 1);
    DIVORCED = new MaritalStatus("divorced", 2);
    WIDOWED = new MaritalStatus("widowed", 3);
    COMMON = new MaritalStatus("common", 4);
    SEPARATED = new MaritalStatus("separated", 5);
    UNKNOWN = new MaritalStatus("unknown", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate MaritalStatus instance, or null if no such code is present in the list
   */
  public static MaritalStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static MaritalStatus[] values() {
    Collection<MaritalStatus> keys = ALL_CODES.values();
    return keys.toArray(new MaritalStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private MaritalStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "MaritalStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MaritalStatus.class, "Categories");
  }

  /**
   * Compares two MaritalStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(MaritalStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
