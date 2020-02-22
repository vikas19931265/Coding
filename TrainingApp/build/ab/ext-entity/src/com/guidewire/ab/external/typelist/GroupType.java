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
public class GroupType implements TypeKey, Comparable<GroupType> {
  /**
   * Actuary Unit
   */
  public static GroupType ACTUARY;
  /**
   * Auto team
   */
  public static GroupType AUTONORMAL;
  /**
   * Complex auto team
   */
  public static GroupType AUTOCOMPLEX;
  /**
   * Fast track auto team
   */
  public static GroupType AUTOFASTTRACK;
  /**
   * Auto damage appraisers
   */
  public static GroupType AUTO_INSPECTORS;
  /**
   * Branch Audit
   */
  public static GroupType BRANCHAUDIT;
  /**
   * Branch L.C.
   */
  public static GroupType BRANCHLC;
  /**
   * Branch Marketing
   */
  public static GroupType BRANCHMKT;
  /**
   * Branch UW
   */
  public static GroupType BRANCHUW;
  /**
   * Clean-up services
   */
  public static GroupType CLEANUP;
  /**
   * Clerical support
   */
  public static GroupType CLERICAL;
  /**
   * Corporate headquarters
   */
  public static GroupType HQ;
  /**
   * Customer Service
   */
  public static GroupType CUSTSERV;
  /**
   * Defense attorneys
   */
  public static GroupType ATTORNEYS;
  /**
   * Drive-in centers
   */
  public static GroupType DRIVE_IN;
  /**
   * Fac Reinsurance Unit
   */
  public static GroupType FACRE;
  /**
   * Fee Audit
   */
  public static GroupType EXTAUDIT;
  /**
   * Fee Inspection
   */
  public static GroupType EXTLC;
  /**
   * Finance and Treasury
   */
  public static GroupType FINANCE;
  /**
   * General
   */
  public static GroupType GENERAL;
  /**
   * Home Office Admin Services
   */
  public static GroupType HOMEOFFICEADMIN;
  /**
   * Home Office L.C.
   */
  public static GroupType HOMEOFFICELC;
  /**
   * Home Office Marketing
   */
  public static GroupType HOMEOFFICEMKT;
  /**
   * Home Office UW
   */
  public static GroupType HOMEOFFICEUW;
  /**
   * Independent adjusters
   */
  public static GroupType INDEPENDENT;
  /**
   * Injury liability specialists
   */
  public static GroupType INJURY_SPECS;
  /**
   * Liability team
   */
  public static GroupType LBLTYNORMAL;
  /**
   * Complex liability team
   */
  public static GroupType LBLTYCOMPLEX;
  /**
   * Fast track liability team
   */
  public static GroupType LBLTYFASTTRACK;
  /**
   * Specialists for highly complex liability claims
   */
  public static GroupType LBLTYSPECS;
  /**
   * Litigation unit
   */
  public static GroupType LITIGATION;
  /**
   * Local office
   */
  public static GroupType LOCAL;
  /**
   * Managing General Agent
   */
  public static GroupType MGA;
  /**
   * Medical management
   */
  public static GroupType MEDICAL_MGMT;
  /**
   * New claim processing
   */
  public static GroupType INTAKE;
  /**
   * Police
   */
  public static GroupType POLICE;
  /**
   * Policy processing
   */
  public static GroupType POLICY;
  /**
   * Policy Services
   */
  public static GroupType POLICYSERVE;
  /**
   * Preferred repair shops
   */
  public static GroupType PREFERRED;
  /**
   * Premium Accounting
   */
  public static GroupType PREMACCT;
  /**
   * Producer
   */
  public static GroupType PRODUCER;
  /**
   * Property team
   */
  public static GroupType PROPNORMAL;
  /**
   * Complex property team
   */
  public static GroupType PROPCOMPLEX;
  /**
   * Fast track property team
   */
  public static GroupType PROPFASTTRACK;
  /**
   * Property damage appraisers
   */
  public static GroupType PROP_INSPECTORS;
  /**
   * Regional Audit
   */
  public static GroupType REGIONAUDIT;
  /**
   * Regional L.C.
   */
  public static GroupType REGIONLC;
  /**
   * Regional Marketing
   */
  public static GroupType REGIONMKT;
  /**
   * Regional service center
   */
  public static GroupType REGIONAL;
  /**
   * Regional UW
   */
  public static GroupType REGIONUW;
  /**
   * Rehab/nursing
   */
  public static GroupType REHAB;
  /**
   * This is the root group of an organization
   */
  public static GroupType ROOT;
  /**
   * Salvage unit
   */
  public static GroupType SALVAGE;
  /**
   * Solutions Group
   */
  public static GroupType SOLUTIONS;
  /**
   * Special investigative unit
   */
  public static GroupType SIU;
  /**
   * Subrogration unit
   */
  public static GroupType SUBRO;
  /**
   * System administrators
   */
  public static GroupType SYSTEMADMIN;
  /**
   * Underwriting
   */
  public static GroupType UNDERWRITING;
  /**
   * Web Services unit
   */
  public static GroupType ESERVICES;
  /**
   * Workers' comp team
   */
  public static GroupType WC_NORMAL;
  /**
   * Workers' comp lost time team
   */
  public static GroupType WC_LOST_TIME;
  /**
   * Workers' comp med only team
   */
  public static GroupType WC_MED_ONLY;
  private static final Map<String, GroupType> ALL_CODES = new LinkedHashMap<String, GroupType>();


