package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * DoctorSpecialtyType
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class DoctorSpecialtyType implements TypeKey, Comparable<DoctorSpecialtyType> {
  /**
   * Critical Care Medicine
   */
  public static DoctorSpecialtyType CRITICALCAREMEDICINE;
  /**
   * Dentistry/Oral Surgery
   */
  public static DoctorSpecialtyType DENTISTRY;
  /**
   * Emergency Medicine
   */
  public static DoctorSpecialtyType EMERGENCYMEDICINE;
  /**
   * Foot Surgery
   */
  public static DoctorSpecialtyType FOOTSURGERY;
  /**
   * General Surgery
   */
  public static DoctorSpecialtyType GENERALSURGERY;
  /**
   * Hand Surgery
   */
  public static DoctorSpecialtyType HANDSURGERY;
  /**
   * Hospitalist
   */
  public static DoctorSpecialtyType HOSPITALIST;
  /**
   * Internal Medicine
   */
  public static DoctorSpecialtyType INTERNALMEDICINE;
  /**
   * Neurology
   */
  public static DoctorSpecialtyType NEUROLOGY;
  /**
   * Orthopaedics
   */
  public static DoctorSpecialtyType ORTHOPAEDICS;
  /**
   * Pain Management
   */
  public static DoctorSpecialtyType PAINMANAGEMENT;
  /**
   * Physical Rehabilitation
   */
  public static DoctorSpecialtyType PHYSICALREHABILITATION;
  /**
   * Podiatry
   */
  public static DoctorSpecialtyType PODIATRY;
  /**
   * Reconstructive Surgery
   */
  public static DoctorSpecialtyType RECONSTRUCTIVESURGERY;
  /**
   * Unspecified
   */
  public static DoctorSpecialtyType UNSPECIFIED;
  private static final Map<String, DoctorSpecialtyType> ALL_CODES = new LinkedHashMap<String, DoctorSpecialtyType>();


  private static void initTypecodes0() {
    CRITICALCAREMEDICINE = new DoctorSpecialtyType("CriticalCareMedicine", 0);
    DENTISTRY = new DoctorSpecialtyType("Dentistry", 1);
    EMERGENCYMEDICINE = new DoctorSpecialtyType("EmergencyMedicine", 2);
    FOOTSURGERY = new DoctorSpecialtyType("FootSurgery", 3);
    GENERALSURGERY = new DoctorSpecialtyType("GeneralSurgery", 4);
    HANDSURGERY = new DoctorSpecialtyType("HandSurgery", 5);
    HOSPITALIST = new DoctorSpecialtyType("Hospitalist", 6);
    INTERNALMEDICINE = new DoctorSpecialtyType("InternalMedicine", 7);
    NEUROLOGY = new DoctorSpecialtyType("Neurology", 8);
    ORTHOPAEDICS = new DoctorSpecialtyType("Orthopaedics", 9);
    PAINMANAGEMENT = new DoctorSpecialtyType("PainManagement", 10);
    PHYSICALREHABILITATION = new DoctorSpecialtyType("PhysicalRehabilitation", 11);
    PODIATRY = new DoctorSpecialtyType("Podiatry", 12);
    RECONSTRUCTIVESURGERY = new DoctorSpecialtyType("ReconstructiveSurgery", 13);
    UNSPECIFIED = new DoctorSpecialtyType("Unspecified", 14);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DoctorSpecialtyType instance, or null if no such code is present in the list
   */
  public static DoctorSpecialtyType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DoctorSpecialtyType[] values() {
    Collection<DoctorSpecialtyType> keys = ALL_CODES.values();
    return keys.toArray(new DoctorSpecialtyType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DoctorSpecialtyType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DoctorSpecialtyType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DoctorSpecialtyType.class, "Categories");
  }

  /**
   * Compares two DoctorSpecialtyType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DoctorSpecialtyType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
