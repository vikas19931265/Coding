package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * LegalCaseType
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class LegalCaseType implements TypeKey, Comparable<LegalCaseType> {
  /**
   * Fraud
   */
  public static LegalCaseType FRAUD;
  /**
   * Malpractice
   */
  public static LegalCaseType MALPRACTICE;
  /**
   * Negligence
   */
  public static LegalCaseType NEGLIGENCE;
  /**
   * Wrongful Death
   */
  public static LegalCaseType WRONGFUL_DEATH;
  private static final Map<String, LegalCaseType> ALL_CODES = new LinkedHashMap<String, LegalCaseType>();


  private static void initTypecodes0() {
    FRAUD = new LegalCaseType("fraud", 0);
    MALPRACTICE = new LegalCaseType("malpractice", 1);
    NEGLIGENCE = new LegalCaseType("negligence", 2);
    WRONGFUL_DEATH = new LegalCaseType("wrongful_death", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate LegalCaseType instance, or null if no such code is present in the list
   */
  public static LegalCaseType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static LegalCaseType[] values() {
    Collection<LegalCaseType> keys = ALL_CODES.values();
    return keys.toArray(new LegalCaseType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private LegalCaseType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "LegalCaseType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LegalCaseType.class, "Categories");
  }

  /**
   * Compares two LegalCaseType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(LegalCaseType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
