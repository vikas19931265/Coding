package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Subtype typelist for entity ABContact
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ABContact implements TypeKey, Comparable<ABContact> {
  /**
   * Adjudicator
   */
  public static ABContact ABADJUDICATOR;
  /**
   * Attorney
   */
  public static ABContact ABATTORNEY;
  /**
   * Auto Repair Shop
   */
  public static ABContact ABAUTOREPAIRSHOP;
  /**
   * Auto Scrap Yard
   */
  public static ABContact ABAUTOSCRAPYARD_EXT;
  /**
   * Auto Towing Agency
   */
  public static ABContact ABAUTOTOWINGAGCY;
  /**
   * Company
   */
  public static ABContact ABCOMPANY;
  /**
   * Contact
   */
  public static ABContact ABCONTACT;
  /**
   * Doctor
   */
  public static ABContact ABDOCTOR;
  /**
   * Law Firm
   */
  public static ABContact ABLAWFIRM;
  /**
   * Legal Venue
   */
  public static ABContact ABLEGALVENUE;
  /**
   * Medical Care Organization
   */
  public static ABContact ABMEDICALCAREORG;
  /**
   * Person
   */
  public static ABContact ABPERSON;
  /**
   * Place
   */
  public static ABContact ABPLACE;
  /**
   * Policy Company
   */
  public static ABContact ABPOLICYCOMPANY;
  /**
   * Policy Person
   */
  public static ABContact ABPOLICYPERSON;
  /**
   * User Contact
   */
  public static ABContact ABUSERCONTACT;
  /**
   * Vendor (Company)
   */
  public static ABContact ABCOMPANYVENDOR;
  /**
   * Vendor (Person)
   */
  public static ABContact ABPERSONVENDOR;
  private static final Map<String, ABContact> ALL_CODES = new LinkedHashMap<String, ABContact>();


  private static void initTypecodes0() {
    ABADJUDICATOR = new ABContact("ABAdjudicator", 0);
    ABATTORNEY = new ABContact("ABAttorney", 1);
    ABAUTOREPAIRSHOP = new ABContact("ABAutoRepairShop", 2);
    ABAUTOSCRAPYARD_EXT = new ABContact("ABAutoScrapYard_Ext", 3);
    ABAUTOTOWINGAGCY = new ABContact("ABAutoTowingAgcy", 4);
    ABCOMPANY = new ABContact("ABCompany", 5);
    ABCONTACT = new ABContact("ABContact", 6);
    ABDOCTOR = new ABContact("ABDoctor", 7);
    ABLAWFIRM = new ABContact("ABLawFirm", 8);
    ABLEGALVENUE = new ABContact("ABLegalVenue", 9);
    ABMEDICALCAREORG = new ABContact("ABMedicalCareOrg", 10);
    ABPERSON = new ABContact("ABPerson", 11);
    ABPLACE = new ABContact("ABPlace", 12);
    ABPOLICYCOMPANY = new ABContact("ABPolicyCompany", 13);
    ABPOLICYPERSON = new ABContact("ABPolicyPerson", 14);
    ABUSERCONTACT = new ABContact("ABUserContact", 15);
    ABCOMPANYVENDOR = new ABContact("ABCompanyVendor", 16);
    ABPERSONVENDOR = new ABContact("ABPersonVendor", 17);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ABContact instance, or null if no such code is present in the list
   */
  public static ABContact getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ABContact[] values() {
    Collection<ABContact> keys = ALL_CODES.values();
    return keys.toArray(new ABContact[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ABContact(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ABContact";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABContact.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABContact.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ABContact.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABContact.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ABContact.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABContact.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ABContact.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABContact.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABContact.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABContact.class, "Categories");
  }

  /**
   * Compares two ABContact instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ABContact o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
