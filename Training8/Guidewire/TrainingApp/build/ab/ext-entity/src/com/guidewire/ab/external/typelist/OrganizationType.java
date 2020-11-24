package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * type of organization for attorneys, doctors, and government authorities
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class OrganizationType implements TypeKey, Comparable<OrganizationType> {
  /**
   * City
   */
  public static OrganizationType CITY;
  /**
   * Corporation
   */
  public static OrganizationType CORPORATION;
  /**
   * County
   */
  public static OrganizationType COUNTY;
  /**
   * Federal
   */
  public static OrganizationType FEDERAL;
  /**
   * Partnership
   */
  public static OrganizationType PARTNERSHIP;
  /**
   * Sole Proprietorship
   */
  public static OrganizationType SOLEPROPSHIP;
  /**
   * State
   */
  public static OrganizationType STATE;
  private static final Map<String, OrganizationType> ALL_CODES = new LinkedHashMap<String, OrganizationType>();


  private static void initTypecodes0() {
    CITY = new OrganizationType("city", 0);
    CORPORATION = new OrganizationType("corporation", 1);
    COUNTY = new OrganizationType("county", 2);
    FEDERAL = new OrganizationType("federal", 3);
    PARTNERSHIP = new OrganizationType("partnership", 4);
    SOLEPROPSHIP = new OrganizationType("solepropship", 5);
    STATE = new OrganizationType("state", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate OrganizationType instance, or null if no such code is present in the list
   */
  public static OrganizationType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static OrganizationType[] values() {
    Collection<OrganizationType> keys = ALL_CODES.values();
    return keys.toArray(new OrganizationType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private OrganizationType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "OrganizationType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OrganizationType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OrganizationType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.OrganizationType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OrganizationType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.OrganizationType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OrganizationType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.OrganizationType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OrganizationType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OrganizationType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OrganizationType.class, "Categories");
  }

  /**
   * Compares two OrganizationType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(OrganizationType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
