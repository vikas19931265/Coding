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
public class NoteTopicType implements TypeKey, Comparable<NoteTopicType> {
  /**
   * General
   */
  public static NoteTopicType GENERAL;
  /**
   * First notice of loss
   */
  public static NoteTopicType FNOL;
  /**
   * Coverage
   */
  public static NoteTopicType COVERAGE;
  /**
   * Investigation
   */
  public static NoteTopicType INVESTIGATION;
  /**
   * Medical issues
   */
  public static NoteTopicType MEDICAL;
  /**
   * Evaluation
   */
  public static NoteTopicType EVALUATION;
  /**
   * Settlement
   */
  public static NoteTopicType SETTLEMENT;
  /**
   * Subrogation
   */
  public static NoteTopicType SUBROGATION;
  /**
   * Salvage
   */
  public static NoteTopicType SALVAGE;
  /**
   * Litigation
   */
  public static NoteTopicType LITIGATION;
  private static final Map<String, NoteTopicType> ALL_CODES = new LinkedHashMap<String, NoteTopicType>();


  private static void initTypecodes0() {
    GENERAL = new NoteTopicType("general", 0);
    FNOL = new NoteTopicType("fnol", 1);
    COVERAGE = new NoteTopicType("coverage", 2);
    INVESTIGATION = new NoteTopicType("investigation", 3);
    MEDICAL = new NoteTopicType("medical", 4);
    EVALUATION = new NoteTopicType("evaluation", 5);
    SETTLEMENT = new NoteTopicType("settlement", 6);
    SUBROGATION = new NoteTopicType("subrogation", 7);
    SALVAGE = new NoteTopicType("salvage", 8);
    LITIGATION = new NoteTopicType("litigation", 9);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate NoteTopicType instance, or null if no such code is present in the list
   */
  public static NoteTopicType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static NoteTopicType[] values() {
    Collection<NoteTopicType> keys = ALL_CODES.values();
    return keys.toArray(new NoteTopicType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private NoteTopicType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "NoteTopicType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.NoteTopicType.class, "Categories");
  }

  /**
   * Compares two NoteTopicType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(NoteTopicType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
