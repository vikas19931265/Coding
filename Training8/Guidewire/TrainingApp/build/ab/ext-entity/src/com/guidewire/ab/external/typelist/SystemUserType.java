package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of special system users
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class SystemUserType implements TypeKey, Comparable<SystemUserType> {
  /**
   * A special user that accepts failed or unresolved assignments
   */
  public static SystemUserType DEFAULTOWNER;
  /**
   * The system administrator
   */
  public static SystemUserType SYSADMIN;
  /**
   * A daemon user that executes system services like escalation
   */
  public static SystemUserType SYSSERVICES;
  private static final Map<String, SystemUserType> ALL_CODES = new LinkedHashMap<String, SystemUserType>();


  private static void initTypecodes0() {
    DEFAULTOWNER = new SystemUserType("defaultowner", 0);
    SYSADMIN = new SystemUserType("sysadmin", 1);
    SYSSERVICES = new SystemUserType("sysservices", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate SystemUserType instance, or null if no such code is present in the list
   */
  public static SystemUserType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static SystemUserType[] values() {
    Collection<SystemUserType> keys = ALL_CODES.values();
    return keys.toArray(new SystemUserType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private SystemUserType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "SystemUserType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemUserType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemUserType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SystemUserType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemUserType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SystemUserType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemUserType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SystemUserType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemUserType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemUserType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemUserType.class, "Categories");
  }

  /**
   * Compares two SystemUserType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(SystemUserType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
