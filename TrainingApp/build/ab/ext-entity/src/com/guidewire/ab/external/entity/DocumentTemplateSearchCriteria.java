package com.guidewire.ab.external.entity;

/**
 * Non-persistent set of criteria to use in searching for a specific document template.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DocumentTemplateSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The date and time to be used when filtering document templates by effective date.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Effectivedate")
  public java.util.Date getEffectivedate();

  /**
   * The date and time to be used when filtering document templates by effective date.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Effectivedate")
  public void setEffectivedate(java.util.Date value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Comma-separated list of required keyword(s) set of the document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Keywords")
  public java.lang.String getKeywords();

  /**
   * Comma-separated list of required keyword(s) set of the document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Keywords")
  public void setKeywords(java.lang.String value);


  /**
   * The language in which the document is to be generated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Language")
  public com.guidewire.ab.external.typelist.LanguageType getLanguage();

  /**
   * The language in which the document is to be generated
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
   * Type of document created by the document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.DocumentType getType();

  /**
   * Type of document created by the document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.DocumentType value);

  /**
   * Performs the search and returns the matching alltemplates
   *
   * @return array of IDocumentTemplateDescriptor
   * @param symbolProvider the current symbol context.  Templates that require symbols that aren't in the current context will be removed.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearch")
  public com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor[] performSearch(external.gw.document.SymbolProvider symbolProvider);

  /**
   * Performs the search and returns the matching templates.  This just uses the expected symbol names.  This is primarily
used for ActivityPattern or Activity create, when the objects are not yet present.
   *
   * @return array of search result
   * @param availableSymbols the current symbol context.  Templates that require symbols that aren't in the current context will be removed.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearch")
  public com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor[] performSearch(java.util.Set availableSymbols);


  /**
   * Utility class for initializing an instance of DocumentTemplateSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DocumentTemplateSearchCriteria.
     */
    public static DocumentTemplateSearchCriteria newInstance()
    {
      return (DocumentTemplateSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DocumentTemplateSearchCriteria.class);
    }
  }

}
