package com.guidewire.ab.external.entity;

/**
 * Information about the flagging of a contact
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface FlagEntry extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Contact that was flagged
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();

  /**
   * Contact that was flagged
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ABContact")
  public void setABContact(com.guidewire.ab.external.entity.ABContact value);


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
   * Date contact was flagged
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FlagDate")
  public java.util.Date getFlagDate();

  /**
   * Date contact was flagged
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FlagDate")
  public void setFlagDate(java.util.Date value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * FlagEntry is editable if:
1) Resolution is open (IsOpen is true), and
2) User has ResolveFlags permission
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IsEditable")
  public boolean isIsEditable();


  /**
   * Is the entry open?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IsOpen")
  public java.lang.Boolean isIsOpen();

  /**
   * Is the entry open?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IsOpen")
  public void setIsOpen(java.lang.Boolean value);


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
   * Reason contact was flagged
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Reason")
  public com.guidewire.ab.external.typelist.FlagEntryReason getReason();

  /**
   * Reason contact was flagged
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Reason")
  public void setReason(com.guidewire.ab.external.typelist.FlagEntryReason value);


  /**
   * Note regarding resolution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Resolution")
  public java.lang.String getResolution();

  /**
   * Note regarding resolution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Resolution")
  public void setResolution(java.lang.String value);


  /**
   * Date contact was unflagged
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnflagDate")
  public java.util.Date getUnflagDate();

  /**
   * Date contact was unflagged
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UnflagDate")
  public void setUnflagDate(java.util.Date value);


  /**
   * User who unflags contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnflagUser")
  public com.guidewire.ab.external.entity.User getUnflagUser();

  /**
   * User who unflags contact
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UnflagUser")
  public void setUnflagUser(com.guidewire.ab.external.entity.User value);


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
   * This function is called when the flag entry popup is closed on data commit.
It closes any open flag entry with an unflagged date.
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "closeEntry")
  public void closeEntry();

  /**
   * This function is called when a FlagEntry's resolution field
is set. This function sets the UnflagDate and UnflagUser
fields. This serves the role of a "FlagEntry Pre-Update"
rule set.
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setFieldsOnResolution")
  public void setFieldsOnResolution();


  /**
   * Utility class for initializing an instance of FlagEntry
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity FlagEntry.
     */
    public static FlagEntry newInstance()
    {
      return (FlagEntry) gw.pl.external.entity.EntityFactory.getInstance().newEntity(FlagEntry.class);
    }
  }

}
