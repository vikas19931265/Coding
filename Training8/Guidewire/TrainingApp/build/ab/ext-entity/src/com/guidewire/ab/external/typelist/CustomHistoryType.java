package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Custom history event types, used to add customer-defined events to a contact's history
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class CustomHistoryType implements TypeKey, Comparable<CustomHistoryType> {
  /**
   * Address Added
   */
  public static CustomHistoryType ADDRESSADDED;
  /**
   * Address Removed
   */
  public static CustomHistoryType ADDRESSREMOVED;
  /**
   * Address Updated
   */
  public static CustomHistoryType ADDRESSUPDATED;
  /**
   * Contact Created
   */
  public static CustomHistoryType CONTACTCREATED;
  /**
   * Contact Merged (Kept)
   */
  public static CustomHistoryType CONTACTMERGEDKEPT;
  /**
   * Contact Merged (Retired)
   */
  public static CustomHistoryType CONTACTMERGEDRETIRED;
  /**
   * Contact Removed
   */
  public static CustomHistoryType CONTACTREMOVED;
  /**
   * Name Updated
   */
  public static CustomHistoryType NAMEUPDATED;
  /**
   * Pending Change Rejected
   */
  public static CustomHistoryType PENDINGCHANGEREJECTED;
  /**
   * Pending Create Approved
   */
  public static CustomHistoryType PENDINGCREATEAPPROVED;
  /**
   * Phone Number Added
   */
  public static CustomHistoryType PHONEADDED;
  /**
   * Phone Number Removed
   */
  public static CustomHistoryType PHONEREMOVED;
  /**
   * Phone Number Updated
   */
  public static CustomHistoryType PHONEUPDATED;
  /**
   * Primary Address Added
   */
  public static CustomHistoryType PRIMARYADDRESSADDED;
  /**
   * Primary Address Changed from One Address to Another
   */
  public static CustomHistoryType PRIMARYADDRESSCHANGED;
  /**
   * Primary Address Removed
   */
  public static CustomHistoryType PRIMARYADDRESSREMOVED;
  /**
   * Primary Address Updated
   */
  public static CustomHistoryType PRIMARYADDRESSUPDATED;
  /**
   * Primary Phone Type Changed
   */
  public static CustomHistoryType PRIMARYPHONECHANGED;
  /**
   * Related Contact Added
   */
  public static CustomHistoryType RELATEDCONTACTADDED;
  /**
   * Related Contact Removed
   */
  public static CustomHistoryType RELATEDCONTACTREMOVED;
  /**
   * Related Contact Updated
   */
  public static CustomHistoryType RELATEDCONTACTUPDATED;
  /**
   * Claim exception: Fault rating no set on auto claim
   */
  public static CustomHistoryType A_N_F_R;
  /**
   * Data change
   */
  public static CustomHistoryType DATACHANGE;
  /**
   * Integration: New claim exported to mainframe
   */
  public static CustomHistoryType EXPORT;
  /**
   * Claim exception: No reserve set for exposure
   */
  public static CustomHistoryType E_W_N_R;
  private static final Map<String, CustomHistoryType> ALL_CODES = new LinkedHashMap<String, CustomHistoryType>();


  private static void initTypecodes0() {
    ADDRESSADDED = new CustomHistoryType("addressadded", 0);
    ADDRESSREMOVED = new CustomHistoryType("addressremoved", 1);
    ADDRESSUPDATED = new CustomHistoryType("addressupdated", 2);
    CONTACTCREATED = new CustomHistoryType("contactcreated", 3);
    CONTACTMERGEDKEPT = new CustomHistoryType("contactmergedkept", 4);
    CONTACTMERGEDRETIRED = new CustomHistoryType("contactmergedretired", 5);
    CONTACTREMOVED = new CustomHistoryType("contactremoved", 6);
    NAMEUPDATED = new CustomHistoryType("nameupdated", 7);
    PENDINGCHANGEREJECTED = new CustomHistoryType("pendingchangerejected", 8);
    PENDINGCREATEAPPROVED = new CustomHistoryType("pendingcreateapproved", 9);
    PHONEADDED = new CustomHistoryType("phoneadded", 10);
    PHONEREMOVED = new CustomHistoryType("phoneremoved", 11);
    PHONEUPDATED = new CustomHistoryType("phoneupdated", 12);
    PRIMARYADDRESSADDED = new CustomHistoryType("primaryaddressadded", 13);
    PRIMARYADDRESSCHANGED = new CustomHistoryType("primaryaddresschanged", 14);
    PRIMARYADDRESSREMOVED = new CustomHistoryType("primaryaddressremoved", 15);
    PRIMARYADDRESSUPDATED = new CustomHistoryType("primaryaddressupdated", 16);
    PRIMARYPHONECHANGED = new CustomHistoryType("primaryphonechanged", 17);
    RELATEDCONTACTADDED = new CustomHistoryType("relatedcontactadded", 18);
    RELATEDCONTACTREMOVED = new CustomHistoryType("relatedcontactremoved", 19);
    RELATEDCONTACTUPDATED = new CustomHistoryType("relatedcontactupdated", 20);
    A_N_F_R = new CustomHistoryType("a_n_f_r", 21);
    DATACHANGE = new CustomHistoryType("DataChange", 22);
    EXPORT = new CustomHistoryType("Export", 23);
    E_W_N_R = new CustomHistoryType("e_w_n_r", 24);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate CustomHistoryType instance, or null if no such code is present in the list
   */
  public static CustomHistoryType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static CustomHistoryType[] values() {
    Collection<CustomHistoryType> keys = ALL_CODES.values();
    return keys.toArray(new CustomHistoryType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private CustomHistoryType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "CustomHistoryType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.CustomHistoryType.class, "Categories");
  }

  /**
   * Compares two CustomHistoryType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(CustomHistoryType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
