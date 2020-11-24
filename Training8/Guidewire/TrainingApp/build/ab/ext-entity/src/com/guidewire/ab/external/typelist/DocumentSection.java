package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class DocumentSection implements TypeKey, Comparable<DocumentSection> {
  /**
   * Bills
   */
  public static DocumentSection BILLS;
  /**
   * Correspondence
   */
  public static DocumentSection CORRESPONDENCE;
  /**
   * Indemnity
   */
  public static DocumentSection INDEMNITY;
  /**
   * Legal
   */
  public static DocumentSection LEGAL;
  /**
   * Medical
   */
  public static DocumentSection MEDICAL;
  /**
   * Misc
   */
  public static DocumentSection MISC;
  /**
   * Rehab
   */
  public static DocumentSection REHAB;
  private static final Map<String, DocumentSection> ALL_CODES = new LinkedHashMap<String, DocumentSection>();


  private static void initTypecodes0() {
    BILLS = new DocumentSection("bills", 0);
    CORRESPONDENCE = new DocumentSection("correspondence", 1);
    INDEMNITY = new DocumentSection("indemnity", 2);
    LEGAL = new DocumentSection("legal", 3);
    MEDICAL = new DocumentSection("medical", 4);
    MISC = new DocumentSection("misc", 5);
    REHAB = new DocumentSection("rehab", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DocumentSection instance, or null if no such code is present in the list
   */
  public static DocumentSection getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DocumentSection[] values() {
    Collection<DocumentSection> keys = ALL_CODES.values();
    return keys.toArray(new DocumentSection[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DocumentSection(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DocumentSection";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSection.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSection.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DocumentSection.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSection.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DocumentSection.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSection.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DocumentSection.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSection.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSection.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentSection.class, "Categories");
  }

  /**
   * Compares two DocumentSection instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DocumentSection o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
