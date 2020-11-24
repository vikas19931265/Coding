package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Used to categorize Jurisdictions.  Each Jurisdiction may have one or more JurisdictionTypes
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class JurisdictionType implements TypeKey, Comparable<JurisdictionType> {
  /**
   * Consumption tax such as sales tax or VAT
   */
  public static JurisdictionType CONS_TAX;
  /**
   * Driver's license
   */
  public static JurisdictionType DRIVING_LIC;
  /**
   * Insurance
   */
  public static JurisdictionType INSURANCE;
  /**
   * Insurance Tax
   */
  public static JurisdictionType INS_TAX;
  /**
   * Vehicle registration
   */
  public static JurisdictionType VEHICLE_REG;
  private static final Map<String, JurisdictionType> ALL_CODES = new LinkedHashMap<String, JurisdictionType>();


  private static void initTypecodes0() {
    CONS_TAX = new JurisdictionType("cons_tax", 0);
    DRIVING_LIC = new JurisdictionType("driving_lic", 1);
    INSURANCE = new JurisdictionType("insurance", 2);
    INS_TAX = new JurisdictionType("ins_tax", 3);
    VEHICLE_REG = new JurisdictionType("vehicle_reg", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate JurisdictionType instance, or null if no such code is present in the list
   */
  public static JurisdictionType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static JurisdictionType[] values() {
    Collection<JurisdictionType> keys = ALL_CODES.values();
    return keys.toArray(new JurisdictionType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private JurisdictionType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "JurisdictionType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.JurisdictionType.class, "Categories");
  }

  /**
   * Compares two JurisdictionType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(JurisdictionType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
