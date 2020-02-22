package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Subtype typelist for entity ValidationIssue
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ValidationIssue implements TypeKey, Comparable<ValidationIssue> {
  /**
   * FieldValidation
   */
  public static ValidationIssue FIELDVALIDATION;
  /**
   * GeneralValidation
   */
  public static ValidationIssue GENERALVALIDATION;
  /**
   * ValidationIssue
   */
  public static ValidationIssue VALIDATIONISSUE;
  private static final Map<String, ValidationIssue> ALL_CODES = new LinkedHashMap<String, ValidationIssue>();


  private static void initTypecodes0() {
    FIELDVALIDATION = new ValidationIssue("FieldValidation", 0);
    GENERALVALIDATION = new ValidationIssue("GeneralValidation", 1);
    VALIDATIONISSUE = new ValidationIssue("ValidationIssue", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ValidationIssue instance, or null if no such code is present in the list
   */
  public static ValidationIssue getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ValidationIssue[] values() {
    Collection<ValidationIssue> keys = ALL_CODES.values();
    return keys.toArray(new ValidationIssue[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ValidationIssue(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ValidationIssue";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ValidationIssue.class, "Categories");
  }

  /**
   * Compares two ValidationIssue instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ValidationIssue o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
