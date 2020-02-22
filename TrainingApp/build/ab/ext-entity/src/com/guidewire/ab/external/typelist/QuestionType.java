package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * A kind of question
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class QuestionType implements TypeKey, Comparable<QuestionType> {
  /**
   * A question whose answer is Yes or No
   */
  public static QuestionType BOOLEAN;
  /**
   * A multiple-choice question whose answer is an entry in the QuestionChoice table
   */
  public static QuestionType CHOICE;
  /**
   * A question whose answer is a Date
   */
  public static QuestionType DATE;
  /**
   * A question whose answer is an Integer
   */
  public static QuestionType INTEGER;
  /**
   * A question whose answer is a String
   */
  public static QuestionType STRING;
  private static final Map<String, QuestionType> ALL_CODES = new LinkedHashMap<String, QuestionType>();


  private static void initTypecodes0() {
    BOOLEAN = new QuestionType("Boolean", 0);
    CHOICE = new QuestionType("Choice", 1);
    DATE = new QuestionType("Date", 2);
    INTEGER = new QuestionType("Integer", 3);
    STRING = new QuestionType("String", 4);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate QuestionType instance, or null if no such code is present in the list
   */
  public static QuestionType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static QuestionType[] values() {
    Collection<QuestionType> keys = ALL_CODES.values();
    return keys.toArray(new QuestionType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private QuestionType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "QuestionType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.QuestionType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.QuestionType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.QuestionType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionType.class, "Categories");
  }

  /**
   * Compares two QuestionType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(QuestionType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
