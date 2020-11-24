package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDTypeBase extends external.gw.xml.xsd.schema.IXSDType, external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public javax.xml.namespace.QName getName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SingleElementReference")
  public javax.xml.namespace.QName getSingleElementReference();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SingleElementReference")
  public void setSingleElementReference(javax.xml.namespace.QName value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeName")
  public java.lang.String getTypeName();

  /**
   * null
   *
   * @param param String
   * @param param1 Set<String>
   * @param param2 Map<String, String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setTypeName")
  public void setTypeName(java.lang.String param, java.util.Set param1, java.util.Map param2);
}
