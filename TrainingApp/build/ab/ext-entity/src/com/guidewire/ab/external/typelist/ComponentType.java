package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Identifiers for the components in the system
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ComponentType implements TypeKey, Comparable<ComponentType> {
  /**
   * Approval Engine
   */
  public static ComponentType APPROVAL;
  /**
   * Assignment Engine
   */
  public static ComponentType ASSIGNENG;
  /**
   * Manages users and passwords in the product database
   */
  public static ComponentType AUTH;
  /**
   * Business calendar for use in statistics calculations
   */
  public static ComponentType BUSINESSCALENDAR;
  /**
   * Server cache
   */
  public static ComponentType CACHE;
  /**
   * Cluster communication channel
   */
  public static ComponentType CLUSTERCHANNEL;
  /**
   * Configuration component
   */
  public static ComponentType CONFIGURATION;
  /**
   * Database
   */
  public static ComponentType DB;
  /**
   * Database Clock
   */
  public static ComponentType CLOCK;
  /**
   * Deduction Engine
   */
  public static ComponentType DEDUCTION;
  /**
   * Manages entity lifecycle rulesets
   */
  public static ComponentType LIFECYCLEMGR;
  /**
   * Escalation Manager
   */
  public static ComponentType ESCALATION;
  /**
   * Handles sending of remote events
   */
  public static ComponentType EVENTCENTER;
  /**
   * Receives sync events and generates messages
   */
  public static ComponentType EVENTDISPATCHER;
  /**
   * Filesystem
   */
  public static ComponentType FS;
  /**
   * Manages an MBeanServer and JMX adaptors
   */
  public static ComponentType JMXAGENT;
  /**
   * Notification Engine
   */
  public static ComponentType NOTIFICATION;
  /**
   * Manages sync messages and acknowledgements
   */
  public static ComponentType QPLEXOR;
  /**
   * Rule Engine
   */
  public static ComponentType RULEENG;
  /**
   * Schedules tasks to be executed in the future
   */
  public static ComponentType SCHEDULER;
  /**
   * Search Engine
   */
  public static ComponentType SEARCHENG;
  /**
   * Segmentation Engine
   */
  public static ComponentType SEGMENTENG;
  /**
   * Session Manager
   */
  public static ComponentType SESSION;
  /**
   * State Machine
   */
  public static ComponentType STATEMACH;
  /**
   * Calculates statistics on a scheduled basis
   */
  public static ComponentType STATISTICS;
  /**
   * Transaction Manager
   */
  public static ComponentType TM;
  /**
   * Validation Manager
   */
  public static ComponentType VALIDATION;
  /**
   * Velocity template support
   */
  public static ComponentType VELOCITY;
  /**
   * Workplan Generator
   */
  public static ComponentType WORKPLAN;
  private static final Map<String, ComponentType> ALL_CODES = new LinkedHashMap<String, ComponentType>();


  private static void initTypecodes0() {
    APPROVAL = new ComponentType("approval", 0);
    ASSIGNENG = new ComponentType("assigneng", 1);
    AUTH = new ComponentType("auth", 2);
    BUSINESSCALENDAR = new ComponentType("businesscalendar", 3);
    CACHE = new ComponentType("cache", 4);
    CLUSTERCHANNEL = new ComponentType("clusterchannel", 5);
    CONFIGURATION = new ComponentType("configuration", 6);
    DB = new ComponentType("db", 7);
    CLOCK = new ComponentType("clock", 8);
    DEDUCTION = new ComponentType("deduction", 9);
    LIFECYCLEMGR = new ComponentType("lifecyclemgr", 10);
    ESCALATION = new ComponentType("escalation", 11);
    EVENTCENTER = new ComponentType("eventcenter", 12);
    EVENTDISPATCHER = new ComponentType("eventdispatcher", 13);
    FS = new ComponentType("fs", 14);
    JMXAGENT = new ComponentType("jmxagent", 15);
    NOTIFICATION = new ComponentType("notification", 16);
    QPLEXOR = new ComponentType("qplexor", 17);
    RULEENG = new ComponentType("ruleeng", 18);
    SCHEDULER = new ComponentType("scheduler", 19);
    SEARCHENG = new ComponentType("searcheng", 20);
    SEGMENTENG = new ComponentType("segmenteng", 21);
    SESSION = new ComponentType("session", 22);
    STATEMACH = new ComponentType("statemach", 23);
    STATISTICS = new ComponentType("statistics", 24);
    TM = new ComponentType("tm", 25);
    VALIDATION = new ComponentType("validation", 26);
    VELOCITY = new ComponentType("velocity", 27);
    WORKPLAN = new ComponentType("workplan", 28);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ComponentType instance, or null if no such code is present in the list
   */
  public static ComponentType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ComponentType[] values() {
    Collection<ComponentType> keys = ALL_CODES.values();
    return keys.toArray(new ComponentType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ComponentType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ComponentType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ComponentType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ComponentType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ComponentType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ComponentType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ComponentType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ComponentType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ComponentType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ComponentType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ComponentType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ComponentType.class, "Categories");
  }

  /**
   * Compares two ComponentType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ComponentType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
