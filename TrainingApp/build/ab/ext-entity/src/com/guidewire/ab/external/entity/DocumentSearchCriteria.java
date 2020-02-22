package com.guidewire.ab.external.entity;

/**
 * Non-persistent set of criteria to use in searching for a specific document.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DocumentSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Author")
  public java.lang.String getAuthor();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Author")
  public void setAuthor(java.lang.String value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DocumentSecurityTypes")
  public com.guidewire.ab.external.entity.DocumentSecurityTypeSearchWrapper[] getDocumentSecurityTypes();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DocumentSecurityTypes")
  public void setDocumentSecurityTypes(com.guidewire.ab.external.entity.DocumentSecurityTypeSearchWrapper[] value);


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IncludeObsoletes")
  public java.lang.Boolean isIncludeObsoletes();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IncludeObsoletes")
  public void setIncludeObsoletes(java.lang.Boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Language")
  public com.guidewire.ab.external.typelist.LanguageType getLanguage();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Language")
  public void setLanguage(com.guidewire.ab.external.typelist.LanguageType value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NameOrID")
  public java.lang.String getNameOrID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NameOrID")
  public void setNameOrID(java.lang.String value);


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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Section")
  public com.guidewire.ab.external.typelist.DocumentSection getSection();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Section")
  public void setSection(com.guidewire.ab.external.typelist.DocumentSection value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.DocumentStatusType getStatus();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Status")
  public void setStatus(com.guidewire.ab.external.typelist.DocumentStatusType value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.DocumentType getType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.DocumentType value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDocumentSecurityTypes")
  public void addToDocumentSecurityTypes(com.guidewire.ab.external.entity.DocumentSecurityTypeSearchWrapper element);

  /**
   * Returns a QueryProcessor containing {@link Document} entities that match the
criteria specified by this entity.  This method needs to work with <code>IDocumentMetadataSource</code>
if enabled
   *
   * @return a QueryProcessor containing {@link Document} entities that match the criteria specified by this entity.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearch")
  public external.gw.api.database.IQueryBeanResult performSearch();

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DocumentSecurityTypeSearchWrapper from the DocumentSecurityTypes array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDocumentSecurityTypes")
  public void removeFromDocumentSecurityTypes(com.guidewire.ab.external.entity.DocumentSecurityTypeSearchWrapper element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DocumentSecurityTypeSearchWrapper having id elementID from the DocumentSecurityTypes array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDocumentSecurityTypes")
  public void removeFromDocumentSecurityTypes(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of DocumentSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DocumentSearchCriteria.
     */
    public static DocumentSearchCriteria newInstance()
    {
      return (DocumentSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DocumentSearchCriteria.class);
    }
  }

}
