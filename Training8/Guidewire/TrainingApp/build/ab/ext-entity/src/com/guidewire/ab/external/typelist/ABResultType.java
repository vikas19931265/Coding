package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * @deprecated (since 8.0.0) Not used by ContactManager.  Describes different types of results that can occur as part of an Address Book link or save.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ABResultType implements TypeKey, Comparable<ABResultType> {
  /**
   * An exception was thrown by the Address Book
   */
  public static ABResultType FAILED_SE;
  /**
   * The link failed because no definitive match was found. No potential matches were found either.
   */
  public static ABResultType FAILED_NME;
  /**
   * The link failed because no definitive match was found, but potential matches exist.
   */
  public static ABResultType FAILED_PME;
  /**
   * Indicates a successful link with the Address Book.
   */
  public static ABResultType SUCCESS;
  /**
   * The link failed because there were multiple definitive matches that were all different.
   */
  public static ABResultType FAILED_MDDM;
  /**
   * The save failed because the contact is not in sync with the Address Book.
   */
  public static ABResultType FAILED_NIS;
  /**
   * The save failed because no Address Book entry with the given public ID was found.
   */
  public static ABResultType FAILED_PINF;
  /**
   * The save failed because the contact has unlinked related contacts.
   */
  public static ABResultType FAILED_URC;
  /**
   * The save failed becuase there were validation errors.
   */
  public static ABResultType FAILED_VE;
  /**
   * Indicates a successful link with the Address Book. However, the definitive match was different.
   */
  public static ABResultType SUCCESS_DMD;
  private static final Map<String, ABResultType> ALL_CODES = new LinkedHashMap<String, ABResultType>();


  private static void initTypecodes0() {
    FAILED_SE = new ABResultType("failed_se", 0);
    FAILED_NME = new ABResultType("failed_nme", 1);
    FAILED_PME = new ABResultType("failed_pme", 2);
    SUCCESS = new ABResultType("success", 3);
    FAILED_MDDM = new ABResultType("failed_mddm", 4);
    FAILED_NIS = new ABResultType("failed_nis", 5);
    FAILED_PINF = new ABResultType("failed_pinf", 6);
    FAILED_URC = new ABResultType("failed_urc", 7);
    FAILED_VE = new ABResultType("failed_ve", 8);
    SUCCESS_DMD = new ABResultType("success_dmd", 9);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ABResultType instance, or null if no such code is present in the list
   */
  public static ABResultType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ABResultType[] values() {
    Collection<ABResultType> keys = ALL_CODES.values();
    return keys.toArray(new ABResultType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ABResultType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ABResultType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABResultType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABResultType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ABResultType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABResultType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ABResultType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABResultType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ABResultType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABResultType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABResultType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ABResultType.class, "Categories");
  }

  /**
   * Compares two ABResultType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ABResultType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
