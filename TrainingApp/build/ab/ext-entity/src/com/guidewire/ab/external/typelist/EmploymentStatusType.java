package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Status of employment
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class EmploymentStatusType implements TypeKey, Comparable<EmploymentStatusType> {
  /**
   * Full-time Employee
   */
  public static EmploymentStatusType FULLTIME;
  /**
   * Part-time Employee
   */
  public static EmploymentStatusType PARTTIME;
  /**
   * Unemployed
   */
  public static EmploymentStatusType UNEMPLOYED;
  /**
   * On Strike
   */
  public static EmploymentStatusType ONSTRIKE;
  /**
   * Disabled
   */
  public static EmploymentStatusType DISABLED;
  /**
   * Retired
   */
  public static EmploymentStatusType RETIRED;
  /**
   * Other
   */
  public static EmploymentStatusType OTHER;
  /**
   * Seasonal (not valid in TX)
   */
  public static EmploymentStatusType SEASONAL;
  /**
   * Volunteer (not valid in TX)
   */
  public static EmploymentStatusType VOLUNTEER;
  /**
   * Full-time Apprentice (not valid in TX)
   */
  public static EmploymentStatusType FT_APPRENTICE;
  /**
   * Part-time Apprentice (not valid in TX)
   */
  public static EmploymentStatusType PT_APPRENTICE;
  /**
   * Pieceworker (not valid in TX)
   */
  public static EmploymentStatusType PIECEWORKER;
  /**
   * Temporary
   */
  public static EmploymentStatusType TEMPORARY;
  private static final Map<String, EmploymentStatusType> ALL_CODES = new LinkedHashMap<String, EmploymentStatusType>();


  private static void initTypecodes0() {
    FULLTIME = new EmploymentStatusType("fulltime", 0);
    PARTTIME = new EmploymentStatusType("parttime", 1);
    UNEMPLOYED = new EmploymentStatusType("unemployed", 2);
    ONSTRIKE = new EmploymentStatusType("onstrike", 3);
    DISABLED = new EmploymentStatusType("disabled", 4);
    RETIRED = new EmploymentStatusType("retired", 5);
    OTHER = new EmploymentStatusType("other", 6);
    SEASONAL = new EmploymentStatusType("seasonal", 7);
    VOLUNTEER = new EmploymentStatusType("volunteer", 8);
    FT_APPRENTICE = new EmploymentStatusType("ft_apprentice", 9);
    PT_APPRENTICE = new EmploymentStatusType("pt_apprentice", 10);
    PIECEWORKER = new EmploymentStatusType("pieceworker", 11);
    TEMPORARY = new EmploymentStatusType("temporary", 12);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate EmploymentStatusType instance, or null if no such code is present in the list
   */
  public static EmploymentStatusType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static EmploymentStatusType[] values() {
    Collection<EmploymentStatusType> keys = ALL_CODES.values();
    return keys.toArray(new EmploymentStatusType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private EmploymentStatusType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "EmploymentStatusType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EmploymentStatusType.class, "Categories");
  }

  /**
   * Compares two EmploymentStatusType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(EmploymentStatusType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
