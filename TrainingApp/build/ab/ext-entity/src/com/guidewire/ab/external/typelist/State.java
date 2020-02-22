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
public class State implements TypeKey, Comparable<State> {
  /**
   * Hokkaido
   */
  public static State HOKKAIDO;
  /**
   * Aomori
   */
  public static State AOMORI;
  /**
   * Iwate
   */
  public static State IWATE;
  /**
   * Miyagi
   */
  public static State MIYAGI;
  /**
   * Akita
   */
  public static State AKITA;
  /**
   * Yamagata
   */
  public static State YAMAGATA;
  /**
   * Fukushima
   */
  public static State FUKUSHIMA;
  /**
   * Ibaraki
   */
  public static State IBARAKI;
  /**
   * Jervis Bay Territory
   */
  public static State AU_JBT;
  /**
   * Tochigi
   */
  public static State TOCHIGI;
  /**
   * Gumma
   */
  public static State GUMMA;
  /**
   * Saitama
   */
  public static State SAITAMA;
  /**
   * Chiba
   */
  public static State CHIBA;
  /**
   * Tokyo
   */
  public static State TOKYO;
  /**
   * Kanagawa
   */
  public static State KANAGAWA;
  /**
   * Niigata
   */
  public static State NIIGATA;
  /**
   * Toyama
   */
  public static State TOYAMA;
  /**
   * Ishikawa
   */
  public static State ISHIKAWA;
  /**
   * Fukui
   */
  public static State FUKUI;
  /**
   * Yamanashi
   */
  public static State YAMANASHI;
  /**
   * Nagano
   */
  public static State NAGANO;
  /**
   * Gifu
   */
  public static State GIFU;
  /**
   * Shizuoka
   */
  public static State SHIZUOKA;
  /**
   * Aichi
   */
  public static State AICHI;
  /**
   * Mie
   */
  public static State MIE;
  /**
   * Shiga
   */
  public static State SHIGA;
  /**
   * Kyoto
   */
  public static State KYOTO;
  /**
   * Osaka
   */
  public static State OSAKA;
  /**
   * Hyogo
   */
  public static State HYOGO;
  /**
   * Nara
   */
  public static State NARA;
  /**
   * Wakayama
   */
  public static State WAKAYAMA;
  /**
   * Tottori
   */
  public static State TOTTORI;
  /**
   * Shimane
   */
  public static State SHIMANE;
  /**
   * Okayama
   */
  public static State OKAYAMA;
  /**
   * Hiroshima
   */
  public static State HIROSHIMA;
  /**
   * Yamaguchi
   */
  public static State YAMAGUCHI;
  /**
   * Tokushima
   */
  public static State TOKUSHIMA;
  /**
   * Kagawa
   */
  public static State KAGAWA;
  /**
   * Ehime
   */
  public static State EHIME;
  /**
   * Kochi
   */
  public static State KOCHI;
  /**
   * Fukuoka
   */
  public static State FUKUOKA;
  /**
   * Saga
   */
  public static State SAGA;
  /**
   * Nagasaki
   */
  public static State NAGASAKI;
  /**
   * Kumamoto
   */
  public static State KUMAMOTO;
  /**
   * Oita
   */
  public static State OITA;
  /**
   * Miyazaki
   */
  public static State MIYAZAKI;
  /**
   * Kagoshima
   */
  public static State KAGOSHIMA;
  /**
   * Okinawa
   */
  public static State OKINAWA;
  /**
   * Australian Capital Territory
   */
  public static State AU_ACT;
  /**
   * Alabama
   */
  public static State AL;
  /**
   * Alaska
   */
  public static State AK;
  /**
   * Alberta
   */
  public static State AB;
  /**
   * Arizona
   */
  public static State AZ;
  /**
   * Arkansas
   */
  public static State AR;
  /**
   * Baden-Wuerttemberg
   */
  public static State DE_BW;
  /**
   * Bavaria
   */
  public static State DE_BY;
  /**
   * Berlin
   */
  public static State DE_BE;
  /**
   * Brandenburg
   */
  public static State DE_BB;
  /**
   * Bremen
   */
  public static State DE_HB;
  /**
   * British Columbia
   */
  public static State BC;
  /**
   * California
   */
  public static State CA;
  /**
   * Colorado
   */
  public static State CO;
  /**
   * Connecticut
   */
  public static State CT;
  /**
   * Delaware
   */
  public static State DE;
  /**
   * District of Columbia
   */
  public static State DC;
  /**
   * Florida
   */
  public static State FL;
  /**
   * Georgia
   */
  public static State GA;
  /**
   * Hamburg
   */
  public static State DE_HH;
  /**
   * Hawaii
   */
  public static State HI;
  /**
   * Hesse
   */
  public static State DE_HE;
  /**
   * Idaho
   */
  public static State ID;
  /**
   * Illinois
   */
  public static State IL;
  /**
   * Indiana
   */
  public static State IN;
  /**
   * Iowa
   */
  public static State IA;
  /**
   * Kansas
   */
  public static State KS;
  /**
   * Kentucky
   */
  public static State KY;
  /**
   * Louisiana
   */
  public static State LA;
  /**
   * Lower Saxony
   */
  public static State DE_NI;
  /**
   * Maine
   */
  public static State ME;
  /**
   * Manitoba
   */
  public static State MB;
  /**
   * Maryland
   */
  public static State MD;
  /**
   * Massachusetts
   */
  public static State MA;
  /**
   * Mecklenburg-Vorpommern
   */
  public static State DE_MV;
  /**
   * Michigan
   */
  public static State MI;
  /**
   * Minnesota
   */
  public static State MN;
  /**
   * Mississippi
   */
  public static State MS;
  /**
   * Missouri
   */
  public static State MO;
  /**
   * Montana
   */
  public static State MT;
  /**
   * Nebraska
   */
  public static State NE;
  /**
   * Nevada
   */
  public static State NV;
  /**
   * New Brunswick
   */
  public static State NB;
  /**
   * New Hampshire
   */
  public static State NH;
  /**
   * New Jersey
   */
  public static State NJ;
  /**
   * New Mexico
   */
  public static State NM;
  /**
   * New South Wales
   */
  public static State AU_NSW;
  /**
   * New York
   */
  public static State NY;
  /**
   * Newfoundland and Labrador
   */
  public static State NL;
  /**
   * North Carolina
   */
  public static State NC;
  /**
   * North Dakota
   */
  public static State ND;
  /**
   * North Rhine-Westphalia
   */
  public static State DE_NW;
  /**
   * Northern Territory
   */
  public static State AU_NT;
  /**
   * Northwest Territories
   */
  public static State NT;
  /**
   * Nova Scotia
   */
  public static State NS;
  /**
   * Nunavut
   */
  public static State NU;
  /**
   * Ohio
   */
  public static State OH;
  /**
   * Oklahoma
   */
  public static State OK;
  /**
   * Ontario
   */
  public static State ON;
  /**
   * Oregon
   */
  public static State OR;
  /**
   * Pennsylvania
   */
  public static State PA;
  /**
   * Prince Edward Island
   */
  public static State PE;
  /**
   * Puerto Rico
   */
  public static State PR;
  /**
   * Quebec
   */
  public static State QC;
  /**
   * Queensland
   */
  public static State AU_QLD;
  /**
   * Rhineland-Palatinate
   */
  public static State DE_RP;
  /**
   * Rhode Island
   */
  public static State RI;
  /**
   * Saarland
   */
  public static State DE_SL;
  /**
   * Saskatchewan
   */
  public static State SK;
  /**
   * Saxony
   */
  public static State DE_SN;
  /**
   * Saxony-Anhalt
   */
  public static State DE_ST;
  /**
   * Schleswig-Holstein
   */
  public static State DE_SH;
  /**
   * South Australia
   */
  public static State AU_SA;
  /**
   * South Carolina
   */
  public static State SC;
  /**
   * South Dakota
   */
  public static State SD;
  /**
   * Tasmania
   */
  public static State AU_TAS;
  /**
   * Tennessee
   */
  public static State TN;
  /**
   * Texas
   */
  public static State TX;
  /**
   * Thuringia
   */
  public static State DE_TH;
  /**
   * Utah
   */
  public static State UT;
  /**
   * Vermont
   */
  public static State VT;
  /**
   * Victoria
   */
  public static State AU_VIC;
  /**
   * Virginia
   */
  public static State VA;
  /**
   * Washington
   */
  public static State WA;
  /**
   * West Virginia
   */
  public static State WV;
  /**
   * Western Australia
   */
  public static State AU_WA;
  /**
   * Wisconsin
   */
  public static State WI;
  /**
   * Wyoming
   */
  public static State WY;
  /**
   * Yukon
   */
  public static State YT;
  private static final Map<String, State> ALL_CODES = new LinkedHashMap<String, State>();


