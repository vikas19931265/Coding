package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Identifies whether entity search/fetch operations should be performed against the internal system or some remote system
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class EntitySourceType implements TypeKey, Comparable<EntitySourceType> {
  /**
   * Search/fetch should be performed against some remote system via a plugin
   */
  public static EntitySourceType EXTERNAL;
  /**
   * Search/fetch should be performed internally against the local database
   */
  public static EntitySourceType INTERNAL;
  private static final Map<String, EntitySourceType> ALL_CODES = new LinkedHashMap<String, EntitySourceType>();


  private static void initTypecodes0() {
    EXTERNAL = new EntitySourceType("external", 0);
    INTERNAL = new EntitySourceType("internal", 1);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate EntitySourceType instance, or null if no such code is present in the list
   */
  public static EntitySourceType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static EntitySourceType[] values() {
    Collection<EntitySourceType> keys = ALL_CODES.values();
    return keys.toArray(new EntitySourceType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private EntitySourceType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "EntitySourceType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.EntitySourceType.class, "Categories");
  }

  /**
   * Compares two EntitySourceType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(EntitySourceType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
