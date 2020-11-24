package external.gw.xml;

/**
 * Represents an XML backing type instance. Think of this as all of an element's contents ( attributes,
child elements, etc ), but without the surrounding element. The reason for the distinction between an element and
it's backing type instance is due to the separation of these concepts in the XML Schema specification.
The reason this class is called XmlTypeInstance rather than XmlType is because instances of this class
represent particular instances of XML Types, they do not represent the types themselves. In other words,
a particular XML type might allow a child element named &quot;Foo&quot;, but a particular instance
of that type might have a child element named &quot;Foo&quot; that contains the value &quot;Bar&quot;
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlTypeInstance extends external.gw.xml.XmlBase
{

  /**
   * Serializes this type instance to the console. A root element will be supplied whose name is the Gosu typename
of this type instance type.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "print")
  public void print();

  /**
   * Serializes this type instance to the console. A root element will be supplied whose name is the Gosu typename
of this type instance type.
   *
   * @param options the options to control serialization
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "print")
  public void print(external.gw.xml.XmlSerializationOptions options);


  /**
   * Utility class for initializing an instance of external.gw.xml.XmlTypeInstance
   */
  public static class CONSTRUCT
  {

  }
}
