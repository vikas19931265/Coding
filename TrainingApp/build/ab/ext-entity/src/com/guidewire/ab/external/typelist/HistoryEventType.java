package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * HistoryEventType
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class HistoryEventType implements TypeKey, Comparable<HistoryEventType> {
  /**
   * ABContact was created
   */
  public static HistoryEventType CREATED;
  /**
   * ABContact assigned user was set or reset
   */
  public static HistoryEventType ASSIGNED;
  /**
   * ABContact was flagged
   */
  public static HistoryEventType FLAGGED;
  /**
   * ABContact was unflagged
   */
  public static HistoryEventType UNFLAGGED;
  /**
   * ABContact was viewed
   */
  public static HistoryEventType VIEWED;
  private static final Map<String, HistoryEventType> ALL_CODES = new LinkedHashMap<String, HistoryEventType>();


  private static void initTypecodes0() {
    CREATED = new HistoryEventType("created", 0);
    ASSIGNED = new HistoryEventType("assigned", 1);
    FLAGGED = new HistoryEventType("flagged", 2);
    UNFLAGGED = new HistoryEventType("unflagged", 3);
    VIEWED = new HistoryEventType("viewed", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate HistoryEventType instance, or null if no such code is present in the list
   */
  public static HistoryEventType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static HistoryEventType[] values() {
    Collection<HistoryEventType> keys = ALL_CODES.values();
    return keys.toArray(new HistoryEventType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private HistoryEventType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "HistoryEventType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.HistoryEventType.class, "Categories");
  }

  /**
   * Compares two HistoryEventType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(HistoryEventType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
