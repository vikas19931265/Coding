package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * What infrastructure handles this Workflow?
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class WorkflowHandler implements TypeKey, Comparable<WorkflowHandler> {
  /**
   * Handled by Guidewire's internal Workflow engine
   */
  public static WorkflowHandler INTERNAL;
  /**
   * Handled by testing infrastructure (not for production!)
   */
  public static WorkflowHandler TEST;
  private static final Map<String, WorkflowHandler> ALL_CODES = new LinkedHashMap<String, WorkflowHandler>();


  private static void initTypecodes0() {
    INTERNAL = new WorkflowHandler("internal", 0);
    TEST = new WorkflowHandler("test", 1);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate WorkflowHandler instance, or null if no such code is present in the list
   */
  public static WorkflowHandler getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static WorkflowHandler[] values() {
    Collection<WorkflowHandler> keys = ALL_CODES.values();
    return keys.toArray(new WorkflowHandler[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private WorkflowHandler(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "WorkflowHandler";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowHandler.class, "Categories");
  }

  /**
   * Compares two WorkflowHandler instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(WorkflowHandler o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
