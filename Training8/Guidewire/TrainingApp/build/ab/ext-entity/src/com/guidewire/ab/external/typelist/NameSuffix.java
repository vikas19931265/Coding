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
public class NameSuffix implements TypeKey, Comparable<NameSuffix> {
  /**
   * Jr.
   */
  public static NameSuffix JR;
  /**
   * Sr.
   */
  public static NameSuffix SR;
  /**
   * I
   */
  public static NameSuffix C_IR;
  /**
   * II
   */
  public static NameSuffix C_II;
  /**
   * III
   */
  public static NameSuffix C_III;
  /**
   * IV
   */
  public static NameSuffix C_IV;
  /**
   * M.D.
   */
  public static NameSuffix C_MD;
  /**
   * PhD.
   */
  public static NameSuffix C_PHD;
  /**
   * D.O.
   */
  public static NameSuffix C_DO;
  /**
   * Esquire
   */
  public static NameSuffix ESQ;
  private static final Map<String, NameSuffix> ALL_CODES = new LinkedHashMap<String, NameSuffix>();


  private static void initTypecodes0() {
    JR = new NameSuffix("jr", 0);
    SR = new NameSuffix("sr", 1);
    C_IR = new NameSuffix("c_Ir", 2);
    C_II = new NameSuffix("c_II", 3);
    C_III = new NameSuffix("c_III", 4);
    C_IV = new NameSuffix("c_IV", 5);
    C_MD = new NameSuffix("c_md", 6);
    C_PHD = new NameSuffix("c_phd", 7);
    C_DO = new NameSuffix("c_do", 8);
    ESQ = new NameSuffix("esq", 9);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate NameSuffix instance, or null if no such code is present in the list
   */
  public static NameSuffix getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static NameSuffix[] values() {
    Collection<NameSuffix> keys = ALL_CODES.values();
    return keys.toArray(new NameSuffix[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private NameSuffix(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "NameSuffix";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NameSuffix.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NameSuffix.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NameSuffix.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NameSuffix.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NameSuffix.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NameSuffix.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NameSuffix.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NameSuffix.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NameSuffix.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NameSuffix.class, "Categories");
  }

  /**
   * Compares two NameSuffix instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(NameSuffix o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
