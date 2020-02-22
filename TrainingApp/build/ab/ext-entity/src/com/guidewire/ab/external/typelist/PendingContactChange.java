package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Subtype typelist for entity PendingContactChange
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class PendingContactChange implements TypeKey, Comparable<PendingContactChange> {
  /**
   * PendingContactUpdate
   */
  public static PendingContactChange PENDINGCONTACTUPDATE;
  /**
   * PendingContactCreate
   */
  public static PendingContactChange PENDINGCONTACTCREATE;
  /**
   * PendingContactChange
   */
  public static PendingContactChange PENDINGCONTACTCHANGE;
  private static final Map<String, PendingContactChange> ALL_CODES = new LinkedHashMap<String, PendingContactChange>();


  private static void initTypecodes0() {
    PENDINGCONTACTUPDATE = new PendingContactChange("PendingContactUpdate", 0);
    PENDINGCONTACTCREATE = new PendingContactChange("PendingContactCreate", 1);
    PENDINGCONTACTCHANGE = new PendingContactChange("PendingContactChange", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate PendingContactChange instance, or null if no such code is present in the list
   */
  public static PendingContactChange getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static PendingContactChange[] values() {
    Collection<PendingContactChange> keys = ALL_CODES.values();
    return keys.toArray(new PendingContactChange[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private PendingContactChange(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "PendingContactChange";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChange.class, "Categories");
  }

  /**
   * Compares two PendingContactChange instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(PendingContactChange o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
