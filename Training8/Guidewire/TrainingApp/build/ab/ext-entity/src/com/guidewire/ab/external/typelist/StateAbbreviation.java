package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Abbreviations for states such as in AU, CA, JP, US
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class StateAbbreviation implements TypeKey, Comparable<StateAbbreviation> {
  /**
   * Alberta
   */
  public static StateAbbreviation AB;
  /**
   * Australian Capital Territory
   */
  public static StateAbbreviation AU_ACT;
  /**
   * Alaska
   */
  public static StateAbbreviation AK;
  /**
   * Alabama
   */
  public static StateAbbreviation AL;
  /**
   * Arkansas
   */
  public static StateAbbreviation AR;
  /**
   * Arizona
   */
  public static StateAbbreviation AZ;
  /**
   * Brandenburg
   */
  public static StateAbbreviation DE_BB;
  /**
   * British Columbia
   */
  public static StateAbbreviation BC;
  /**
   * Berlin
   */
  public static StateAbbreviation DE_BE;
  /**
   * Baden-Wuerttemberg
   */
  public static StateAbbreviation DE_BW;
  /**
   * Bavaria
   */
  public static StateAbbreviation DE_BY;
  /**
   * California
   */
  public static StateAbbreviation CA;
  /**
   * Colorado
   */
  public static StateAbbreviation CO;
  /**
   * Connecticut
   */
  public static StateAbbreviation CT;
  /**
   * District of Columbia
   */
  public static StateAbbreviation DC;
  /**
   * Delaware
   */
  public static StateAbbreviation DE;
  /**
   * Florida
   */
  public static StateAbbreviation FL;
  /**
   * Georgia
   */
  public static StateAbbreviation GA;
  /**
   * Bremen
   */
  public static StateAbbreviation DE_HB;
  /**
   * Hesse
   */
  public static StateAbbreviation DE_HE;
  /**
   * Hamburg
   */
  public static StateAbbreviation DE_HH;
  /**
   * Hawaii
   */
  public static StateAbbreviation HI;
  /**
   * Iowa
   */
  public static StateAbbreviation IA;
  /**
   * Idaho
   */
  public static StateAbbreviation ID;
  /**
   * Illinois
   */
  public static StateAbbreviation IL;
  /**
   * Indiana
   */
  public static StateAbbreviation IN;
  /**
   * Kansas
   */
  public static StateAbbreviation KS;
  /**
   * Kentucky
   */
  public static StateAbbreviation KY;
  /**
   * Louisiana
   */
  public static StateAbbreviation LA;
  /**
   * Massachusetts
   */
  public static StateAbbreviation MA;
  /**
   * Manitoba
   */
  public static StateAbbreviation MB;
  /**
   * Maryland
   */
  public static StateAbbreviation MD;
  /**
   * Maine
   */
  public static StateAbbreviation ME;
  /**
   * Michigan
   */
  public static StateAbbreviation MI;
  /**
   * Minnesota
   */
  public static StateAbbreviation MN;
  /**
   * Missouri
   */
  public static StateAbbreviation MO;
  /**
   * Mississippi
   */
  public static StateAbbreviation MS;
  /**
   * Montana
   */
  public static StateAbbreviation MT;
  /**
   * Mecklenburg-Vorpommern
   */
  public static StateAbbreviation DE_MV;
  /**
   * New Brunswick
   */
  public static StateAbbreviation NB;
  /**
   * North Carolina
   */
  public static StateAbbreviation NC;
  /**
   * North Dakota
   */
  public static StateAbbreviation ND;
  /**
   * Nebraska
   */
  public static StateAbbreviation NE;
  /**
   * New Hampshire
   */
  public static StateAbbreviation NH;
  /**
   * Lower Saxony
   */
  public static StateAbbreviation DE_NI;
  /**
   * New Jersey
   */
  public static StateAbbreviation NJ;
  /**
   * Newfoundland and Labrador
   */
  public static StateAbbreviation NL;
  /**
   * New Mexico
   */
  public static StateAbbreviation NM;
  /**
   * Nova Scotia
   */
  public static StateAbbreviation NS;
  /**
   * New South Wales
   */
  public static StateAbbreviation AU_NSW;
  /**
   * Northern Territory
   */
  public static StateAbbreviation AU_NT;
  /**
   * Northwest Territories
   */
  public static StateAbbreviation NT;
  /**
   * Nunavut
   */
  public static StateAbbreviation NU;
  /**
   * Nevada
   */
  public static StateAbbreviation NV;
  /**
   * North Rhine-Westphalia
   */
  public static StateAbbreviation DE_NW;
  /**
   * New York
   */
  public static StateAbbreviation NY;
  /**
   * Ohio
   */
  public static StateAbbreviation OH;
  /**
   * Oklahoma
   */
  public static StateAbbreviation OK;
  /**
   * Ontario
   */
  public static StateAbbreviation ON;
  /**
   * Oregon
   */
  public static StateAbbreviation OR;
  /**
   * Pennsylvania
   */
  public static StateAbbreviation PA;
  /**
   * Prince Edward Island
   */
  public static StateAbbreviation PE;
  /**
   * Puerto Rico
   */
  public static StateAbbreviation PR;
  /**
   * Quebec
   */
  public static StateAbbreviation QC;
  /**
   * Queensland
   */
  public static StateAbbreviation AU_QLD;
  /**
   * Rhode Island
   */
  public static StateAbbreviation RI;
  /**
   * Rhineland-Palatinate
   */
  public static StateAbbreviation DE_RP;
  /**
   * South Australia
   */
  public static StateAbbreviation AU_SA;
  /**
   * South Carolina
   */
  public static StateAbbreviation SC;
  /**
   * South Dakota
   */
  public static StateAbbreviation SD;
  /**
   * Schleswig-Holstein
   */
  public static StateAbbreviation DE_SH;
  /**
   * Saskatchewan
   */
  public static StateAbbreviation SK;
  /**
   * Saarland
   */
  public static StateAbbreviation DE_SL;
  /**
   * Saxony
   */
  public static StateAbbreviation DE_SN;
  /**
   * Saxony-Anhalt
   */
  public static StateAbbreviation DE_ST;
  /**
   * Tasmania
   */
  public static StateAbbreviation AU_TAS;
  /**
   * Thuringia
   */
  public static StateAbbreviation DE_TH;
  /**
   * Tennessee
   */
  public static StateAbbreviation TN;
  /**
   * Texas
   */
  public static StateAbbreviation TX;
  /**
   * Utah
   */
  public static StateAbbreviation UT;
  /**
   * Virginia
   */
  public static StateAbbreviation VA;
  /**
   * Victoria
   */
  public static StateAbbreviation AU_VIC;
  /**
   * Vermont
   */
  public static StateAbbreviation VT;
  /**
   * Western Australia
   */
  public static StateAbbreviation AU_WA;
  /**
   * Washington
   */
  public static StateAbbreviation WA;
  /**
   * Wisconsin
   */
  public static StateAbbreviation WI;
  /**
   * West Virginia
   */
  public static StateAbbreviation WV;
  /**
   * Wyoming
   */
  public static StateAbbreviation WY;
  /**
   * Yukon
   */
  public static StateAbbreviation YT;
  private static final Map<String, StateAbbreviation> ALL_CODES = new LinkedHashMap<String, StateAbbreviation>();


  private static void initTypecodes0() {
    AB = new StateAbbreviation("AB", 0);
    AU_ACT = new StateAbbreviation("AU_ACT", 1);
    AK = new StateAbbreviation("AK", 2);
    AL = new StateAbbreviation("AL", 3);
    AR = new StateAbbreviation("AR", 4);
    AZ = new StateAbbreviation("AZ", 5);
    DE_BB = new StateAbbreviation("DE_BB", 6);
    BC = new StateAbbreviation("BC", 7);
    DE_BE = new StateAbbreviation("DE_BE", 8);
    DE_BW = new StateAbbreviation("DE_BW", 9);
    DE_BY = new StateAbbreviation("DE_BY", 10);
    CA = new StateAbbreviation("CA", 11);
    CO = new StateAbbreviation("CO", 12);
    CT = new StateAbbreviation("CT", 13);
    DC = new StateAbbreviation("DC", 14);
    DE = new StateAbbreviation("DE", 15);
    FL = new StateAbbreviation("FL", 16);
    GA = new StateAbbreviation("GA", 17);
    DE_HB = new StateAbbreviation("DE_HB", 18);
    DE_HE = new StateAbbreviation("DE_HE", 19);
    DE_HH = new StateAbbreviation("DE_HH", 20);
    HI = new StateAbbreviation("HI", 21);
    IA = new StateAbbreviation("IA", 22);
    ID = new StateAbbreviation("ID", 23);
    IL = new StateAbbreviation("IL", 24);
    IN = new StateAbbreviation("IN", 25);
    KS = new StateAbbreviation("KS", 26);
    KY = new StateAbbreviation("KY", 27);
    LA = new StateAbbreviation("LA", 28);
    MA = new StateAbbreviation("MA", 29);
    MB = new StateAbbreviation("MB", 30);
    MD = new StateAbbreviation("MD", 31);
    ME = new StateAbbreviation("ME", 32);
    MI = new StateAbbreviation("MI", 33);
    MN = new StateAbbreviation("MN", 34);
    MO = new StateAbbreviation("MO", 35);
    MS = new StateAbbreviation("MS", 36);
    MT = new StateAbbreviation("MT", 37);
    DE_MV = new StateAbbreviation("DE_MV", 38);
    NB = new StateAbbreviation("NB", 39);
    NC = new StateAbbreviation("NC", 40);
    ND = new StateAbbreviation("ND", 41);
    NE = new StateAbbreviation("NE", 42);
    NH = new StateAbbreviation("NH", 43);
    DE_NI = new StateAbbreviation("DE_NI", 44);
    NJ = new StateAbbreviation("NJ", 45);
    NL = new StateAbbreviation("NL", 46);
    NM = new StateAbbreviation("NM", 47);
    NS = new StateAbbreviation("NS", 48);
    AU_NSW = new StateAbbreviation("AU_NSW", 49);
    AU_NT = new StateAbbreviation("AU_NT", 50);
    NT = new StateAbbreviation("NT", 51);
    NU = new StateAbbreviation("NU", 52);
    NV = new StateAbbreviation("NV", 53);
    DE_NW = new StateAbbreviation("DE_NW", 54);
    NY = new StateAbbreviation("NY", 55);
    OH = new StateAbbreviation("OH", 56);
    OK = new StateAbbreviation("OK", 57);
    ON = new StateAbbreviation("ON", 58);
    OR = new StateAbbreviation("OR", 59);
    PA = new StateAbbreviation("PA", 60);
    PE = new StateAbbreviation("PE", 61);
    PR = new StateAbbreviation("PR", 62);
    QC = new StateAbbreviation("QC", 63);
    AU_QLD = new StateAbbreviation("AU_QLD", 64);
    RI = new StateAbbreviation("RI", 65);
    DE_RP = new StateAbbreviation("DE_RP", 66);
    AU_SA = new StateAbbreviation("AU_SA", 67);
    SC = new StateAbbreviation("SC", 68);
    SD = new StateAbbreviation("SD", 69);
    DE_SH = new StateAbbreviation("DE_SH", 70);
    SK = new StateAbbreviation("SK", 71);
    DE_SL = new StateAbbreviation("DE_SL", 72);
    DE_SN = new StateAbbreviation("DE_SN", 73);
    DE_ST = new StateAbbreviation("DE_ST", 74);
    AU_TAS = new StateAbbreviation("AU_TAS", 75);
    DE_TH = new StateAbbreviation("DE_TH", 76);
    TN = new StateAbbreviation("TN", 77);
    TX = new StateAbbreviation("TX", 78);
    UT = new StateAbbreviation("UT", 79);
    VA = new StateAbbreviation("VA", 80);
    AU_VIC = new StateAbbreviation("AU_VIC", 81);
    VT = new StateAbbreviation("VT", 82);
    AU_WA = new StateAbbreviation("AU_WA", 83);
    WA = new StateAbbreviation("WA", 84);
    WI = new StateAbbreviation("WI", 85);
    WV = new StateAbbreviation("WV", 86);
    WY = new StateAbbreviation("WY", 87);
    YT = new StateAbbreviation("YT", 88);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate StateAbbreviation instance, or null if no such code is present in the list
   */
  public static StateAbbreviation getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static StateAbbreviation[] values() {
    Collection<StateAbbreviation> keys = ALL_CODES.values();
    return keys.toArray(new StateAbbreviation[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private StateAbbreviation(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "StateAbbreviation";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.StateAbbreviation.class, "Categories");
  }

  /**
   * Compares two StateAbbreviation instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(StateAbbreviation o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
