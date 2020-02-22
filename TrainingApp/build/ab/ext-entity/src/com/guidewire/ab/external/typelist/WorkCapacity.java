package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Capacity in which employee returned to work
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class WorkCapacity implements TypeKey, Comparable<WorkCapacity> {
  /**
   * Estimated RTW date
   */
  public static WorkCapacity ESTIMATEDRTW;
  /**
   * Full duty
   */
  public static WorkCapacity FULLDUTY;
  /**
   * Modified duty
   */
  public static WorkCapacity MODIFIEDDUTY;
  /**
   * Stopped work
   */
  public static WorkCapacity STOPPED_WORK;
  private static final Map<String, WorkCapacity> ALL_CODES = new LinkedHashMap<String, WorkCapacity>();


  private static void initTypecodes0() {
    ESTIMATEDRTW = new WorkCapacity("estimatedrtw", 0);
    FULLDUTY = new WorkCapacity("fullduty", 1);
    MODIFIEDDUTY = new WorkCapacity("modifiedduty", 2);
    STOPPED_WORK = new WorkCapacity("stopped_work", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate WorkCapacity instance, or null if no such code is present in the list
   */
  public static WorkCapacity getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static WorkCapacity[] values() {
    Collection<WorkCapacity> keys = ALL_CODES.values();
    return keys.toArray(new WorkCapacity[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private WorkCapacity(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "WorkCapacity";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkCapacity.class, "Categories");
  }

  /**
   * Compares two WorkCapacity instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(WorkCapacity o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
