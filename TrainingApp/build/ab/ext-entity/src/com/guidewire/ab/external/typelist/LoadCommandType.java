package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of load commands
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class LoadCommandType implements TypeKey, Comparable<LoadCommandType> {
  /**
   * Database statistics updated on staging tables
   */
  public static LoadCommandType DBSTATSUPDATED;
  /**
   * Encrypt data in staging tables
   */
  public static LoadCommandType TABLESENCRYPTED;
  /**
   * Error table cleared
   */
  public static LoadCommandType ERRORCLEARED;
  /**
   * Excluded rows deleted from staging tables
   */
  public static LoadCommandType EXCLUDEDDELETED;
  /**
   * Exclusion table cleared
   */
  public static LoadCommandType EXCLUSIONCLEARED;
  /**
   * Exclusion table populated with failed rows from error table
   */
  public static LoadCommandType EXCLUSIONPOP;
  /**
   * Integrity of staging tables checked
   */
  public static LoadCommandType INTEGRITYCHECKED;
  /**
   * Non-excluded rows deleted from staging tables
   */
  public static LoadCommandType NONEXCLUDEDDELETED;
  /**
   * Source tables loaded from staging tables
   */
  public static LoadCommandType SOURCELOADED;
  /**
   * Staging tables cleared
   */
  public static LoadCommandType STAGINGCLEARED;
  /**
   * Zone Source tables loaded from staging tables
   */
  public static LoadCommandType ZONESOURCELOADED;
  private static final Map<String, LoadCommandType> ALL_CODES = new LinkedHashMap<String, LoadCommandType>();


  private static void initTypecodes0() {
    DBSTATSUPDATED = new LoadCommandType("dbstatsupdated", 0);
    TABLESENCRYPTED = new LoadCommandType("tablesencrypted", 1);
    ERRORCLEARED = new LoadCommandType("errorcleared", 2);
    EXCLUDEDDELETED = new LoadCommandType("excludeddeleted", 3);
    EXCLUSIONCLEARED = new LoadCommandType("exclusioncleared", 4);
    EXCLUSIONPOP = new LoadCommandType("exclusionpop", 5);
    INTEGRITYCHECKED = new LoadCommandType("integritychecked", 6);
    NONEXCLUDEDDELETED = new LoadCommandType("nonexcludeddeleted", 7);
    SOURCELOADED = new LoadCommandType("sourceloaded", 8);
    STAGINGCLEARED = new LoadCommandType("stagingcleared", 9);
    ZONESOURCELOADED = new LoadCommandType("zonesourceloaded", 10);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate LoadCommandType instance, or null if no such code is present in the list
   */
  public static LoadCommandType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static LoadCommandType[] values() {
    Collection<LoadCommandType> keys = ALL_CODES.values();
    return keys.toArray(new LoadCommandType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private LoadCommandType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "LoadCommandType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadCommandType.class, "Categories");
  }

  /**
   * Compares two LoadCommandType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(LoadCommandType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
