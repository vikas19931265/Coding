package com.guidewire.ab.external.entity;

/**
 * Non-persistent set of criteria to use to represent the results of a specific document template search.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DocumentTemplateSearchResults extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The date/time on which the document template starts to be effective.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateEffective")
  public java.util.Date getDateEffective();

  /**
   * The date/time on which the document template starts to be effective.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateEffective")
  public void setDateEffective(java.util.Date value);


  /**
   * The date/time on which the document template expires.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateExpires")
  public java.util.Date getDateExpires();

  /**
   * The date/time on which the document template expires.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateExpires")
  public void setDateExpires(java.util.Date value);


  /**
   * The last date/time the document template was modified.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateModified")
  public java.util.Date getDateModified();

  /**
   * The last date/time the document template was modified.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateModified")
  public void setDateModified(java.util.Date value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * The language of the template
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Language")
  public com.guidewire.ab.external.typelist.LanguageType getLanguage();


  /**
   * The name of the document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * The name of the document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


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
   * The ID of the document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TemplateID")
  public java.lang.String getTemplateID();

  /**
   * The ID of the document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TemplateID")
  public void setTemplateID(java.lang.String value);


  /**
   * The type which will be assigned to documents created from this document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.DocumentType getType();

  /**
   * The type which will be assigned to documents created from this document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.DocumentType value);

  /**
   * Load the descriptor from the <code>IDocumentTemplateSource</code> plugin
   *
   * @return descriptor that match the template and locale
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "loadDescriptor")
  public com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor loadDescriptor();


  /**
   * Utility class for initializing an instance of DocumentTemplateSearchResults
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DocumentTemplateSearchResults.
     */
    public static DocumentTemplateSearchResults newInstance()
    {
      return (DocumentTemplateSearchResults) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DocumentTemplateSearchResults.class);
    }
  }

}
