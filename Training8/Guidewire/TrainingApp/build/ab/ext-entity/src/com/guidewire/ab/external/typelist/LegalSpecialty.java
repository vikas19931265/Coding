package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * specialty types for attornies
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class LegalSpecialty implements TypeKey, Comparable<LegalSpecialty> {
  /**
   * General Liability
   */
  public static LegalSpecialty GENERALLIABILITY;
  /**
   * Motor Vehicle Liability
   */
  public static LegalSpecialty MOTORVEHLIABILITY;
  /**
   * Personal Injury
   */
  public static LegalSpecialty PERSONALINJURY;
  /**
   * Workers' Compensation
   */
  public static LegalSpecialty WORKERSCOMP;
  private static final Map<String, LegalSpecialty> ALL_CODES = new LinkedHashMap<String, LegalSpecialty>();


  private static void initTypecodes0() {
    GENERALLIABILITY = new LegalSpecialty("generalliability", 0);
    MOTORVEHLIABILITY = new LegalSpecialty("motorvehliability", 1);
    PERSONALINJURY = new LegalSpecialty("personalinjury", 2);
    WORKERSCOMP = new LegalSpecialty("workerscomp", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate LegalSpecialty instance, or null if no such code is present in the list
   */
  public static LegalSpecialty getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static LegalSpecialty[] values() {
    Collection<LegalSpecialty> keys = ALL_CODES.values();
    return keys.toArray(new LegalSpecialty[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private LegalSpecialty(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "LegalSpecialty";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalSpecialty.class, "Categories");
  }

  /**
   * Compares two LegalSpecialty instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(LegalSpecialty o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
