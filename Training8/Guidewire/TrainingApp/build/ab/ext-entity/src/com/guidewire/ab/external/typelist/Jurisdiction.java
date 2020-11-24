package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * The list of jurisdictions regulating insurance and other licensing within this deployment. This is similar to the State typelist, which is used for addresses and locations. In many deployments, the State and Jurisdiction typelists will be equal
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class Jurisdiction implements TypeKey, Comparable<Jurisdiction> {
  /**
   * Australian Capital Territory
   */
  public static Jurisdiction AU_ACT;
  /**
   * Alabama
   */
  public static Jurisdiction AL;
  /**
   * Alaska
   */
  public static Jurisdiction AK;
  /**
   * Alberta
   */
  public static Jurisdiction AB;
  /**
   * Arizona
   */
  public static Jurisdiction AZ;
  /**
   * Arkansas
   */
  public static Jurisdiction AR;
  /**
   * Baden-Wuerttemberg
   */
  public static Jurisdiction DE_BW;
  /**
   * Bavaria
   */
  public static Jurisdiction DE_BY;
  /**
   * Berlin
   */
  public static Jurisdiction DE_BE;
  /**
   * Brandenburg
   */
  public static Jurisdiction DE_BB;
  /**
   * Bremen
   */
  public static Jurisdiction DE_HB;
  /**
   * British Columbia
   */
  public static Jurisdiction BC;
  /**
   * California
   */
  public static Jurisdiction CA;
  /**
   * Colorado
   */
  public static Jurisdiction CO;
  /**
   * Connecticut
   */
  public static Jurisdiction CT;
  /**
   * Delaware
   */
  public static Jurisdiction DE;
  /**
   * District of Columbia
   */
  public static Jurisdiction DC;
  /**
   * Federated States of Micronesia
   */
  public static Jurisdiction FM;
  /**
   * Florida
   */
  public static Jurisdiction FL;
  /**
   * France
   */
  public static Jurisdiction FR;
  /**
   * Georgia
   */
  public static Jurisdiction GA;
  /**
   * Guam
   */
  public static Jurisdiction GU;
  /**
   * Hamburg
   */
  public static Jurisdiction DE_HH;
  /**
   * Hawaii
   */
  public static Jurisdiction HI;
  /**
   * Hesse
   */
  public static Jurisdiction DE_HE;
  /**
   * Idaho
   */
  public static Jurisdiction ID;
  /**
   * Illinois
   */
  public static Jurisdiction IL;
  /**
   * Indiana
   */
  public static Jurisdiction IN;
  /**
   * Iowa
   */
  public static Jurisdiction IA;
  /**
   * Japan
   */
  public static Jurisdiction JP;
  /**
   * Kansas
   */
  public static Jurisdiction KS;
  /**
   * Kentucky
   */
  public static Jurisdiction KY;
  /**
   * Louisiana
   */
  public static Jurisdiction LA;
  /**
   * Lower Saxony
   */
  public static Jurisdiction DE_NI;
  /**
   * Maine
   */
  public static Jurisdiction ME;
  /**
   * Manitoba
   */
  public static Jurisdiction MB;
  /**
   * Marshall Islands
   */
  public static Jurisdiction MH;
  /**
   * Maryland
   */
  public static Jurisdiction MD;
  /**
   * Massachusetts
   */
  public static Jurisdiction MA;
  /**
   * Mecklenburg-Vorpommern
   */
  public static Jurisdiction DE_MV;
  /**
   * Michigan
   */
  public static Jurisdiction MI;
  /**
   * Minnesota
   */
  public static Jurisdiction MN;
  /**
   * Mississippi
   */
  public static Jurisdiction MS;
  /**
   * Missouri
   */
  public static Jurisdiction MO;
  /**
   * Montana
   */
  public static Jurisdiction MT;
  /**
   * Nebraska
   */
  public static Jurisdiction NE;
  /**
   * Nevada
   */
  public static Jurisdiction NV;
  /**
   * New Brunswick
   */
  public static Jurisdiction NB;
  /**
   * New Hampshire
   */
  public static Jurisdiction NH;
  /**
   * New Jersey
   */
  public static Jurisdiction NJ;
  /**
   * New Mexico
   */
  public static Jurisdiction NM;
  /**
   * New South Wales
   */
  public static Jurisdiction AU_NSW;
  /**
   * New York
   */
  public static Jurisdiction NY;
  /**
   * Newfoundland and Labrador
   */
  public static Jurisdiction NL;
  /**
   * North Carolina
   */
  public static Jurisdiction NC;
  /**
   * North Dakota
   */
  public static Jurisdiction ND;
  /**
   * North Rhine-Westphalia
   */
  public static Jurisdiction DE_NW;
  /**
   * Northern Mariana Islands
   */
  public static Jurisdiction MP;
  /**
   * Northern Territory
   */
  public static Jurisdiction AU_NT;
  /**
   * Northwest Territories
   */
  public static Jurisdiction NT;
  /**
   * Nova Scotia
   */
  public static Jurisdiction NS;
  /**
   * Nunavut
   */
  public static Jurisdiction NU;
  /**
   * Ohio
   */
  public static Jurisdiction OH;
  /**
   * Oklahoma
   */
  public static Jurisdiction OK;
  /**
   * Ontario
   */
  public static Jurisdiction ON;
  /**
   * Oregon
   */
  public static Jurisdiction OR;
  /**
   * Pennsylvania
   */
  public static Jurisdiction PA;
  /**
   * Prince Edward Island
   */
  public static Jurisdiction PE;
  /**
   * Puerto Rico
   */
  public static Jurisdiction PR;
  /**
   * Quebec
   */
  public static Jurisdiction QC;
  /**
   * Queensland
   */
  public static Jurisdiction AU_QLD;
  /**
   * Rhineland-Palatinate
   */
  public static Jurisdiction DE_RP;
  /**
   * Rhode Island
   */
  public static Jurisdiction RI;
  /**
   * Saarland
   */
  public static Jurisdiction DE_SL;
  /**
   * Saskatchewan
   */
  public static Jurisdiction SK;
  /**
   * Saxony
   */
  public static Jurisdiction DE_SN;
  /**
   * Saxony-Anhalt
   */
  public static Jurisdiction DE_ST;
  /**
   * Schleswig-Holstein
   */
  public static Jurisdiction DE_SH;
  /**
   * South Australia
   */
  public static Jurisdiction AU_SA;
  /**
   * South Carolina
   */
  public static Jurisdiction SC;
  /**
   * South Dakota
   */
  public static Jurisdiction SD;
  /**
   * Tasmania
   */
  public static Jurisdiction AU_TAS;
  /**
   * Tennessee
   */
  public static Jurisdiction TN;
  /**
   * Texas
   */
  public static Jurisdiction TX;
  /**
   * Thuringia
   */
  public static Jurisdiction DE_TH;
  /**
   * United Kingdom
   */
  public static Jurisdiction GB;
  /**
   * Utah
   */
  public static Jurisdiction UT;
  /**
   * Vermont
   */
  public static Jurisdiction VT;
  /**
   * Victoria
   */
  public static Jurisdiction AU_VIC;
  /**
   * Virgin Islands
   */
  public static Jurisdiction VI;
  /**
   * Virginia
   */
  public static Jurisdiction VA;
  /**
   * Washington
   */
  public static Jurisdiction WA;
  /**
   * West Virginia
   */
  public static Jurisdiction WV;
  /**
   * Western Australia
   */
  public static Jurisdiction AU_WA;
  /**
   * Wisconsin
   */
  public static Jurisdiction WI;
  /**
   * Wyoming
   */
  public static Jurisdiction WY;
  /**
   * Yukon
   */
  public static Jurisdiction YT;
  private static final Map<String, Jurisdiction> ALL_CODES = new LinkedHashMap<String, Jurisdiction>();


  private static void initTypecodes0() {
    AU_ACT = new Jurisdiction("AU_ACT", 0);
    AL = new Jurisdiction("AL", 1);
    AK = new Jurisdiction("AK", 2);
    AB = new Jurisdiction("AB", 3);
    AZ = new Jurisdiction("AZ", 4);
    AR = new Jurisdiction("AR", 5);
    DE_BW = new Jurisdiction("DE_BW", 6);
    DE_BY = new Jurisdiction("DE_BY", 7);
    DE_BE = new Jurisdiction("DE_BE", 8);
    DE_BB = new Jurisdiction("DE_BB", 9);
    DE_HB = new Jurisdiction("DE_HB", 10);
    BC = new Jurisdiction("BC", 11);
    CA = new Jurisdiction("CA", 12);
    CO = new Jurisdiction("CO", 13);
    CT = new Jurisdiction("CT", 14);
    DE = new Jurisdiction("DE", 15);
    DC = new Jurisdiction("DC", 16);
    FM = new Jurisdiction("FM", 17);
    FL = new Jurisdiction("FL", 18);
    FR = new Jurisdiction("FR", 19);
    GA = new Jurisdiction("GA", 20);
    GU = new Jurisdiction("GU", 21);
    DE_HH = new Jurisdiction("DE_HH", 22);
    HI = new Jurisdiction("HI", 23);
    DE_HE = new Jurisdiction("DE_HE", 24);
    ID = new Jurisdiction("ID", 25);
    IL = new Jurisdiction("IL", 26);
    IN = new Jurisdiction("IN", 27);
    IA = new Jurisdiction("IA", 28);
    JP = new Jurisdiction("JP", 29);
    KS = new Jurisdiction("KS", 30);
    KY = new Jurisdiction("KY", 31);
    LA = new Jurisdiction("LA", 32);
    DE_NI = new Jurisdiction("DE_NI", 33);
    ME = new Jurisdiction("ME", 34);
    MB = new Jurisdiction("MB", 35);
    MH = new Jurisdiction("MH", 36);
    MD = new Jurisdiction("MD", 37);
    MA = new Jurisdiction("MA", 38);
    DE_MV = new Jurisdiction("DE_MV", 39);
    MI = new Jurisdiction("MI", 40);
    MN = new Jurisdiction("MN", 41);
    MS = new Jurisdiction("MS", 42);
    MO = new Jurisdiction("MO", 43);
    MT = new Jurisdiction("MT", 44);
    NE = new Jurisdiction("NE", 45);
    NV = new Jurisdiction("NV", 46);
    NB = new Jurisdiction("NB", 47);
    NH = new Jurisdiction("NH", 48);
    NJ = new Jurisdiction("NJ", 49);
    NM = new Jurisdiction("NM", 50);
    AU_NSW = new Jurisdiction("AU_NSW", 51);
    NY = new Jurisdiction("NY", 52);
    NL = new Jurisdiction("NL", 53);
    NC = new Jurisdiction("NC", 54);
    ND = new Jurisdiction("ND", 55);
    DE_NW = new Jurisdiction("DE_NW", 56);
    MP = new Jurisdiction("MP", 57);
    AU_NT = new Jurisdiction("AU_NT", 58);
    NT = new Jurisdiction("NT", 59);
    NS = new Jurisdiction("NS", 60);
    NU = new Jurisdiction("NU", 61);
    OH = new Jurisdiction("OH", 62);
    OK = new Jurisdiction("OK", 63);
    ON = new Jurisdiction("ON", 64);
    OR = new Jurisdiction("OR", 65);
    PA = new Jurisdiction("PA", 66);
    PE = new Jurisdiction("PE", 67);
    PR = new Jurisdiction("PR", 68);
    QC = new Jurisdiction("QC", 69);
    AU_QLD = new Jurisdiction("AU_QLD", 70);
    DE_RP = new Jurisdiction("DE_RP", 71);
    RI = new Jurisdiction("RI", 72);
    DE_SL = new Jurisdiction("DE_SL", 73);
    SK = new Jurisdiction("SK", 74);
    DE_SN = new Jurisdiction("DE_SN", 75);
    DE_ST = new Jurisdiction("DE_ST", 76);
    DE_SH = new Jurisdiction("DE_SH", 77);
    AU_SA = new Jurisdiction("AU_SA", 78);
    SC = new Jurisdiction("SC", 79);
    SD = new Jurisdiction("SD", 80);
    AU_TAS = new Jurisdiction("AU_TAS", 81);
    TN = new Jurisdiction("TN", 82);
    TX = new Jurisdiction("TX", 83);
    DE_TH = new Jurisdiction("DE_TH", 84);
    GB = new Jurisdiction("GB", 85);
    UT = new Jurisdiction("UT", 86);
    VT = new Jurisdiction("VT", 87);
    AU_VIC = new Jurisdiction("AU_VIC", 88);
    VI = new Jurisdiction("VI", 89);
    VA = new Jurisdiction("VA", 90);
    WA = new Jurisdiction("WA", 91);
    WV = new Jurisdiction("WV", 92);
    AU_WA = new Jurisdiction("AU_WA", 93);
    WI = new Jurisdiction("WI", 94);
    WY = new Jurisdiction("WY", 95);
    YT = new Jurisdiction("YT", 96);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate Jurisdiction instance, or null if no such code is present in the list
   */
  public static Jurisdiction getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static Jurisdiction[] values() {
    Collection<Jurisdiction> keys = ALL_CODES.values();
    return keys.toArray(new Jurisdiction[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private Jurisdiction(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "Jurisdiction";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Jurisdiction.class, "Categories");
  }

  /**
   * Compares two Jurisdiction instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(Jurisdiction o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
