package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of database storage sets persited before and after an upgrade
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class UpgradeDBStorageSetType implements TypeKey, Comparable<UpgradeDBStorageSetType> {
  /**
   * Storage info for DB2 Tables
   */
  public static UpgradeDBStorageSetType DB2TABLES;
  /**
   * Storage info for Oracle indexes
   */
  public static UpgradeDBStorageSetType ORACLEINDEXES;
  /**
   * Indexes storage definitions for Oracle
   */
  public static UpgradeDBStorageSetType ORACLEINDEXESDEF;
  /**
   * LOB storage info for Oracle
   */
  public static UpgradeDBStorageSetType ORACLELOBSDEF;
  /**
   * Storage info for Oracle LOBs
   */
  public static UpgradeDBStorageSetType ORACLELOBS;
  /**
   * Storage info for Oracle tables
   */
  public static UpgradeDBStorageSetType ORACLETABLES;
  /**
   * Table Storage definitions for Oracle
   */
  public static UpgradeDBStorageSetType ORACLETABLESDEF;
  /**
   * Tablespace storage definitions for Oracle
   */
  public static UpgradeDBStorageSetType ORACLETABLESPACEDEF;
  /**
   * Storage info for Oracle tablespaces
   */
  public static UpgradeDBStorageSetType ORACLETABLESPACE;
  /**
   * Storage info for a SQL Server database
   */
  public static UpgradeDBStorageSetType SQLSERVERDATABASE;
  /**
   * Storage info for a SQL Server database dataspace
   */
  public static UpgradeDBStorageSetType SQLSERVERDATASPACE;
  /**
   * Storage info for a SQL Server database tables and indexes
   */
  public static UpgradeDBStorageSetType SQLSERVERTABLESINDEXES;
  /**
   * Storage info for a SQL Server database tempdb
   */
  public static UpgradeDBStorageSetType SQLSERVERTEMPDB;
  private static final Map<String, UpgradeDBStorageSetType> ALL_CODES = new LinkedHashMap<String, UpgradeDBStorageSetType>();


  private static void initTypecodes0() {
    DB2TABLES = new UpgradeDBStorageSetType("db2tables", 0);
    ORACLEINDEXES = new UpgradeDBStorageSetType("oracleindexes", 1);
    ORACLEINDEXESDEF = new UpgradeDBStorageSetType("oracleindexesdef", 2);
    ORACLELOBSDEF = new UpgradeDBStorageSetType("oraclelobsdef", 3);
    ORACLELOBS = new UpgradeDBStorageSetType("oraclelobs", 4);
    ORACLETABLES = new UpgradeDBStorageSetType("oracletables", 5);
    ORACLETABLESDEF = new UpgradeDBStorageSetType("oracletablesdef", 6);
    ORACLETABLESPACEDEF = new UpgradeDBStorageSetType("oracletablespacedef", 7);
    ORACLETABLESPACE = new UpgradeDBStorageSetType("oracletablespace", 8);
    SQLSERVERDATABASE = new UpgradeDBStorageSetType("sqlserverdatabase", 9);
    SQLSERVERDATASPACE = new UpgradeDBStorageSetType("sqlserverdataspace", 10);
    SQLSERVERTABLESINDEXES = new UpgradeDBStorageSetType("sqlservertablesindexes", 11);
    SQLSERVERTEMPDB = new UpgradeDBStorageSetType("sqlservertempdb", 12);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate UpgradeDBStorageSetType instance, or null if no such code is present in the list
   */
  public static UpgradeDBStorageSetType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static UpgradeDBStorageSetType[] values() {
    Collection<UpgradeDBStorageSetType> keys = ALL_CODES.values();
    return keys.toArray(new UpgradeDBStorageSetType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private UpgradeDBStorageSetType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "UpgradeDBStorageSetType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeDBStorageSetType.class, "Categories");
  }

  /**
   * Compares two UpgradeDBStorageSetType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(UpgradeDBStorageSetType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
