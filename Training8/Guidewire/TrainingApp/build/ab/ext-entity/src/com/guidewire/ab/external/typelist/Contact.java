package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Subtype typelist for entity Contact
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class Contact implements TypeKey, Comparable<Contact> {
  /**
   * Company
   */
  public static Contact COMPANY;
  /**
   * Person
   */
  public static Contact PERSON;
  /**
   * Place
   */
  public static Contact PLACE;
  /**
   * Contact
   */
  public static Contact CONTACT;
  /**
   * Legal Venue
   */
  public static Contact LEGALVENUE;
  /**
   * User Contact
   */
  public static Contact USERCONTACT;
  /**
   * Vendor (Company)
   */
  public static Contact COMPANYVENDOR;
  /**
   * Vendor (Person)
   */
  public static Contact PERSONVENDOR;
  private static final Map<String, Contact> ALL_CODES = new LinkedHashMap<String, Contact>();


  private static void initTypecodes0() {
    COMPANY = new Contact("Company", 0);
    PERSON = new Contact("Person", 1);
    PLACE = new Contact("Place", 2);
    CONTACT = new Contact("Contact", 3);
    LEGALVENUE = new Contact("LegalVenue", 4);
    USERCONTACT = new Contact("UserContact", 5);
    COMPANYVENDOR = new Contact("CompanyVendor", 6);
    PERSONVENDOR = new Contact("PersonVendor", 7);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate Contact instance, or null if no such code is present in the list
   */
  public static Contact getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static Contact[] values() {
    Collection<Contact> keys = ALL_CODES.values();
    return keys.toArray(new Contact[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private Contact(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "Contact";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Contact.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Contact.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Contact.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Contact.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Contact.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Contact.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Contact.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Contact.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Contact.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Contact.class, "Categories");
  }

  /**
   * Compares two Contact instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(Contact o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
