package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The final status of the archive store or retrieve action
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ArchiveFinalStatus implements TypeKey, Comparable<ArchiveFinalStatus> {
  /**
   * The store or retrieve failed to commit
   */
  public static ArchiveFinalStatus FAILEDCOMMIT;
  /**
   * The retrieve failed to import
   */
  public static ArchiveFinalStatus FAILEDIMPORT;
  /**
   * Something after the prepare call and before the store call failed
   */
  public static ArchiveFinalStatus FAILEDPRESTORE;
  /**
   * The store failed
   */
  public static ArchiveFinalStatus FAILEDSTORE;
  /**
   * The retrieve failed to upgrade
   */
  public static ArchiveFinalStatus FAILEDUPGRADE;
  /**
   * The store or retrieve succeeded completely
   */
  public static ArchiveFinalStatus SUCCEEDED;
  /**
   * The retrieve upgraded with warnings
   */
  public static ArchiveFinalStatus UPGRADEWARNINGS;
  private static final Map<String, ArchiveFinalStatus> ALL_CODES = new LinkedHashMap<String, ArchiveFinalStatus>();


  private static void initTypecodes0() {
    FAILEDCOMMIT = new ArchiveFinalStatus("failedcommit", 0);
    FAILEDIMPORT = new ArchiveFinalStatus("failedimport", 1);
    FAILEDPRESTORE = new ArchiveFinalStatus("failedprestore", 2);
    FAILEDSTORE = new ArchiveFinalStatus("failedstore", 3);
    FAILEDUPGRADE = new ArchiveFinalStatus("failedupgrade", 4);
    SUCCEEDED = new ArchiveFinalStatus("succeeded", 5);
    UPGRADEWARNINGS = new ArchiveFinalStatus("upgradewarnings", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ArchiveFinalStatus instance, or null if no such code is present in the list
   */
  public static ArchiveFinalStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ArchiveFinalStatus[] values() {
    Collection<ArchiveFinalStatus> keys = ALL_CODES.values();
    return keys.toArray(new ArchiveFinalStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ArchiveFinalStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ArchiveFinalStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveFinalStatus.class, "Categories");
  }

  /**
   * Compares two ArchiveFinalStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ArchiveFinalStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
