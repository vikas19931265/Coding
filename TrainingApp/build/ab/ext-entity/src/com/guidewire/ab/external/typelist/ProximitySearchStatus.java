package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Categorize the geocode status of an address
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ProximitySearchStatus implements TypeKey, Comparable<ProximitySearchStatus> {
  /**
   * This category includes the following geocode status: failure
   */
  public static ProximitySearchStatus FAILED;
  /**
   * This category includes the following geocode status: none
   */
  public static ProximitySearchStatus NOTYETSEARCHABLE;
  /**
   * This category includes the following geocode status: exact, street, city, postalcode
   */
  public static ProximitySearchStatus SEARCHABLE;
  private static final Map<String, ProximitySearchStatus> ALL_CODES = new LinkedHashMap<String, ProximitySearchStatus>();


  private static void initTypecodes0() {
    FAILED = new ProximitySearchStatus("failed", 0);
    NOTYETSEARCHABLE = new ProximitySearchStatus("notyetsearchable", 1);
    SEARCHABLE = new ProximitySearchStatus("searchable", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ProximitySearchStatus instance, or null if no such code is present in the list
   */
  public static ProximitySearchStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ProximitySearchStatus[] values() {
    Collection<ProximitySearchStatus> keys = ALL_CODES.values();
    return keys.toArray(new ProximitySearchStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ProximitySearchStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ProximitySearchStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProximitySearchStatus.class, "Categories");
  }

  /**
   * Compares two ProximitySearchStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ProximitySearchStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
