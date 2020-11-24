package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * pay period type
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class PayPeriodType implements TypeKey, Comparable<PayPeriodType> {
  /**
   * Employee paid on a daily basis
   */
  public static PayPeriodType DAILY;
  /**
   * On Invoice
   */
  public static PayPeriodType ONINVOICE;
  /**
   * Employee paid every two weeks
   */
  public static PayPeriodType EVERYTWOWEEKS;
  /**
   * Employee paid on a monthly basis
   */
  public static PayPeriodType MONTHLY;
  /**
   * Employee paid twice a month
   */
  public static PayPeriodType TWICEAMONTH;
  /**
   * Employee paid on a weekly basis
   */
  public static PayPeriodType WEEKLY;
  private static final Map<String, PayPeriodType> ALL_CODES = new LinkedHashMap<String, PayPeriodType>();


  private static void initTypecodes0() {
    DAILY = new PayPeriodType("daily", 0);
    ONINVOICE = new PayPeriodType("oninvoice", 1);
    EVERYTWOWEEKS = new PayPeriodType("everytwoweeks", 2);
    MONTHLY = new PayPeriodType("monthly", 3);
    TWICEAMONTH = new PayPeriodType("twiceamonth", 4);
    WEEKLY = new PayPeriodType("weekly", 5);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate PayPeriodType instance, or null if no such code is present in the list
   */
  public static PayPeriodType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static PayPeriodType[] values() {
    Collection<PayPeriodType> keys = ALL_CODES.values();
    return keys.toArray(new PayPeriodType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private PayPeriodType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "PayPeriodType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PayPeriodType.class, "Categories");
  }

  /**
   * Compares two PayPeriodType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(PayPeriodType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
