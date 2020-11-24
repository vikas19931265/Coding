package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Category for Service Provider Management Review questions and categories; generally, this will be extended by customers
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ReviewCategory implements TypeKey, Comparable<ReviewCategory> {
  /**
   * Accuracy of Quote
   */
  public static ReviewCategory ACCURACY;
  /**
   * Section for adjusters to add comments
   */
  public static ReviewCategory ADJUSTER;
  /**
   * Communication
   */
  public static ReviewCategory COMMUNICATION;
  /**
   * A default category for general questions.
   */
  public static ReviewCategory GENERAL;
  /**
   * Office Personnel.
   */
  public static ReviewCategory OFFICESTAFF;
  /**
   * Quality of Work
   */
  public static ReviewCategory QUALITY;
  /**
   * Technicians
   */
  public static ReviewCategory TECHNICIANS;
  /**
   * Timeliness
   */
  public static ReviewCategory TIMELINESS;
  private static final Map<String, ReviewCategory> ALL_CODES = new LinkedHashMap<String, ReviewCategory>();


  private static void initTypecodes0() {
    ACCURACY = new ReviewCategory("accuracy", 0);
    ADJUSTER = new ReviewCategory("adjuster", 1);
    COMMUNICATION = new ReviewCategory("communication", 2);
    GENERAL = new ReviewCategory("general", 3);
    OFFICESTAFF = new ReviewCategory("officestaff", 4);
    QUALITY = new ReviewCategory("quality", 5);
    TECHNICIANS = new ReviewCategory("technicians", 6);
    TIMELINESS = new ReviewCategory("timeliness", 7);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ReviewCategory instance, or null if no such code is present in the list
   */
  public static ReviewCategory getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ReviewCategory[] values() {
    Collection<ReviewCategory> keys = ALL_CODES.values();
    return keys.toArray(new ReviewCategory[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ReviewCategory(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ReviewCategory";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewCategory.class, "Categories");
  }

  /**
   * Compares two ReviewCategory instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ReviewCategory o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
