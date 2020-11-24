package com.guidewire.ab.external.entity;

/**
 * Non-persistent set of criteria to use in searching for a specific note.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface NoteSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Activity note is assigned to
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Activity")
  public com.guidewire.ab.external.entity.Activity getActivity();

  /**
   * Activity note is assigned to
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Activity")
  public void setActivity(com.guidewire.ab.external.entity.Activity value);


  /**
   * Note author
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Author")
  public com.guidewire.ab.external.entity.User getAuthor();

  /**
   * Note author
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Author")
  public void setAuthor(com.guidewire.ab.external.entity.User value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Language search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Language")
  public com.guidewire.ab.external.typelist.LanguageType getLanguage();

  /**
   * Language search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Language")
  public void setLanguage(com.guidewire.ab.external.typelist.LanguageType value);


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
   * Options to sort the list of notes
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SortBy")
  public com.guidewire.ab.external.typelist.SortByRange getSortBy();

  /**
   * Options to sort the list of notes
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SortBy")
  public void setSortBy(com.guidewire.ab.external.typelist.SortByRange value);


  /**
   * Text search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Text")
  public java.lang.String getText();

  /**
   * Text search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Text")
  public void setText(java.lang.String value);


  /**
   * Topic search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Topic")
  public com.guidewire.ab.external.typelist.NoteTopicType getTopic();

  /**
   * Topic search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Topic")
  public void setTopic(com.guidewire.ab.external.typelist.NoteTopicType value);


  /**
   * Utility class for initializing an instance of NoteSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity NoteSearchCriteria.
     */
    public static NoteSearchCriteria newInstance()
    {
      return (NoteSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(NoteSearchCriteria.class);
    }
  }

}