  private static void initTypecodes0() {
    ACTUARY = new GroupType("actuary", 0);
    AUTONORMAL = new GroupType("autonormal", 1);
    AUTOCOMPLEX = new GroupType("autocomplex", 2);
    AUTOFASTTRACK = new GroupType("autofasttrack", 3);
    AUTO_INSPECTORS = new GroupType("auto_inspectors", 4);
    BRANCHAUDIT = new GroupType("branchaudit", 5);
    BRANCHLC = new GroupType("branchlc", 6);
    BRANCHMKT = new GroupType("branchmkt", 7);
    BRANCHUW = new GroupType("branchuw", 8);
    CLEANUP = new GroupType("cleanup", 9);
    CLERICAL = new GroupType("clerical", 10);
    HQ = new GroupType("hq", 11);
    CUSTSERV = new GroupType("custserv", 12);
    ATTORNEYS = new GroupType("attorneys", 13);
    DRIVE_IN = new GroupType("drive_in", 14);
    FACRE = new GroupType("facre", 15);
    EXTAUDIT = new GroupType("extaudit", 16);
    EXTLC = new GroupType("extlc", 17);
    FINANCE = new GroupType("finance", 18);
    GENERAL = new GroupType("general", 19);
    HOMEOFFICEADMIN = new GroupType("homeofficeadmin", 20);
    HOMEOFFICELC = new GroupType("homeofficelc", 21);
    HOMEOFFICEMKT = new GroupType("homeofficemkt", 22);
    HOMEOFFICEUW = new GroupType("homeofficeuw", 23);
    INDEPENDENT = new GroupType("independent", 24);
    INJURY_SPECS = new GroupType("injury_specs", 25);
    LBLTYNORMAL = new GroupType("lbltynormal", 26);
    LBLTYCOMPLEX = new GroupType("lbltycomplex", 27);
    LBLTYFASTTRACK = new GroupType("lbltyfasttrack", 28);
    LBLTYSPECS = new GroupType("lbltyspecs", 29);
    LITIGATION = new GroupType("litigation", 30);
    LOCAL = new GroupType("local", 31);
    MGA = new GroupType("mga", 32);
    MEDICAL_MGMT = new GroupType("medical_mgmt", 33);
    INTAKE = new GroupType("intake", 34);
    POLICE = new GroupType("police", 35);
    POLICY = new GroupType("policy", 36);
    POLICYSERVE = new GroupType("policyserve", 37);
    PREFERRED = new GroupType("preferred", 38);
    PREMACCT = new GroupType("premacct", 39);
    PRODUCER = new GroupType("producer", 40);
    PROPNORMAL = new GroupType("propnormal", 41);
    PROPCOMPLEX = new GroupType("propcomplex", 42);
    PROPFASTTRACK = new GroupType("propfasttrack", 43);
    PROP_INSPECTORS = new GroupType("prop_inspectors", 44);
    REGIONAUDIT = new GroupType("regionaudit", 45);
    REGIONLC = new GroupType("regionlc", 46);
    REGIONMKT = new GroupType("regionmkt", 47);
    REGIONAL = new GroupType("regional", 48);
    REGIONUW = new GroupType("regionuw", 49);
    REHAB = new GroupType("rehab", 50);
    ROOT = new GroupType("root", 51);
    SALVAGE = new GroupType("salvage", 52);
    SOLUTIONS = new GroupType("solutions", 53);
    SIU = new GroupType("siu", 54);
    SUBRO = new GroupType("subro", 55);
    SYSTEMADMIN = new GroupType("systemadmin", 56);
    UNDERWRITING = new GroupType("underwriting", 57);
    ESERVICES = new GroupType("eservices", 58);
    WC_NORMAL = new GroupType("wc_normal", 59);
    WC_LOST_TIME = new GroupType("wc_lost_time", 60);
    WC_MED_ONLY = new GroupType("wc_med_only", 61);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate GroupType instance, or null if no such code is present in the list
   */
  public static GroupType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static GroupType[] values() {
    Collection<GroupType> keys = ALL_CODES.values();
    return keys.toArray(new GroupType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private GroupType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "GroupType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GroupType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GroupType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.GroupType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GroupType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.GroupType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GroupType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.GroupType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GroupType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GroupType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.GroupType.class, "Categories");
  }

  /**
   * Compares two GroupType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(GroupType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
