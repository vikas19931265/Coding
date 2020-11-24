package com.guidewire.ab.external.entity;

/**
 * 
       This entity is the abstract base entity for storing information about contact change requests to ContactManager
        that will require approval in ContactManager before being applied.
       There are two subtypes included with ContactManager, PendingContactUpdate to handle update changes to
        an existing ABContact and PendingContactCreate to handle the creation of a new ABContact.
       Once a PendingContactChange has been processed by the system it is deleted from the database.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PendingContactChange extends com.guidewire.ab.external.entity.Editable, com.guidewire.ab.external.entity.Validatable, gw.pl.external.entity.Entity
{


  /**
   * ABContact associated with this change.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();

  /**
   * ABContact associated with this change.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ABContact")
  public void setABContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * The Display Name of the application root entity the contact being updated is referenced by.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AppRootEntityDisplayName")
  public java.lang.String getAppRootEntityDisplayName();

  /**
   * The Display Name of the application root entity the contact being updated is referenced by.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AppRootEntityDisplayName")
  public void setAppRootEntityDisplayName(java.lang.String value);


  /**
   * The ID of the application root entity the contact being updated is referenced by.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AppRootEntityID")
  public java.lang.String getAppRootEntityID();

  /**
   * The ID of the application root entity the contact being updated is referenced by.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AppRootEntityID")
  public void setAppRootEntityID(java.lang.String value);


  /**
   * The type of the application root entity the contact being updated is referenced by.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AppRootEntityType")
  public java.lang.String getAppRootEntityType();

  /**
   * The type of the application root entity the contact being updated is referenced by.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AppRootEntityType")
  public void setAppRootEntityType(java.lang.String value);


  /**
   * The Display Name of the application user who made the update.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AppUserDisplayName")
  public java.lang.String getAppUserDisplayName();

  /**
   * The Display Name of the application user who made the update.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AppUserDisplayName")
  public void setAppUserDisplayName(java.lang.String value);


  /**
   * The username in the application of the user who made the update.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AppUserName")
  public java.lang.String getAppUserName();

  /**
   * The username in the application of the user who made the update.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AppUserName")
  public void setAppUserName(java.lang.String value);


  /**
   * The application the contact update came from.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Application")
  public java.lang.String getApplication();

  /**
   * The application the contact update came from.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Application")
  public void setApplication(java.lang.String value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Client application's PublicID for the contact being changed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ClientAppPublicID")
  public java.lang.String getClientAppPublicID();

  /**
   * Client application's PublicID for the contact being changed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ClientAppPublicID")
  public void setClientAppPublicID(java.lang.String value);


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
   * Resolution state of this pending change
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Resolution")
  public com.guidewire.ab.external.typelist.ContactChangeResolution getResolution();

  /**
   * Resolution state of this pending change
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Resolution")
  public void setResolution(com.guidewire.ab.external.typelist.ContactChangeResolution value);


  /**
   * Reason, if any, for the resolution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ResolutionReasonText")
  public java.lang.String getResolutionReasonText();

  /**
   * Reason, if any, for the resolution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ResolutionReasonText")
  public void setResolutionReasonText(java.lang.String value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.PendingContactChange getSubtype();


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
   * Utility class for initializing an instance of PendingContactChange
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity PendingContactChange.
     */
    public static PendingContactChange newInstance()
    {
      return (PendingContactChange) gw.pl.external.entity.EntityFactory.getInstance().newEntity(PendingContactChange.class);
    }
  }

}
