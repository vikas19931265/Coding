package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of LoaderCallback execution times
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class LoaderCallbackTimeType implements TypeKey, Comparable<LoaderCallbackTimeType> {
  /**
   * Before ID generation
   */
  public static LoaderCallbackTimeType BEFOREIDGENERATION;
  /**
   * Before insert/selects into source tables
   */
  public static LoaderCallbackTimeType BEFOREINSERTSELECTS;
  /**
   * After insert/selects into source tables
   */
  public static LoaderCallbackTimeType AFTERINSERTSELECTS;
  private static final Map<String, LoaderCallbackTimeType> ALL_CODES = new LinkedHashMap<String, LoaderCallbackTimeType>();


  private static void initTypecodes0() {
    BEFOREIDGENERATION = new LoaderCallbackTimeType("beforeidgeneration", 0);
    BEFOREINSERTSELECTS = new LoaderCallbackTimeType("beforeinsertselects", 1);
    AFTERINSERTSELECTS = new LoaderCallbackTimeType("afterinsertselects", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate LoaderCallbackTimeType instance, or null if no such code is present in the list
   */
  public static LoaderCallbackTimeType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static LoaderCallbackTimeType[] values() {
    Collection<LoaderCallbackTimeType> keys = ALL_CODES.values();
    return keys.toArray(new LoaderCallbackTimeType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private LoaderCallbackTimeType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "LoaderCallbackTimeType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoaderCallbackTimeType.class, "Categories");
  }

  /**
   * Compares two LoaderCallbackTimeType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(LoaderCallbackTimeType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
