package com.guidewire.pl.plugin.note;

/**
 * An interface fronting access to note templates.
An implementation may simply store templates in a local
repository, or, a more sophisticated implementation might interface with a
remote document management system.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface INoteTemplateSource extends gw.plugin.IPlugin
{

  /**
   * Returns the note template for the template filename.
   *
   * @return A note template instance corresponding to the specified template filename.
   * @param strTemplateFilename The template filename.
   * @deprecated use method with locale
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNoteTemplate")
  public com.guidewire.pl.plugin.note.INoteTemplateDescriptor getNoteTemplate(java.lang.String strTemplateFilename);



  /**
   * Returns the note template for the template filename.
   *
   * @return A note template instance corresponding to the specified template filename.
   * @param locale the locale that the template should be produced in
   * @param strTemplateFilename The template filename.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNoteTemplate")
  public com.guidewire.pl.plugin.note.INoteTemplateDescriptor getNoteTemplate(gw.pl.external.i18n.ILocale locale, java.lang.String strTemplateFilename);



  /**
   * Returns an array of note templates that satisfy the specified criteria.
   *
   * @return An array of note templates matching the specified criteria.
   * @param locale The locale that the not will be produced in
   * @param valuesToMatch "topic"   The note topic type.  See NoteTopicType
  "type"    Specifies the type of note templates to return (e.g., diagram, actionplan).
            See NoteType
   "lob"     Specifies the line of business criteria for the templates.
   "keywords" keywords An array of keywords for selective searching.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNoteTemplates")
  public com.guidewire.pl.plugin.note.INoteTemplateDescriptor[] getNoteTemplates(gw.pl.external.i18n.ILocale locale, java.util.Map valuesToMatch);



  /**
   * Returns an array of note templates that satisfy the specified criteria.
   *
   * @return An array of document templates matching the specified criteria.
   * @param strTopic The note topic. If null, returns templates w/o regard to topic.
   * @param strType Specifies the type of note templates to return (e.g., diagram,
                actionplan). If null, returns templates of all types.
   * @param strLOB Specifies the line of business criteria for the templates. If
                null, returns templates w/o regard to line of business.
   * @param keywords An array of keywords for selective searching.
   * @deprecated use locale version
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNoteTemplates")
  public com.guidewire.pl.plugin.note.INoteTemplateDescriptor[] getNoteTemplates(java.lang.String strTopic, java.lang.String strType, java.lang.String strLOB, java.lang.String[] keywords);

}
