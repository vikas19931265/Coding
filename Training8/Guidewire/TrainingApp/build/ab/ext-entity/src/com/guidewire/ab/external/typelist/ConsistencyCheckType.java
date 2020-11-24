package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Type of consistency check
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ConsistencyCheckType implements TypeKey, Comparable<ConsistencyCheckType> {
  /**
   * Verifies no 0 length strings within varchar column
   */
  public static ConsistencyCheckType _0LENGTHSTRINGCHECK;
  /**
   * Verifies values are valid for abstract data types
   */
  public static ConsistencyCheckType ADTVALUESCHECK;
  /**
   * Verifies application-specific relationships in the database
   */
  public static ConsistencyCheckType APPSPECIFICCHECK;
  /**
   * Verifies that every row in the container has a nonempty array
   */
  public static ConsistencyCheckType ARRAYREQUIREDMATCH;
  /**
   * Verifies that the database is consistent relative to assignment
   */
  public static ConsistencyCheckType ASSIGNMENTCHECK;
  /**
   * Verifies that the database is consistent relative to bean versions
   */
  public static ConsistencyCheckType BEANVERSIONCHECK;
  /**
   * Verifies data is valid relative to check constraints
   */
  public static ConsistencyCheckType CHECKCONSTRAINTCHECK;
  /**
   * Verifies that the consistent children property holds
   */
  public static ConsistencyCheckType CONSISTENTCHILDREN;
  /**
   * Custom consistency check declared in a data model file
   */
  public static ConsistencyCheckType CUSTOMCHECK;
  /**
   * Verifies data is valid relative to datetime orderings
   */
  public static ConsistencyCheckType DATETIMEORDERINGCHECK;
  /**
   * Verifies that non-nullable edge foreign key relationships have one referring entity
   */
  public static ConsistencyCheckType EDGEFKNONNULLCHECK;
  /**
   * Verifies that an effdated table appears in the effdated registry of all referenced branches
   */
  public static ConsistencyCheckType EFFDATEDREGISTRYCHECK;
  /**
   * Verifies foreign key references when RI is not enforced in the database
   */
  public static ConsistencyCheckType FKCHECK;
  /**
   * Verifies foreign key reference to a subtype is to correct subtype
   */
  public static ConsistencyCheckType FKSUBTYPECHECK;
  /**
   * Verifies data is valid relative to jointable declarations
   */
  public static ConsistencyCheckType JOINTABLECHECK;
  /**
   * Verifies that the linguistic search denorm columns are in sync with the associated source columns
   */
  public static ConsistencyCheckType CASEINSENSITIVECHECK;
  /**
   * Verifies required localized columns have values for all languages
   */
  public static ConsistencyCheckType LOCALIZEDCOLUMNCHECK;
  /**
   * Verifies data in max key table is in synch with table
   */
  public static ConsistencyCheckType MAXKEYCHECK;
  /**
   * Verifies that one-to-one relationships have at most one referring entity
   */
  public static ConsistencyCheckType ONETOONECHECK;
  /**
   * Verifies that non-nullable one-to-one relationships have one referring entity
   */
  public static ConsistencyCheckType ONETOONENONNULLCHECK;
  /**
   * Verifies that the database is consistent relative to revisioning
   */
  public static ConsistencyCheckType REVISIONINGCHECK;
  /**
   * Verifies that the search denorm columns are in sync with the associated source columns
   */
  public static ConsistencyCheckType SEARCHDENORMCHECK;
  /**
   * Verifies subtype column contains valid values
   */
  public static ConsistencyCheckType SUBTYPECOLUMNCHECK;
  /**
   * Verifies non-nullable subtype-specific columns have non-null values for subtype rows
   */
  public static ConsistencyCheckType SUBTYPENONNULLCHECK;
  /**
   * Verifies subtype-specific columns are null when row is a different subtype
   */
  public static ConsistencyCheckType SUBTYPESPECIFICCHECK;
  /**
   * Verifies typekey column contains valid values
   */
  public static ConsistencyCheckType TYPEKEYCHECK;
  /**
   * Verifies values in typelist table and data model are in sync
   */
  public static ConsistencyCheckType TYPELISTTABLECHECK;
  /**
   * Verifies that data will pass associated version check at the beginning of the upgrade to a subsequent version of the product
   */
  public static ConsistencyCheckType UPGRADEWARNINGCHECK;
  private static final Map<String, ConsistencyCheckType> ALL_CODES = new LinkedHashMap<String, ConsistencyCheckType>();


  private static void initTypecodes0() {
    _0LENGTHSTRINGCHECK = new ConsistencyCheckType("0lengthstringcheck", 0);
    ADTVALUESCHECK = new ConsistencyCheckType("adtvaluescheck", 1);
    APPSPECIFICCHECK = new ConsistencyCheckType("appspecificcheck", 2);
    ARRAYREQUIREDMATCH = new ConsistencyCheckType("arrayrequiredmatch", 3);
    ASSIGNMENTCHECK = new ConsistencyCheckType("assignmentcheck", 4);
    BEANVERSIONCHECK = new ConsistencyCheckType("beanversioncheck", 5);
    CHECKCONSTRAINTCHECK = new ConsistencyCheckType("checkconstraintcheck", 6);
    CONSISTENTCHILDREN = new ConsistencyCheckType("consistentchildren", 7);
    CUSTOMCHECK = new ConsistencyCheckType("customcheck", 8);
    DATETIMEORDERINGCHECK = new ConsistencyCheckType("datetimeorderingcheck", 9);
    EDGEFKNONNULLCHECK = new ConsistencyCheckType("edgefknonnullcheck", 10);
    EFFDATEDREGISTRYCHECK = new ConsistencyCheckType("effdatedregistrycheck", 11);
    FKCHECK = new ConsistencyCheckType("fkcheck", 12);
    FKSUBTYPECHECK = new ConsistencyCheckType("fksubtypecheck", 13);
    JOINTABLECHECK = new ConsistencyCheckType("jointablecheck", 14);
    CASEINSENSITIVECHECK = new ConsistencyCheckType("caseinsensitivecheck", 15);
    LOCALIZEDCOLUMNCHECK = new ConsistencyCheckType("localizedcolumncheck", 16);
    MAXKEYCHECK = new ConsistencyCheckType("maxkeycheck", 17);
    ONETOONECHECK = new ConsistencyCheckType("onetoonecheck", 18);
    ONETOONENONNULLCHECK = new ConsistencyCheckType("onetoonenonnullcheck", 19);
    REVISIONINGCHECK = new ConsistencyCheckType("revisioningcheck", 20);
    SEARCHDENORMCHECK = new ConsistencyCheckType("searchdenormcheck", 21);
    SUBTYPECOLUMNCHECK = new ConsistencyCheckType("subtypecolumncheck", 22);
    SUBTYPENONNULLCHECK = new ConsistencyCheckType("subtypenonnullcheck", 23);
    SUBTYPESPECIFICCHECK = new ConsistencyCheckType("subtypespecificcheck", 24);
    TYPEKEYCHECK = new ConsistencyCheckType("typekeycheck", 25);
    TYPELISTTABLECHECK = new ConsistencyCheckType("typelisttablecheck", 26);
    UPGRADEWARNINGCHECK = new ConsistencyCheckType("upgradewarningcheck", 27);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ConsistencyCheckType instance, or null if no such code is present in the list
   */
  public static ConsistencyCheckType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ConsistencyCheckType[] values() {
    Collection<ConsistencyCheckType> keys = ALL_CODES.values();
    return keys.toArray(new ConsistencyCheckType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ConsistencyCheckType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ConsistencyCheckType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ConsistencyCheckType.class, "Categories");
  }

  /**
   * Compares two ConsistencyCheckType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ConsistencyCheckType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
