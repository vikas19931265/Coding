package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Identifies how a merge conflict was resolved.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class MergeConflictResolution implements TypeKey, Comparable<MergeConflictResolution> {
  /**
   * The new value (with an earlier effective date) was merged forward.
   */
  public static MergeConflictResolution NEW_MERGED_FORWARD;
  /**
   * No merge conflict detected.
   */
  public static MergeConflictResolution NO_CONFLICT;
  /**
   * The previously existing value (with a later effective date) was retained.
   */
  public static MergeConflictResolution OLD_RETAINED;
  /**
   * The user manually changed the value after the merge.
   */
  public static MergeConflictResolution USER_CHANGE;
  private static final Map<String, MergeConflictResolution> ALL_CODES = new LinkedHashMap<String, MergeConflictResolution>();


  private static void initTypecodes0() {
    NEW_MERGED_FORWARD = new MergeConflictResolution("new_merged_forward", 0);
    NO_CONFLICT = new MergeConflictResolution("no_conflict", 1);
    OLD_RETAINED = new MergeConflictResolution("old_retained", 2);
    USER_CHANGE = new MergeConflictResolution("user_change", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate MergeConflictResolution instance, or null if no such code is present in the list
   */
  public static MergeConflictResolution getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static MergeConflictResolution[] values() {
    Collection<MergeConflictResolution> keys = ALL_CODES.values();
    return keys.toArray(new MergeConflictResolution[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private MergeConflictResolution(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "MergeConflictResolution";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MergeConflictResolution.class, "Categories");
  }

  /**
   * Compares two MergeConflictResolution instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(MergeConflictResolution o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
