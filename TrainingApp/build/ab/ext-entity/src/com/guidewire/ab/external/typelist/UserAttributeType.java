package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Major categories of user attributes
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class UserAttributeType implements TypeKey, Comparable<UserAttributeType> {
  /**
   * Default
   */
  public static UserAttributeType DEFAULT;
  /**
   * Expertise
   */
  public static UserAttributeType EXPERTISE;
  /**
   * Language
   */
  public static UserAttributeType LANGUAGE;
  /**
   * Named account
   */
  public static UserAttributeType ACCOUNT;
  private static final Map<String, UserAttributeType> ALL_CODES = new LinkedHashMap<String, UserAttributeType>();


  private static void initTypecodes0() {
    DEFAULT = new UserAttributeType("default", 0);
    EXPERTISE = new UserAttributeType("Expertise", 1);
    LANGUAGE = new UserAttributeType("Language", 2);
    ACCOUNT = new UserAttributeType("Account", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate UserAttributeType instance, or null if no such code is present in the list
   */
  public static UserAttributeType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static UserAttributeType[] values() {
    Collection<UserAttributeType> keys = ALL_CODES.values();
    return keys.toArray(new UserAttributeType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private UserAttributeType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "UserAttributeType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserAttributeType.class, "Categories");
  }

  /**
   * Compares two UserAttributeType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(UserAttributeType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
