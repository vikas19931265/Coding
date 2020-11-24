package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * LegalCaseStatus
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class LegalCaseStatus implements TypeKey, Comparable<LegalCaseStatus> {
  /**
   * In Progress
   */
  public static LegalCaseStatus IN_PROGRESS;
  /**
   * Case Dismissed (court rejected it)
   */
  public static LegalCaseStatus CASE_DISMISSED;
  /**
   * Case Dropped (plaintiff withdrew)
   */
  public static LegalCaseStatus CASE_DROPPED;
  /**
   * Guilty
   */
  public static LegalCaseStatus GUILTY;
  /**
   * Mistrial
   */
  public static LegalCaseStatus MISTRIAL;
  /**
   * Not Guilty
   */
  public static LegalCaseStatus NOT_GUILTY;
  /**
   * Settled Out of Court
   */
  public static LegalCaseStatus SETTLED;
  private static final Map<String, LegalCaseStatus> ALL_CODES = new LinkedHashMap<String, LegalCaseStatus>();


  private static void initTypecodes0() {
    IN_PROGRESS = new LegalCaseStatus("in_progress", 0);
    CASE_DISMISSED = new LegalCaseStatus("case_dismissed", 1);
    CASE_DROPPED = new LegalCaseStatus("case_dropped", 2);
    GUILTY = new LegalCaseStatus("guilty", 3);
    MISTRIAL = new LegalCaseStatus("mistrial", 4);
    NOT_GUILTY = new LegalCaseStatus("not_guilty", 5);
    SETTLED = new LegalCaseStatus("settled", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate LegalCaseStatus instance, or null if no such code is present in the list
   */
  public static LegalCaseStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static LegalCaseStatus[] values() {
    Collection<LegalCaseStatus> keys = ALL_CODES.values();
    return keys.toArray(new LegalCaseStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private LegalCaseStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "LegalCaseStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseStatus.class, "Categories");
  }

  /**
   * Compares two LegalCaseStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(LegalCaseStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
