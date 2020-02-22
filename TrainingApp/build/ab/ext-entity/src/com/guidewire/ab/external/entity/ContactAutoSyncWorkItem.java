package com.guidewire.ab.external.entity;

/**
 * Queue of Contact AddressBookUID to be auto synced. This is a system-internal entity.
     
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactAutoSyncWorkItem extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.WorkItem, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Represents the AddressBookUID to be synced.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressBookUID")
  public java.lang.String getAddressBookUID();

  /**
   * Represents the AddressBookUID to be synced.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressBookUID")
  public void setAddressBookUID(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Attempts")
  public java.lang.Integer getAttempts();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Attempts")
  public void setAttempts(java.lang.Integer value);


  /**
   * The time after which the work item can be tried. Must be null on failed work items
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AvailableSince")
  public java.util.Date getAvailableSince();

  /**
   * The time after which the work item can be tried. Must be null on failed work items
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AvailableSince")
  public void setAvailableSince(java.util.Date value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CheckedOutBy")
  public java.lang.String getCheckedOutBy();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CheckedOutBy")
  public void setCheckedOutBy(java.lang.String value);


  /**
   *  NOTE: when inserting a ContactAutoSyncWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreationTime")
  public java.util.Date getCreationTime();


  /**
   * Stack trace of the exception
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Exception")
  public java.lang.String getException();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastUpdateTime")
  public java.util.Date getLastUpdateTime();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastUpdateTime")
  public void setLastUpdateTime(java.util.Date value);


  /**
   * The upper bound for the ID value in the Contact table for this work item
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxContactRef")
  public java.lang.Long getMaxContactRef();

  /**
   * The upper bound for the ID value in the Contact table for this work item
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaxContactRef")
  public void setMaxContactRef(java.lang.Long value);


  /**
   * The lower bound for the ID value in the Contact table for this work item
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinContactRef")
  public java.lang.Long getMinContactRef();

  /**
   * The lower bound for the ID value in the Contact table for this work item
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinContactRef")
  public void setMinContactRef(java.lang.Long value);


  /**
   * Represents the AddressBookUID to replace the contact AddressBookUID with
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NewAddressBookUID")
  public java.lang.String getNewAddressBookUID();

  /**
   * Represents the AddressBookUID to replace the contact AddressBookUID with
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NewAddressBookUID")
  public void setNewAddressBookUID(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Priority")
  public java.lang.Integer getPriority();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Priority")
  public void setPriority(java.lang.Integer value);


  /**
   * The writer batch job that created this workitem (ProcessHistory).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProcessHistoryID")
  public java.lang.Long getProcessHistoryID();

  /**
   * The writer batch job that created this workitem (ProcessHistory).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProcessHistoryID")
  public void setProcessHistoryID(java.lang.Long value);


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
   * Should work item be skipped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Skip")
  public java.lang.Boolean isSkip();

  /**
   * Should work item be skipped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Skip")
  public void setSkip(java.lang.Boolean value);


  /**
   * Status of this workitem.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.WorkItemStatusType getStatus();


  /**
   * Utility class for initializing an instance of ContactAutoSyncWorkItem
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactAutoSyncWorkItem.
     */
    public static ContactAutoSyncWorkItem newInstance()
    {
      return (ContactAutoSyncWorkItem) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactAutoSyncWorkItem.class);
    }
  }

}
