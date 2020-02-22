package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The search options for the date searches in search
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class DateFieldsToSearchType implements TypeKey, Comparable<DateFieldsToSearchType> {
  /**
   * Find by Effective Date
   */
  public static DateFieldsToSearchType EFFECTIVEDATE;
  /**
   * Find by Expiration Date
   */
  public static DateFieldsToSearchType EXPIRATIONDATE;
  /**
   * Find by Submission Date
   */
  public static DateFieldsToSearchType SUBMISSIONDATE;
  private static final Map<String, DateFieldsToSearchType> ALL_CODES = new LinkedHashMap<String, DateFieldsToSearchType>();


  private static void initTypecodes0() {
    EFFECTIVEDATE = new DateFieldsToSearchType("EffectiveDate", 0);
    EXPIRATIONDATE = new DateFieldsToSearchType("ExpirationDate", 1);
    SUBMISSIONDATE = new DateFieldsToSearchType("SubmissionDate", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate DateFieldsToSearchType instance, or null if no such code is present in the list
   */
  public static DateFieldsToSearchType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static DateFieldsToSearchType[] values() {
    Collection<DateFieldsToSearchType> keys = ALL_CODES.values();
    return keys.toArray(new DateFieldsToSearchType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private DateFieldsToSearchType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "DateFieldsToSearchType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.DateFieldsToSearchType.class, "Categories");
  }

  /**
   * Compares two DateFieldsToSearchType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(DateFieldsToSearchType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
