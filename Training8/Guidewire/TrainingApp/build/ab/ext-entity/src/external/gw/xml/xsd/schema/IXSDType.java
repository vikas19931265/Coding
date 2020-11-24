package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXSDType extends external.gw.xml.IXMLNode<external.gw.xml.xsd.schema.XSDXMLNode>
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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeName")
  public java.lang.String getTypeName();


  /**
   * null
   *
   * @param param XSDSchemaIndex
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createTypeInfo")
  public external.gw.xml.xsd.info.XSDNodeTypeInfo createTypeInfo(external.gw.xml.xsd.XSDSchemaIndex param);



  /**
   * null
   *
   * @param param XSDNodeTypeInfo
   * @param param1 XSDSchemaIndex
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateTypeInfo")
  public void populateTypeInfo(external.gw.xml.xsd.info.XSDNodeTypeInfo param, external.gw.xml.xsd.XSDSchemaIndex param1, java.lang.String param2);



  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setSingleElementReference")
  public void setSingleElementReference(javax.xml.namespace.QName param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setTargetNamespace")
  public void setTargetNamespace(java.lang.String param);



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
