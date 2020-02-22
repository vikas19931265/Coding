package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of load step events
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class LoadStepType implements TypeKey, Comparable<LoadStepType> {
  /**
   * Custom consistency checks executed after populating staging tables
   */
  public static LoadStepType CONSISTENCYCHECKED;
  /**
   * DB statistics updated with estimates for source tables
   */
  public static LoadStepType ESTIMATEDBSTATISTICS;
  /**
   * Error table cleared
   */
  public static LoadStepType ERRORCLEARED;
  /**
   * Excluded rows deleted from staging tables
   */
  public static LoadStepType EXCLUDEDDELETED;
  /**
   * Exclusion table cleared
   */
  public static LoadStepType EXCLUSIONCLEARED;
  /**
   * Exclusion table populated with failed rows from error table
   */
  public static LoadStepType EXCLUSIONPOP;
  /**
   * IDs generated for staging tables
   */
  public static LoadStepType IDSGENERATED;
  /**
   * INSERT SELECTs from staging to source tables executed
   */
  public static LoadStepType INSERTSELECTS;
  /**
   * Integrity check queries checks executed
   */
  public static LoadStepType INTEGRITYEXECUTED;
  /**
   * Integrity of staging tables checked (Entire phase)
   */
  public static LoadStepType INTEGRITYCHECKED;
  /**
   * LoaderCallbacks executed after insert/selects into source tables
   */
  public static LoadStepType LCAFTERINSERTSELECT;
  /**
   * LoaderCallbacks executed before insert/selects into source tables
   */
  public static LoadStepType LCBEFOREINSERTSELECT;
  /**
   * LoaderCallbacks executed before id generation
   */
  public static LoadStepType LCBEFOREIDGENERATION;
  /**
   * Non-excluded rows deleted from staging tables
   */
  public static LoadStepType NONEXCLUDEDDELETED;
  /**
   * Overwritten staging tables and columns cleared
   */
  public static LoadStepType OVERWRITTENCLEARED;
  /**
   * PostPopulatorExecutors executed after populating staging tables
   */
  public static LoadStepType PPESEXECUTED;
  /**
   * Row numbers generated for staging tables
   */
  public static LoadStepType ROWNUMSGENERATED;
  /**
   * Source tables loaded from staging tables (Entire phase)
   */
  public static LoadStepType SOURCELOADED;
  /**
   * Staging tables cleared
   */
  public static LoadStepType STAGINGCLEARED;
  private static final Map<String, LoadStepType> ALL_CODES = new LinkedHashMap<String, LoadStepType>();


  private static void initTypecodes0() {
    CONSISTENCYCHECKED = new LoadStepType("consistencychecked", 0);
    ESTIMATEDBSTATISTICS = new LoadStepType("estimatedbstatistics", 1);
    ERRORCLEARED = new LoadStepType("errorcleared", 2);
    EXCLUDEDDELETED = new LoadStepType("excludeddeleted", 3);
    EXCLUSIONCLEARED = new LoadStepType("exclusioncleared", 4);
    EXCLUSIONPOP = new LoadStepType("exclusionpop", 5);
    IDSGENERATED = new LoadStepType("idsgenerated", 6);
    INSERTSELECTS = new LoadStepType("insertselects", 7);
    INTEGRITYEXECUTED = new LoadStepType("integrityexecuted", 8);
    INTEGRITYCHECKED = new LoadStepType("integritychecked", 9);
    LCAFTERINSERTSELECT = new LoadStepType("lcafterinsertselect", 10);
    LCBEFOREINSERTSELECT = new LoadStepType("lcbeforeinsertselect", 11);
    LCBEFOREIDGENERATION = new LoadStepType("lcbeforeidgeneration", 12);
    NONEXCLUDEDDELETED = new LoadStepType("nonexcludeddeleted", 13);
    OVERWRITTENCLEARED = new LoadStepType("overwrittencleared", 14);
    PPESEXECUTED = new LoadStepType("ppesexecuted", 15);
    ROWNUMSGENERATED = new LoadStepType("rownumsgenerated", 16);
    SOURCELOADED = new LoadStepType("sourceloaded", 17);
    STAGINGCLEARED = new LoadStepType("stagingcleared", 18);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate LoadStepType instance, or null if no such code is present in the list
   */
  public static LoadStepType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static LoadStepType[] values() {
    Collection<LoadStepType> keys = ALL_CODES.values();
    return keys.toArray(new LoadStepType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private LoadStepType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "LoadStepType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadStepType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadStepType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoadStepType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadStepType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoadStepType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadStepType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoadStepType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadStepType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadStepType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadStepType.class, "Categories");
  }

  /**
   * Compares two LoadStepType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(LoadStepType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
