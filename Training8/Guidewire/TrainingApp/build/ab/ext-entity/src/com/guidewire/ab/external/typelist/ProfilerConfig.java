package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Subtype typelist for entity ProfilerConfig
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ProfilerConfig implements TypeKey, Comparable<ProfilerConfig> {
  /**
   * BPProfilerConfig
   */
  public static ProfilerConfig BPPROFILERCONFIG;
  /**
   * MDProfilerConfig
   */
  public static ProfilerConfig MDPROFILERCONFIG;
  /**
   * ProfilerConfig
   */
  public static ProfilerConfig PROFILERCONFIG;
  /**
   * SPProfilerConfig
   */
  public static ProfilerConfig SPPROFILERCONFIG;
  /**
   * WebProfilerConfig
   */
  public static ProfilerConfig WEBPROFILERCONFIG;
  /**
   * WQProfilerConfig
   */
  public static ProfilerConfig WQPROFILERCONFIG;
  /**
   * WSProfilerConfig
   */
  public static ProfilerConfig WSPROFILERCONFIG;
  private static final Map<String, ProfilerConfig> ALL_CODES = new LinkedHashMap<String, ProfilerConfig>();


  private static void initTypecodes0() {
    BPPROFILERCONFIG = new ProfilerConfig("BPProfilerConfig", 0);
    MDPROFILERCONFIG = new ProfilerConfig("MDProfilerConfig", 1);
    PROFILERCONFIG = new ProfilerConfig("ProfilerConfig", 2);
    SPPROFILERCONFIG = new ProfilerConfig("SPProfilerConfig", 3);
    WEBPROFILERCONFIG = new ProfilerConfig("WebProfilerConfig", 4);
    WQPROFILERCONFIG = new ProfilerConfig("WQProfilerConfig", 5);
    WSPROFILERCONFIG = new ProfilerConfig("WSProfilerConfig", 6);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ProfilerConfig instance, or null if no such code is present in the list
   */
  public static ProfilerConfig getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ProfilerConfig[] values() {
    Collection<ProfilerConfig> keys = ALL_CODES.values();
    return keys.toArray(new ProfilerConfig[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ProfilerConfig(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ProfilerConfig";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ProfilerConfig.class, "Categories");
  }

  /**
   * Compares two ProfilerConfig instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ProfilerConfig o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
