package com.guidewire.pl.plugin.note;

/**
 * Serializes and deserializes note template descriptors. Typically, descriptors persist
as XML, as such implementations of this class understand the format of note template
descriptors and can read and write them as XML.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface INoteTemplateSerializer extends gw.plugin.IPlugin
{

  /**
   * De-serialize from the indicated reader to an INoteTemplateDescriptor implementation
   *
   * @return A class implementing IDocTemplateDescriptor.
   * @param readerSource A reader containing a serialized template descriptor.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "read")
  public com.guidewire.pl.plugin.note.INoteTemplateDescriptor read(java.io.Reader readerSource);



  /**
   * Serialize the indicated template descriptor to the Writer.
   *
   * @param writerTarget The writer to which the serialized descriptor should be written
   * @param descriptor The template descriptor to be serialized.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "write")
  public void write(java.io.Writer writerTarget, com.guidewire.pl.plugin.note.INoteTemplateDescriptor descriptor);

}
