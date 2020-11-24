package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Value type of a script parameter
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ScriptParameterType implements TypeKey, Comparable<ScriptParameterType> {
  /**
   * bit
   */
  public static ScriptParameterType BIT;
  /**
   * datetime
   */
  public static ScriptParameterType DATETIME;
  /**
   * decimal
   */
  public static ScriptParameterType DECIMAL;
  /**
   * Group
   */
  public static ScriptParameterType GROUP;
  /**
   * integer
   */
  public static ScriptParameterType INTEGER;
  /**
   * money
   */
  public static ScriptParameterType MONEY;
  /**
   * monthlyfrequency
   */
  public static ScriptParameterType MONTHLYFREQUENCY;
  /**
   * nonnegativeinteger
   */
  public static ScriptParameterType NONNEGATIVEINTEGER;
  /**
   * nonnegativemoney
   */
  public static ScriptParameterType NONNEGATIVEMONEY;
  /**
   * percentage
   */
  public static ScriptParameterType PERCENTAGE;
  /**
   * percentagedec
   */
  public static ScriptParameterType PERCENTAGEDEC;
  /**
   * phone
   */
  public static ScriptParameterType PHONE;
  /**
   * positiveinteger
   */
  public static ScriptParameterType POSITIVEINTEGER;
  /**
   * positivemoney
   */
  public static ScriptParameterType POSITIVEMONEY;
  /**
   * postalcode
   */
  public static ScriptParameterType POSTALCODE;
  /**
   * risk
   */
  public static ScriptParameterType RISK;
  /**
   * speed
   */
  public static ScriptParameterType SPEED;
  /**
   * User
   */
  public static ScriptParameterType USER;
  /**
   * varchar
   */
  public static ScriptParameterType VARCHAR;
  /**
   * weeklyfrequency
   */
  public static ScriptParameterType WEEKLYFREQUENCY;
  /**
   * year
   */
  public static ScriptParameterType YEAR;
  private static final Map<String, ScriptParameterType> ALL_CODES = new LinkedHashMap<String, ScriptParameterType>();


  private static void initTypecodes0() {
    BIT = new ScriptParameterType("bit", 0);
    DATETIME = new ScriptParameterType("datetime", 1);
    DECIMAL = new ScriptParameterType("decimal", 2);
    GROUP = new ScriptParameterType("group", 3);
    INTEGER = new ScriptParameterType("integer", 4);
    MONEY = new ScriptParameterType("money", 5);
    MONTHLYFREQUENCY = new ScriptParameterType("monthlyfrequency", 6);
    NONNEGATIVEINTEGER = new ScriptParameterType("nonnegativeinteger", 7);
    NONNEGATIVEMONEY = new ScriptParameterType("nonnegativemoney", 8);
    PERCENTAGE = new ScriptParameterType("percentage", 9);
    PERCENTAGEDEC = new ScriptParameterType("percentagedec", 10);
    PHONE = new ScriptParameterType("phone", 11);
    POSITIVEINTEGER = new ScriptParameterType("positiveinteger", 12);
    POSITIVEMONEY = new ScriptParameterType("positivemoney", 13);
    POSTALCODE = new ScriptParameterType("postalcode", 14);
    RISK = new ScriptParameterType("risk", 15);
    SPEED = new ScriptParameterType("speed", 16);
    USER = new ScriptParameterType("user", 17);
    VARCHAR = new ScriptParameterType("varchar", 18);
    WEEKLYFREQUENCY = new ScriptParameterType("weeklyfrequency", 19);
    YEAR = new ScriptParameterType("year", 20);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ScriptParameterType instance, or null if no such code is present in the list
   */
  public static ScriptParameterType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ScriptParameterType[] values() {
    Collection<ScriptParameterType> keys = ALL_CODES.values();
    return keys.toArray(new ScriptParameterType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ScriptParameterType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ScriptParameterType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ScriptParameterType.class, "Categories");
  }

  /**
   * Compares two ScriptParameterType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ScriptParameterType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
