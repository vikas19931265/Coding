package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Users' preferred languages
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class LocaleType implements TypeKey, Comparable<LocaleType> {
  /**
   * Australia (English)
   */
  public static LocaleType EN_AU;
  /**
   * Canada (English)
   */
  public static LocaleType EN_CA;
  /**
   * Canada (French)
   */
  public static LocaleType FR_CA;
  /**
   * France (French)
   */
  public static LocaleType FR_FR;
  /**
   * Germany (German)
   */
  public static LocaleType DE_DE;
  /**
   * Great Britain (English)
   */
  public static LocaleType EN_GB;
  /**
   * Japan (Japanese)
   */
  public static LocaleType JA_JP;
  /**
   * United States (English)
   */
  public static LocaleType EN_US;
  private static final Map<String, LocaleType> ALL_CODES = new LinkedHashMap<String, LocaleType>();


  private static void initTypecodes0() {
    EN_AU = new LocaleType("en_AU", 0);
    EN_CA = new LocaleType("en_CA", 1);
    FR_CA = new LocaleType("fr_CA", 2);
    FR_FR = new LocaleType("fr_FR", 3);
    DE_DE = new LocaleType("de_DE", 4);
    EN_GB = new LocaleType("en_GB", 5);
    JA_JP = new LocaleType("ja_JP", 6);
    EN_US = new LocaleType("en_US", 7);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate LocaleType instance, or null if no such code is present in the list
   */
  public static LocaleType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static LocaleType[] values() {
    Collection<LocaleType> keys = ALL_CODES.values();
    return keys.toArray(new LocaleType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private LocaleType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "LocaleType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LocaleType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LocaleType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LocaleType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LocaleType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LocaleType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LocaleType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LocaleType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LocaleType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LocaleType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LocaleType.class, "Categories");
  }

  /**
   * Compares two LocaleType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(LocaleType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
