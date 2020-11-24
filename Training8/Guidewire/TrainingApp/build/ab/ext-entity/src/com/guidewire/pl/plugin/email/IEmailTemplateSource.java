package com.guidewire.pl.plugin.email;

/**
 * Interface description...
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IEmailTemplateSource extends gw.plugin.IPlugin
{

  /**
   * Returns the email template for the template filename.
   *
   * @return A email template instance corresponding to the specified template filename.
   * @param strTemplateFilename The template filename.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEmailTemplate")
  public com.guidewire.pl.plugin.email.IEmailTemplateDescriptor getEmailTemplate(java.lang.String strTemplateFilename);



  /**
   * Returns the email template for the template filename.
   *
   * @return A email template instance corresponding to the specified template filename.
   * @param locale the locale to generate the email for
   * @param strTemplateFilename The template filename.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEmailTemplate")
  public com.guidewire.pl.plugin.email.IEmailTemplateDescriptor getEmailTemplate(gw.pl.external.i18n.ILocale locale, java.lang.String strTemplateFilename);



  /**
   * Returns an array of email templates that satisfy the specified criteria.
   *
   * @return An array of email templates matching the specified criteria.
   * @param locale the locale to generate the email for
   * @param valuesToMatch An map of name values to match
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEmailTemplates")
  public com.guidewire.pl.plugin.email.IEmailTemplateDescriptor[] getEmailTemplates(gw.pl.external.i18n.ILocale locale, java.util.Map valuesToMatch);



  /**
   * Returns an array of email templates that satisfy the specified criteria.
   *
   * @return An array of email templates matching the specified criteria.
   * @param strTopic The email topic. If null, returns templates w/o regard to topic.
   * @param keywords An array of keywords for selective searching.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEmailTemplates")
  public com.guidewire.pl.plugin.email.IEmailTemplateDescriptor[] getEmailTemplates(java.lang.String strTopic, java.lang.String[] keywords);

}
