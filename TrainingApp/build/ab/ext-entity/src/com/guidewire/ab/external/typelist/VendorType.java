package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class VendorType implements TypeKey, Comparable<VendorType> {
  /**
   * Auto glass shop
   */
  public static VendorType AUTOGLASS;
  /**
   * Auto rental service
   */
  public static VendorType AUTORENTAL;
  /**
   * Auto repair shop
   */
  public static VendorType AUTOREPAIR;
  /**
   * Building contractor
   */
  public static VendorType BLDINGCONTRACTOR;
  /**
   * Defense attorney
   */
  public static VendorType DEFENSEATT;
  /**
   * Doctor
   */
  public static VendorType DOCTOR;
  /**
   * External adjuster
   */
  public static VendorType EXTERNALADJUSTER;
  /**
   * Fire inspector
   */
  public static VendorType FIREINSPECTOR;
  /**
   * Government authority
   */
  public static VendorType GOVERNMENT;
  /**
   * Hospital
   */
  public static VendorType HOSPITAL;
  /**
   * Independent auto inspector
   */
  public static VendorType INDAUTOINSPECTOR;
  /**
   * Independent property inspector
   */
  public static VendorType INDPROPINSPECTOR;
  /**
   * Insurance agent
   */
  public static VendorType INSURANCEAGENT;
  /**
   * Nurse - for medical management and rehab
   */
  public static VendorType NURSE;
  /**
   * Plaintiff attorney
   */
  public static VendorType PLAINTIFFATT;
  /**
   * Towing service
   */
  public static VendorType TOWINGSERVICE;
  private static final Map<String, VendorType> ALL_CODES = new LinkedHashMap<String, VendorType>();


  private static void initTypecodes0() {
    AUTOGLASS = new VendorType("autoglass", 0);
    AUTORENTAL = new VendorType("autorental", 1);
    AUTOREPAIR = new VendorType("autorepair", 2);
    BLDINGCONTRACTOR = new VendorType("bldingcontractor", 3);
    DEFENSEATT = new VendorType("defenseatt", 4);
    DOCTOR = new VendorType("doctor", 5);
    EXTERNALADJUSTER = new VendorType("externaladjuster", 6);
    FIREINSPECTOR = new VendorType("fireinspector", 7);
    GOVERNMENT = new VendorType("government", 8);
    HOSPITAL = new VendorType("hospital", 9);
    INDAUTOINSPECTOR = new VendorType("indautoinspector", 10);
    INDPROPINSPECTOR = new VendorType("indpropinspector", 11);
    INSURANCEAGENT = new VendorType("insuranceagent", 12);
    NURSE = new VendorType("nurse", 13);
    PLAINTIFFATT = new VendorType("plaintiffatt", 14);
    TOWINGSERVICE = new VendorType("towingservice", 15);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate VendorType instance, or null if no such code is present in the list
   */
  public static VendorType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static VendorType[] values() {
    Collection<VendorType> keys = ALL_CODES.values();
    return keys.toArray(new VendorType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private VendorType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "VendorType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VendorType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VendorType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VendorType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorType.class, "Categories");
  }

  /**
   * Compares two VendorType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(VendorType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
