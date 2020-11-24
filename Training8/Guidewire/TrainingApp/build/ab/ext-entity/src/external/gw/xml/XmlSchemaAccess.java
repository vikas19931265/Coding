package external.gw.xml;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlSchemaAccess <T extends external.gw.xml.XmlElement>
{


  /**
   * Returns the schema represented by this XmlSchemaAccess type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Schema")
  public T getSchema();
}
