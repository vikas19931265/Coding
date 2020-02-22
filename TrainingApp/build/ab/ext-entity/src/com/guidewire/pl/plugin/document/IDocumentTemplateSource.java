package com.guidewire.pl.plugin.document;

/**
 * An interface fronting access to template documents e.g., for generating
letters or forms. An implementation may simply store templates in a local
repository, or, a more sophisticated implementation might interface with a
remote document management system.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDocumentTemplateSource extends gw.plugin.IPlugin
{

  /**
   * Returns the document template without locale information for the template id.
   *
   * @return A document template instance corresponding to the specified template id.
   * @param strTemplateId The template id.
   * @deprecated use the overloaded method that takes locale
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDocumentTemplate")
  public com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor getDocumentTemplate(java.lang.String strTemplateId);



  /**
   * Returns the document template for the template id and the given locale
   *
   * @return A document template instance corresponding to the specified template id and locale
   * @param strTemplateId the template id
   * @param locale locale in which the document will be generated. A default template will be picked on null value
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDocumentTemplate")
  public com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor getDocumentTemplate(java.lang.String strTemplateId, gw.pl.external.i18n.ILocale locale);



  /**
   * Returns an array of document templates that satisfy the specified criteria.
   *
   * @return An array of document templates matching the specified criteria.
   * @param date A date which should fall between the effective and expiration dates for each template to be
             returned
   * @param valuesToMatch A map of property value names -> values to match in the templates. Values to be matched
             should be Strings or String[]s (if there is a legal set of values)
   * @param maxResults The maximum number of results which should be returned
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDocumentTemplates")
  public com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor[] getDocumentTemplates(java.util.Date date, java.util.Map valuesToMatch, int maxResults);



  /**
   * Returns an InputStream for the specified template name/id. The format of the
template id is implementation specific. A template is a document e.g., Word
document, Excel file, PDF form, etc.
   *
   * @return An input stream for reading the template, or null if the template
        could not be found or the caller doesn't have adequate privileges to get
        the template.
   * @param strTemplateId An implementation specific identifier for a template.
   * @deprecated use the overloaded method that takes locale
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTemplateAsStream")
  public java.io.InputStream getTemplateAsStream(java.lang.String strTemplateId) throws java.io.IOException;



  /**
   * Returns an InputStream for the specified template name/id. The format of the
template id is implementation specific. A template is a document e.g., Word
document, Excel file, PDF form, etc.
   *
   * @return An input stream for reading the template, or null if the template
        could not be found or the caller doesn't have adequate privileges to get
        the template.
   * @param strTemplateId An implementation specific identifier for a template.
   * @param locale locale in which the document will be generated. A default template will be picked on null value
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTemplateAsStream")
  public java.io.InputStream getTemplateAsStream(java.lang.String strTemplateId, gw.pl.external.i18n.ILocale locale) throws java.io.IOException;

}
