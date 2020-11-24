package com.guidewire.pl.plugin.document;

/**
 * Serializes and deserializes document template descriptors. Typically, descriptors persist
as XML, as such implementations of this class understand the format of document template
descriptors and can read and write them as XML.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDocumentTemplateSerializer extends gw.plugin.IPlugin
{

  /**
   * Given a descriptor, return a localized instance.
   *
   * @return localized descriptor
   * @param locale locale for the returned descriptor
   * @param descriptor descriptor to localize
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "localize")
  public com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor localize(gw.pl.external.i18n.ILocale locale, com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor descriptor);



  /**
   * De-serialize from the indicated reader to an IDocTemplateDescriptor implementation
   *
   * @return A class implementing IDocTemplateDescriptor.
   * @param inputStream A input streamcontaining a serialized template descriptor.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "read")
  public com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor read(java.io.InputStream inputStream);



  /**
   * Serialize the indicated template descriptor to the Writer.
   *
   * @param outputStream The outputstream to which the serialized descriptor should be written
   * @param descriptor The template descriptor to be serialized.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "write")
  public void write(java.io.OutputStream outputStream, com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor descriptor);

}
