package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Type of data distributions
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class DataDistributionType implements TypeKey, Comparable<DataDistributionType> {
  /**
   * Ad hoc distribution supplied as input
   */
  public static DataDistributionType ADHOC;
  /**
   * Data distribution provided by the application
   */
  public static DataDistributionType APP_SPECIFIC;
  /**
   * Distribution of assignable by date
   */
  public static DataDistributionType ASSIGNABLE;
  private static final Map<String, DataDistributionType> ALL_CODES = new LinkedHashMap<String, DataDistributionType>();


  private static void initTypecodes0() {
    ADHOC = new DataDistributionType("adhoc", 0);
    APP_SPECIFIC = new DataDistributionType("app_specific", 1);
    ASSIGNABLE = new DataDistributionType("assignable", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DataDistributionType instance, or null if no such code is present in the list
   */
  public static DataDistributionType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DataDistributionType[] values() {
    Collection<DataDistributionType> keys = ALL_CODES.values();
    return keys.toArray(new DataDistributionType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DataDistributionType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DataDistributionType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataDistributionType.class, "Categories");
  }

  /**
   * Compares two DataDistributionType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DataDistributionType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
