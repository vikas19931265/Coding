package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDMaxLength extends external.gw.xml.xsd.schema.IXSDRestrictionFacet, external.gw.xml.xsd.schema.XSDXMLNode
{

  /**
   * null
   *
   * @param param XSDNodeValueInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "applyRestriction")
  public void applyRestriction(external.gw.xml.xsd.info.XSDNodeValueInfo param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDMaxLength
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDMaxLength newInstance()
    {
      return (XSDMaxLength) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDMaxLength.class, new Class[]{ } , new Object[]{ });
    }

  }
}
