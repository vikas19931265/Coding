package com.guidewire.ab.external.entity;

/**
 * Notes added by users
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Note extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * The activity associated with the note.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Activity")
  public com.guidewire.ab.external.entity.Activity getActivity();

  /**
   * The activity associated with the note.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Activity")
  public void setActivity(com.guidewire.ab.external.entity.Activity value);


  /**
   * User who wrote the note.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Author")
  public com.guidewire.ab.external.entity.User getAuthor();

  /**
   * User who wrote the note.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Author")
  public void setAuthor(com.guidewire.ab.external.entity.User value);


  /**
   * Date on which the note was originally authored.  If null, the CreateTime seves this purpose.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AuthoringDate")
  public java.util.Date getAuthoringDate();

  /**
   * Date on which the note was originally authored.  If null, the CreateTime seves this purpose.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AuthoringDate")
  public void setAuthoringDate(java.util.Date value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Body of the note.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Body")
  public java.lang.String getBody();

  /**
   * Body of the note.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Body")
  public void setBody(java.lang.String value);


  /**
   * Whether the note is confidential.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Confidential")
  public java.lang.Boolean isConfidential();

  /**
   * Whether the note is confidential.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Confidential")
  public void setConfidential(java.lang.Boolean value);


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
   * The language in which this note is created.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Language")
  public com.guidewire.ab.external.typelist.LanguageType getLanguage();

  /**
   * The language in which this note is created.
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
   * Returns what the note's related to: either a Contact, an Exposure,
or the whole claim.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NoteRelatedTo")
  public java.lang.String getNoteRelatedTo();


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
   * Type of note; used for access-restriction purposes
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SecurityType")
  public com.guidewire.ab.external.typelist.NoteSecurityType getSecurityType();

  /**
   * Type of note; used for access-restriction purposes
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SecurityType")
  public void setSecurityType(com.guidewire.ab.external.typelist.NoteSecurityType value);


  /**
   * Subject or summary of the note.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subject")
  public java.lang.String getSubject();

  /**
   * Subject or summary of the note.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Subject")
  public void setSubject(java.lang.String value);


  /**
   * Topic to which the note belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Topic")
  public com.guidewire.ab.external.typelist.NoteTopicType getTopic();

  /**
   * Topic to which the note belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Topic")
  public void setTopic(com.guidewire.ab.external.typelist.NoteTopicType value);


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
   * This will return true if the current user can create
a note of type requested.
   *
   * @return true if they user can create the note of this security type
   * @param type the security type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isSecurityTypeCreatableByUser")
  public boolean isSecurityTypeCreatableByUser(com.guidewire.ab.external.typelist.NoteSecurityType type);


  /**
   * Utility class for initializing an instance of Note
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Note.
     */
    public static Note newInstance()
    {
      return (Note) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Note.class);
    }
  }

}
