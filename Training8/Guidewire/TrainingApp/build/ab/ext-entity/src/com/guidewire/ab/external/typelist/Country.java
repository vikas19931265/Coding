package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * List of regions, or countries
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class Country implements TypeKey, Comparable<Country> {
  /**
   * United States
   */
  public static Country US;
  /**
   * Canada
   */
  public static Country CA;
  /**
   * Afghanistan
   */
  public static Country AF;
  /**
   * Albania
   */
  public static Country AL;
  /**
   * Algeria
   */
  public static Country DZ;
  /**
   * American Samoa
   */
  public static Country AS;
  /**
   * Andorra
   */
  public static Country AD;
  /**
   * Angola
   */
  public static Country AO;
  /**
   * Anguilla
   */
  public static Country AI;
  /**
   * Antarctica
   */
  public static Country AQ;
  /**
   * Antigua and Barbuda
   */
  public static Country AG;
  /**
   * Argentina
   */
  public static Country AR;
  /**
   * Armenia
   */
  public static Country AM;
  /**
   * Aruba
   */
  public static Country AW;
  /**
   * Australia
   */
  public static Country AU;
  /**
   * Austria
   */
  public static Country AT;
  /**
   * Azerbaijan
   */
  public static Country AZ;
  /**
   * Bahamas
   */
  public static Country BS;
  /**
   * Bahrain
   */
  public static Country BH;
  /**
   * Bangladesh
   */
  public static Country BD;
  /**
   * Barbados
   */
  public static Country BB;
  /**
   * Belarus
   */
  public static Country BY;
  /**
   * Belgium
   */
  public static Country BE;
  /**
   * Belize
   */
  public static Country BZ;
  /**
   * Benin
   */
  public static Country BJ;
  /**
   * Bermuda
   */
  public static Country BM;
  /**
   * Bhutan
   */
  public static Country BT;
  /**
   * Bolivia
   */
  public static Country BO;
  /**
   * Bosnia and Herzegovina
   */
  public static Country BA;
  /**
   * Botswana
   */
  public static Country BW;
  /**
   * Bouvet Island (Bouvetoya)
   */
  public static Country BV;
  /**
   * Brazil
   */
  public static Country BR;
  /**
   * British Indian Ocean Territory (Chagos Archipelago)
   */
  public static Country IO;
  /**
   * British Virgin Islands
   */
  public static Country VG;
  /**
   * Brunei
   */
  public static Country BN;
  /**
   * Bulgaria
   */
  public static Country BG;
  /**
   * Burkina Faso
   */
  public static Country BF;
  /**
   * Burundi
   */
  public static Country BI;
  /**
   * Cambodia
   */
  public static Country KH;
  /**
   * Cameroon
   */
  public static Country CM;
  /**
   * Cape Verde
   */
  public static Country CV;
  /**
   * Cayman Islands
   */
  public static Country KY;
  /**
   * Central African Republic
   */
  public static Country CF;
  /**
   * Chad
   */
  public static Country TD;
  /**
   * Chile
   */
  public static Country CL;
  /**
   * China
   */
  public static Country CN;
  /**
   * Christmas Island
   */
  public static Country CX;
  /**
   * Cocos (Keeling) Islands
   */
  public static Country CC;
  /**
   * Colombia
   */
  public static Country CO;
  /**
   * Comoros
   */
  public static Country KM;
  /**
   * Congo - Brazzaville
   */
  public static Country CG;
  /**
   * Congo - Kinshasa
   */
  public static Country CD;
  /**
   * Cook Islands
   */
  public static Country CK;
  /**
   * Costa Rica
   */
  public static Country CR;
  /**
   * Croatia
   */
  public static Country HR;
  /**
   * Cuba
   */
  public static Country CU;
  /**
   * Cyprus
   */
  public static Country CY;
  /**
   * Czech Republic
   */
  public static Country CZ;
  /**
   * Denmark
   */
  public static Country DK;
  /**
   * Djibouti
   */
  public static Country DJ;
  /**
   * Dominica
   */
  public static Country DM;
  /**
   * Dominican Republic
   */
  public static Country DO;
  /**
   * Ecuador
   */
  public static Country EC;
  /**
   * Egypt
   */
  public static Country EG;
  /**
   * El Salvador
   */
  public static Country SV;
  /**
   * Equatorial Guinea
   */
  public static Country GQ;
  /**
   * Eritrea
   */
  public static Country ER;
  /**
   * Estonia
   */
  public static Country EE;
  /**
   * Ethiopia
   */
  public static Country ET;
  /**
   * Falkland Islands (Malvinas)
   */
  public static Country FK;
  /**
   * Faroe Islands
   */
  public static Country FO;
  /**
   * Fiji, Republic of the Fiji Islands
   */
  public static Country FJ;
  /**
   * Finland
   */
  public static Country FI;
  /**
   * France
   */
  public static Country FR;
  /**
   * French Guiana
   */
  public static Country GF;
  /**
   * French Polynesia
   */
  public static Country PF;
  /**
   * French Southern Territories
   */
  public static Country TF;
  /**
   * Gabon
   */
  public static Country GA;
  /**
   * Gambia
   */
  public static Country GM;
  /**
   * Georgia
   */
  public static Country GE;
  /**
   * Germany
   */
  public static Country DE;
  /**
   * Ghana
   */
  public static Country GH;
  /**
   * Gibraltar
   */
  public static Country GI;
  /**
   * Greece
   */
  public static Country GR;
  /**
   * Greenland
   */
  public static Country GL;
  /**
   * Grenada
   */
  public static Country GD;
  /**
   * Guadeloupe
   */
  public static Country GP;
  /**
   * Guam
   */
  public static Country GU;
  /**
   * Guatemala
   */
  public static Country GT;
  /**
   * Guinea
   */
  public static Country GN;
  /**
   * Guinea-Bissau
   */
  public static Country GW;
  /**
   * Guyana
   */
  public static Country GY;
  /**
   * Haiti
   */
  public static Country HT;
  /**
   * Heard and McDonald Islands
   */
  public static Country HM;
  /**
   * Honduras
   */
  public static Country HN;
  /**
   * Hong Kong SAR China
   */
  public static Country HK;
  /**
   * Hungary
   */
  public static Country HU;
  /**
   * Iceland
   */
  public static Country IS;
  /**
   * India
   */
  public static Country IN;
  /**
   * Indonesia
   */
  public static Country ID;
  /**
   * Iran
   */
  public static Country IR;
  /**
   * Iraq
   */
  public static Country IQ;
  /**
   * Ireland
   */
  public static Country IE;
  /**
   * Israel
   */
  public static Country IL;
  /**
   * Italy
   */
  public static Country IT;
  /**
   * Ivory Coast
   */
  public static Country CI;
  /**
   * Jamaica
   */
  public static Country JM;
  /**
   * Japan
   */
  public static Country JP;
  /**
   * Jordan
   */
  public static Country JO;
  /**
   * Kazakhstan
   */
  public static Country KZ;
  /**
   * Kenya
   */
  public static Country KE;
  /**
   * Kiribati
   */
  public static Country KI;
  /**
   * Korea, North
   */
  public static Country KP;
  /**
   * Korea, South
   */
  public static Country KR;
  /**
   * Kuwait
   */
  public static Country KW;
  /**
   * Kyrgyz Republic
   */
  public static Country KG;
  /**
   * Laos
   */
  public static Country LA;
  /**
   * Latvia
   */
  public static Country LV;
  /**
   * Lebanon
   */
  public static Country LB;
  /**
   * Lesotho
   */
  public static Country LS;
  /**
   * Liberia
   */
  public static Country LR;
  /**
   * Libya
   */
  public static Country LY;
  /**
   * Liechtenstein
   */
  public static Country LI;
  /**
   * Lithuania
   */
  public static Country LT;
  /**
   * Luxembourg
   */
  public static Country LU;
  /**
   * Macau SAR China
   */
  public static Country MO;
  /**
   * Macedonia
   */
  public static Country MK;
  /**
   * Madagascar
   */
  public static Country MG;
  /**
   * Malawi
   */
  public static Country MW;
  /**
   * Malaysia
   */
  public static Country MY;
  /**
   * Maldives
   */
  public static Country MV;
  /**
   * Mali
   */
  public static Country ML;
  /**
   * Malta
   */
  public static Country MT;
  /**
   * Marshall Islands
   */
  public static Country MH;
  /**
   * Martinique
   */
  public static Country MQ;
  /**
   * Mauritania
   */
  public static Country MR;
  /**
   * Mauritius
   */
  public static Country MU;
  /**
   * Mayotte
   */
  public static Country YT;
  /**
   * Mexico
   */
  public static Country MX;
  /**
   * Micronesia, Federated States of
   */
  public static Country FM;
  /**
   * Moldova
   */
  public static Country MD;
  /**
   * Monaco
   */
  public static Country MC;
  /**
   * Mongolia
   */
  public static Country MN;
  /**
   * Montenegro
   */
  public static Country ME;
  /**
   * Montserrat
   */
  public static Country MS;
  /**
   * Morocco
   */
  public static Country MA;
  /**
   * Mozambique
   */
  public static Country MZ;
  /**
   * Myanmar [Burma]
   */
  public static Country MM;
  /**
   * Namibia
   */
  public static Country NA;
  /**
   * Nauru
   */
  public static Country NR;
  /**
   * Nepal
   */
  public static Country NP;
  /**
   * Netherlands
   */
  public static Country NL;
  /**
   * Netherlands Antilles
   */
  public static Country AN;
  /**
   * New Caledonia
   */
  public static Country NC;
  /**
   * New Zealand
   */
  public static Country NZ;
  /**
   * Nicaragua
   */
  public static Country NI;
  /**
   * Niger
   */
  public static Country NE;
  /**
   * Nigeria
   */
  public static Country NG;
  /**
   * Niue
   */
  public static Country NU;
  /**
   * Norfolk Island
   */
  public static Country NF;
  /**
   * Northern Mariana Islands
   */
  public static Country MP;
  /**
   * Norway
   */
  public static Country NO;
  /**
   * Oman
   */
  public static Country OM;
  /**
   * Pakistan
   */
  public static Country PK;
  /**
   * Palau
   */
  public static Country PW;
  /**
   * Palestinian Interim Self-Government Authority
   */
  public static Country PS;
  /**
   * Panama
   */
  public static Country PA;
  /**
   * Papua New Guinea
   */
  public static Country PG;
  /**
   * Paraguay
   */
  public static Country PY;
  /**
   * Peru
   */
  public static Country PE;
  /**
   * Philippines
   */
  public static Country PH;
  /**
   * Pitcairn Island
   */
  public static Country PN;
  /**
   * Poland
   */
  public static Country PL;
  /**
   * Portugal
   */
  public static Country PT;
  /**
   * Puerto Rico
   */
  public static Country PR;
  /**
   * Qatar
   */
  public static Country QA;
  /**
   * Reunion
   */
  public static Country RE;
  /**
   * Romania
   */
  public static Country RO;
  /**
   * Russia
   */
  public static Country RU;
  /**
   * Rwanda
   */
  public static Country RW;
  /**
   * Saint Barthelemy
   */
  public static Country BL;
  /**
   * Saint Martin
   */
  public static Country MF;
  /**
   * Samoa
   */
  public static Country WS;
  /**
   * San Marino
   */
  public static Country SM;
  /**
   * Sao Tome and Principe
   */
  public static Country ST;
  /**
   * Saudi Arabia
   */
  public static Country SA;
  /**
   * Senegal
   */
  public static Country SN;
  /**
   * Serbia
   */
  public static Country RS;
  /**
   * Seychelles
   */
  public static Country SC;
  /**
   * Sierra Leone
   */
  public static Country SL;
  /**
   * Singapore
   */
  public static Country SG;
  /**
   * Slovakia
   */
  public static Country SK;
  /**
   * Slovenia
   */
  public static Country SI;
  /**
   * Solomon Islands
   */
  public static Country SB;
  /**
   * Somalia
   */
  public static Country SO;
  /**
   * South Africa
   */
  public static Country ZA;
  /**
   * South Georgia and the South Sandwich Islands
   */
  public static Country GS;
  /**
   * Spain
   */
  public static Country ES;
  /**
   * Sri Lanka
   */
  public static Country LK;
  /**
   * St. Helena
   */
  public static Country SH;
  /**
   * St. Kitts and Nevis
   */
  public static Country KN;
  /**
   * St. Lucia
   */
  public static Country LC;
  /**
   * St. Pierre and Miquelon
   */
  public static Country PM;
  /**
   * St. Vincent and the Grenadines
   */
  public static Country VC;
  /**
   * Sudan
   */
  public static Country SD;
  /**
   * Suriname
   */
  public static Country SR;
  /**
   * Svalbard and Jan Mayen Islands
   */
  public static Country SJ;
  /**
   * Swaziland
   */
  public static Country SZ;
  /**
   * Sweden
   */
  public static Country SE;
  /**
   * Switzerland
   */
  public static Country CH;
  /**
   * Syria
   */
  public static Country SY;
  /**
   * Taiwan
   */
  public static Country TW;
  /**
   * Tajikistan
   */
  public static Country TJ;
  /**
   * Tanzania
   */
  public static Country TZ;
  /**
   * Thailand
   */
  public static Country TH;
  /**
   * Timor-Leste
   */
  public static Country TL;
  /**
   * Togo
   */
  public static Country TG;
  /**
   * Tokelau (Tokelau Islands)
   */
  public static Country TK;
  /**
   * Tonga
   */
  public static Country TO;
  /**
   * Trinidad and Tobago
   */
  public static Country TT;
  /**
   * Tunisia
   */
  public static Country TN;
  /**
   * Turkey
   */
  public static Country TR;
  /**
   * Turkmenistan
   */
  public static Country TM;
  /**
   * Turks and Caicos Islands
   */
  public static Country TC;
  /**
   * Tuvalu
   */
  public static Country TV;
  /**
   * U.S. Minor Outlying Islands
   */
  public static Country UM;
  /**
   * U.S. Virgin Islands
   */
  public static Country VI;
  /**
   * Uganda
   */
  public static Country UG;
  /**
   * Ukraine
   */
  public static Country UA;
  /**
   * United Arab Emirates
   */
  public static Country AE;
  /**
   * United Kingdom
   */
  public static Country GB;
  /**
   * Uruguay
   */
  public static Country UY;
  /**
   * Uzbekistan
   */
  public static Country UZ;
  /**
   * Vanuatu
   */
  public static Country VU;
  /**
   * Vatican City
   */
  public static Country VA;
  /**
   * Venezuela
   */
  public static Country VE;
  /**
   * Vietnam
   */
  public static Country VN;
  /**
   * Wallis and Futuna Islands
   */
  public static Country WF;
  /**
   * Western Sahara
   */
  public static Country EH;
  /**
   * Yemen
   */
  public static Country YE;
  /**
   * Zambia
   */
  public static Country ZM;
  /**
   * Zimbabwe
   */
  public static Country ZW;
  /**
   * Placeholder typecode for fields that should be populated with another Country
   */
  public static Country UNKNOWN;
  private static final Map<String, Country> ALL_CODES = new LinkedHashMap<String, Country>();


  private static void initTypecodes0() {
    US = new Country("US", 0);
    CA = new Country("CA", 1);
    AF = new Country("AF", 2);
    AL = new Country("AL", 3);
    DZ = new Country("DZ", 4);
    AS = new Country("AS", 5);
    AD = new Country("AD", 6);
    AO = new Country("AO", 7);
    AI = new Country("AI", 8);
    AQ = new Country("AQ", 9);
    AG = new Country("AG", 10);
    AR = new Country("AR", 11);
    AM = new Country("AM", 12);
    AW = new Country("AW", 13);
    AU = new Country("AU", 14);
    AT = new Country("AT", 15);
    AZ = new Country("AZ", 16);
    BS = new Country("BS", 17);
    BH = new Country("BH", 18);
    BD = new Country("BD", 19);
    BB = new Country("BB", 20);
    BY = new Country("BY", 21);
    BE = new Country("BE", 22);
    BZ = new Country("BZ", 23);
    BJ = new Country("BJ", 24);
    BM = new Country("BM", 25);
    BT = new Country("BT", 26);
    BO = new Country("BO", 27);
    BA = new Country("BA", 28);
    BW = new Country("BW", 29);
    BV = new Country("BV", 30);
    BR = new Country("BR", 31);
    IO = new Country("IO", 32);
    VG = new Country("VG", 33);
    BN = new Country("BN", 34);
    BG = new Country("BG", 35);
    BF = new Country("BF", 36);
    BI = new Country("BI", 37);
    KH = new Country("KH", 38);
    CM = new Country("CM", 39);
    CV = new Country("CV", 40);
    KY = new Country("KY", 41);
    CF = new Country("CF", 42);
    TD = new Country("TD", 43);
    CL = new Country("CL", 44);
    CN = new Country("CN", 45);
    CX = new Country("CX", 46);
    CC = new Country("CC", 47);
    CO = new Country("CO", 48);
    KM = new Country("KM", 49);
    CG = new Country("CG", 50);
    CD = new Country("CD", 51);
    CK = new Country("CK", 52);
    CR = new Country("CR", 53);
    HR = new Country("HR", 54);
    CU = new Country("CU", 55);
    CY = new Country("CY", 56);
    CZ = new Country("CZ", 57);
    DK = new Country("DK", 58);
    DJ = new Country("DJ", 59);
    DM = new Country("DM", 60);
    DO = new Country("DO", 61);
    EC = new Country("EC", 62);
    EG = new Country("EG", 63);
    SV = new Country("SV", 64);
    GQ = new Country("GQ", 65);
    ER = new Country("ER", 66);
    EE = new Country("EE", 67);
    ET = new Country("ET", 68);
    FK = new Country("FK", 69);
    FO = new Country("FO", 70);
    FJ = new Country("FJ", 71);
    FI = new Country("FI", 72);
    FR = new Country("FR", 73);
    GF = new Country("GF", 74);
    PF = new Country("PF", 75);
    TF = new Country("TF", 76);
    GA = new Country("GA", 77);
    GM = new Country("GM", 78);
    GE = new Country("GE", 79);
    DE = new Country("DE", 80);
    GH = new Country("GH", 81);
    GI = new Country("GI", 82);
    GR = new Country("GR", 83);
    GL = new Country("GL", 84);
    GD = new Country("GD", 85);
    GP = new Country("GP", 86);
    GU = new Country("GU", 87);
    GT = new Country("GT", 88);
    GN = new Country("GN", 89);
    GW = new Country("GW", 90);
    GY = new Country("GY", 91);
    HT = new Country("HT", 92);
    HM = new Country("HM", 93);
    HN = new Country("HN", 94);
    HK = new Country("HK", 95);
    HU = new Country("HU", 96);
    IS = new Country("IS", 97);
    IN = new Country("IN", 98);
    ID = new Country("ID", 99);
    IR = new Country("IR", 100);
    IQ = new Country("IQ", 101);
    IE = new Country("IE", 102);
    IL = new Country("IL", 103);
    IT = new Country("IT", 104);
    CI = new Country("CI", 105);
    JM = new Country("JM", 106);
    JP = new Country("JP", 107);
    JO = new Country("JO", 108);
    KZ = new Country("KZ", 109);
    KE = new Country("KE", 110);
    KI = new Country("KI", 111);
    KP = new Country("KP", 112);
    KR = new Country("KR", 113);
    KW = new Country("KW", 114);
    KG = new Country("KG", 115);
    LA = new Country("LA", 116);
    LV = new Country("LV", 117);
    LB = new Country("LB", 118);
    LS = new Country("LS", 119);
    LR = new Country("LR", 120);
    LY = new Country("LY", 121);
    LI = new Country("LI", 122);
    LT = new Country("LT", 123);
    LU = new Country("LU", 124);
    MO = new Country("MO", 125);
    MK = new Country("MK", 126);
    MG = new Country("MG", 127);
    MW = new Country("MW", 128);
    MY = new Country("MY", 129);
    MV = new Country("MV", 130);
    ML = new Country("ML", 131);
    MT = new Country("MT", 132);
    MH = new Country("MH", 133);
    MQ = new Country("MQ", 134);
    MR = new Country("MR", 135);
    MU = new Country("MU", 136);
    YT = new Country("YT", 137);
    MX = new Country("MX", 138);
    FM = new Country("FM", 139);
    MD = new Country("MD", 140);
    MC = new Country("MC", 141);
    MN = new Country("MN", 142);
    ME = new Country("ME", 143);
    MS = new Country("MS", 144);
    MA = new Country("MA", 145);
    MZ = new Country("MZ", 146);
    MM = new Country("MM", 147);
    NA = new Country("NA", 148);
    NR = new Country("NR", 149);
    NP = new Country("NP", 150);
    NL = new Country("NL", 151);
    AN = new Country("AN", 152);
    NC = new Country("NC", 153);
    NZ = new Country("NZ", 154);
    NI = new Country("NI", 155);
    NE = new Country("NE", 156);
    NG = new Country("NG", 157);
    NU = new Country("NU", 158);
    NF = new Country("NF", 159);
    MP = new Country("MP", 160);
    NO = new Country("NO", 161);
    OM = new Country("OM", 162);
    PK = new Country("PK", 163);
    PW = new Country("PW", 164);
    PS = new Country("PS", 165);
    PA = new Country("PA", 166);
    PG = new Country("PG", 167);
    PY = new Country("PY", 168);
    PE = new Country("PE", 169);
    PH = new Country("PH", 170);
    PN = new Country("PN", 171);
    PL = new Country("PL", 172);
    PT = new Country("PT", 173);
    PR = new Country("PR", 174);
    QA = new Country("QA", 175);
    RE = new Country("RE", 176);
    RO = new Country("RO", 177);
    RU = new Country("RU", 178);
    RW = new Country("RW", 179);
    BL = new Country("BL", 180);
    MF = new Country("MF", 181);
    WS = new Country("WS", 182);
    SM = new Country("SM", 183);
    ST = new Country("ST", 184);
    SA = new Country("SA", 185);
    SN = new Country("SN", 186);
    RS = new Country("RS", 187);
    SC = new Country("SC", 188);
    SL = new Country("SL", 189);
    SG = new Country("SG", 190);
    SK = new Country("SK", 191);
    SI = new Country("SI", 192);
    SB = new Country("SB", 193);
    SO = new Country("SO", 194);
    ZA = new Country("ZA", 195);
    GS = new Country("GS", 196);
    ES = new Country("ES", 197);
    LK = new Country("LK", 198);
    SH = new Country("SH", 199);
    KN = new Country("KN", 200);
    LC = new Country("LC", 201);
    PM = new Country("PM", 202);
    VC = new Country("VC", 203);
    SD = new Country("SD", 204);
    SR = new Country("SR", 205);
    SJ = new Country("SJ", 206);
    SZ = new Country("SZ", 207);
    SE = new Country("SE", 208);
    CH = new Country("CH", 209);
    SY = new Country("SY", 210);
    TW = new Country("TW", 211);
    TJ = new Country("TJ", 212);
    TZ = new Country("TZ", 213);
    TH = new Country("TH", 214);
    TL = new Country("TL", 215);
    TG = new Country("TG", 216);
    TK = new Country("TK", 217);
    TO = new Country("TO", 218);
    TT = new Country("TT", 219);
    TN = new Country("TN", 220);
    TR = new Country("TR", 221);
    TM = new Country("TM", 222);
    TC = new Country("TC", 223);
    TV = new Country("TV", 224);
    UM = new Country("UM", 225);
    VI = new Country("VI", 226);
    UG = new Country("UG", 227);
    UA = new Country("UA", 228);
    AE = new Country("AE", 229);
    GB = new Country("GB", 230);
    UY = new Country("UY", 231);
    UZ = new Country("UZ", 232);
    VU = new Country("VU", 233);
    VA = new Country("VA", 234);
    VE = new Country("VE", 235);
    VN = new Country("VN", 236);
    WF = new Country("WF", 237);
    EH = new Country("EH", 238);
    YE = new Country("YE", 239);
    ZM = new Country("ZM", 240);
    ZW = new Country("ZW", 241);
    UNKNOWN = new Country("unknown", 242);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate Country instance, or null if no such code is present in the list
   */
  public static Country getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static Country[] values() {
    Collection<Country> keys = ALL_CODES.values();
    return keys.toArray(new Country[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private Country(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "Country";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Country.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Country.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Country.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Country.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Country.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Country.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.Country.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Country.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Country.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.Country.class, "Categories");
  }

  /**
   * Compares two Country instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(Country o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
