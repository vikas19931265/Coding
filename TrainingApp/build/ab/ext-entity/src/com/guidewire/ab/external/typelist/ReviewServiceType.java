package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Service types list for Service Provider Management Reviews; generally, this will be extended by customers
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ReviewServiceType implements TypeKey, Comparable<ReviewServiceType> {
  /**
   * Body
   */
  public static ReviewServiceType BODY;
  /**
   * Brakes
   */
  public static ReviewServiceType BRAKES;
  /**
   * Indicates that no more specific service type is applicable.
   */
  public static ReviewServiceType OTHER;
  /**
   * Paint
   */
  public static ReviewServiceType PAINT;
  /**
   * Suspension
   */
  public static ReviewServiceType SUSPENSION;
  /**
   * Transmission and Engine
   */
  public static ReviewServiceType DRIVETRAIN;
  private static final Map<String, ReviewServiceType> ALL_CODES = new LinkedHashMap<String, ReviewServiceType>();


  private static void initTypecodes0() {
    BODY = new ReviewServiceType("body", 0);
    BRAKES = new ReviewServiceType("brakes", 1);
    OTHER = new ReviewServiceType("other", 2);
    PAINT = new ReviewServiceType("paint", 3);
    SUSPENSION = new ReviewServiceType("suspension", 4);
    DRIVETRAIN = new ReviewServiceType("drivetrain", 5);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ReviewServiceType instance, or null if no such code is present in the list
   */
  public static ReviewServiceType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ReviewServiceType[] values() {
    Collection<ReviewServiceType> keys = ALL_CODES.values();
    return keys.toArray(new ReviewServiceType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ReviewServiceType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ReviewServiceType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ReviewServiceType.class, "Categories");
  }

  /**
   * Compares two ReviewServiceType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ReviewServiceType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
