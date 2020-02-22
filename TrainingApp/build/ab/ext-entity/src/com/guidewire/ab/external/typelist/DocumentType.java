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
public class DocumentType implements TypeKey, Comparable<DocumentType> {
  /**
   * Diagram
   */
  public static DocumentType DIAGRAM;
  /**
   * Email
   */
  public static DocumentType EMAIL;
  /**
   * First notice of loss (original report)
   */
  public static DocumentType FNOL;
  /**
   * Letter received
   */
  public static DocumentType LETTER_RECEIVED;
  /**
   * Letter sent
   */
  public static DocumentType LETTER_SENT;
  /**
   * Police report
   */
  public static DocumentType POLICEREPORT;
  /**
   * Repair estimate
   */
  public static DocumentType REPAIRESTIMATE;
  /**
   * Statement
   */
  public static DocumentType STATEMENT;
  private static final Map<String, DocumentType> ALL_CODES = new LinkedHashMap<String, DocumentType>();


  private static void initTypecodes0() {
    DIAGRAM = new DocumentType("diagram", 0);
    EMAIL = new DocumentType("email", 1);
    FNOL = new DocumentType("fnol", 2);
    LETTER_RECEIVED = new DocumentType("letter_received", 3);
    LETTER_SENT = new DocumentType("letter_sent", 4);
    POLICEREPORT = new DocumentType("policereport", 5);
    REPAIRESTIMATE = new DocumentType("repairestimate", 6);
    STATEMENT = new DocumentType("statement", 7);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DocumentType instance, or null if no such code is present in the list
   */
  public static DocumentType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DocumentType[] values() {
    Collection<DocumentType> keys = ALL_CODES.values();
    return keys.toArray(new DocumentType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DocumentType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DocumentType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DocumentType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DocumentType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DocumentType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DocumentType.class, "Categories");
  }

  /**
   * Compares two DocumentType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DocumentType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
