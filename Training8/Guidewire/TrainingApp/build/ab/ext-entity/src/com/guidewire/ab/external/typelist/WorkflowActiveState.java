package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The possible states of an active workflow object
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class WorkflowActiveState implements TypeKey, Comparable<WorkflowActiveState> {
  /**
   * The workflow is currently running.
   */
  public static WorkflowActiveState RUNNING;
  /**
   * The workflow is waiting for some activities to complete.
   */
  public static WorkflowActiveState WAITACTIVITY;
  /**
   * The workflow is waiting for a message to be acked.
   */
  public static WorkflowActiveState WAITMESSAGE;
  /**
   * The workflow is waiting for a trigger or timeout.
   */
  public static WorkflowActiveState WAITMANUAL;
  private static final Map<String, WorkflowActiveState> ALL_CODES = new LinkedHashMap<String, WorkflowActiveState>();


  private static void initTypecodes0() {
    RUNNING = new WorkflowActiveState("running", 0);
    WAITACTIVITY = new WorkflowActiveState("waitactivity", 1);
    WAITMESSAGE = new WorkflowActiveState("waitmessage", 2);
    WAITMANUAL = new WorkflowActiveState("waitmanual", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate WorkflowActiveState instance, or null if no such code is present in the list
   */
  public static WorkflowActiveState getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static WorkflowActiveState[] values() {
    Collection<WorkflowActiveState> keys = ALL_CODES.values();
    return keys.toArray(new WorkflowActiveState[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private WorkflowActiveState(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "WorkflowActiveState";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActiveState.class, "Categories");
  }

  /**
   * Compares two WorkflowActiveState instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(WorkflowActiveState o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
