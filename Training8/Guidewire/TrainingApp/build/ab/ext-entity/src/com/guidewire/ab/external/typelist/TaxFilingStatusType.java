package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * type of employee
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class TaxFilingStatusType implements TypeKey, Comparable<TaxFilingStatusType> {
  /**
   * Single
   */
  public static TaxFilingStatusType SINGLE;
  /**
   * Married filing jointly
   */
  public static TaxFilingStatusType MARRIED_JOINT;
  /**
   * Married filing separately
   */
  public static TaxFilingStatusType MARRIED_SEPARATE;
  /**
   * Head of household
   */
  public static TaxFilingStatusType HEADOFHOUSEHOLD;
  /**
   * Qualifying widow(er) with dependent child
   */
  public static TaxFilingStatusType WIDOW;
  private static final Map<String, TaxFilingStatusType> ALL_CODES = new LinkedHashMap<String, TaxFilingStatusType>();


  private static void initTypecodes0() {
    SINGLE = new TaxFilingStatusType("single", 0);
    MARRIED_JOINT = new TaxFilingStatusType("married-joint", 1);
    MARRIED_SEPARATE = new TaxFilingStatusType("married-separate", 2);
    HEADOFHOUSEHOLD = new TaxFilingStatusType("headofhousehold", 3);
    WIDOW = new TaxFilingStatusType("widow", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate TaxFilingStatusType instance, or null if no such code is present in the list
   */
  public static TaxFilingStatusType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static TaxFilingStatusType[] values() {
    Collection<TaxFilingStatusType> keys = ALL_CODES.values();
    return keys.toArray(new TaxFilingStatusType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private TaxFilingStatusType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "TaxFilingStatusType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxFilingStatusType.class, "Categories");
  }

  /**
   * Compares two TaxFilingStatusType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(TaxFilingStatusType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
