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
public class ContactSearchResultType implements TypeKey, Comparable<ContactSearchResultType> {
  /**
   * Address book search succeeded
   */
  public static ContactSearchResultType SUCCESS;
  /**
   * Search criteria is too loose and executing may require too much of the DB resources. Search not executed.
   */
  public static ContactSearchResultType TOO_LOOSE_SEARCH;
  private static final Map<String, ContactSearchResultType> ALL_CODES = new LinkedHashMap<String, ContactSearchResultType>();


  private static void initTypecodes0() {
    SUCCESS = new ContactSearchResultType("SUCCESS", 0);
    TOO_LOOSE_SEARCH = new ContactSearchResultType("TOO_LOOSE_SEARCH", 1);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ContactSearchResultType instance, or null if no such code is present in the list
   */
  public static ContactSearchResultType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ContactSearchResultType[] values() {
    Collection<ContactSearchResultType> keys = ALL_CODES.values();
    return keys.toArray(new ContactSearchResultType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ContactSearchResultType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ContactSearchResultType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactSearchResultType.class, "Categories");
  }

  /**
   * Compares two ContactSearchResultType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ContactSearchResultType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