  private static void initTypecodes0() {
    HOKKAIDO = new State("Hokkaido", 0);
    AOMORI = new State("Aomori", 1);
    IWATE = new State("Iwate", 2);
    MIYAGI = new State("Miyagi", 3);
    AKITA = new State("Akita", 4);
    YAMAGATA = new State("Yamagata", 5);
    FUKUSHIMA = new State("Fukushima", 6);
    IBARAKI = new State("Ibaraki", 7);
    AU_JBT = new State("AU_JBT", 8);
    TOCHIGI = new State("Tochigi", 9);
    GUMMA = new State("Gumma", 10);
    SAITAMA = new State("Saitama", 11);
    CHIBA = new State("Chiba", 12);
    TOKYO = new State("Tokyo", 13);
    KANAGAWA = new State("Kanagawa", 14);
    NIIGATA = new State("Niigata", 15);
    TOYAMA = new State("Toyama", 16);
    ISHIKAWA = new State("Ishikawa", 17);
    FUKUI = new State("Fukui", 18);
    YAMANASHI = new State("Yamanashi", 19);
    NAGANO = new State("Nagano", 20);
    GIFU = new State("Gifu", 21);
    SHIZUOKA = new State("Shizuoka", 22);
    AICHI = new State("Aichi", 23);
    MIE = new State("Mie", 24);
    SHIGA = new State("Shiga", 25);
    KYOTO = new State("Kyoto", 26);
    OSAKA = new State("Osaka", 27);
    HYOGO = new State("Hyogo", 28);
    NARA = new State("Nara", 29);
    WAKAYAMA = new State("Wakayama", 30);
    TOTTORI = new State("Tottori", 31);
    SHIMANE = new State("Shimane", 32);
    OKAYAMA = new State("Okayama", 33);
    HIROSHIMA = new State("Hiroshima", 34);
    YAMAGUCHI = new State("Yamaguchi", 35);
    TOKUSHIMA = new State("Tokushima", 36);
    KAGAWA = new State("Kagawa", 37);
    EHIME = new State("Ehime", 38);
    KOCHI = new State("Kochi", 39);
    FUKUOKA = new State("Fukuoka", 40);
    SAGA = new State("Saga", 41);
    NAGASAKI = new State("Nagasaki", 42);
    KUMAMOTO = new State("Kumamoto", 43);
    OITA = new State("Oita", 44);
    MIYAZAKI = new State("Miyazaki", 45);
    KAGOSHIMA = new State("Kagoshima", 46);
    OKINAWA = new State("Okinawa", 47);
    AU_ACT = new State("AU_ACT", 48);
    AL = new State("AL", 49);
    AK = new State("AK", 50);
    AB = new State("AB", 51);
    AZ = new State("AZ", 52);
    AR = new State("AR", 53);
    DE_BW = new State("DE_BW", 54);
    DE_BY = new State("DE_BY", 55);
    DE_BE = new State("DE_BE", 56);
    DE_BB = new State("DE_BB", 57);
    DE_HB = new State("DE_HB", 58);
    BC = new State("BC", 59);
    CA = new State("CA", 60);
    CO = new State("CO", 61);
    CT = new State("CT", 62);
    DE = new State("DE", 63);
    DC = new State("DC", 64);
    FL = new State("FL", 65);
    GA = new State("GA", 66);
    DE_HH = new State("DE_HH", 67);
    HI = new State("HI", 68);
    DE_HE = new State("DE_HE", 69);
    ID = new State("ID", 70);
    IL = new State("IL", 71);
    IN = new State("IN", 72);
    IA = new State("IA", 73);
    KS = new State("KS", 74);
    KY = new State("KY", 75);
    LA = new State("LA", 76);
    DE_NI = new State("DE_NI", 77);
    ME = new State("ME", 78);
    MB = new State("MB", 79);
    MD = new State("MD", 80);
    MA = new State("MA", 81);
    DE_MV = new State("DE_MV", 82);
    MI = new State("MI", 83);
    MN = new State("MN", 84);
    MS = new State("MS", 85);
    MO = new State("MO", 86);
    MT = new State("MT", 87);
    NE = new State("NE", 88);
    NV = new State("NV", 89);
    NB = new State("NB", 90);
    NH = new State("NH", 91);
    NJ = new State("NJ", 92);
    NM = new State("NM", 93);
    AU_NSW = new State("AU_NSW", 94);
    NY = new State("NY", 95);
    NL = new State("NL", 96);
    NC = new State("NC", 97);
    ND = new State("ND", 98);
    DE_NW = new State("DE_NW", 99);
    AU_NT = new State("AU_NT", 100);
    NT = new State("NT", 101);
    NS = new State("NS", 102);
    NU = new State("NU", 103);
    OH = new State("OH", 104);
    OK = new State("OK", 105);
    ON = new State("ON", 106);
    OR = new State("OR", 107);
    PA = new State("PA", 108);
    PE = new State("PE", 109);
    PR = new State("PR", 110);
    QC = new State("QC", 111);
    AU_QLD = new State("AU_QLD", 112);
    DE_RP = new State("DE_RP", 113);
    RI = new State("RI", 114);
    DE_SL = new State("DE_SL", 115);
    SK = new State("SK", 116);
    DE_SN = new State("DE_SN", 117);
    DE_ST = new State("DE_ST", 118);
    DE_SH = new State("DE_SH", 119);
    AU_SA = new State("AU_SA", 120);
    SC = new State("SC", 121);
    SD = new State("SD", 122);
    AU_TAS = new State("AU_TAS", 123);
    TN = new State("TN", 124);
    TX = new State("TX", 125);
    DE_TH = new State("DE_TH", 126);
    UT = new State("UT", 127);
    VT = new State("VT", 128);
    AU_VIC = new State("AU_VIC", 129);
    VA = new State("VA", 130);
    WA = new State("WA", 131);
    WV = new State("WV", 132);
    AU_WA = new State("AU_WA", 133);
    WI = new State("WI", 134);
    WY = new State("WY", 135);
    YT = new State("YT", 136);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate State instance, or null if no such code is present in the list
   */
  public static State getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static State[] values() {
    Collection<State> keys = ALL_CODES.values();
    return keys.toArray(new State[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private State(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "State";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.State.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.State.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.State.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.State.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.State.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.State.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.State.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.State.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.State.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.State.class, "Categories");
  }

  /**
   * Compares two State instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(State o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
