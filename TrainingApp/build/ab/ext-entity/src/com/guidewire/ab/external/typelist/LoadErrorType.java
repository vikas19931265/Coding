package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of load error events
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class LoadErrorType implements TypeKey, Comparable<LoadErrorType> {
  /**
   * Rows found in table with 0-length strings in varchar columns
   */
  public static LoadErrorType ZEROLENGTHSTRING;
  /**
   * Rows found in staging table with values that violate rules of an abstract data type
   */
  public static LoadErrorType ABSTRACTDATATYPE;
  /**
   * Rows found in staging table that violate a check constraint
   */
  public static LoadErrorType CHECKCONSTRAINT;
  /**
   * Consistent children failure found between staging and source tables
   */
  public static LoadErrorType CONSISTCHILDREN2;
  /**
   * Consistent children failure found within staging tables
   */
  public static LoadErrorType CONSISTCHILDREN1;
  /**
   * Rows found in staging table that violate a date time ordering
   */
  public static LoadErrorType DTORDERING;
  /**
   * Rows found in table with foreign key references to incorrect subtype
   */
  public static LoadErrorType FOREIGNKEYSUB;
  /**
   * Rows found in table with foreign key references to an existing row in a source table that is already referenced from other existing rows, when such references are not allowed
   */
  public static LoadErrorType REFTOEXISTINGREFFEDROW;
  /**
   * Rows found in table with foreign key references to an existing row in a source table when such references are not allowed
   */
  public static LoadErrorType REFTOEXISTINGROW;
  /**
   * Rows found in staging table that violate rules for assignable objects
   */
  public static LoadErrorType BADASSIGNABLE;
  /**
   * Rows found in table with invalid values for a foreign key column
   */
  public static LoadErrorType FOREIGNKEY;
  /**
   * Rows found in table with foreign key references to existing row in a non-admin table when only existing rows in admin tables can be referenced
   */
  public static LoadErrorType FOREIGNKEYNONADMIN;
  /**
   * Rows found in table with invalid values for a typekey column
   */
  public static LoadErrorType TYPEKEY;
  /**
   * One or the other of the amount and currency column for a monetary amount contains null when the other does not.
   */
  public static LoadErrorType MONETARYAMOUNT;
  /**
   * Not exactly one row found in table for non-nullable edge foreign key relationships
   */
  public static LoadErrorType EDGEFOREIGNKEY;
  /**
   * Not exactly one row found in table for non-nullable one-to-one relationships
   */
  public static LoadErrorType ONETOONE;
  /**
   * Rows found in table with non-null values for one or more subtype-specific columns for a different subtype
   */
  public static LoadErrorType SUBTYPESPEC;
  /**
   * Rows found in table with null values for one or more non-nullable columns in the source table
   */
  public static LoadErrorType NONULL;
  /**
   * Rows found in table with null values for one or more non-nullable columns for the subtype in the source table
   */
  public static LoadErrorType NONULLSUBTYPE;
  /**
   * PostPopulateExecutors failures detected after populating source tables
   */
  public static LoadErrorType PPEERROR;
  /**
   * Rows found in staging table with required referencing rows in array table
   */
  public static LoadErrorType REQUIREDMATCH;
  /**
   * Rows found in table with invalid values for a subtype column
   */
  public static LoadErrorType SUBTYPE;
  /**
   * Rows found in staging table that match rows in source table on all columns of a unique index
   */
  public static LoadErrorType UNIQCONSTRAINT2;
  /**
   * Rows found in staging table that violate a unique constraint
   */
  public static LoadErrorType UNIQCONSTRAINT1;
  /**
   * Rows found in staging table by query that should return 0 rows
   */
  public static LoadErrorType NOMATCHLVQUERY;
  /**
   * Rows found in table include typekey values that are invalid when loading via the staging tables
   */
  public static LoadErrorType TYPEKEYINSET;
  /**
   * Rows found in table include typekey values that are invalid when loading via the staging tables
   */
  public static LoadErrorType TYPEKEYNOTINSET;
  private static final Map<String, LoadErrorType> ALL_CODES = new LinkedHashMap<String, LoadErrorType>();


  private static void initTypecodes0() {
    ZEROLENGTHSTRING = new LoadErrorType("zerolengthstring", 0);
    ABSTRACTDATATYPE = new LoadErrorType("abstractdatatype", 1);
    CHECKCONSTRAINT = new LoadErrorType("checkconstraint", 2);
    CONSISTCHILDREN2 = new LoadErrorType("consistchildren2", 3);
    CONSISTCHILDREN1 = new LoadErrorType("consistchildren1", 4);
    DTORDERING = new LoadErrorType("dtordering", 5);
    FOREIGNKEYSUB = new LoadErrorType("foreignkeysub", 6);
    REFTOEXISTINGREFFEDROW = new LoadErrorType("reftoexistingreffedrow", 7);
    REFTOEXISTINGROW = new LoadErrorType("reftoexistingrow", 8);
    BADASSIGNABLE = new LoadErrorType("badassignable", 9);
    FOREIGNKEY = new LoadErrorType("foreignkey", 10);
    FOREIGNKEYNONADMIN = new LoadErrorType("foreignkeynonadmin", 11);
    TYPEKEY = new LoadErrorType("typekey", 12);
    MONETARYAMOUNT = new LoadErrorType("monetaryamount", 13);
    EDGEFOREIGNKEY = new LoadErrorType("edgeforeignkey", 14);
    ONETOONE = new LoadErrorType("onetoone", 15);
    SUBTYPESPEC = new LoadErrorType("subtypespec", 16);
    NONULL = new LoadErrorType("nonull", 17);
    NONULLSUBTYPE = new LoadErrorType("nonullsubtype", 18);
    PPEERROR = new LoadErrorType("ppeerror", 19);
    REQUIREDMATCH = new LoadErrorType("requiredmatch", 20);
    SUBTYPE = new LoadErrorType("subtype", 21);
    UNIQCONSTRAINT2 = new LoadErrorType("uniqconstraint2", 22);
    UNIQCONSTRAINT1 = new LoadErrorType("uniqconstraint1", 23);
    NOMATCHLVQUERY = new LoadErrorType("nomatchlvquery", 24);
    TYPEKEYINSET = new LoadErrorType("typekeyinset", 25);
    TYPEKEYNOTINSET = new LoadErrorType("typekeynotinset", 26);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate LoadErrorType instance, or null if no such code is present in the list
   */
  public static LoadErrorType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static LoadErrorType[] values() {
    Collection<LoadErrorType> keys = ALL_CODES.values();
    return keys.toArray(new LoadErrorType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private LoadErrorType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "LoadErrorType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.LoadErrorType.class, "Categories");
  }

  /**
   * Compares two LoadErrorType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(LoadErrorType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
