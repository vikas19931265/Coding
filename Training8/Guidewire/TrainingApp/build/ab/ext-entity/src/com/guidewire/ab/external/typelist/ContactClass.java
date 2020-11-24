package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The classification of a contact
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ContactClass implements TypeKey, Comparable<ContactClass> {
  /**
   * Basic contact with no specific classification
   */
  public static ContactClass GENERAL;
  /**
   * Authority that handles legal matters (for example, a court house)
   */
  public static ContactClass VENUE;
  /**
   * User
   */
  public static ContactClass USER;
  /**
   * Vendor
   */
  public static ContactClass VENDOR;
  private static final Map<String, ContactClass> ALL_CODES = new LinkedHashMap<String, ContactClass>();


  private static void initTypecodes0() {
    GENERAL = new ContactClass("general", 0);
    VENUE = new ContactClass("venue", 1);
    USER = new ContactClass("user", 2);
    VENDOR = new ContactClass("vendor", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ContactClass instance, or null if no such code is present in the list
   */
  public static ContactClass getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ContactClass[] values() {
    Collection<ContactClass> keys = ALL_CODES.values();
    return keys.toArray(new ContactClass[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ContactClass(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ContactClass";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactClass.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactClass.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactClass.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactClass.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactClass.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactClass.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactClass.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactClass.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactClass.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactClass.class, "Categories");
  }

  /**
   * Compares two ContactClass instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ContactClass o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
