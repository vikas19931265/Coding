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
public class NoteType implements TypeKey, Comparable<NoteType> {
  /**
   * Action plan
   */
  public static NoteType ACTIONPLAN;
  /**
   * General
   */
  public static NoteType DIAGRAM;
  /**
   * Inbound
   */
  public static NoteType INBOUND;
  /**
   * Interview report
   */
  public static NoteType INTERVIEWREPORT;
  /**
   * Outbond
   */
  public static NoteType OUTBOUND;
  /**
   * Status report
   */
  public static NoteType STATUSREPORT;
  /**
   * Transferred Call
   */
  public static NoteType TRANSFERREDCALL;
  private static final Map<String, NoteType> ALL_CODES = new LinkedHashMap<String, NoteType>();


  private static void initTypecodes0() {
    ACTIONPLAN = new NoteType("actionplan", 0);
    DIAGRAM = new NoteType("diagram", 1);
    INBOUND = new NoteType("inbound", 2);
    INTERVIEWREPORT = new NoteType("interviewreport", 3);
    OUTBOUND = new NoteType("outbound", 4);
    STATUSREPORT = new NoteType("statusreport", 5);
    TRANSFERREDCALL = new NoteType("transferredcall", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate NoteType instance, or null if no such code is present in the list
   */
  public static NoteType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static NoteType[] values() {
    Collection<NoteType> keys = ALL_CODES.values();
    return keys.toArray(new NoteType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private NoteType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "NoteType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NoteType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NoteType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NoteType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteType.class, "Categories");
  }

  /**
   * Compares two NoteType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(NoteType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
