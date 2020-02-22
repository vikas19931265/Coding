package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Identifies a strategy for resolving merge conflicts.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class MergeConflictStrategy implements TypeKey, Comparable<MergeConflictStrategy> {
  /**
   * Strategy that merges the new value with an earlier effective date forward.
   */
  public static MergeConflictStrategy MERGE_NEW_FORWARD;
  /**
   * Strategy that retains the previously existing value with a later effective date.
   */
  public static MergeConflictStrategy RETAIN_OLD;
  private static final Map<String, MergeConflictStrategy> ALL_CODES = new LinkedHashMap<String, MergeConflictStrategy>();


  private static void initTypecodes0() {
    MERGE_NEW_FORWARD = new MergeConflictStrategy("merge_new_forward", 0);
    RETAIN_OLD = new MergeConflictStrategy("retain_old", 1);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate MergeConflictStrategy instance, or null if no such code is present in the list
   */
  public static MergeConflictStrategy getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static MergeConflictStrategy[] values() {
    Collection<MergeConflictStrategy> keys = ALL_CODES.values();
    return keys.toArray(new MergeConflictStrategy[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private MergeConflictStrategy(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "MergeConflictStrategy";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictStrategy.class, "Categories");
  }

  /**
   * Compares two MergeConflictStrategy instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(MergeConflictStrategy o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
