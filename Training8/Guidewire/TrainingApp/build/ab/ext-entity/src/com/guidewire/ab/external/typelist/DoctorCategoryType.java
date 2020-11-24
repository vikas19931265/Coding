package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * DoctorCategoryType
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class DoctorCategoryType implements TypeKey, Comparable<DoctorCategoryType> {
  /**
   * Immediate Care
   */
  public static DoctorCategoryType IMMEDIATECARE;
  /**
   * General Care
   */
  public static DoctorCategoryType GENERALCARE;
  /**
   * Surgery
   */
  public static DoctorCategoryType SURGERY;
  /**
   * Long-Term Care
   */
  public static DoctorCategoryType LONGTERMCARE;
  /**
   * Unspecified
   */
  public static DoctorCategoryType UNSPECIFIED;
  private static final Map<String, DoctorCategoryType> ALL_CODES = new LinkedHashMap<String, DoctorCategoryType>();


  private static void initTypecodes0() {
    IMMEDIATECARE = new DoctorCategoryType("ImmediateCare", 0);
    GENERALCARE = new DoctorCategoryType("GeneralCare", 1);
    SURGERY = new DoctorCategoryType("Surgery", 2);
    LONGTERMCARE = new DoctorCategoryType("LongTermCare", 3);
    UNSPECIFIED = new DoctorCategoryType("Unspecified", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DoctorCategoryType instance, or null if no such code is present in the list
   */
  public static DoctorCategoryType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DoctorCategoryType[] values() {
    Collection<DoctorCategoryType> keys = ALL_CODES.values();
    return keys.toArray(new DoctorCategoryType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DoctorCategoryType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DoctorCategoryType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorCategoryType.class, "Categories");
  }

  /**
   * Compares two DoctorCategoryType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DoctorCategoryType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
