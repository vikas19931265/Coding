package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Subtype typelist for entity PendingContactChangeView
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class PendingContactChangeView implements TypeKey, Comparable<PendingContactChangeView> {
  /**
   * PendingContactChangeView
   */
  public static PendingContactChangeView PENDINGCONTACTCHANGEVIEW;
  /**
   * PendingContactCreateView
   */
  public static PendingContactChangeView PENDINGCONTACTCREATEVIEW;
  /**
   * PendingContactUpdateView
   */
  public static PendingContactChangeView PENDINGCONTACTUPDATEVIEW;
  private static final Map<String, PendingContactChangeView> ALL_CODES = new LinkedHashMap<String, PendingContactChangeView>();


  private static void initTypecodes0() {
    PENDINGCONTACTCHANGEVIEW = new PendingContactChangeView("PendingContactChangeView", 0);
    PENDINGCONTACTCREATEVIEW = new PendingContactChangeView("PendingContactCreateView", 1);
    PENDINGCONTACTUPDATEVIEW = new PendingContactChangeView("PendingContactUpdateView", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate PendingContactChangeView instance, or null if no such code is present in the list
   */
  public static PendingContactChangeView getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static PendingContactChangeView[] values() {
    Collection<PendingContactChangeView> keys = ALL_CODES.values();
    return keys.toArray(new PendingContactChangeView[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private PendingContactChangeView(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "PendingContactChangeView";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.PendingContactChangeView.class, "Categories");
  }

  /**
   * Compares two PendingContactChangeView instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(PendingContactChangeView o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
