package com.guidewire.ab.external.entity;

/**
 * 
      Maintains a user's system level-security identification. Each user has a corresponding Credential object. This entity
      maintains information related to authorization and authentication on the system. A Credential holds both the user's
      password and controls whether or not the user is active or not. This entity also tracks login attempts.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Credential extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Whether this credential is active. Inactive credentials are not allowed to log in.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Active")
  public java.lang.Boolean isActive();

  /**
   * Whether this credential is active. Inactive credentials are not allowed to log in.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Active")
  public void setActive(java.lang.Boolean value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * The number of consecutive failed login attempts, or 0 if the last login attempt was successful.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FailedAttempts")
  public java.lang.Integer getFailedAttempts();

  /**
   * The number of consecutive failed login attempts, or 0 if the last login attempt was successful.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FailedAttempts")
  public void setFailedAttempts(java.lang.Integer value);


  /**
   * The time the last failed login attempt was made, or null if the last login attempt was successful.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FailedTime")
  public java.util.Date getFailedTime();

  /**
   * The time the last failed login attempt was made, or null if the last login attempt was successful.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FailedTime")
  public void setFailedTime(java.util.Date value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * The time at which this credential was locked, or null if the credential is not locked.  A user can not log in if their credential was locked within the lockout interval, which is paramaterizeable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LockDate")
  public java.util.Date getLockDate();

  /**
   * The time at which this credential was locked, or null if the credential is not locked.  A user can not log in if their credential was locked within the lockout interval, which is paramaterizeable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LockDate")
  public void setLockDate(java.util.Date value);


  /**
   * Indicates whether or not this credential is considered locked.
A user is locked out if their lock date is set and either the lock out period is -1 or
the current time minus the lock date is less than the lock out period
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Locked")
  public boolean isLocked();


  /**
   * User password. NOTE: when inserting a Credential this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Password")
  public java.lang.String getPassword();

  /**
   * User password. NOTE: when inserting a Credential this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Password")
  public void setPassword(java.lang.String value);


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * User login name. NOTE: when inserting a Credential this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UserName")
  public java.lang.String getUserName();

  /**
   * User login name. NOTE: when inserting a Credential this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UserName")
  public void setUserName(java.lang.String value);


  /**
   * Utility class for initializing an instance of Credential
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Credential.
     */
    public static Credential newInstance()
    {
      return (Credential) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Credential.class);
    }
  }

}
