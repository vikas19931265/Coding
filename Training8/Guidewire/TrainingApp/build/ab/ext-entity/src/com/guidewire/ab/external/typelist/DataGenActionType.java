package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Action type performed by data-gen
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class DataGenActionType implements TypeKey, Comparable<DataGenActionType> {
  /**
   * Advacning all dates field in DB.
   */
  public static DataGenActionType ADVANCEDATE;
  /**
   * Initialize DB.
   */
  public static DataGenActionType INITIALIZE;
  /**
   * Restore DB from pcb.
   */
  public static DataGenActionType RESTORE;
  private static final Map<String, DataGenActionType> ALL_CODES = new LinkedHashMap<String, DataGenActionType>();


  private static void initTypecodes0() {
    ADVANCEDATE = new DataGenActionType("advanceDate", 0);
    INITIALIZE = new DataGenActionType("initialize", 1);
    RESTORE = new DataGenActionType("restore", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DataGenActionType instance, or null if no such code is present in the list
   */
  public static DataGenActionType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DataGenActionType[] values() {
    Collection<DataGenActionType> keys = ALL_CODES.values();
    return keys.toArray(new DataGenActionType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DataGenActionType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DataGenActionType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DataGenActionType.class, "Categories");
  }

  /**
   * Compares two DataGenActionType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DataGenActionType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
