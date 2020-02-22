package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The type of claim/exposure history
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class HistoryType implements TypeKey, Comparable<HistoryType> {
  /**
   * A referral was approved/rejected
   */
  public static HistoryType APPROVAL;
  /**
   * A custom history event happened; see CustomType for details
   */
  public static HistoryType CUSTOM;
  /**
   * The policy was edited, and thus marked unverified
   */
  public static HistoryType POLICYEDITED;
  private static final Map<String, HistoryType> ALL_CODES = new LinkedHashMap<String, HistoryType>();


  private static void initTypecodes0() {
    APPROVAL = new HistoryType("approval", 0);
    CUSTOM = new HistoryType("custom", 1);
    POLICYEDITED = new HistoryType("policyedited", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate HistoryType instance, or null if no such code is present in the list
   */
  public static HistoryType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static HistoryType[] values() {
    Collection<HistoryType> keys = ALL_CODES.values();
    return keys.toArray(new HistoryType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private HistoryType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "HistoryType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.HistoryType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.HistoryType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.HistoryType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryType.class, "Categories");
  }

  /**
   * Compares two HistoryType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(HistoryType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
