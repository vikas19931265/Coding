package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Type of change made to this row
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class EffDatedChangeType implements TypeKey, Comparable<EffDatedChangeType> {
  /**
   * Change made by merging forward change
   */
  public static EffDatedChangeType MERGE;
  /**
   * Change made in slice mode
   */
  public static EffDatedChangeType SLICE;
  /**
   * Bean has had its changes resolved if OOSE change
   */
  public static EffDatedChangeType SLICE_MERGED;
  /**
   * Change made in window mode
   */
  public static EffDatedChangeType WINDOW;
  private static final Map<String, EffDatedChangeType> ALL_CODES = new LinkedHashMap<String, EffDatedChangeType>();


  private static void initTypecodes0() {
    MERGE = new EffDatedChangeType("merge", 0);
    SLICE = new EffDatedChangeType("slice", 1);
    SLICE_MERGED = new EffDatedChangeType("slice_merged", 2);
    WINDOW = new EffDatedChangeType("window", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate EffDatedChangeType instance, or null if no such code is present in the list
   */
  public static EffDatedChangeType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static EffDatedChangeType[] values() {
    Collection<EffDatedChangeType> keys = ALL_CODES.values();
    return keys.toArray(new EffDatedChangeType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private EffDatedChangeType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "EffDatedChangeType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EffDatedChangeType.class, "Categories");
  }

  /**
   * Compares two EffDatedChangeType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(EffDatedChangeType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
