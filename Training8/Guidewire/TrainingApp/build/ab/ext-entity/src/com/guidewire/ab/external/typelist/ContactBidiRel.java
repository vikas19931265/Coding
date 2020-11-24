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
public class ContactBidiRel implements TypeKey, Comparable<ContactBidiRel> {
  /**
   * Assigned Case
   */
  public static ContactBidiRel CASE;
  /**
   * Child or ward
   */
  public static ContactBidiRel WARD;
  /**
   * Collection Agency
   */
  public static ContactBidiRel COLLECTIONAGENCY;
  /**
   * Employee of an employer
   */
  public static ContactBidiRel EMPLOYEE;
  /**
   * Employer
   */
  public static ContactBidiRel EMPLOYER;
  /**
   * Parent of a child or Guardian of a ward.
   */
  public static ContactBidiRel GUARDIAN;
  /**
   * Primary contact
   */
  public static ContactBidiRel PRIMARYCONTACT;
  /**
   * PrimaryContact For
   */
  public static ContactBidiRel PRIMARYCONTACTFOR;
  /**
   * Third-Party Insured
   */
  public static ContactBidiRel THIRDPARTYINSURED;
  /**
   * Third-Party Insurer
   */
  public static ContactBidiRel THIRDPARTYINSURER;
  private static final Map<String, ContactBidiRel> ALL_CODES = new LinkedHashMap<String, ContactBidiRel>();


  private static void initTypecodes0() {
    CASE = new ContactBidiRel("case", 0);
    WARD = new ContactBidiRel("ward", 1);
    COLLECTIONAGENCY = new ContactBidiRel("collectionagency", 2);
    EMPLOYEE = new ContactBidiRel("employee", 3);
    EMPLOYER = new ContactBidiRel("employer", 4);
    GUARDIAN = new ContactBidiRel("guardian", 5);
    PRIMARYCONTACT = new ContactBidiRel("primarycontact", 6);
    PRIMARYCONTACTFOR = new ContactBidiRel("primarycontactfor", 7);
    THIRDPARTYINSURED = new ContactBidiRel("thirdpartyinsured", 8);
    THIRDPARTYINSURER = new ContactBidiRel("thirdpartyinsurer", 9);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ContactBidiRel instance, or null if no such code is present in the list
   */
  public static ContactBidiRel getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ContactBidiRel[] values() {
    Collection<ContactBidiRel> keys = ALL_CODES.values();
    return keys.toArray(new ContactBidiRel[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ContactBidiRel(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ContactBidiRel";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactBidiRel.class, "Categories");
  }

  /**
   * Compares two ContactBidiRel instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ContactBidiRel o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
