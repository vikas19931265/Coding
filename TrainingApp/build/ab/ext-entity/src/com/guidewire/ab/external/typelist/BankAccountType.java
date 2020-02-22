package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The type of bank accout e.g. checking, savings etc
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class BankAccountType implements TypeKey, Comparable<BankAccountType> {
  /**
   * Checking
   */
  public static BankAccountType CHECKING;
  /**
   * Savings
   */
  public static BankAccountType SAVINGS;
  /**
   * Other
   */
  public static BankAccountType OTHER;
  private static final Map<String, BankAccountType> ALL_CODES = new LinkedHashMap<String, BankAccountType>();


  private static void initTypecodes0() {
    CHECKING = new BankAccountType("checking", 0);
    SAVINGS = new BankAccountType("savings", 1);
    OTHER = new BankAccountType("other", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate BankAccountType instance, or null if no such code is present in the list
   */
  public static BankAccountType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static BankAccountType[] values() {
    Collection<BankAccountType> keys = ALL_CODES.values();
    return keys.toArray(new BankAccountType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private BankAccountType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "BankAccountType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BankAccountType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BankAccountType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.BankAccountType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BankAccountType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.BankAccountType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BankAccountType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.BankAccountType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BankAccountType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BankAccountType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.BankAccountType.class, "Categories");
  }

  /**
   * Compares two BankAccountType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(BankAccountType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
