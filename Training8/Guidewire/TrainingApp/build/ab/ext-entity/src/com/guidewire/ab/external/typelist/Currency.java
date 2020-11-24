package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of Currencies.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class Currency implements TypeKey, Comparable<Currency> {
  /**
   * US Dollar
   */
  public static Currency USD;
  /**
   * Euro
   */
  public static Currency EUR;
  /**
   * United Kingdom Pound
   */
  public static Currency GBP;
  /**
   * Canadian Dollar
   */
  public static Currency CAD;
  /**
   * Australian Dollar
   */
  public static Currency AUD;
  /**
   * Russian Ruble
   */
  public static Currency RUB;
  /**
   * Japanese Yen
   */
  public static Currency JPY;
  private static final Map<String, Currency> ALL_CODES = new LinkedHashMap<String, Currency>();


  private static void initTypecodes0() {
    USD = new Currency("usd", 0);
    EUR = new Currency("eur", 1);
    GBP = new Currency("gbp", 2);
    CAD = new Currency("cad", 3);
    AUD = new Currency("aud", 4);
    RUB = new Currency("rub", 5);
    JPY = new Currency("jpy", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate Currency instance, or null if no such code is present in the list
   */
  public static Currency getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static Currency[] values() {
    Collection<Currency> keys = ALL_CODES.values();
    return keys.toArray(new Currency[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private Currency(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "Currency";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Currency.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Currency.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Currency.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Currency.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Currency.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Currency.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Currency.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Currency.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Currency.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Currency.class, "Categories");
  }

  /**
   * Compares two Currency instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(Currency o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
