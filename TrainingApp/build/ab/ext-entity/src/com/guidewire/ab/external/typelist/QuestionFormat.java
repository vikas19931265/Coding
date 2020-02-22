package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * How the question should be rendered in PCF
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class QuestionFormat implements TypeKey, Comparable<QuestionFormat> {
  /**
   * A boolean yes/no checkbox.  Default for Boolean questions.
   */
  public static QuestionFormat BOOLEANCHECKBOX;
  /**
   * A radio button of choices. An option for Choice questions with 2-3 choices
   */
  public static QuestionFormat CHOICERADIO;
  /**
   * A combo box of choices.  Default for Choice questions.
   */
  public static QuestionFormat CHOICESELECT;
  /**
   * A Date picker.  Default for Date questions.
   */
  public static QuestionFormat DATEFIELD;
  /**
   * A simple integer field.  Default for Integer questions.
   */
  public static QuestionFormat INTEGERFIELD;
  /**
   * A simple 1-line text field.  Default for String questions.
   */
  public static QuestionFormat STRINGFIELD;
  private static final Map<String, QuestionFormat> ALL_CODES = new LinkedHashMap<String, QuestionFormat>();


  private static void initTypecodes0() {
    BOOLEANCHECKBOX = new QuestionFormat("BooleanCheckbox", 0);
    CHOICERADIO = new QuestionFormat("ChoiceRadio", 1);
    CHOICESELECT = new QuestionFormat("ChoiceSelect", 2);
    DATEFIELD = new QuestionFormat("DateField", 3);
    INTEGERFIELD = new QuestionFormat("IntegerField", 4);
    STRINGFIELD = new QuestionFormat("StringField", 5);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate QuestionFormat instance, or null if no such code is present in the list
   */
  public static QuestionFormat getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static QuestionFormat[] values() {
    Collection<QuestionFormat> keys = ALL_CODES.values();
    return keys.toArray(new QuestionFormat[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private QuestionFormat(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "QuestionFormat";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.QuestionFormat.class, "Categories");
  }

  /**
   * Compares two QuestionFormat instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(QuestionFormat o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
