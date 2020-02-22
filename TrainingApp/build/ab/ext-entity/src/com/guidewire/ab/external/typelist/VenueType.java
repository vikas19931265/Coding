package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The types of legal venues.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class VenueType implements TypeKey, Comparable<VenueType> {
  /**
   * Alternative dispute resolution
   */
  public static VenueType ADR;
  /**
   * County
   */
  public static VenueType COUNTY;
  /**
   * Federal
   */
  public static VenueType FED;
  /**
   * Municipal
   */
  public static VenueType MUNI;
  /**
   * State
   */
  public static VenueType STATE;
  /**
   * State Supreme Court
   */
  public static VenueType STATESUP;
  /**
   * Supreme Court
   */
  public static VenueType SUPREME;
  /**
   * Workers' Comp Appeals Board
   */
  public static VenueType WCAPPEALS;
  private static final Map<String, VenueType> ALL_CODES = new LinkedHashMap<String, VenueType>();


  private static void initTypecodes0() {
    ADR = new VenueType("ADR", 0);
    COUNTY = new VenueType("County", 1);
    FED = new VenueType("Fed", 2);
    MUNI = new VenueType("Muni", 3);
    STATE = new VenueType("State", 4);
    STATESUP = new VenueType("StateSup", 5);
    SUPREME = new VenueType("Supreme", 6);
    WCAPPEALS = new VenueType("WcAppeals", 7);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate VenueType instance, or null if no such code is present in the list
   */
  public static VenueType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static VenueType[] values() {
    Collection<VenueType> keys = ALL_CODES.values();
    return keys.toArray(new VenueType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private VenueType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "VenueType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VenueType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VenueType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VenueType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VenueType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VenueType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VenueType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VenueType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VenueType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VenueType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VenueType.class, "Categories");
  }

  /**
   * Compares two VenueType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(VenueType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
