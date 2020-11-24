package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Sample color type list
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class SampleColor implements TypeKey, Comparable<SampleColor> {
  /**
   * Black
   */
  public static SampleColor _000000;
  /**
   * Dodger Blue
   */
  public static SampleColor _1589FF;
  /**
   * Green
   */
  public static SampleColor _00FF00;
  /**
   * Magenta
   */
  public static SampleColor FF00FF;
  /**
   * Orange
   */
  public static SampleColor FF8040;
  /**
   * Red
   */
  public static SampleColor FF0000;
  /**
   * White (retired)
   */
  public static SampleColor FFFFFF;
  private static final Map<String, SampleColor> ALL_CODES = new LinkedHashMap<String, SampleColor>();


  private static void initTypecodes0() {
    _000000 = new SampleColor("000000", 0);
    _1589FF = new SampleColor("1589ff", 1);
    _00FF00 = new SampleColor("00ff00", 2);
    FF00FF = new SampleColor("ff00ff", 3);
    FF8040 = new SampleColor("ff8040", 4);
    FF0000 = new SampleColor("ff0000", 5);
    FFFFFF = new SampleColor("ffffff", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate SampleColor instance, or null if no such code is present in the list
   */
  public static SampleColor getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static SampleColor[] values() {
    Collection<SampleColor> keys = ALL_CODES.values();
    return keys.toArray(new SampleColor[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private SampleColor(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "SampleColor";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SampleColor.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SampleColor.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SampleColor.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SampleColor.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SampleColor.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SampleColor.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SampleColor.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SampleColor.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SampleColor.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SampleColor.class, "Categories");
  }

  /**
   * Compares two SampleColor instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(SampleColor o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
