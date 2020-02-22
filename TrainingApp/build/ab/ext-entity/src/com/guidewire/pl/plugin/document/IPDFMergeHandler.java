package com.guidewire.pl.plugin.document;

/**
 * Interface implemented by classes which implement code to perform merges on PDF templates on the server.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IPDFMergeHandler extends gw.plugin.IPlugin
{

  /**
   * Merge the indicated values into the template identified by the given templateDescriptor, based on the
given form field names.
   *
   * @return The completed document, as a byte array
   * @param templateDescriptor The template on which the document will be based
   * @param names The names of the fields whose values will be set by the merge code
   * @param values The values to be used in the merge
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "doPDFMerge")
  public byte[] doPDFMerge(com.guidewire.pl.plugin.document.IDocumentTemplateDescriptor templateDescriptor, java.lang.String[] names, java.lang.String[] values);

}
