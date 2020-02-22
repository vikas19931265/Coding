package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Type of the note for access-restriction purposes
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class NoteSecurityType implements TypeKey, Comparable<NoteSecurityType> {
  /**
   * Note viewable by internal users only
   */
  public static NoteSecurityType PRIVATE;
  /**
   * Note viewable by any user in the system
   */
  public static NoteSecurityType PUBLIC;
  /**
   * Confidential note, viewable by select internal users only
   */
  public static NoteSecurityType SENSITIVE;
  private static final Map<String, NoteSecurityType> ALL_CODES = new LinkedHashMap<String, NoteSecurityType>();


  private static void initTypecodes0() {
    PRIVATE = new NoteSecurityType("private", 0);
    PUBLIC = new NoteSecurityType("public", 1);
    SENSITIVE = new NoteSecurityType("sensitive", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate NoteSecurityType instance, or null if no such code is present in the list
   */
  public static NoteSecurityType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static NoteSecurityType[] values() {
    Collection<NoteSecurityType> keys = ALL_CODES.values();
    return keys.toArray(new NoteSecurityType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private NoteSecurityType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "NoteSecurityType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteSecurityType.class, "Categories");
  }

  /**
   * Compares two NoteSecurityType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(NoteSecurityType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
