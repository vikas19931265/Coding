package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * Constraints that can be applied to UserRoles
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class UserRoleConstraint implements TypeKey, Comparable<UserRoleConstraint> {
  /**
   * Indicates that the user assigned to this role must have the same permissions that are required to be the owner of the assignable object.
   */
  public static UserRoleConstraint OBJECTOWNER;
  private static final Map<String, UserRoleConstraint> ALL_CODES = new LinkedHashMap<String, UserRoleConstraint>();


  private static void initTypecodes0() {
    OBJECTOWNER = new UserRoleConstraint("objectowner", 0);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate UserRoleConstraint instance, or null if no such code is present in the list
   */
  public static UserRoleConstraint getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static UserRoleConstraint[] values() {
    Collection<UserRoleConstraint> keys = ALL_CODES.values();
    return keys.toArray(new UserRoleConstraint[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private UserRoleConstraint(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "UserRoleConstraint";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.UserRoleConstraint.class, "Categories");
  }

  /**
   * Compares two UserRoleConstraint instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(UserRoleConstraint o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
