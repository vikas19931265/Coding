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
public class ContactChangeResolution implements TypeKey, Comparable<ContactChangeResolution> {
  /**
   * Already Applied
   */
  public static ContactChangeResolution ALREADY_APPLIED;
  /**
   * Approved
   */
  public static ContactChangeResolution APPROVED;
  /**
   * More Information Required
   */
  public static ContactChangeResolution MORE_INFO_REQ;
  /**
   * Rejected
   */
  public static ContactChangeResolution REJECTED;
  private static final Map<String, ContactChangeResolution> ALL_CODES = new LinkedHashMap<String, ContactChangeResolution>();


  private static void initTypecodes0() {
    ALREADY_APPLIED = new ContactChangeResolution("already_applied", 0);
    APPROVED = new ContactChangeResolution("approved", 1);
    MORE_INFO_REQ = new ContactChangeResolution("more_info_req", 2);
    REJECTED = new ContactChangeResolution("rejected", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ContactChangeResolution instance, or null if no such code is present in the list
   */
  public static ContactChangeResolution getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ContactChangeResolution[] values() {
    Collection<ContactChangeResolution> keys = ALL_CODES.values();
    return keys.toArray(new ContactChangeResolution[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ContactChangeResolution(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ContactChangeResolution";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactChangeResolution.class, "Categories");
  }

  /**
   * Compares two ContactChangeResolution instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ContactChangeResolution o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
