package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Type of process running update statistics
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class TableUpdateStatsType implements TypeKey, Comparable<TableUpdateStatsType> {
  /**
   * Histogram Update Statistics Statements
   */
  public static TableUpdateStatsType HISTOGRAM;
  /**
   * Index Update Statistics Statements
   */
  public static TableUpdateStatsType INDEX;
  /**
   * Table Update Statistics Statements
   */
  public static TableUpdateStatsType TABLE;
  private static final Map<String, TableUpdateStatsType> ALL_CODES = new LinkedHashMap<String, TableUpdateStatsType>();


  private static void initTypecodes0() {
    HISTOGRAM = new TableUpdateStatsType("Histogram", 0);
    INDEX = new TableUpdateStatsType("Index", 1);
    TABLE = new TableUpdateStatsType("Table", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate TableUpdateStatsType instance, or null if no such code is present in the list
   */
  public static TableUpdateStatsType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static TableUpdateStatsType[] values() {
    Collection<TableUpdateStatsType> keys = ALL_CODES.values();
    return keys.toArray(new TableUpdateStatsType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private TableUpdateStatsType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "TableUpdateStatsType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.TableUpdateStatsType.class, "Categories");
  }

  /**
   * Compares two TableUpdateStatsType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(TableUpdateStatsType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
