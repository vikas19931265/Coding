package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * ManagerRelationshipType
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ManagerRelationshipType implements TypeKey, Comparable<ManagerRelationshipType> {
  /**
   * Self
   */
  public static ManagerRelationshipType SELF;
  /**
   * Administrative Assistant
   */
  public static ManagerRelationshipType ADMIN_ASSIST;
  /**
   * Claims Manager
   */
  public static ManagerRelationshipType CLAIMS_MANAGER;
  /**
   * Other
   */
  public static ManagerRelationshipType OTHER;
  /**
   * Unknown
   */
  public static ManagerRelationshipType UNKNOWN;
  private static final Map<String, ManagerRelationshipType> ALL_CODES = new LinkedHashMap<String, ManagerRelationshipType>();


  private static void initTypecodes0() {
    SELF = new ManagerRelationshipType("self", 0);
    ADMIN_ASSIST = new ManagerRelationshipType("admin_assist", 1);
    CLAIMS_MANAGER = new ManagerRelationshipType("claims_manager", 2);
    OTHER = new ManagerRelationshipType("other", 3);
    UNKNOWN = new ManagerRelationshipType("unknown", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ManagerRelationshipType instance, or null if no such code is present in the list
   */
  public static ManagerRelationshipType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ManagerRelationshipType[] values() {
    Collection<ManagerRelationshipType> keys = ALL_CODES.values();
    return keys.toArray(new ManagerRelationshipType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ManagerRelationshipType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ManagerRelationshipType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ManagerRelationshipType.class, "Categories");
  }

  /**
   * Compares two ManagerRelationshipType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ManagerRelationshipType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
