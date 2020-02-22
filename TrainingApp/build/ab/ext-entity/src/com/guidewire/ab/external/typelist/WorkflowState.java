package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The states a workflow object can be in
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class WorkflowState implements TypeKey, Comparable<WorkflowState> {
  /**
   * Active -- the workflow is running.
   */
  public static WorkflowState ACTIVE;
  /**
   * Completed -- the workflow reached one of its Outcomes.
   */
  public static WorkflowState COMPLETED;
  /**
   * The workflow encountered an exception while running, so the it has been paused until the error is fixed.
   */
  public static WorkflowState ERROR;
  /**
   * Suspended -- execution of the workflow was manually suspended.  It can be resumed later.
   */
  public static WorkflowState SUSPENDED;
  private static final Map<String, WorkflowState> ALL_CODES = new LinkedHashMap<String, WorkflowState>();


  private static void initTypecodes0() {
    ACTIVE = new WorkflowState("active", 0);
    COMPLETED = new WorkflowState("completed", 1);
    ERROR = new WorkflowState("error", 2);
    SUSPENDED = new WorkflowState("suspended", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate WorkflowState instance, or null if no such code is present in the list
   */
  public static WorkflowState getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static WorkflowState[] values() {
    Collection<WorkflowState> keys = ALL_CODES.values();
    return keys.toArray(new WorkflowState[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private WorkflowState(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "WorkflowState";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowState.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowState.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowState.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowState.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowState.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowState.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowState.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowState.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowState.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowState.class, "Categories");
  }

  /**
   * Compares two WorkflowState instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(WorkflowState o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
