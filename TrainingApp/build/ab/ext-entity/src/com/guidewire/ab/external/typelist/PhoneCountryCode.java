package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * List of regions and their regional phone codes
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class PhoneCountryCode implements TypeKey, Comparable<PhoneCountryCode> {
  /**
   * 0
   */
  public static PhoneCountryCode ZZ;
  /**
   * Unparseable Phone Numbers
   */
  public static PhoneCountryCode UNPARSEABLE;
  /**
   * 93
   */
  public static PhoneCountryCode AF;
  /**
   * 358
   */
  public static PhoneCountryCode AX;
  /**
   * 355
   */
  public static PhoneCountryCode AL;
  /**
   * 213
   */
  public static PhoneCountryCode DZ;
  /**
   * 1
   */
  public static PhoneCountryCode AS;
  /**
   * 376
   */
  public static PhoneCountryCode AD;
  /**
   * 244
   */
  public static PhoneCountryCode AO;
  /**
   * 1
   */
  public static PhoneCountryCode AI;
  /**
   * 1
   */
  public static PhoneCountryCode AG;
  /**
   * 54
   */
  public static PhoneCountryCode AR;
  /**
   * 374
   */
  public static PhoneCountryCode AM;
  /**
   * 297
   */
  public static PhoneCountryCode AW;
  /**
   * 247
   */
  public static PhoneCountryCode AC;
  /**
   * 61
   */
  public static PhoneCountryCode AU;
  /**
   * 43
   */
  public static PhoneCountryCode AT;
  /**
   * 994
   */
  public static PhoneCountryCode AZ;
  /**
   * 1
   */
  public static PhoneCountryCode BS;
  /**
   * 973
   */
  public static PhoneCountryCode BH;
  /**
   * 880
   */
  public static PhoneCountryCode BD;
  /**
   * 1
   */
  public static PhoneCountryCode BB;
  /**
   * 375
   */
  public static PhoneCountryCode BY;
  /**
   * 32
   */
  public static PhoneCountryCode BE;
  /**
   * 501
   */
  public static PhoneCountryCode BZ;
  /**
   * 229
   */
  public static PhoneCountryCode BJ;
  /**
   * 1
   */
  public static PhoneCountryCode BM;
  /**
   * 975
   */
  public static PhoneCountryCode BT;
  /**
   * 591
   */
  public static PhoneCountryCode BO;
  /**
   * 387
   */
  public static PhoneCountryCode BA;
  /**
   * 267
   */
  public static PhoneCountryCode BW;
  /**
   * 599
   */
  public static PhoneCountryCode BQ;
  /**
   * 55
   */
  public static PhoneCountryCode BR;
  /**
   * 246
   */
  public static PhoneCountryCode IO;
  /**
   * 1
   */
  public static PhoneCountryCode VG;
  /**
   * 673
   */
  public static PhoneCountryCode BN;
  /**
   * 359
   */
  public static PhoneCountryCode BG;
  /**
   * 226
   */
  public static PhoneCountryCode BF;
  /**
   * 257
   */
  public static PhoneCountryCode BI;
  /**
   * 855
   */
  public static PhoneCountryCode KH;
  /**
   * 237
   */
  public static PhoneCountryCode CM;
  /**
   * 1
   */
  public static PhoneCountryCode CA;
  /**
   * 238
   */
  public static PhoneCountryCode CV;
  /**
   * 1
   */
  public static PhoneCountryCode KY;
  /**
   * 236
   */
  public static PhoneCountryCode CF;
  /**
   * 235
   */
  public static PhoneCountryCode TD;
  /**
   * 56
   */
  public static PhoneCountryCode CL;
  /**
   * 86
   */
  public static PhoneCountryCode CN;
  /**
   * 61
   */
  public static PhoneCountryCode CX;
  /**
   * 61
   */
  public static PhoneCountryCode CC;
  /**
   * 57
   */
  public static PhoneCountryCode CO;
  /**
   * 269
   */
  public static PhoneCountryCode KM;
  /**
   * 242
   */
  public static PhoneCountryCode CG;
  /**
   * 243
   */
  public static PhoneCountryCode CD;
  /**
   * 682
   */
  public static PhoneCountryCode CK;
  /**
   * 506
   */
  public static PhoneCountryCode CR;
  /**
   * 385
   */
  public static PhoneCountryCode HR;
  /**
   * 53
   */
  public static PhoneCountryCode CU;
  /**
   * 599
   */
  public static PhoneCountryCode CW;
  /**
   * 357
   */
  public static PhoneCountryCode CY;
  /**
   * 420
   */
  public static PhoneCountryCode CZ;
  /**
   * 45
   */
  public static PhoneCountryCode DK;
  /**
   * 253
   */
  public static PhoneCountryCode DJ;
  /**
   * 1
   */
  public static PhoneCountryCode DM;
  /**
   * 1
   */
  public static PhoneCountryCode DO;
  /**
   * 593
   */
  public static PhoneCountryCode EC;
  /**
   * 20
   */
  public static PhoneCountryCode EG;
  /**
   * 503
   */
  public static PhoneCountryCode SV;
  /**
   * 240
   */
  public static PhoneCountryCode GQ;
  /**
   * 291
   */
  public static PhoneCountryCode ER;
  /**
   * 372
   */
  public static PhoneCountryCode EE;
  /**
   * 251
   */
  public static PhoneCountryCode ET;
  /**
   * 500
   */
  public static PhoneCountryCode FK;
  /**
   * 298
   */
  public static PhoneCountryCode FO;
  /**
   * 679
   */
  public static PhoneCountryCode FJ;
  /**
   * 358
   */
  public static PhoneCountryCode FI;
  /**
   * 33
   */
  public static PhoneCountryCode FR;
  /**
   * 594
   */
  public static PhoneCountryCode GF;
  /**
   * 689
   */
  public static PhoneCountryCode PF;
  /**
   * 241
   */
  public static PhoneCountryCode GA;
  /**
   * 220
   */
  public static PhoneCountryCode GM;
  /**
   * 995
   */
  public static PhoneCountryCode GE;
  /**
   * 49
   */
  public static PhoneCountryCode DE;
  /**
   * 233
   */
  public static PhoneCountryCode GH;
  /**
   * 350
   */
  public static PhoneCountryCode GI;
  /**
   * 30
   */
  public static PhoneCountryCode GR;
  /**
   * 299
   */
  public static PhoneCountryCode GL;
  /**
   * 1
   */
  public static PhoneCountryCode GD;
  /**
   * 590
   */
  public static PhoneCountryCode GP;
  /**
   * 1
   */
  public static PhoneCountryCode GU;
  /**
   * 502
   */
  public static PhoneCountryCode GT;
  /**
   * 44
   */
  public static PhoneCountryCode GG;
  /**
   * 224
   */
  public static PhoneCountryCode GN;
  /**
   * 245
   */
  public static PhoneCountryCode GW;
  /**
   * 592
   */
  public static PhoneCountryCode GY;
  /**
   * 509
   */
  public static PhoneCountryCode HT;
  /**
   * 504
   */
  public static PhoneCountryCode HN;
  /**
   * 852
   */
  public static PhoneCountryCode HK;
  /**
   * 36
   */
  public static PhoneCountryCode HU;
  /**
   * 354
   */
  public static PhoneCountryCode IS;
  /**
   * 91
   */
  public static PhoneCountryCode IN;
  /**
   * 62
   */
  public static PhoneCountryCode ID;
  /**
   * 98
   */
  public static PhoneCountryCode IR;
  /**
   * 964
   */
  public static PhoneCountryCode IQ;
  /**
   * 353
   */
  public static PhoneCountryCode IE;
  /**
   * 44
   */
  public static PhoneCountryCode IM;
  /**
   * 972
   */
  public static PhoneCountryCode IL;
  /**
   * 39
   */
  public static PhoneCountryCode IT;
  /**
   * 225
   */
  public static PhoneCountryCode CI;
  /**
   * 1
   */
  public static PhoneCountryCode JM;
  /**
   * 81
   */
  public static PhoneCountryCode JP;
  /**
   * 44
   */
  public static PhoneCountryCode JE;
  /**
   * 962
   */
  public static PhoneCountryCode JO;
  /**
   * 7
   */
  public static PhoneCountryCode KZ;
  /**
   * 254
   */
  public static PhoneCountryCode KE;
  /**
   * 686
   */
  public static PhoneCountryCode KI;
  /**
   * 965
   */
  public static PhoneCountryCode KW;
  /**
   * 996
   */
  public static PhoneCountryCode KG;
  /**
   * 856
   */
  public static PhoneCountryCode LA;
  /**
   * 371
   */
  public static PhoneCountryCode LV;
  /**
   * 961
   */
  public static PhoneCountryCode LB;
  /**
   * 266
   */
  public static PhoneCountryCode LS;
  /**
   * 231
   */
  public static PhoneCountryCode LR;
  /**
   * 218
   */
  public static PhoneCountryCode LY;
  /**
   * 423
   */
  public static PhoneCountryCode LI;
  /**
   * 370
   */
  public static PhoneCountryCode LT;
  /**
   * 352
   */
  public static PhoneCountryCode LU;
  /**
   * 853
   */
  public static PhoneCountryCode MO;
  /**
   * 389
   */
  public static PhoneCountryCode MK;
  /**
   * 261
   */
  public static PhoneCountryCode MG;
  /**
   * 265
   */
  public static PhoneCountryCode MW;
  /**
   * 60
   */
  public static PhoneCountryCode MY;
  /**
   * 960
   */
  public static PhoneCountryCode MV;
  /**
   * 223
   */
  public static PhoneCountryCode ML;
  /**
   * 356
   */
  public static PhoneCountryCode MT;
  /**
   * 692
   */
  public static PhoneCountryCode MH;
  /**
   * 596
   */
  public static PhoneCountryCode MQ;
  /**
   * 222
   */
  public static PhoneCountryCode MR;
  /**
   * 230
   */
  public static PhoneCountryCode MU;
  /**
   * 262
   */
  public static PhoneCountryCode YT;
  /**
   * 52
   */
  public static PhoneCountryCode MX;
  /**
   * 691
   */
  public static PhoneCountryCode FM;
  /**
   * 373
   */
  public static PhoneCountryCode MD;
  /**
   * 377
   */
  public static PhoneCountryCode MC;
  /**
   * 976
   */
  public static PhoneCountryCode MN;
  /**
   * 382
   */
  public static PhoneCountryCode ME;
  /**
   * 1
   */
  public static PhoneCountryCode MS;
  /**
   * 212
   */
  public static PhoneCountryCode MA;
  /**
   * 258
   */
  public static PhoneCountryCode MZ;
  /**
   * 95
   */
  public static PhoneCountryCode MM;
  /**
   * 264
   */
  public static PhoneCountryCode NA;
  /**
   * 674
   */
  public static PhoneCountryCode NR;
  /**
   * 977
   */
  public static PhoneCountryCode NP;
  /**
   * 31
   */
  public static PhoneCountryCode NL;
  /**
   * 599
   */
  public static PhoneCountryCode AN;
  /**
   * 687
   */
  public static PhoneCountryCode NC;
  /**
   * 64
   */
  public static PhoneCountryCode NZ;
  /**
   * 505
   */
  public static PhoneCountryCode NI;
  /**
   * 227
   */
  public static PhoneCountryCode NE;
  /**
   * 234
   */
  public static PhoneCountryCode NG;
  /**
   * 683
   */
  public static PhoneCountryCode NU;
  /**
   * 672
   */
  public static PhoneCountryCode NF;
  /**
   * 850
   */
  public static PhoneCountryCode KP;
  /**
   * 1
   */
  public static PhoneCountryCode MP;
  /**
   * 47
   */
  public static PhoneCountryCode NO;
  /**
   * 968
   */
  public static PhoneCountryCode OM;
  /**
   * 92
   */
  public static PhoneCountryCode PK;
  /**
   * 680
   */
  public static PhoneCountryCode PW;
  /**
   * 970
   */
  public static PhoneCountryCode PS;
  /**
   * 507
   */
  public static PhoneCountryCode PA;
  /**
   * 675
   */
  public static PhoneCountryCode PG;
  /**
   * 595
   */
  public static PhoneCountryCode PY;
  /**
   * 51
   */
  public static PhoneCountryCode PE;
  /**
   * 63
   */
  public static PhoneCountryCode PH;
  /**
   * 48
   */
  public static PhoneCountryCode PL;
  /**
   * 351
   */
  public static PhoneCountryCode PT;
  /**
   * 1
   */
  public static PhoneCountryCode PR;
  /**
   * 974
   */
  public static PhoneCountryCode QA;
  /**
   * 262
   */
  public static PhoneCountryCode RE;
  /**
   * 40
   */
  public static PhoneCountryCode RO;
  /**
   * 7
   */
  public static PhoneCountryCode RU;
  /**
   * 250
   */
  public static PhoneCountryCode RW;
  /**
   * 590
   */
  public static PhoneCountryCode BL;
  /**
   * 290
   */
  public static PhoneCountryCode SH;
  /**
   * 1
   */
  public static PhoneCountryCode KN;
  /**
   * 1
   */
  public static PhoneCountryCode LC;
  /**
   * 590
   */
  public static PhoneCountryCode MF;
  /**
   * 508
   */
  public static PhoneCountryCode PM;
  /**
   * 1
   */
  public static PhoneCountryCode VC;
  /**
   * 685
   */
  public static PhoneCountryCode WS;
  /**
   * 378
   */
  public static PhoneCountryCode SM;
  /**
   * 239
   */
  public static PhoneCountryCode ST;
  /**
   * 966
   */
  public static PhoneCountryCode SA;
  /**
   * 221
   */
  public static PhoneCountryCode SN;
  /**
   * 381
   */
  public static PhoneCountryCode RS;
  /**
   * 248
   */
  public static PhoneCountryCode SC;
  /**
   * 232
   */
  public static PhoneCountryCode SL;
  /**
   * 65
   */
  public static PhoneCountryCode SG;
  /**
   * 1
   */
  public static PhoneCountryCode SX;
  /**
   * 421
   */
  public static PhoneCountryCode SK;
  /**
   * 386
   */
  public static PhoneCountryCode SI;
  /**
   * 677
   */
  public static PhoneCountryCode SB;
  /**
   * 252
   */
  public static PhoneCountryCode SO;
  /**
   * 27
   */
  public static PhoneCountryCode ZA;
  /**
   * 82
   */
  public static PhoneCountryCode KR;
  /**
   * 34
   */
  public static PhoneCountryCode ES;
  /**
   * 94
   */
  public static PhoneCountryCode LK;
  /**
   * 211
   */
  public static PhoneCountryCode SS;
  /**
   * 249
   */
  public static PhoneCountryCode SD;
  /**
   * 597
   */
  public static PhoneCountryCode SR;
  /**
   * 47
   */
  public static PhoneCountryCode SJ;
  /**
   * 268
   */
  public static PhoneCountryCode SZ;
  /**
   * 46
   */
  public static PhoneCountryCode SE;
  /**
   * 41
   */
  public static PhoneCountryCode CH;
  /**
   * 963
   */
  public static PhoneCountryCode SY;
  /**
   * 886
   */
  public static PhoneCountryCode TW;
  /**
   * 992
   */
  public static PhoneCountryCode TJ;
  /**
   * 255
   */
  public static PhoneCountryCode TZ;
  /**
   * 66
   */
  public static PhoneCountryCode TH;
  /**
   * 670
   */
  public static PhoneCountryCode TL;
  /**
   * 228
   */
  public static PhoneCountryCode TG;
  /**
   * 690
   */
  public static PhoneCountryCode TK;
  /**
   * 676
   */
  public static PhoneCountryCode TO;
  /**
   * 1
   */
  public static PhoneCountryCode TT;
  /**
   * 216
   */
  public static PhoneCountryCode TN;
  /**
   * 90
   */
  public static PhoneCountryCode TR;
  /**
   * 993
   */
  public static PhoneCountryCode TM;
  /**
   * 1
   */
  public static PhoneCountryCode TC;
  /**
   * 688
   */
  public static PhoneCountryCode TV;
  /**
   * 1
   */
  public static PhoneCountryCode VI;
  /**
   * 256
   */
  public static PhoneCountryCode UG;
  /**
   * 380
   */
  public static PhoneCountryCode UA;
  /**
   * 971
   */
  public static PhoneCountryCode AE;
  /**
   * 44
   */
  public static PhoneCountryCode GB;
  /**
   * 1
   */
  public static PhoneCountryCode US;
  /**
   * 598
   */
  public static PhoneCountryCode UY;
  /**
   * 998
   */
  public static PhoneCountryCode UZ;
  /**
   * 678
   */
  public static PhoneCountryCode VU;
  /**
   * 379
   */
  public static PhoneCountryCode VA;
  /**
   * 58
   */
  public static PhoneCountryCode VE;
  /**
   * 84
   */
  public static PhoneCountryCode VN;
  /**
   * 681
   */
  public static PhoneCountryCode WF;
  /**
   * 967
   */
  public static PhoneCountryCode YE;
  /**
   * 260
   */
  public static PhoneCountryCode ZM;
  /**
   * 263
   */
  public static PhoneCountryCode ZW;
  private static final Map<String, PhoneCountryCode> ALL_CODES = new LinkedHashMap<String, PhoneCountryCode>();


  private static void initTypecodes0() {
    ZZ = new PhoneCountryCode("ZZ", 0);
    UNPARSEABLE = new PhoneCountryCode("UNPARSEABLE", 1);
    AF = new PhoneCountryCode("AF", 2);
    AX = new PhoneCountryCode("AX", 3);
    AL = new PhoneCountryCode("AL", 4);
    DZ = new PhoneCountryCode("DZ", 5);
    AS = new PhoneCountryCode("AS", 6);
    AD = new PhoneCountryCode("AD", 7);
    AO = new PhoneCountryCode("AO", 8);
    AI = new PhoneCountryCode("AI", 9);
    AG = new PhoneCountryCode("AG", 10);
    AR = new PhoneCountryCode("AR", 11);
    AM = new PhoneCountryCode("AM", 12);
    AW = new PhoneCountryCode("AW", 13);
    AC = new PhoneCountryCode("AC", 14);
    AU = new PhoneCountryCode("AU", 15);
    AT = new PhoneCountryCode("AT", 16);
    AZ = new PhoneCountryCode("AZ", 17);
    BS = new PhoneCountryCode("BS", 18);
    BH = new PhoneCountryCode("BH", 19);
    BD = new PhoneCountryCode("BD", 20);
    BB = new PhoneCountryCode("BB", 21);
    BY = new PhoneCountryCode("BY", 22);
    BE = new PhoneCountryCode("BE", 23);
    BZ = new PhoneCountryCode("BZ", 24);
    BJ = new PhoneCountryCode("BJ", 25);
    BM = new PhoneCountryCode("BM", 26);
    BT = new PhoneCountryCode("BT", 27);
    BO = new PhoneCountryCode("BO", 28);
    BA = new PhoneCountryCode("BA", 29);
    BW = new PhoneCountryCode("BW", 30);
    BQ = new PhoneCountryCode("BQ", 31);
    BR = new PhoneCountryCode("BR", 32);
    IO = new PhoneCountryCode("IO", 33);
    VG = new PhoneCountryCode("VG", 34);
    BN = new PhoneCountryCode("BN", 35);
    BG = new PhoneCountryCode("BG", 36);
    BF = new PhoneCountryCode("BF", 37);
    BI = new PhoneCountryCode("BI", 38);
    KH = new PhoneCountryCode("KH", 39);
    CM = new PhoneCountryCode("CM", 40);
    CA = new PhoneCountryCode("CA", 41);
    CV = new PhoneCountryCode("CV", 42);
    KY = new PhoneCountryCode("KY", 43);
    CF = new PhoneCountryCode("CF", 44);
    TD = new PhoneCountryCode("TD", 45);
    CL = new PhoneCountryCode("CL", 46);
    CN = new PhoneCountryCode("CN", 47);
    CX = new PhoneCountryCode("CX", 48);
    CC = new PhoneCountryCode("CC", 49);
    CO = new PhoneCountryCode("CO", 50);
    KM = new PhoneCountryCode("KM", 51);
    CG = new PhoneCountryCode("CG", 52);
    CD = new PhoneCountryCode("CD", 53);
    CK = new PhoneCountryCode("CK", 54);
    CR = new PhoneCountryCode("CR", 55);
    HR = new PhoneCountryCode("HR", 56);
    CU = new PhoneCountryCode("CU", 57);
    CW = new PhoneCountryCode("CW", 58);
    CY = new PhoneCountryCode("CY", 59);
    CZ = new PhoneCountryCode("CZ", 60);
    DK = new PhoneCountryCode("DK", 61);
    DJ = new PhoneCountryCode("DJ", 62);
    DM = new PhoneCountryCode("DM", 63);
    DO = new PhoneCountryCode("DO", 64);
    EC = new PhoneCountryCode("EC", 65);
    EG = new PhoneCountryCode("EG", 66);
    SV = new PhoneCountryCode("SV", 67);
    GQ = new PhoneCountryCode("GQ", 68);
    ER = new PhoneCountryCode("ER", 69);
    EE = new PhoneCountryCode("EE", 70);
    ET = new PhoneCountryCode("ET", 71);
    FK = new PhoneCountryCode("FK", 72);
    FO = new PhoneCountryCode("FO", 73);
    FJ = new PhoneCountryCode("FJ", 74);
    FI = new PhoneCountryCode("FI", 75);
    FR = new PhoneCountryCode("FR", 76);
    GF = new PhoneCountryCode("GF", 77);
    PF = new PhoneCountryCode("PF", 78);
    GA = new PhoneCountryCode("GA", 79);
    GM = new PhoneCountryCode("GM", 80);
    GE = new PhoneCountryCode("GE", 81);
    DE = new PhoneCountryCode("DE", 82);
    GH = new PhoneCountryCode("GH", 83);
    GI = new PhoneCountryCode("GI", 84);
    GR = new PhoneCountryCode("GR", 85);
    GL = new PhoneCountryCode("GL", 86);
    GD = new PhoneCountryCode("GD", 87);
    GP = new PhoneCountryCode("GP", 88);
    GU = new PhoneCountryCode("GU", 89);
    GT = new PhoneCountryCode("GT", 90);
    GG = new PhoneCountryCode("GG", 91);
    GN = new PhoneCountryCode("GN", 92);
    GW = new PhoneCountryCode("GW", 93);
    GY = new PhoneCountryCode("GY", 94);
    HT = new PhoneCountryCode("HT", 95);
    HN = new PhoneCountryCode("HN", 96);
    HK = new PhoneCountryCode("HK", 97);
    HU = new PhoneCountryCode("HU", 98);
    IS = new PhoneCountryCode("IS", 99);
    IN = new PhoneCountryCode("IN", 100);
    ID = new PhoneCountryCode("ID", 101);
    IR = new PhoneCountryCode("IR", 102);
    IQ = new PhoneCountryCode("IQ", 103);
    IE = new PhoneCountryCode("IE", 104);
    IM = new PhoneCountryCode("IM", 105);
    IL = new PhoneCountryCode("IL", 106);
    IT = new PhoneCountryCode("IT", 107);
    CI = new PhoneCountryCode("CI", 108);
    JM = new PhoneCountryCode("JM", 109);
    JP = new PhoneCountryCode("JP", 110);
    JE = new PhoneCountryCode("JE", 111);
    JO = new PhoneCountryCode("JO", 112);
    KZ = new PhoneCountryCode("KZ", 113);
    KE = new PhoneCountryCode("KE", 114);
    KI = new PhoneCountryCode("KI", 115);
    KW = new PhoneCountryCode("KW", 116);
    KG = new PhoneCountryCode("KG", 117);
    LA = new PhoneCountryCode("LA", 118);
    LV = new PhoneCountryCode("LV", 119);
    LB = new PhoneCountryCode("LB", 120);
    LS = new PhoneCountryCode("LS", 121);
    LR = new PhoneCountryCode("LR", 122);
    LY = new PhoneCountryCode("LY", 123);
    LI = new PhoneCountryCode("LI", 124);
    LT = new PhoneCountryCode("LT", 125);
    LU = new PhoneCountryCode("LU", 126);
    MO = new PhoneCountryCode("MO", 127);
    MK = new PhoneCountryCode("MK", 128);
    MG = new PhoneCountryCode("MG", 129);
    MW = new PhoneCountryCode("MW", 130);
    MY = new PhoneCountryCode("MY", 131);
    MV = new PhoneCountryCode("MV", 132);
    ML = new PhoneCountryCode("ML", 133);
    MT = new PhoneCountryCode("MT", 134);
    MH = new PhoneCountryCode("MH", 135);
    MQ = new PhoneCountryCode("MQ", 136);
    MR = new PhoneCountryCode("MR", 137);
    MU = new PhoneCountryCode("MU", 138);
    YT = new PhoneCountryCode("YT", 139);
    MX = new PhoneCountryCode("MX", 140);
    FM = new PhoneCountryCode("FM", 141);
    MD = new PhoneCountryCode("MD", 142);
    MC = new PhoneCountryCode("MC", 143);
    MN = new PhoneCountryCode("MN", 144);
    ME = new PhoneCountryCode("ME", 145);
    MS = new PhoneCountryCode("MS", 146);
    MA = new PhoneCountryCode("MA", 147);
    MZ = new PhoneCountryCode("MZ", 148);
    MM = new PhoneCountryCode("MM", 149);
    NA = new PhoneCountryCode("NA", 150);
    NR = new PhoneCountryCode("NR", 151);
    NP = new PhoneCountryCode("NP", 152);
    NL = new PhoneCountryCode("NL", 153);
    AN = new PhoneCountryCode("AN", 154);
    NC = new PhoneCountryCode("NC", 155);
    NZ = new PhoneCountryCode("NZ", 156);
    NI = new PhoneCountryCode("NI", 157);
    NE = new PhoneCountryCode("NE", 158);
    NG = new PhoneCountryCode("NG", 159);
    NU = new PhoneCountryCode("NU", 160);
    NF = new PhoneCountryCode("NF", 161);
    KP = new PhoneCountryCode("KP", 162);
    MP = new PhoneCountryCode("MP", 163);
    NO = new PhoneCountryCode("NO", 164);
    OM = new PhoneCountryCode("OM", 165);
    PK = new PhoneCountryCode("PK", 166);
    PW = new PhoneCountryCode("PW", 167);
    PS = new PhoneCountryCode("PS", 168);
    PA = new PhoneCountryCode("PA", 169);
    PG = new PhoneCountryCode("PG", 170);
    PY = new PhoneCountryCode("PY", 171);
    PE = new PhoneCountryCode("PE", 172);
    PH = new PhoneCountryCode("PH", 173);
    PL = new PhoneCountryCode("PL", 174);
    PT = new PhoneCountryCode("PT", 175);
    PR = new PhoneCountryCode("PR", 176);
    QA = new PhoneCountryCode("QA", 177);
    RE = new PhoneCountryCode("RE", 178);
    RO = new PhoneCountryCode("RO", 179);
    RU = new PhoneCountryCode("RU", 180);
    RW = new PhoneCountryCode("RW", 181);
    BL = new PhoneCountryCode("BL", 182);
    SH = new PhoneCountryCode("SH", 183);
    KN = new PhoneCountryCode("KN", 184);
    LC = new PhoneCountryCode("LC", 185);
    MF = new PhoneCountryCode("MF", 186);
    PM = new PhoneCountryCode("PM", 187);
    VC = new PhoneCountryCode("VC", 188);
    WS = new PhoneCountryCode("WS", 189);
    SM = new PhoneCountryCode("SM", 190);
    ST = new PhoneCountryCode("ST", 191);
    SA = new PhoneCountryCode("SA", 192);
    SN = new PhoneCountryCode("SN", 193);
    RS = new PhoneCountryCode("RS", 194);
    SC = new PhoneCountryCode("SC", 195);
    SL = new PhoneCountryCode("SL", 196);
    SG = new PhoneCountryCode("SG", 197);
    SX = new PhoneCountryCode("SX", 198);
    SK = new PhoneCountryCode("SK", 199);
    SI = new PhoneCountryCode("SI", 200);
    SB = new PhoneCountryCode("SB", 201);
    SO = new PhoneCountryCode("SO", 202);
    ZA = new PhoneCountryCode("ZA", 203);
    KR = new PhoneCountryCode("KR", 204);
    ES = new PhoneCountryCode("ES", 205);
    LK = new PhoneCountryCode("LK", 206);
    SS = new PhoneCountryCode("SS", 207);
    SD = new PhoneCountryCode("SD", 208);
    SR = new PhoneCountryCode("SR", 209);
    SJ = new PhoneCountryCode("SJ", 210);
    SZ = new PhoneCountryCode("SZ", 211);
    SE = new PhoneCountryCode("SE", 212);
    CH = new PhoneCountryCode("CH", 213);
    SY = new PhoneCountryCode("SY", 214);
    TW = new PhoneCountryCode("TW", 215);
    TJ = new PhoneCountryCode("TJ", 216);
    TZ = new PhoneCountryCode("TZ", 217);
    TH = new PhoneCountryCode("TH", 218);
    TL = new PhoneCountryCode("TL", 219);
    TG = new PhoneCountryCode("TG", 220);
    TK = new PhoneCountryCode("TK", 221);
    TO = new PhoneCountryCode("TO", 222);
    TT = new PhoneCountryCode("TT", 223);
    TN = new PhoneCountryCode("TN", 224);
    TR = new PhoneCountryCode("TR", 225);
    TM = new PhoneCountryCode("TM", 226);
    TC = new PhoneCountryCode("TC", 227);
    TV = new PhoneCountryCode("TV", 228);
    VI = new PhoneCountryCode("VI", 229);
    UG = new PhoneCountryCode("UG", 230);
    UA = new PhoneCountryCode("UA", 231);
    AE = new PhoneCountryCode("AE", 232);
    GB = new PhoneCountryCode("GB", 233);
    US = new PhoneCountryCode("US", 234);
    UY = new PhoneCountryCode("UY", 235);
    UZ = new PhoneCountryCode("UZ", 236);
    VU = new PhoneCountryCode("VU", 237);
    VA = new PhoneCountryCode("VA", 238);
    VE = new PhoneCountryCode("VE", 239);
    VN = new PhoneCountryCode("VN", 240);
    WF = new PhoneCountryCode("WF", 241);
    YE = new PhoneCountryCode("YE", 242);
    ZM = new PhoneCountryCode("ZM", 243);
    ZW = new PhoneCountryCode("ZW", 244);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate PhoneCountryCode instance, or null if no such code is present in the list
   */
  public static PhoneCountryCode getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static PhoneCountryCode[] values() {
    Collection<PhoneCountryCode> keys = ALL_CODES.values();
    return keys.toArray(new PhoneCountryCode[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private PhoneCountryCode(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "PhoneCountryCode";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PhoneCountryCode.class, "Categories");
  }

  /**
   * Compares two PhoneCountryCode instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(PhoneCountryCode o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
