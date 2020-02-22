package com.guidewire.ab.external.entity;

/**
 * Internal system users.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface User extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, com.guidewire.ab.external.entity.Validatable, gw.pl.external.entity.Entity
{


  /**
   * Property that indicates whether user's account is locked. Reading this property requires User.view permission.
The property is writable, if you have User.edit permission, and can be used to lock or unlock the user account
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AccountLocked")
  public boolean isAccountLocked();

  /**
   * Property that indicates whether user's account is locked. Reading this property requires User.view permission.
The property is writable, if you have User.edit permission, and can be used to lock or unlock the user account
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AccountLocked")
  public void setAccountLocked(boolean value);


  /**
   * Returns all GroupUser entities *from the database* that point to this user.  To retrieve GroupUsers that are only
in the bundle as well, try <code>getAllGropuUsersAsArray()</code> on the product's User implementation.
   * @deprecated Use ({@link #getGroupUsers()} instead).
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllGroupUsers")
  public java.util.List getAllGroupUsers();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllGroupUsersAsArray")
  public com.guidewire.ab.external.entity.GroupUser[] getAllGroupUsersAsArray();


  /**
   * Returns a Set of all the groups to which this user belongs or has admin rights to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllGroups")
  public java.util.Set getAllGroups();


  /**
   * Attributes for the user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Attributes")
  public com.guidewire.ab.external.entity.AttributeUser[] getAttributes();

  /**
   * Attributes for the user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Attributes")
  public void setAttributes(com.guidewire.ab.external.entity.AttributeUser[] value);


  /**
   * Returns the backup user for this user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BackupUser")
  public com.guidewire.ab.external.entity.User getBackupUser();

  /**
   * Returns the backup user for this user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BackupUser")
  public void setBackupUser(com.guidewire.ab.external.entity.User value);


  /**
   * Returns the ID of the backup user for this user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BackupUserId")
  public gw.pl.external.entity.Key getBackupUserId();

  /**
   * Returns the ID of the backup user for this user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BackupUserId")
  public void setBackupUserId(gw.pl.external.entity.Key value);


  /**
   * Backup users for this user. Though this is an array, users can only have one backup user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BackupUsers")
  public com.guidewire.ab.external.entity.UserBackup[] getBackupUsers();

  /**
   * Backup users for this user. Though this is an array, users can only have one backup user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BackupUsers")
  public void setBackupUsers(com.guidewire.ab.external.entity.UserBackup[] value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Contact entry related to the user. NOTE: when inserting a User this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.UserContact getContact();

  /**
   * Contact entry related to the user. NOTE: when inserting a User this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contact")
  public void setContact(com.guidewire.ab.external.entity.UserContact value);


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
   * Security credential for the user. NOTE: when inserting a User this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Credential")
  public com.guidewire.ab.external.entity.Credential getCredential();

  /**
   * Security credential for the user. NOTE: when inserting a User this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Credential")
  public void setCredential(com.guidewire.ab.external.entity.Credential value);


  /**
   * User's default country
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultCountry")
  public com.guidewire.ab.external.typelist.Country getDefaultCountry();

  /**
   * User's default country
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DefaultCountry")
  public void setDefaultCountry(com.guidewire.ab.external.typelist.Country value);


  /**
   * User's default phone country
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultPhoneCountry")
  public com.guidewire.ab.external.typelist.PhoneCountryCode getDefaultPhoneCountry();

  /**
   * User's default phone country
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DefaultPhoneCountry")
  public void setDefaultPhoneCountry(com.guidewire.ab.external.typelist.PhoneCountryCode value);


  /**
   * User's department within the company.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Department")
  public java.lang.String getDepartment();

  /**
   * User's department within the company.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Department")
  public void setDepartment(java.lang.String value);


  /**
   * Experience level of the user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExperienceLevel")
  public com.guidewire.ab.external.typelist.UserExperienceType getExperienceLevel();

  /**
   * Experience level of the user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExperienceLevel")
  public void setExperienceLevel(com.guidewire.ab.external.typelist.UserExperienceType value);


  /**
   * If true, the user is an external user, and claims assigned to the user should be treated as externally owned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternalUser")
  public java.lang.Boolean isExternalUser();

  /**
   * If true, the user is an external user, and claims assigned to the user should be treated as externally owned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExternalUser")
  public void setExternalUser(java.lang.Boolean value);


  /**
   * Groups associated with this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupUsers")
  public com.guidewire.ab.external.entity.GroupUser[] getGroupUsers();

  /**
   * Groups associated with this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupUsers")
  public void setGroupUsers(com.guidewire.ab.external.entity.GroupUser[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * integer extension; default value of '12'
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IntegerExt")
  public java.lang.Integer getIntegerExt();

  /**
   * integer extension; default value of '12'
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IntegerExt")
  public void setIntegerExt(java.lang.Integer value);


  /**
   * User's job title.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "JobTitle")
  public java.lang.String getJobTitle();

  /**
   * User's job title.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "JobTitle")
  public void setJobTitle(java.lang.String value);


  /**
   * User's preferred language.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Language")
  public com.guidewire.ab.external.typelist.LanguageType getLanguage();

  /**
   * User's preferred language.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Language")
  public void setLanguage(com.guidewire.ab.external.typelist.LanguageType value);


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * User's preferred locale.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Locale")
  public com.guidewire.ab.external.typelist.LocaleType getLocale();

  /**
   * User's preferred locale.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Locale")
  public void setLocale(com.guidewire.ab.external.typelist.LocaleType value);


  /**
   * Measurement System Preference
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MeasurementSystemPreference")
  public com.guidewire.ab.external.typelist.MeasurementSystem getMeasurementSystemPreference();

  /**
   * Measurement System Preference
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MeasurementSystemPreference")
  public void setMeasurementSystemPreference(com.guidewire.ab.external.typelist.MeasurementSystem value);


  /**
   * A QueryProcessor with all open activities assigned to this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OpenActivities")
  public external.gw.api.database.IQueryBeanResult getOpenActivities();


  /**
   * Count of all open activities assigned to this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OpenActivityCount")
  public int getOpenActivityCount();


  /**
   * Creates a UserSettings instance for this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrCreateUserSettings")
  public com.guidewire.ab.external.entity.UserSettings getOrCreateUserSettings();


  /**
   * Each user should belong to exactly one organization
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Organization")
  public com.guidewire.ab.external.entity.Organization getOrganization();

  /**
   * Each user should belong to exactly one organization
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Organization")
  public void setOrganization(com.guidewire.ab.external.entity.Organization value);


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
   * Regions associated with this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Regions")
  public com.guidewire.ab.external.entity.UserRegion[] getRegions();

  /**
   * Regions associated with this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Regions")
  public void setRegions(com.guidewire.ab.external.entity.UserRegion[] value);


  /**
   * Security roles granted to the user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Roles")
  public com.guidewire.ab.external.entity.UserRole[] getRoles();

  /**
   * Security roles granted to the user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Roles")
  public void setRoles(com.guidewire.ab.external.entity.UserRole[] value);


  /**
   * Return the root group for this user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RootGroup")
  public com.guidewire.ab.external.entity.Group getRootGroup();


  /**
   * Tests if the user can be safely deleted. Returns false if
<ul>
<li>The user is the super user
<li>The user is the "default owner", used as the assignee of last resort by the assignment system
<li>The user supervises any groups
<li>Any items are assigned to the user
</ul>
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SafeToDelete")
  public boolean isSafeToDelete();


  /**
   * Returns a list of all the security zones that this user can currently see (is assigned
to a group)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SecurityZones")
  public java.util.List getSecurityZones();


  /**
   * User's session timeout value in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SessionTimeoutSecs")
  public java.lang.Integer getSessionTimeoutSecs();

  /**
   * User's session timeout value in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SessionTimeoutSecs")
  public void setSessionTimeoutSecs(java.lang.Integer value);


  /**
   * Returns true if there are users that are on vacation and are backed by current user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SupportingVacationingUsers")
  public boolean isSupportingVacationingUsers();


  /**
   * Indicates whether or not this user is a system user, indicated by the SystemUserType field on User
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SystemUser")
  public boolean isSystemUser();


  /**
   * Indicates the type of special system users (for example, default claim owner). This is null for regular users.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SystemUserType")
  public com.guidewire.ab.external.typelist.SystemUserType getSystemUserType();

  /**
   * Indicates the type of special system users (for example, default claim owner). This is null for regular users.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SystemUserType")
  public void setSystemUserType(com.guidewire.ab.external.typelist.SystemUserType value);


  /**
   * User's time zone.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TimeZone")
  public com.guidewire.ab.external.typelist.TimeZoneType getTimeZone();

  /**
   * User's time zone.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TimeZone")
  public void setTimeZone(com.guidewire.ab.external.typelist.TimeZoneType value);


  /**
   * Indicates whether or not this user is the super user that should be granted all permissions.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnrestrictedUser")
  public boolean isUnrestrictedUser();


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
   * Should the helper labels be displayed?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UseHelperLabels")
  public java.lang.Boolean isUseHelperLabels();

  /**
   * Should the helper labels be displayed?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UseHelperLabels")
  public void setUseHelperLabels(java.lang.Boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UserDefaultCountry")
  public com.guidewire.ab.external.typelist.Country getUserDefaultCountry();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UserDefaultCountry")
  public void setUserDefaultCountry(com.guidewire.ab.external.typelist.Country value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UserDefaultPhoneCountry")
  public com.guidewire.ab.external.typelist.PhoneCountryCode getUserDefaultPhoneCountry();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UserDefaultPhoneCountry")
  public void setUserDefaultPhoneCountry(com.guidewire.ab.external.typelist.PhoneCountryCode value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UserLanguage")
  public com.guidewire.ab.external.typelist.LanguageType getUserLanguage();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UserLanguage")
  public void setUserLanguage(com.guidewire.ab.external.typelist.LanguageType value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UserLocale")
  public com.guidewire.ab.external.typelist.LocaleType getUserLocale();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UserLocale")
  public void setUserLocale(com.guidewire.ab.external.typelist.LocaleType value);


  /**
   * Settings for this user (formerly known as preferences).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UserSettings")
  public com.guidewire.ab.external.entity.UserSettings getUserSettings();

  /**
   * Settings for this user (formerly known as preferences).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UserSettings")
  public void setUserSettings(com.guidewire.ab.external.entity.UserSettings value);


  /**
   * The vacation status of this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VacationStatus")
  public com.guidewire.ab.external.typelist.VacationStatusType getVacationStatus();

  /**
   * The vacation status of this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VacationStatus")
  public void setVacationStatus(com.guidewire.ab.external.typelist.VacationStatusType value);


  /**
   * Returns an array containing the IDs of all users that are on vacation and are backed up by this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VacationingUsers")
  public gw.pl.external.entity.Key[] getVacationingUsers();


  /**
   * Validation level that this object passed (if any) before it was stored.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValidationLevel")
  public com.guidewire.ab.external.typelist.ValidationLevel getValidationLevel();

  /**
   * Validation level that this object passed (if any) before it was stored.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ValidationLevel")
  public void setValidationLevel(com.guidewire.ab.external.typelist.ValidationLevel value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToAttributes")
  public void addToAttributes(com.guidewire.ab.external.entity.AttributeUser element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToBackupUsers")
  public void addToBackupUsers(com.guidewire.ab.external.entity.UserBackup element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToGroupUsers")
  public void addToGroupUsers(com.guidewire.ab.external.entity.GroupUser element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToRegions")
  public void addToRegions(com.guidewire.ab.external.entity.UserRegion element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToRoles")
  public void addToRoles(com.guidewire.ab.external.entity.UserRole element);

  /**
   * Check whether user has a certain role
   *
   * @return true if user has the Role
   * @param role 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasRole")
  public boolean hasRole(com.guidewire.ab.external.entity.Role role);

  /**
   * 
   *
   * @return true if this user is in the organization
   * @param organization 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isInOrganization")
  public boolean isInOrganization(com.guidewire.ab.external.entity.Organization organization);

  /**
   * Removes the user from the system, in the process removing (retiring) its Credential and Contact records.  Also
sets any claims/exposures/activities that are pending assignment to this user to no longer have an assigned user
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "remove")
  public void remove() throws java.lang.RuntimeException;

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AttributeUser from the Attributes array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAttributes")
  public void removeFromAttributes(com.guidewire.ab.external.entity.AttributeUser element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AttributeUser having id elementID from the Attributes array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAttributes")
  public void removeFromAttributes(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UserBackup from the BackupUsers array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBackupUsers")
  public void removeFromBackupUsers(com.guidewire.ab.external.entity.UserBackup element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UserBackup having id elementID from the BackupUsers array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBackupUsers")
  public void removeFromBackupUsers(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GroupUser from the GroupUsers array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGroupUsers")
  public void removeFromGroupUsers(com.guidewire.ab.external.entity.GroupUser element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GroupUser having id elementID from the GroupUsers array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGroupUsers")
  public void removeFromGroupUsers(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UserRegion from the Regions array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRegions")
  public void removeFromRegions(com.guidewire.ab.external.entity.UserRegion element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UserRegion having id elementID from the Regions array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRegions")
  public void removeFromRegions(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UserRole from the Roles array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRoles")
  public void removeFromRoles(com.guidewire.ab.external.entity.UserRole element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UserRole having id elementID from the Roles array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRoles")
  public void removeFromRoles(gw.pl.external.entity.Key elementID);

  /**
   * Returns true if this user is restricted to viewing only his organizations objects.
   *
   * @return true if restricted
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "restrictedToOwnOrg")
  public boolean restrictedToOwnOrg();

  /**
   * Property that indicates whether user's account is locked. Reading this property requires User.view permission.
The property is writable, if you have User.edit permission, and can be used to lock or unlock the user account
   *
   * @param locked 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAccountLocked")
  public void setAccountLocked_Method(boolean locked);

  /**
   * Sets the ID of the backup user for this user
   *
   * @param value The ID of the new backup user for this user
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setBackupUserId")
  public void setBackupUserId_Method(gw.pl.external.entity.Key value);

  /**
   * Sets the backup user for this user
   *
   * @param value The new backup user for this user
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setBackupUser")
  public void setBackupUser_Method(com.guidewire.ab.external.entity.User value);

  /**
   * Sets the role on the user based on the role names being passed in, and remove all the old roles.
This method will compare all
the role names but will ignore all the roles that are not found
   *
   * @return true if modifications have been made
   * @param roleNames names of the roles to add to the user
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "syncRoles")
  public boolean syncRoles(java.lang.String[] roleNames);


  /**
   * Utility class for accessing static features for User
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    /**
     * Create a new proxy instance of the external type User.
     */
    public static User newInstance()
    {
      return null;
    }

    // Static Properties for User

    /**
     * 
     * 
     */
    public static external.gw.api.community.PublicUserUtil getUtil()
    {
      return (external.gw.api.community.PublicUserUtil) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.ab.external.entity.User.class, "Util");
    }

    // Static Methods for User
    
  }


  /**
   * Utility class for initializing an instance of User
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity User.
     */
    public static User newInstance()
    {
      return (User) gw.pl.external.entity.EntityFactory.getInstance().newEntity(User.class);
    }
  }

}
