package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * What action is the Workflow currently trying to take?
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class WorkflowActionType implements TypeKey, Comparable<WorkflowActionType> {
  /**
   * Creating Activities
   */
  public static WorkflowActionType ACTIVITY;
  /**
   * Executing Assertions
   */
  public static WorkflowActionType ASSERT;
  /**
   * Executing a Branch (or Timeout, Trigger, etc.)
   */
  public static WorkflowActionType BRANCH;
  /**
   * Executing an Enter block
   */
  public static WorkflowActionType ENTER;
  /**
   * Executing an Exit block
   */
  public static WorkflowActionType EXIT;
  /**
   * Executing a Finish block
   */
  public static WorkflowActionType FINISH;
  /**
   * Looking for one of the branches to be ready to execute
   */
  public static WorkflowActionType SELECTBRANCH;
  /**
   * Executing a Start block
   */
  public static WorkflowActionType START;
  private static final Map<String, WorkflowActionType> ALL_CODES = new LinkedHashMap<String, WorkflowActionType>();


  private static void initTypecodes0() {
    ACTIVITY = new WorkflowActionType("activity", 0);
    ASSERT = new WorkflowActionType("assert", 1);
    BRANCH = new WorkflowActionType("branch", 2);
    ENTER = new WorkflowActionType("enter", 3);
    EXIT = new WorkflowActionType("exit", 4);
    FINISH = new WorkflowActionType("finish", 5);
    SELECTBRANCH = new WorkflowActionType("selectBranch", 6);
    START = new WorkflowActionType("start", 7);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate WorkflowActionType instance, or null if no such code is present in the list
   */
  public static WorkflowActionType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static WorkflowActionType[] values() {
    Collection<WorkflowActionType> keys = ALL_CODES.values();
    return keys.toArray(new WorkflowActionType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private WorkflowActionType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "WorkflowActionType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowActionType.class, "Categories");
  }

  /**
   * Compares two WorkflowActionType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(WorkflowActionType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
