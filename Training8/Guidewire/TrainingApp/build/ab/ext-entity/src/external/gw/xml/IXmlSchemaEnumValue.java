package external.gw.xml;

/**
 * All schema-based enumerations implement this interface.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXmlSchemaEnumValue
{
  /**
   * Returns the ordinal value of this enum constant.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Ordinal")
  public int getOrdinal();
}
