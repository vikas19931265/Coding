package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * State of a WorkItemSet
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class WorkItemSetState implements TypeKey, Comparable<WorkItemSetState> {
  /**
   * a WorkItemSet goes into this state when the user requests that we cease further processing. Workers will continue processing current WorkItems, but will not start new ones.
   */
  public static WorkItemSetState CANCELING;
  /**
   * all WorkItems have been processed. Some WorkItems may have been successful and others may have failed
   */
  public static WorkItemSetState COMPLETED;
  /**
   * the WorkItemSet is being worked on, i.e. there is at least one WorkItem that has not been completed yet
   */
  public static WorkItemSetState PROCESSING;
  private static final Map<String, WorkItemSetState> ALL_CODES = new LinkedHashMap<String, WorkItemSetState>();


  private static void initTypecodes0() {
    CANCELING = new WorkItemSetState("Canceling", 0);
    COMPLETED = new WorkItemSetState("Completed", 1);
    PROCESSING = new WorkItemSetState("Processing", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate WorkItemSetState instance, or null if no such code is present in the list
   */
  public static WorkItemSetState getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static WorkItemSetState[] values() {
    Collection<WorkItemSetState> keys = ALL_CODES.values();
    return keys.toArray(new WorkItemSetState[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private WorkItemSetState(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "WorkItemSetState";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkItemSetState.class, "Categories");
  }

  /**
   * Compares two WorkItemSetState instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(WorkItemSetState o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
