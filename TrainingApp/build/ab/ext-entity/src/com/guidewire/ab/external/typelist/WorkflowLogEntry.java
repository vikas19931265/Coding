package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Subtype typelist for entity WorkflowLogEntry
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class WorkflowLogEntry implements TypeKey, Comparable<WorkflowLogEntry> {
  /**
   * WorkflowActionLog
   */
  public static WorkflowLogEntry WORKFLOWACTIONLOG;
  /**
   * WorkflowTextLog
   */
  public static WorkflowLogEntry WORKFLOWTEXTLOG;
  /**
   * WorkflowUserLog
   */
  public static WorkflowLogEntry WORKFLOWUSERLOG;
  /**
   * WorkflowLogEntry
   */
  public static WorkflowLogEntry WORKFLOWLOGENTRY;
  private static final Map<String, WorkflowLogEntry> ALL_CODES = new LinkedHashMap<String, WorkflowLogEntry>();


  private static void initTypecodes0() {
    WORKFLOWACTIONLOG = new WorkflowLogEntry("WorkflowActionLog", 0);
    WORKFLOWTEXTLOG = new WorkflowLogEntry("WorkflowTextLog", 1);
    WORKFLOWUSERLOG = new WorkflowLogEntry("WorkflowUserLog", 2);
    WORKFLOWLOGENTRY = new WorkflowLogEntry("WorkflowLogEntry", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate WorkflowLogEntry instance, or null if no such code is present in the list
   */
  public static WorkflowLogEntry getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static WorkflowLogEntry[] values() {
    Collection<WorkflowLogEntry> keys = ALL_CODES.values();
    return keys.toArray(new WorkflowLogEntry[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private WorkflowLogEntry(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "WorkflowLogEntry";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.WorkflowLogEntry.class, "Categories");
  }

  /**
   * Compares two WorkflowLogEntry instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(WorkflowLogEntry o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
