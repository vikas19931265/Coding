package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ActivityCategory implements TypeKey, Comparable<ActivityCategory> {
  /**
   * Approval
   */
  public static ActivityCategory APPROVAL;
  /**
   * Approval Denied
   */
  public static ActivityCategory APPROVALDENIED;
  /**
   * Assignment Review
   */
  public static ActivityCategory ASSIGNMENTREVIEW;
  /**
   * Correspondence
   */
  public static ActivityCategory CORRESPONDENCE;
  /**
   * General
   */
  public static ActivityCategory GENERAL;
  /**
   * Interview
   */
  public static ActivityCategory INTERVIEW;
  /**
   * New Mail
   */
  public static ActivityCategory NEWMAIL;
  /**
   * Reminder
   */
  public static ActivityCategory REMINDER;
  /**
   * Request
   */
  public static ActivityCategory REQUEST;
  /**
   * Response
   */
  public static ActivityCategory RESPONSE;
  /**
   * Tool
   */
  public static ActivityCategory TOOL;
  /**
   * Warning
   */
  public static ActivityCategory WARNING;
  private static final Map<String, ActivityCategory> ALL_CODES = new LinkedHashMap<String, ActivityCategory>();


  private static void initTypecodes0() {
    APPROVAL = new ActivityCategory("approval", 0);
    APPROVALDENIED = new ActivityCategory("approvaldenied", 1);
    ASSIGNMENTREVIEW = new ActivityCategory("assignmentreview", 2);
    CORRESPONDENCE = new ActivityCategory("correspondence", 3);
    GENERAL = new ActivityCategory("general", 4);
    INTERVIEW = new ActivityCategory("interview", 5);
    NEWMAIL = new ActivityCategory("newmail", 6);
    REMINDER = new ActivityCategory("reminder", 7);
    REQUEST = new ActivityCategory("request", 8);
    RESPONSE = new ActivityCategory("response", 9);
    TOOL = new ActivityCategory("tool", 10);
    WARNING = new ActivityCategory("warning", 11);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ActivityCategory instance, or null if no such code is present in the list
   */
  public static ActivityCategory getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ActivityCategory[] values() {
    Collection<ActivityCategory> keys = ALL_CODES.values();
    return keys.toArray(new ActivityCategory[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ActivityCategory(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ActivityCategory";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ActivityCategory.class, "Categories");
  }

  /**
   * Compares two ActivityCategory instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ActivityCategory o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
