package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Possible search types for assignment
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class AssignmentSearchType implements TypeKey, Comparable<AssignmentSearchType> {
  /**
   * User
   */
  public static AssignmentSearchType USER;
  /**
   * Group
   */
  public static AssignmentSearchType GROUP;
  /**
   * Queue
   */
  public static AssignmentSearchType QUEUE;
  private static final Map<String, AssignmentSearchType> ALL_CODES = new LinkedHashMap<String, AssignmentSearchType>();


  private static void initTypecodes0() {
    USER = new AssignmentSearchType("User", 0);
    GROUP = new AssignmentSearchType("Group", 1);
    QUEUE = new AssignmentSearchType("Queue", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate AssignmentSearchType instance, or null if no such code is present in the list
   */
  public static AssignmentSearchType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static AssignmentSearchType[] values() {
    Collection<AssignmentSearchType> keys = ALL_CODES.values();
    return keys.toArray(new AssignmentSearchType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private AssignmentSearchType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "AssignmentSearchType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSearchType.class, "Categories");
  }

  /**
   * Compares two AssignmentSearchType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(AssignmentSearchType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
