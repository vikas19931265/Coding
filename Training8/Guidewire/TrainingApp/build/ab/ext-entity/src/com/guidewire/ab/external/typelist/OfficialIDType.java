package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Type of official id (i.e. SSN, FEIN, State Tax, State Unemployment, etc)
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class OfficialIDType implements TypeKey, Comparable<OfficialIDType> {
  /**
   * Bureau ID
   */
  public static OfficialIDType BUREAUID;
  /**
   * Bureau ID
   */
  public static OfficialIDType NCCIID;
  /**
   * Dept of Labor ID
   */
  public static OfficialIDType DOLID;
  /**
   * Dun & Bradstreet Number
   */
  public static OfficialIDType DUNS;
  /**
   * Federal Employer Identification Number
   */
  public static OfficialIDType FEIN;
  /**
   * Social Security Number
   */
  public static OfficialIDType SSN;
  /**
   * State Tax Identification Number
   */
  public static OfficialIDType STAX;
  /**
   * State Unemployment Identification Number
   */
  public static OfficialIDType STUN;
  /**
   * Temporary Dun & Bradstreet Number
   */
  public static OfficialIDType TUNS;
  private static final Map<String, OfficialIDType> ALL_CODES = new LinkedHashMap<String, OfficialIDType>();


  private static void initTypecodes0() {
    BUREAUID = new OfficialIDType("BureauID", 0);
    NCCIID = new OfficialIDType("NCCIID", 1);
    DOLID = new OfficialIDType("DOLID", 2);
    DUNS = new OfficialIDType("DUNS", 3);
    FEIN = new OfficialIDType("FEIN", 4);
    SSN = new OfficialIDType("SSN", 5);
    STAX = new OfficialIDType("STAX", 6);
    STUN = new OfficialIDType("STUN", 7);
    TUNS = new OfficialIDType("TUNS", 8);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate OfficialIDType instance, or null if no such code is present in the list
   */
  public static OfficialIDType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static OfficialIDType[] values() {
    Collection<OfficialIDType> keys = ALL_CODES.values();
    return keys.toArray(new OfficialIDType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private OfficialIDType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "OfficialIDType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.OfficialIDType.class, "Categories");
  }

  /**
   * Compares two OfficialIDType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(OfficialIDType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
