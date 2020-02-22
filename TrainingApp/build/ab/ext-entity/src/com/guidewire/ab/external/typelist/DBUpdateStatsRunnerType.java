package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Type of process running update statistics
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class DBUpdateStatsRunnerType implements TypeKey, Comparable<DBUpdateStatsRunnerType> {
  /**
   * Batch Process running update statistics
   */
  public static DBUpdateStatsRunnerType BATCH;
  /**
   * Datagen running update statistics
   */
  public static DBUpdateStatsRunnerType DATAGEN;
  /**
   * Loader running update statistics
   */
  public static DBUpdateStatsRunnerType LOADER;
  /**
   * TableImport running update statistics
   */
  public static DBUpdateStatsRunnerType TABLEIMPORT;
  /**
   * Upgrade running update statistics
   */
  public static DBUpdateStatsRunnerType UPGRADE;
  private static final Map<String, DBUpdateStatsRunnerType> ALL_CODES = new LinkedHashMap<String, DBUpdateStatsRunnerType>();


  private static void initTypecodes0() {
    BATCH = new DBUpdateStatsRunnerType("Batch", 0);
    DATAGEN = new DBUpdateStatsRunnerType("Datagen", 1);
    LOADER = new DBUpdateStatsRunnerType("Loader", 2);
    TABLEIMPORT = new DBUpdateStatsRunnerType("TableImport", 3);
    UPGRADE = new DBUpdateStatsRunnerType("Upgrade", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DBUpdateStatsRunnerType instance, or null if no such code is present in the list
   */
  public static DBUpdateStatsRunnerType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DBUpdateStatsRunnerType[] values() {
    Collection<DBUpdateStatsRunnerType> keys = ALL_CODES.values();
    return keys.toArray(new DBUpdateStatsRunnerType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DBUpdateStatsRunnerType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DBUpdateStatsRunnerType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType.class, "Categories");
  }

  /**
   * Compares two DBUpdateStatsRunnerType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DBUpdateStatsRunnerType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
