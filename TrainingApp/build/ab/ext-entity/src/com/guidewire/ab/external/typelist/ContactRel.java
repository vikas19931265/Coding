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
public class ContactRel implements TypeKey, Comparable<ContactRel> {
  /**
   * Collection Agency
   */
  public static ContactRel COLLECTIONAGENCY;
  /**
   * Employer
   */
  public static ContactRel EMPLOYER;
  /**
   * Parent of a child or Guardian of a ward.
   */
  public static ContactRel GUARDIAN;
  /**
   * Primary contact
   */
  public static ContactRel PRIMARYCONTACT;
  /**
   * Third-Party Insurer
   */
  public static ContactRel THIRDPARTYINSURER;
  private static final Map<String, ContactRel> ALL_CODES = new LinkedHashMap<String, ContactRel>();


  private static void initTypecodes0() {
    COLLECTIONAGENCY = new ContactRel("collectionagency", 0);
    EMPLOYER = new ContactRel("employer", 1);
    GUARDIAN = new ContactRel("guardian", 2);
    PRIMARYCONTACT = new ContactRel("primarycontact", 3);
    THIRDPARTYINSURER = new ContactRel("thirdpartyinsurer", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ContactRel instance, or null if no such code is present in the list
   */
  public static ContactRel getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ContactRel[] values() {
    Collection<ContactRel> keys = ALL_CODES.values();
    return keys.toArray(new ContactRel[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ContactRel(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ContactRel";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactRel.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactRel.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactRel.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactRel.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactRel.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactRel.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactRel.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactRel.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactRel.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactRel.class, "Categories");
  }

  /**
   * Compares two ContactRel instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ContactRel o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
