package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The type of error for messages that are in error
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ErrorCategory implements TypeKey, Comparable<ErrorCategory> {
  /**
   * Cannot connect to external system
   */
  public static ErrorCategory NO_CONNECTION;
  /**
   * Contention with external system database
   */
  public static ErrorCategory DATABASE_CONTENTION;
  /**
   * User account doesn't get authenticated
   */
  public static ErrorCategory USER_AUTHENTICATION;
  private static final Map<String, ErrorCategory> ALL_CODES = new LinkedHashMap<String, ErrorCategory>();


  private static void initTypecodes0() {
    NO_CONNECTION = new ErrorCategory("no_connection", 0);
    DATABASE_CONTENTION = new ErrorCategory("database_contention", 1);
    USER_AUTHENTICATION = new ErrorCategory("user_authentication", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ErrorCategory instance, or null if no such code is present in the list
   */
  public static ErrorCategory getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ErrorCategory[] values() {
    Collection<ErrorCategory> keys = ALL_CODES.values();
    return keys.toArray(new ErrorCategory[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ErrorCategory(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ErrorCategory";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ErrorCategory.class, "Categories");
  }

  /**
   * Compares two ErrorCategory instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ErrorCategory o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
