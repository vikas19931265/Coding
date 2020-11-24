package com.guidewire.ab.plugin.util;

import gw.pl.external.Invoker;

/**
 * Utility to access the user associated with the thread. For example, if a
 * plugin was called in the context of a user's operation, then that user would
 * be the current user for the thread.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public abstract class CurrentUserUtil {

  private CurrentUserUtil() {
  }

  /**
   * Get a handle to the CurrentUser
   *
   * @return Handle to the CurrentUser
   */
  public static CurrentUser getCurrentUser() {
    return (CurrentUser) Invoker.getInstance().invokeStaticMethod(CurrentUserUtil.class, "getCurrentUser", new Class<?>[] {}, new Object[] {});
  }
}