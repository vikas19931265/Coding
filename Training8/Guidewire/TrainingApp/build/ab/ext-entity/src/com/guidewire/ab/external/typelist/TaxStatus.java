package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The status of a vendor's tax ID
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class TaxStatus implements TypeKey, Comparable<TaxStatus> {
  /**
   * Known and verified
   */
  public static TaxStatus CONFIRMED;
  /**
   * Known, but not yet verified
   */
  public static TaxStatus UNCONFIRMED;
  /**
   * Unknown
   */
  public static TaxStatus UNKNOWN;
  private static final Map<String, TaxStatus> ALL_CODES = new LinkedHashMap<String, TaxStatus>();


  private static void initTypecodes0() {
    CONFIRMED = new TaxStatus("confirmed", 0);
    UNCONFIRMED = new TaxStatus("unconfirmed", 1);
    UNKNOWN = new TaxStatus("unknown", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate TaxStatus instance, or null if no such code is present in the list
   */
  public static TaxStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static TaxStatus[] values() {
    Collection<TaxStatus> keys = ALL_CODES.values();
    return keys.toArray(new TaxStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private TaxStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "TaxStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TaxStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TaxStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TaxStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TaxStatus.class, "Categories");
  }

  /**
   * Compares two TaxStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(TaxStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
