package external.gw.xml.xsd.info;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDGroupingInfoDelegate
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public javax.xml.namespace.QName getName();


  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canBeFlattened")
  public boolean canBeFlattened(int param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canFlattenChildren")
  public boolean canFlattenChildren();



  /**
   * null
   *
   * @param param ListIterator<XSDBasedXMLNode>
   * @param param1 List<IXSDChildElementInfo>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "matchChildrenOnce")
  public external.gw.xml.xsd.info.NestedList matchChildrenOnce(java.util.ListIterator param, java.util.List param1);

}
