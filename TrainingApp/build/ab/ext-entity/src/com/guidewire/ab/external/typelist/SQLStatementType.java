package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Types of sql statements
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class SQLStatementType implements TypeKey, Comparable<SQLStatementType> {
  /**
   * Add column statement
   */
  public static SQLStatementType ADDCOLUMN;
  /**
   * Alter table (column) statement
   */
  public static SQLStatementType ALTERCOLUMN;
  /**
   * Alter table degree statement
   */
  public static SQLStatementType ALTERTABLEDEGREE;
  /**
   * Change column nullability statement
   */
  public static SQLStatementType COLUMNNULLABILITY;
  /**
   * Create foreign key statement
   */
  public static SQLStatementType CREATEFK;
  /**
   * Create index statement
   */
  public static SQLStatementType CREATEINDEX;
  /**
   * Create primary key statement
   */
  public static SQLStatementType CREATEPK;
  /**
   * Create table statement
   */
  public static SQLStatementType CREATETABLE;
  /**
   * Delete statement
   */
  public static SQLStatementType DELETE;
  /**
   * Delete db statistics statement
   */
  public static SQLStatementType DELETEDBSTATS;
  /**
   * Disable identity insert statement
   */
  public static SQLStatementType DISABLEIDENTITYINSERT;
  /**
   * Drop column statement
   */
  public static SQLStatementType DROPCOLUMN;
  /**
   * Drop foreign key statement
   */
  public static SQLStatementType DROPFK;
  /**
   * Drop index statement
   */
  public static SQLStatementType DROPINDEX;
  /**
   * Drop primary key statement
   */
  public static SQLStatementType DROPPK;
  /**
   * Drop sequence statement
   */
  public static SQLStatementType DROPSEQUENCE;
  /**
   * Drop table statement
   */
  public static SQLStatementType DROPTABLE;
  /**
   * Enable identity insert statement
   */
  public static SQLStatementType ENABLEIDENTITYINSERT;
  /**
   * Insert statement
   */
  public static SQLStatementType INSERT;
  /**
   * Other statement type
   */
  public static SQLStatementType OTHER;
  /**
   * Rename column statement
   */
  public static SQLStatementType RENAMECOLUMN;
  /**
   * Rename table statement
   */
  public static SQLStatementType RENAMETABLE;
  /**
   * Select statement
   */
  public static SQLStatementType SELECT;
  /**
   * Truncate table statement
   */
  public static SQLStatementType TRUNCATETABLE;
  /**
   * Update statement
   */
  public static SQLStatementType UPDATE;
  /**
   * Update db statistics statement
   */
  public static SQLStatementType UPDATEDBSTATS;
  private static final Map<String, SQLStatementType> ALL_CODES = new LinkedHashMap<String, SQLStatementType>();


  private static void initTypecodes0() {
    ADDCOLUMN = new SQLStatementType("addcolumn", 0);
    ALTERCOLUMN = new SQLStatementType("altercolumn", 1);
    ALTERTABLEDEGREE = new SQLStatementType("altertabledegree", 2);
    COLUMNNULLABILITY = new SQLStatementType("columnnullability", 3);
    CREATEFK = new SQLStatementType("createfk", 4);
    CREATEINDEX = new SQLStatementType("createindex", 5);
    CREATEPK = new SQLStatementType("createpk", 6);
    CREATETABLE = new SQLStatementType("createtable", 7);
    DELETE = new SQLStatementType("delete", 8);
    DELETEDBSTATS = new SQLStatementType("deletedbstats", 9);
    DISABLEIDENTITYINSERT = new SQLStatementType("disableidentityinsert", 10);
    DROPCOLUMN = new SQLStatementType("dropcolumn", 11);
    DROPFK = new SQLStatementType("dropfk", 12);
    DROPINDEX = new SQLStatementType("dropindex", 13);
    DROPPK = new SQLStatementType("droppk", 14);
    DROPSEQUENCE = new SQLStatementType("dropsequence", 15);
    DROPTABLE = new SQLStatementType("droptable", 16);
    ENABLEIDENTITYINSERT = new SQLStatementType("enableidentityinsert", 17);
    INSERT = new SQLStatementType("insert", 18);
    OTHER = new SQLStatementType("other", 19);
    RENAMECOLUMN = new SQLStatementType("renamecolumn", 20);
    RENAMETABLE = new SQLStatementType("renametable", 21);
    SELECT = new SQLStatementType("select", 22);
    TRUNCATETABLE = new SQLStatementType("truncatetable", 23);
    UPDATE = new SQLStatementType("update", 24);
    UPDATEDBSTATS = new SQLStatementType("updatedbstats", 25);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate SQLStatementType instance, or null if no such code is present in the list
   */
  public static SQLStatementType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static SQLStatementType[] values() {
    Collection<SQLStatementType> keys = ALL_CODES.values();
    return keys.toArray(new SQLStatementType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private SQLStatementType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "SQLStatementType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SQLStatementType.class, "Categories");
  }

  /**
   * Compares two SQLStatementType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(SQLStatementType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
