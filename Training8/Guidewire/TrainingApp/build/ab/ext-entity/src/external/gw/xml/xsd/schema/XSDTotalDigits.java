package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDTotalDigits extends external.gw.xml.xsd.schema.IXSDRestrictionFacet, external.gw.xml.xsd.schema.XSDXMLNode
{

  /**
   * null
   *
   * @param param XSDNodeValueInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "applyRestriction")
  public void applyRestriction(external.gw.xml.xsd.info.XSDNodeValueInfo param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDTotalDigits
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDTotalDigits newInstance()
    {
      return (XSDTotalDigits) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDTotalDigits.class, new Class[]{ } , new Object[]{ });
    }

  }
}
