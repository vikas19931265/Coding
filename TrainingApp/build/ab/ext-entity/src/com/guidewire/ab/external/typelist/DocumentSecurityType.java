package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Type of the document for access-restriction purposes
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class DocumentSecurityType implements TypeKey, Comparable<DocumentSecurityType> {
  /**
   * Document which should not be viewed by people outside the company
   */
  public static DocumentSecurityType INTERNALONLY;
  /**
   * Document which is sensitive in nature
   */
  public static DocumentSecurityType SENSITIVE;
  /**
   * Document which does not require access restriction
   */
  public static DocumentSecurityType UNRESTRICTED;
  private static final Map<String, DocumentSecurityType> ALL_CODES = new LinkedHashMap<String, DocumentSecurityType>();


  private static void initTypecodes0() {
    INTERNALONLY = new DocumentSecurityType("internalonly", 0);
    SENSITIVE = new DocumentSecurityType("sensitive", 1);
    UNRESTRICTED = new DocumentSecurityType("unrestricted", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DocumentSecurityType instance, or null if no such code is present in the list
   */
  public static DocumentSecurityType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DocumentSecurityType[] values() {
    Collection<DocumentSecurityType> keys = ALL_CODES.values();
    return keys.toArray(new DocumentSecurityType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DocumentSecurityType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DocumentSecurityType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSecurityType.class, "Categories");
  }

  /**
   * Compares two DocumentSecurityType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DocumentSecurityType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
