package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Represents the link status of a Contact with its associated Address Book Contact.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ContactLinkStatusType implements TypeKey, Comparable<ContactLinkStatusType> {
  /**
   * The Contact is in sync with the associated Address Book Contact.
   */
  public static ContactLinkStatusType IN_SYNC;
  /**
   * No associated Address Book Contact found.
   */
  public static ContactLinkStatusType NOT_FOUND;
  /**
   * The Contact is out of sync with the associated Address Book Contact.
   */
  public static ContactLinkStatusType OUT_OF_SYNC;
  private static final Map<String, ContactLinkStatusType> ALL_CODES = new LinkedHashMap<String, ContactLinkStatusType>();


  private static void initTypecodes0() {
    IN_SYNC = new ContactLinkStatusType("IN_SYNC", 0);
    NOT_FOUND = new ContactLinkStatusType("NOT_FOUND", 1);
    OUT_OF_SYNC = new ContactLinkStatusType("OUT_OF_SYNC", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ContactLinkStatusType instance, or null if no such code is present in the list
   */
  public static ContactLinkStatusType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ContactLinkStatusType[] values() {
    Collection<ContactLinkStatusType> keys = ALL_CODES.values();
    return keys.toArray(new ContactLinkStatusType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ContactLinkStatusType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ContactLinkStatusType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactLinkStatusType.class, "Categories");
  }

  /**
   * Compares two ContactLinkStatusType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ContactLinkStatusType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
