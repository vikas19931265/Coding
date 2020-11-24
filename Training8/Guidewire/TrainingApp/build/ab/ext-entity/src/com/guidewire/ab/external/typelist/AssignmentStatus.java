package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Assignment status of an assignable entity
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class AssignmentStatus implements TypeKey, Comparable<AssignmentStatus> {
  /**
   * Entity is assigned; AssignedUserID and AssignedGroupID are both non-null
   */
  public static AssignmentStatus ASSIGNED;
  /**
   * Entity is waiting to be manually assigned or reviewed; a non-null AssignedUserID means pending review
   */
  public static AssignmentStatus MANUAL;
  /**
   * Assignable is waiting for its containing entity to be assigned or reviewed; AssignedUserID and AssignedGroupID may be null or non-null
   */
  public static AssignmentStatus PENDINGASSIGNMENT;
  /**
   * Entity is unassigned; AssignedUserID and AssignedGroupID are both null
   */
  public static AssignmentStatus UNASSIGNED;
  private static final Map<String, AssignmentStatus> ALL_CODES = new LinkedHashMap<String, AssignmentStatus>();


  private static void initTypecodes0() {
    ASSIGNED = new AssignmentStatus("assigned", 0);
    MANUAL = new AssignmentStatus("manual", 1);
    PENDINGASSIGNMENT = new AssignmentStatus("pendingassignment", 2);
    UNASSIGNED = new AssignmentStatus("unassigned", 3);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate AssignmentStatus instance, or null if no such code is present in the list
   */
  public static AssignmentStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static AssignmentStatus[] values() {
    Collection<AssignmentStatus> keys = ALL_CODES.values();
    return keys.toArray(new AssignmentStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private AssignmentStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "AssignmentStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.AssignmentStatus.class, "Categories");
  }

  /**
   * Compares two AssignmentStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(AssignmentStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
