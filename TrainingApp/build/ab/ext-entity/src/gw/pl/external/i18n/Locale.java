package com.guidewire.external.i18n;

import java.util.Map;
import java.util.HashMap;
import gw.pl.external.i18n.ILocale;

/**
 * Represents the configured locales.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public enum Locale implements ILocale {

  /**
   * German (Germany)
   */
  DE_DE("de_DE"),

  /**
   * English (Australia)
   */
  EN_AU("en_AU"),

  /**
   * English (Canada)
   */
  EN_CA("en_CA"),

  /**
   * English (United Kingdom)
   */
  EN_GB("en_GB"),

  /**
   * United States (English)
   */
  EN_US("en_US"),

  /**
   * French (Canada)
   */
  FR_CA("fr_CA"),

  /**
   * French (France)
   */
  FR_FR("fr_FR"),

  /**
   * Japanese
   */
  JA_JP("ja_JP"),
  ;

  private static final Map<String, Locale> ALL_CODES = new HashMap<String, Locale>();

  static {
    for (Locale val : values()) {
      ALL_CODES.put(val.getCode(), val);
    }
  }

  /**
   * Retrieves a locale constant by its code.
   */
  public static Locale getByCode(String code) {
    return ALL_CODES.get(code);
  }

  private final String _code;

  private Locale(String code) {
    _code = code;
  }

  public String getCode() {
    return _code;
  }
}
