package com.guidewire.ab.plugin.util;

/**
 * Access the user associated with the thread. For example, if a plugin was
called in the context of a user's operation, then that user would be the
current user for the thread.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CurrentUser
{
  /**
   * Get the current user; null if no user is currently active in this thread.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();
}
