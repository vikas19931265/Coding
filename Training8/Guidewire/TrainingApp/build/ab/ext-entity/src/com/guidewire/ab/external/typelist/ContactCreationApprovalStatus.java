package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Approval status of contact for creation
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class ContactCreationApprovalStatus implements TypeKey, Comparable<ContactCreationApprovalStatus> {
  /**
   * Approved
   */
  public static ContactCreationApprovalStatus APPROVED;
  /**
   * Pending Approval
   */
  public static ContactCreationApprovalStatus PENDING_APPROVAL;
  /**
   * Rejected
   */
  public static ContactCreationApprovalStatus REJECTED;
  private static final Map<String, ContactCreationApprovalStatus> ALL_CODES = new LinkedHashMap<String, ContactCreationApprovalStatus>();


  private static void initTypecodes0() {
    APPROVED = new ContactCreationApprovalStatus("approved", 0);
    PENDING_APPROVAL = new ContactCreationApprovalStatus("pending_approval", 1);
    REJECTED = new ContactCreationApprovalStatus("rejected", 2);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate ContactCreationApprovalStatus instance, or null if no such code is present in the list
   */
  public static ContactCreationApprovalStatus getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static ContactCreationApprovalStatus[] values() {
    Collection<ContactCreationApprovalStatus> keys = ALL_CODES.values();
    return keys.toArray(new ContactCreationApprovalStatus[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private ContactCreationApprovalStatus(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "ContactCreationApprovalStatus";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.ContactCreationApprovalStatus.class, "Categories");
  }

  /**
   * Compares two ContactCreationApprovalStatus instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(ContactCreationApprovalStatus o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
