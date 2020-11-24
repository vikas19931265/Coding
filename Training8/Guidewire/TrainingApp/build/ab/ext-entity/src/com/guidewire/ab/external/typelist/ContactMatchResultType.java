package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Represents the result of definitive match search.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ContactMatchResultType implements TypeKey, Comparable<ContactMatchResultType> {
  /**
   * At least one contact in the Address Book closely matched a given contact.
   */
  public static ContactMatchResultType CLOSE_MATCH;
  /**
   * A definitive match was found, but the contact does not match in terms of potential match fields.
   */
  public static ContactMatchResultType IMPLAUSIBLE_MATCH;
  /**
   * A definitive match was found, but its type is incompatible with the type of the candidate contact. That is, the matched contact could not be cast to the type of the candidate contact.
   */
  public static ContactMatchResultType INCOMPATIBLE_TYPE;
  /**
   * No match was found.
   */
  public static ContactMatchResultType NO_MATCH;
  /**
   * A definitive match was found that matches a contact in the Address Book in terms of potential match fields.
   */
  public static ContactMatchResultType PLAUSIBLE_MATCH;
  /**
   * One or more contacts in the Address Book possibly matched a given contact.
   */
  public static ContactMatchResultType POSSIBLE_MATCH;
  private static final Map<String, ContactMatchResultType> ALL_CODES = new LinkedHashMap<String, ContactMatchResultType>();


  private static void initTypecodes0() {
    CLOSE_MATCH = new ContactMatchResultType("CLOSE_MATCH", 0);
    IMPLAUSIBLE_MATCH = new ContactMatchResultType("IMPLAUSIBLE_MATCH", 1);
    INCOMPATIBLE_TYPE = new ContactMatchResultType("INCOMPATIBLE_TYPE", 2);
    NO_MATCH = new ContactMatchResultType("NO_MATCH", 3);
    PLAUSIBLE_MATCH = new ContactMatchResultType("PLAUSIBLE_MATCH", 4);
    POSSIBLE_MATCH = new ContactMatchResultType("POSSIBLE_MATCH", 5);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ContactMatchResultType instance, or null if no such code is present in the list
   */
  public static ContactMatchResultType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ContactMatchResultType[] values() {
    Collection<ContactMatchResultType> keys = ALL_CODES.values();
    return keys.toArray(new ContactMatchResultType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ContactMatchResultType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ContactMatchResultType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactMatchResultType.class, "Categories");
  }

  /**
   * Compares two ContactMatchResultType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ContactMatchResultType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
