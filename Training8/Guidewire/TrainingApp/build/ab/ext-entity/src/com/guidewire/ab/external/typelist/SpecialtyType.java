package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * specialty types for doctors
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class SpecialtyType implements TypeKey, Comparable<SpecialtyType> {
  /**
   * Allergy
   */
  public static SpecialtyType ALLERGY;
  /**
   * Anesthesiology
   */
  public static SpecialtyType ANESTHESIOLOGY;
  /**
   * Cardiology
   */
  public static SpecialtyType CARDIOLOGY;
  /**
   * Dermatology
   */
  public static SpecialtyType DERMATOLOGY;
  /**
   * Emergency Medicine
   */
  public static SpecialtyType EMERGENCYMED;
  /**
   * Endocrinology
   */
  public static SpecialtyType ENDOCRINOLOGY;
  /**
   * ENT
   */
  public static SpecialtyType ENT;
  /**
   * Family Practice
   */
  public static SpecialtyType FAMILYPRACTICE;
  /**
   * Gastroenterology
   */
  public static SpecialtyType GASTROENTEROLOGY;
  /**
   * Hematalogy/Oncology
   */
  public static SpecialtyType HEMATOLOGYONC;
  /**
   * Hospitalist
   */
  public static SpecialtyType HOSPITALIST;
  /**
   * Infectious Disease
   */
  public static SpecialtyType INFECTIOUSDIS;
  /**
   * Internal Medicine
   */
  public static SpecialtyType INTERNALMED;
  /**
   * Med/Peds
   */
  public static SpecialtyType MEDPEDS;
  /**
   * Nephrology
   */
  public static SpecialtyType NEPHROLOGY;
  /**
   * Neurology
   */
  public static SpecialtyType NEUROLOGY;
  /**
   * Obstetrics/Gynecology
   */
  public static SpecialtyType OBGYN;
  /**
   * Occupational Medicine
   */
  public static SpecialtyType OCCUPATIONALMED;
  /**
   * Opthalmology
   */
  public static SpecialtyType OPTHALMOLOGY;
  /**
   * Pathology
   */
  public static SpecialtyType PATHOLOGY;
  /**
   * Physical Medicine/Rehabilitation
   */
  public static SpecialtyType PHYSMEDREHAB;
  /**
   * Plastic Surgery
   */
  public static SpecialtyType PLASTICSURGERY;
  /**
   * Psychiatry
   */
  public static SpecialtyType PSYCHIATRY;
  /**
   * Pulmonary/Critical Care
   */
  public static SpecialtyType PULMCRITCARE;
  /**
   * Surgery
   */
  public static SpecialtyType SURGERY;
  private static final Map<String, SpecialtyType> ALL_CODES = new LinkedHashMap<String, SpecialtyType>();


  private static void initTypecodes0() {
    ALLERGY = new SpecialtyType("allergy", 0);
    ANESTHESIOLOGY = new SpecialtyType("anesthesiology", 1);
    CARDIOLOGY = new SpecialtyType("cardiology", 2);
    DERMATOLOGY = new SpecialtyType("dermatology", 3);
    EMERGENCYMED = new SpecialtyType("emergencymed", 4);
    ENDOCRINOLOGY = new SpecialtyType("endocrinology", 5);
    ENT = new SpecialtyType("ent", 6);
    FAMILYPRACTICE = new SpecialtyType("familypractice", 7);
    GASTROENTEROLOGY = new SpecialtyType("gastroenterology", 8);
    HEMATOLOGYONC = new SpecialtyType("hematologyonc", 9);
    HOSPITALIST = new SpecialtyType("hospitalist", 10);
    INFECTIOUSDIS = new SpecialtyType("infectiousdis", 11);
    INTERNALMED = new SpecialtyType("internalmed", 12);
    MEDPEDS = new SpecialtyType("medpeds", 13);
    NEPHROLOGY = new SpecialtyType("nephrology", 14);
    NEUROLOGY = new SpecialtyType("neurology", 15);
    OBGYN = new SpecialtyType("obgyn", 16);
    OCCUPATIONALMED = new SpecialtyType("occupationalmed", 17);
    OPTHALMOLOGY = new SpecialtyType("opthalmology", 18);
    PATHOLOGY = new SpecialtyType("pathology", 19);
    PHYSMEDREHAB = new SpecialtyType("physmedrehab", 20);
    PLASTICSURGERY = new SpecialtyType("plasticsurgery", 21);
    PSYCHIATRY = new SpecialtyType("psychiatry", 22);
    PULMCRITCARE = new SpecialtyType("pulmcritcare", 23);
    SURGERY = new SpecialtyType("surgery", 24);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate SpecialtyType instance, or null if no such code is present in the list
   */
  public static SpecialtyType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static SpecialtyType[] values() {
    Collection<SpecialtyType> keys = ALL_CODES.values();
    return keys.toArray(new SpecialtyType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private SpecialtyType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "SpecialtyType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SpecialtyType.class, "Categories");
  }

  /**
   * Compares two SpecialtyType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(SpecialtyType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
