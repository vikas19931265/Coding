package com.guidewire.ab.external.entity;

/**
 * Internal representation of a physical or electronic document.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Document extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Name of the person who created the document.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Author")
  public java.lang.String getAuthor();

  /**
   * Name of the person who created the document.
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
   * Returns the the cached status about whether the document content exists in the document content source.
On the first call on the entity instance, it will call into document content source plugin to get the status
and cache the result for future calls
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CachedContentExists")
  public boolean isCachedContentExists();


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
   * Whether this document has content stored in a Document Management System.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DMS")
  public java.lang.Boolean isDMS();

  /**
   * Whether this document has content stored in a Document Management System.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DMS")
  public void setDMS(java.lang.Boolean value);


  /**
   * Date and time the document was created.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateCreated")
  public java.util.Date getDateCreated();

  /**
   * Date and time the document was created.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateCreated")
  public void setDateCreated(java.util.Date value);


  /**
   * Date and time the document was last modified.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateModified")
  public java.util.Date getDateModified();

  /**
   * Date and time the document was last modified.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateModified")
  public void setDateModified(java.util.Date value);


  /**
   * Description of the document.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of the document.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * The Unique Identifier (UID) for this document.     The format of this UID is specific to the deployed Document Management System (DMS), and is passed to the configured IDocumentContentSource implementation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DocUID")
  public java.lang.String getDocUID();

  /**
   * The Unique Identifier (UID) for this document.     The format of this UID is specific to the deployed Document Management System (DMS), and is passed to the configured IDocumentContentSource implementation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DocUID")
  public void setDocUID(java.lang.String value);


  /**
   * Short human-readable identifier for the document, often used as an extra storage location for form codes, when name and documenttype are inadequate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DocumentIdentifier")
  public java.lang.String getDocumentIdentifier();

  /**
   * Short human-readable identifier for the document, often used as an extra storage location for form codes, when name and documenttype are inadequate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DocumentIdentifier")
  public void setDocumentIdentifier(java.lang.String value);


  /**
   * Gets the language in which the document was created in.  A null value means
that it is not clear which language the document was created in.  Most possibly,
it is the default locale of the application.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DocumentLanguage")
  public gw.pl.external.i18n.ILocale getDocumentLanguage();

  /**
   * Gets the language in which the document was created in.  A null value means
that it is not clear which language the document was created in.  Most possibly,
it is the default locale of the application.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DocumentLanguage")
  public void setDocumentLanguage(gw.pl.external.i18n.ILocale value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Returns the name of an icon image to represent this document. The result is based on the document's mime type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Icon")
  public java.lang.String getIcon();


  /**
   * Whether the document is an inbound, outbound, or stationary (null) document
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Inbound")
  public java.lang.Boolean isInbound();

  /**
   * Whether the document is an inbound, outbound, or stationary (null) document
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Inbound")
  public void setInbound(java.lang.Boolean value);


  /**
   * The language in which this document is created.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Language")
  public com.guidewire.ab.external.typelist.LanguageType getLanguage();

  /**
   * The language in which this document is created.
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
   * Gets the locale in which the document was created in.  A null value means
that it is not clear which language the document was created in.  Most possibly,
it is the default locale of the application.
   * @deprecated see getDocumentLanugage() instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Locale")
  public gw.pl.external.i18n.ILocale getLocale();

  /**
   * Gets the locale in which the document was created in.  A null value means
that it is not clear which language the document was created in.  Most possibly,
it is the default locale of the application.
   * @deprecated see getDocumentLanugage() instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Locale")
  public void setLocale(gw.pl.external.i18n.ILocale value);


  /**
   * The MIME type of this document; for example, application/msword for a Microsoft Word document.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MimeType")
  public java.lang.String getMimeType();

  /**
   * The MIME type of this document; for example, application/msword for a Microsoft Word document.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MimeType")
  public void setMimeType(java.lang.String value);


  /**
   * Human-readable name of the document.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Human-readable name of the document.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * If true, the information in the document can no longer be relied upon to be up-to-date and relevant. This is often used instead of deletion to preserve history.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Obsolete")
  public java.lang.Boolean isObsolete();

  /**
   * If true, the information in the document can no longer be relied upon to be up-to-date and relevant. This is often used instead of deletion to preserve history.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Obsolete")
  public void setObsolete(java.lang.Boolean value);


  /**
   * The document is pending, and it's pending storage has Unique Identifier (UID).     The format of this UID is specific to the IDCS implementation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PendingDocUID")
  public java.lang.String getPendingDocUID();

  /**
   * The document is pending, and it's pending storage has Unique Identifier (UID).     The format of this UID is specific to the IDCS implementation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PendingDocUID")
  public void setPendingDocUID(java.lang.String value);


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
   * Name of the intended recipient of the document (if any).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Recipient")
  public java.lang.String getRecipient();

  /**
   * Name of the intended recipient of the document (if any).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Recipient")
  public void setRecipient(java.lang.String value);


  /**
   * The section to which this document belongs, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Section")
  public com.guidewire.ab.external.typelist.DocumentSection getSection();

  /**
   * The section to which this document belongs, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Section")
  public void setSection(com.guidewire.ab.external.typelist.DocumentSection value);


  /**
   * Type of document used for access-restriction purposes, in conjunction with the information in security-config.xml.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SecurityType")
  public com.guidewire.ab.external.typelist.DocumentSecurityType getSecurityType();

  /**
   * Type of document used for access-restriction purposes, in conjunction with the information in security-config.xml.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SecurityType")
  public void setSecurityType(com.guidewire.ab.external.typelist.DocumentSecurityType value);


  /**
   * The current status of the document, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.DocumentStatusType getStatus();

  /**
   * The current status of the document, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Status")
  public void setStatus(com.guidewire.ab.external.typelist.DocumentStatusType value);


  /**
   * The specific type of the document, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.DocumentType getType();

  /**
   * The specific type of the document, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.DocumentType value);


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
   * If true, the document will be persisted
   *
   * @return true if the document will be persisted
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "doesNotRequirePersistence")
  public boolean doesNotRequirePersistence();

  /**
   * Sets the language in which the document is created in.  This should not be changed once the
document is stored
   *
   * @param language the the language
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setDocumentLanguage")
  public void setDocumentLanguage_Method(gw.pl.external.i18n.ILocale language);

  /**
   * Sets the locale in which the document is created in.  This should not be changed once the
document is stored
   *
   * @param locale the locale
   * @deprecated use set language instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setLocale")
  public void setLocale_Method(gw.pl.external.i18n.ILocale locale);

  /**
   * 
   *
   * @param persisted when false (default is true), the document will not be persisted
This needs to be visible to rules so that certain utilities which interact with
IDocumentProduction implementations can set it so that things work correctly
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setPersistenceRequired")
  public void setPersistenceRequired(boolean persisted);


  /**
   * Utility class for initializing an instance of Document
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Document.
     */
    public static Document newInstance()
    {
      return (Document) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Document.class);
    }
  }

}
