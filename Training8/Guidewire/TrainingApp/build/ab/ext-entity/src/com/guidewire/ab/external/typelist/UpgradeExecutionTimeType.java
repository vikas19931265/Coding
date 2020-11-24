package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of upgrade execution times
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class UpgradeExecutionTimeType implements TypeKey, Comparable<UpgradeExecutionTimeType> {
  /**
   * Bootstrap
   */
  public static UpgradeExecutionTimeType BOOTSTRAP;
  /**
   * Sync indexes
   */
  public static UpgradeExecutionTimeType SYNCINDEXES;
  /**
   * Check database state for disabled constraints, etc.
   */
  public static UpgradeExecutionTimeType CHECKDBSTATE;
  /**
   * Capture row counts before upgrade
   */
  public static UpgradeExecutionTimeType PREROWCOUNTS;
  /**
   * Persist database parameters
   */
  public static UpgradeExecutionTimeType DBPARAMETERS;
  /**
   * Capture database space info before upgrade
   */
  public static UpgradeExecutionTimeType DBSPACEBEFORE;
  /**
   * Execute customer checks to determine whether to proceed with upgrade
   */
  public static UpgradeExecutionTimeType CUSTOMVERSIONCHECKS;
  /**
   * Execute customer pre-upgrade steps defined in IDatamodelUpgrade plugin
   */
  public static UpgradeExecutionTimeType CUSTOMPREUPGRADE;
  /**
   * Execute checks to determine whether to proceed with upgrade
   */
  public static UpgradeExecutionTimeType VERSIONCHECKS;
  /**
   * Execute VersionTriggers before schema diff
   */
  public static UpgradeExecutionTimeType VTBEFORESCHEMADIFF;
  /**
   * Verify no references to orphaned type codes
   */
  public static UpgradeExecutionTimeType ORPHANEDTYPECODES;
  /**
   * Encrypt or decrypt existing data
   */
  public static UpgradeExecutionTimeType ENCRYPTDECRYPT;
  /**
   * Generate steps
   */
  public static UpgradeExecutionTimeType GENSTEPS;
  /**
   * Execute steps
   */
  public static UpgradeExecutionTimeType EXECUTESTEPS;
  /**
   * VersionTriggers after schema diff
   */
  public static UpgradeExecutionTimeType VTAFTERSCHEMADIFF;
  /**
   * Execute customer post-upgrade steps defined in IDatamodelUpgrade plugin
   */
  public static UpgradeExecutionTimeType CUSTOMPOSTUPGRADE;
  /**
   * Capture snapshot of datamodel for archiving
   */
  public static UpgradeExecutionTimeType SNAPSHOTDATAMODEL;
  /**
   * Clean up
   */
  public static UpgradeExecutionTimeType CLEANUP;
  /**
   * Copy contents of source tables to shadow tables
   */
  public static UpgradeExecutionTimeType COPYTOSHADOWTABLES;
  /**
   * Capture row counts after upgrade
   */
  public static UpgradeExecutionTimeType POSTROWCOUNTS;
  /**
   * Capture database space info after upgrade
   */
  public static UpgradeExecutionTimeType DBSPACEAFTER;
  /**
   * Verify schema
   */
  public static UpgradeExecutionTimeType VERIFYSCHEMA;
  private static final Map<String, UpgradeExecutionTimeType> ALL_CODES = new LinkedHashMap<String, UpgradeExecutionTimeType>();


  private static void initTypecodes0() {
    BOOTSTRAP = new UpgradeExecutionTimeType("bootstrap", 0);
    SYNCINDEXES = new UpgradeExecutionTimeType("syncindexes", 1);
    CHECKDBSTATE = new UpgradeExecutionTimeType("checkdbstate", 2);
    PREROWCOUNTS = new UpgradeExecutionTimeType("prerowcounts", 3);
    DBPARAMETERS = new UpgradeExecutionTimeType("dbparameters", 4);
    DBSPACEBEFORE = new UpgradeExecutionTimeType("dbspacebefore", 5);
    CUSTOMVERSIONCHECKS = new UpgradeExecutionTimeType("customversionchecks", 6);
    CUSTOMPREUPGRADE = new UpgradeExecutionTimeType("custompreupgrade", 7);
    VERSIONCHECKS = new UpgradeExecutionTimeType("versionchecks", 8);
    VTBEFORESCHEMADIFF = new UpgradeExecutionTimeType("vtbeforeschemadiff", 9);
    ORPHANEDTYPECODES = new UpgradeExecutionTimeType("orphanedtypecodes", 10);
    ENCRYPTDECRYPT = new UpgradeExecutionTimeType("encryptdecrypt", 11);
    GENSTEPS = new UpgradeExecutionTimeType("gensteps", 12);
    EXECUTESTEPS = new UpgradeExecutionTimeType("executesteps", 13);
    VTAFTERSCHEMADIFF = new UpgradeExecutionTimeType("vtafterschemadiff", 14);
    CUSTOMPOSTUPGRADE = new UpgradeExecutionTimeType("custompostupgrade", 15);
    SNAPSHOTDATAMODEL = new UpgradeExecutionTimeType("snapshotdatamodel", 16);
    CLEANUP = new UpgradeExecutionTimeType("cleanup", 17);
    COPYTOSHADOWTABLES = new UpgradeExecutionTimeType("copytoshadowtables", 18);
    POSTROWCOUNTS = new UpgradeExecutionTimeType("postrowcounts", 19);
    DBSPACEAFTER = new UpgradeExecutionTimeType("dbspaceafter", 20);
    VERIFYSCHEMA = new UpgradeExecutionTimeType("verifyschema", 21);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate UpgradeExecutionTimeType instance, or null if no such code is present in the list
   */
  public static UpgradeExecutionTimeType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static UpgradeExecutionTimeType[] values() {
    Collection<UpgradeExecutionTimeType> keys = ALL_CODES.values();
    return keys.toArray(new UpgradeExecutionTimeType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private UpgradeExecutionTimeType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "UpgradeExecutionTimeType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UpgradeExecutionTimeType.class, "Categories");
  }

  /**
   * Compares two UpgradeExecutionTimeType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(UpgradeExecutionTimeType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
