package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * VendorEvaluationStatus
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class VendorEvaluationStatus implements TypeKey, Comparable<VendorEvaluationStatus> {
  /**
   * Unverified
   */
  public static VendorEvaluationStatus UNVERIFIED;
  /**
   * Pending
   */
  public static VendorEvaluationStatus PENDING;
  /**
   * Verified
   */
  public static VendorEvaluationStatus VERIFIED;
  /**
   * Unknown
   */
  public static VendorEvaluationStatus UNKNOWN;
  private static final Map<String, VendorEvaluationStatus> ALL_CODES = new LinkedHashMap<String, VendorEvaluationStatus>();


  private static void initTypecodes0() {
    UNVERIFIED = new VendorEvaluationStatus("unverified", 0);
    PENDING = new VendorEvaluationStatus("pending", 1);
    VERIFIED = new VendorEvaluationStatus("verified", 2);
    UNKNOWN = new VendorEvaluationStatus("unknown", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate VendorEvaluationStatus instance, or null if no such code is present in the list
   */
  public static VendorEvaluationStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static VendorEvaluationStatus[] values() {
    Collection<VendorEvaluationStatus> keys = ALL_CODES.values();
    return keys.toArray(new VendorEvaluationStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private VendorEvaluationStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "VendorEvaluationStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.VendorEvaluationStatus.class, "Categories");
  }

  /**
   * Compares two VendorEvaluationStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(VendorEvaluationStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
