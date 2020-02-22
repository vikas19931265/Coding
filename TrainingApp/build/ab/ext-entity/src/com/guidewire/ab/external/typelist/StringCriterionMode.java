package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The mode of a String restriction
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class StringCriterionMode implements TypeKey, Comparable<StringCriterionMode> {
  /**
   * Useful in flagging whether String restrictions should be implemented with compareContains. This performs most slowly.
   */
  public static StringCriterionMode CONTAINS;
  /**
   * Useful in flagging whether String restrictions should be implemented with compareEquals. This performs most quickly.
   */
  public static StringCriterionMode EQUALS;
  /**
   * Useful in flagging whether String restrictions should be implemented with compareStartsWith. This performs moderately quickly.
   */
  public static StringCriterionMode STARTSWITH;
  private static final Map<String, StringCriterionMode> ALL_CODES = new LinkedHashMap<String, StringCriterionMode>();


  private static void initTypecodes0() {
    CONTAINS = new StringCriterionMode("Contains", 0);
    EQUALS = new StringCriterionMode("Equals", 1);
    STARTSWITH = new StringCriterionMode("StartsWith", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate StringCriterionMode instance, or null if no such code is present in the list
   */
  public static StringCriterionMode getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static StringCriterionMode[] values() {
    Collection<StringCriterionMode> keys = ALL_CODES.values();
    return keys.toArray(new StringCriterionMode[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private StringCriterionMode(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "StringCriterionMode";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StringCriterionMode.class, "Categories");
  }

  /**
   * Compares two StringCriterionMode instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(StringCriterionMode o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
