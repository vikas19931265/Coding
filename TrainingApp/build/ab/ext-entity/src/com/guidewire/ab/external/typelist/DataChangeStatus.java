package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Status of a DataChange.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class DataChangeStatus implements TypeKey, Comparable<DataChangeStatus> {
  /**
   * The gosu was executed and did not throw an exception
   */
  public static DataChangeStatus COMPLETED;
  /**
   * The gosu was discarded without being run
   */
  public static DataChangeStatus DISCARDED;
  /**
   * The gosu is being executed
   */
  public static DataChangeStatus EXECUTING;
  /**
   * The gosu was executed but threw an exception
   */
  public static DataChangeStatus FAILED;
  /**
   * The gosu was added but not yet run
   */
  public static DataChangeStatus OPEN;
  private static final Map<String, DataChangeStatus> ALL_CODES = new LinkedHashMap<String, DataChangeStatus>();


  private static void initTypecodes0() {
    COMPLETED = new DataChangeStatus("Completed", 0);
    DISCARDED = new DataChangeStatus("Discarded", 1);
    EXECUTING = new DataChangeStatus("Executing", 2);
    FAILED = new DataChangeStatus("Failed", 3);
    OPEN = new DataChangeStatus("Open", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DataChangeStatus instance, or null if no such code is present in the list
   */
  public static DataChangeStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DataChangeStatus[] values() {
    Collection<DataChangeStatus> keys = ALL_CODES.values();
    return keys.toArray(new DataChangeStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DataChangeStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DataChangeStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataChangeStatus.class, "Categories");
  }

  /**
   * Compares two DataChangeStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DataChangeStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
