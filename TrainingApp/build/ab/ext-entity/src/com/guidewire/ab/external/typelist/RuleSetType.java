package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of rule sets
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class RuleSetType implements TypeKey, Comparable<RuleSetType> {
  /**
   * Used to find the user who must approve an approval batch
   */
  public static RuleSetType AP;
  /**
   * Archiving rules
   */
  public static RuleSetType AR;
  /**
   * Assignment rules
   */
  public static RuleSetType A;
  /**
   * Actions to be taken after closing a claim or exposure
   */
  public static RuleSetType C;
  /**
   * Rules for generating integration event messages
   */
  public static RuleSetType EM;
  /**
   * Exception rules
   */
  public static RuleSetType E;
  /**
   * Rules executed on a imported claim
   */
  public static RuleSetType L;
  /**
   * Rules executed on a new claim after it has been set up
   */
  public static RuleSetType PO;
  /**
   * Rules executed on a new claim before it has been set up
   */
  public static RuleSetType PR;
  /**
   * Rules execute after validating, but before updating an editable entity
   */
  public static RuleSetType PU;
  /**
   * Used to determine whether or not a transaction needs approval
   */
  public static RuleSetType TAR;
  /**
   * Validation rules
   */
  public static RuleSetType V;
  /**
   * Workplan rules
   */
  public static RuleSetType WP;
  private static final Map<String, RuleSetType> ALL_CODES = new LinkedHashMap<String, RuleSetType>();


  private static void initTypecodes0() {
    AP = new RuleSetType("AP", 0);
    AR = new RuleSetType("AR", 1);
    A = new RuleSetType("A", 2);
    C = new RuleSetType("C", 3);
    EM = new RuleSetType("EM", 4);
    E = new RuleSetType("E", 5);
    L = new RuleSetType("L", 6);
    PO = new RuleSetType("PO", 7);
    PR = new RuleSetType("PR", 8);
    PU = new RuleSetType("PU", 9);
    TAR = new RuleSetType("TAR", 10);
    V = new RuleSetType("V", 11);
    WP = new RuleSetType("WP", 12);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate RuleSetType instance, or null if no such code is present in the list
   */
  public static RuleSetType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static RuleSetType[] values() {
    Collection<RuleSetType> keys = ALL_CODES.values();
    return keys.toArray(new RuleSetType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private RuleSetType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "RuleSetType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.RuleSetType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.RuleSetType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.RuleSetType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.RuleSetType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.RuleSetType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.RuleSetType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.RuleSetType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.RuleSetType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.RuleSetType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.RuleSetType.class, "Categories");
  }

  /**
   * Compares two RuleSetType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(RuleSetType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
