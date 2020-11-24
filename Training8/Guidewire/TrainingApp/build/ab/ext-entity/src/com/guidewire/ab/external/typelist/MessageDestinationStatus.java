package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Message Destination Status
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class MessageDestinationStatus implements TypeKey, Comparable<MessageDestinationStatus> {
  /**
   * Resuming
   */
  public static MessageDestinationStatus RESUMING;
  /**
   * Retrying
   */
  public static MessageDestinationStatus RETRYING;
  /**
   * Shutdown
   */
  public static MessageDestinationStatus SHUTDOWN;
  /**
   * Started
   */
  public static MessageDestinationStatus STARTED;
  /**
   * Suspended
   */
  public static MessageDestinationStatus SUSPENDED;
  /**
   * Suspended inbound
   */
  public static MessageDestinationStatus SUSPENDEDINBOUND;
  /**
   * Suspended outbound
   */
  public static MessageDestinationStatus SUSPENDEDOUTBOUND;
  /**
   * Suspending
   */
  public static MessageDestinationStatus SUSPENDING;
  private static final Map<String, MessageDestinationStatus> ALL_CODES = new LinkedHashMap<String, MessageDestinationStatus>();


  private static void initTypecodes0() {
    RESUMING = new MessageDestinationStatus("Resuming", 0);
    RETRYING = new MessageDestinationStatus("Retrying", 1);
    SHUTDOWN = new MessageDestinationStatus("Shutdown", 2);
    STARTED = new MessageDestinationStatus("Started", 3);
    SUSPENDED = new MessageDestinationStatus("Suspended", 4);
    SUSPENDEDINBOUND = new MessageDestinationStatus("SuspendedInbound", 5);
    SUSPENDEDOUTBOUND = new MessageDestinationStatus("SuspendedOutbound", 6);
    SUSPENDING = new MessageDestinationStatus("Suspending", 7);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate MessageDestinationStatus instance, or null if no such code is present in the list
   */
  public static MessageDestinationStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static MessageDestinationStatus[] values() {
    Collection<MessageDestinationStatus> keys = ALL_CODES.values();
    return keys.toArray(new MessageDestinationStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private MessageDestinationStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "MessageDestinationStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.MessageDestinationStatus.class, "Categories");
  }

  /**
   * Compares two MessageDestinationStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(MessageDestinationStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
