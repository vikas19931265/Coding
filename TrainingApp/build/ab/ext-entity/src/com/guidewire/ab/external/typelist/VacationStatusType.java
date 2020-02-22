package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Possible vacation statuses for a user
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class VacationStatusType implements TypeKey, Comparable<VacationStatusType> {
  /**
   * The user is at work
   */
  public static VacationStatusType ATWORK;
  /**
   * The user is on vacation
   */
  public static VacationStatusType ONVACATION;
  /**
   * The user is not available
   */
  public static VacationStatusType INACTIVE;
  private static final Map<String, VacationStatusType> ALL_CODES = new LinkedHashMap<String, VacationStatusType>();


  private static void initTypecodes0() {
    ATWORK = new VacationStatusType("atwork", 0);
    ONVACATION = new VacationStatusType("onvacation", 1);
    INACTIVE = new VacationStatusType("inactive", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate VacationStatusType instance, or null if no such code is present in the list
   */
  public static VacationStatusType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static VacationStatusType[] values() {
    Collection<VacationStatusType> keys = ALL_CODES.values();
    return keys.toArray(new VacationStatusType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private VacationStatusType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "VacationStatusType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VacationStatusType.class, "Categories");
  }

  /**
   * Compares two VacationStatusType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(VacationStatusType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
