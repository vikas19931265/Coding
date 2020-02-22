package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Possible selection types for the assignment pop-up
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class AssignmentSelectionType implements TypeKey, Comparable<AssignmentSelectionType> {
  /**
   * FromList
   */
  public static AssignmentSelectionType FROMLIST;
  /**
   * FromSearch
   */
  public static AssignmentSelectionType FROMSEARCH;
  private static final Map<String, AssignmentSelectionType> ALL_CODES = new LinkedHashMap<String, AssignmentSelectionType>();


  private static void initTypecodes0() {
    FROMLIST = new AssignmentSelectionType("FromList", 0);
    FROMSEARCH = new AssignmentSelectionType("FromSearch", 1);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate AssignmentSelectionType instance, or null if no such code is present in the list
   */
  public static AssignmentSelectionType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static AssignmentSelectionType[] values() {
    Collection<AssignmentSelectionType> keys = ALL_CODES.values();
    return keys.toArray(new AssignmentSelectionType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private AssignmentSelectionType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "AssignmentSelectionType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentSelectionType.class, "Categories");
  }

  /**
   * Compares two AssignmentSelectionType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(AssignmentSelectionType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
