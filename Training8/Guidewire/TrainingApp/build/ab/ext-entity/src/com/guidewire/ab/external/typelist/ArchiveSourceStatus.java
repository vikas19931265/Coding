package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The status of the archive source
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ArchiveSourceStatus implements TypeKey, Comparable<ArchiveSourceStatus> {
  /**
   * The service is available
   */
  public static ArchiveSourceStatus AVAILABLE;
  /**
   * The last attempt to archive failed
   */
  public static ArchiveSourceStatus FAILURE;
  /**
   * The service was manually flaged unavailable
   */
  public static ArchiveSourceStatus MANUALLY;
  /**
   * The service has not been configured
   */
  public static ArchiveSourceStatus NOTCONFIG;
  /**
   * archiving has not been enabled
   */
  public static ArchiveSourceStatus NOTENABLED;
  /**
   * archiving has not been started yet
   */
  public static ArchiveSourceStatus NOTSTARTED;
  /**
   * The service is not available but allow queuing of user request
   */
  public static ArchiveSourceStatus QUEUE;
  private static final Map<String, ArchiveSourceStatus> ALL_CODES = new LinkedHashMap<String, ArchiveSourceStatus>();


  private static void initTypecodes0() {
    AVAILABLE = new ArchiveSourceStatus("available", 0);
    FAILURE = new ArchiveSourceStatus("failure", 1);
    MANUALLY = new ArchiveSourceStatus("manually", 2);
    NOTCONFIG = new ArchiveSourceStatus("notconfig", 3);
    NOTENABLED = new ArchiveSourceStatus("notenabled", 4);
    NOTSTARTED = new ArchiveSourceStatus("notstarted", 5);
    QUEUE = new ArchiveSourceStatus("queue", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ArchiveSourceStatus instance, or null if no such code is present in the list
   */
  public static ArchiveSourceStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ArchiveSourceStatus[] values() {
    Collection<ArchiveSourceStatus> keys = ALL_CODES.values();
    return keys.toArray(new ArchiveSourceStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ArchiveSourceStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ArchiveSourceStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ArchiveSourceStatus.class, "Categories");
  }

  /**
   * Compares two ArchiveSourceStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ArchiveSourceStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
