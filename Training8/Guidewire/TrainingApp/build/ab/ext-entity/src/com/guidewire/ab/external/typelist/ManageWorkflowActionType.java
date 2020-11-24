package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Which action was chosen to act on a workflow.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ManageWorkflowActionType implements TypeKey, Comparable<ManageWorkflowActionType> {
  /**
   * Invoke a trigger on the workflow
   */
  public static ManageWorkflowActionType INVOKETRIGGER;
  /**
   * Resume a suspended workflow
   */
  public static ManageWorkflowActionType RESUME;
  /**
   * Retry the last message sent to the workflow
   */
  public static ManageWorkflowActionType RETRYMESSAGE;
  /**
   * Manually force the timeout for a waiting workflow
   */
  public static ManageWorkflowActionType SETTIMEOUT;
  /**
   * Suspend the workflow's activity
   */
  public static ManageWorkflowActionType SUSPEND;
  /**
   * Wait until workflow is no longer active
   */
  public static ManageWorkflowActionType WAIT;
  private static final Map<String, ManageWorkflowActionType> ALL_CODES = new LinkedHashMap<String, ManageWorkflowActionType>();


  private static void initTypecodes0() {
    INVOKETRIGGER = new ManageWorkflowActionType("InvokeTrigger", 0);
    RESUME = new ManageWorkflowActionType("Resume", 1);
    RETRYMESSAGE = new ManageWorkflowActionType("RetryMessage", 2);
    SETTIMEOUT = new ManageWorkflowActionType("SetTimeout", 3);
    SUSPEND = new ManageWorkflowActionType("Suspend", 4);
    WAIT = new ManageWorkflowActionType("Wait", 5);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ManageWorkflowActionType instance, or null if no such code is present in the list
   */
  public static ManageWorkflowActionType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ManageWorkflowActionType[] values() {
    Collection<ManageWorkflowActionType> keys = ALL_CODES.values();
    return keys.toArray(new ManageWorkflowActionType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ManageWorkflowActionType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ManageWorkflowActionType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManageWorkflowActionType.class, "Categories");
  }

  /**
   * Compares two ManageWorkflowActionType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ManageWorkflowActionType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
