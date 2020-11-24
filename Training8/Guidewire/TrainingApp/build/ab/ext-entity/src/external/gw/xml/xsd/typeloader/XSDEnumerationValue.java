package external.gw.xml.xsd.typeloader;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDEnumerationValue extends external.gw.lang.reflect.IEnumValue, external.gw.lang.reflect.gs.IGosuObject
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Code")
  public java.lang.String getCode();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DisplayName")
  public java.lang.String getDisplayName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IntrinsicType")
  public gw.pl.external.Type getIntrinsicType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Ordinal")
  public int getOrdinal();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Value")
  public java.lang.Object getValue();


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.typeloader.XSDEnumerationValue
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String
     * @param param1 IXsdEnumerationType

     */
    public static XSDEnumerationValue newInstance(java.lang.String param, gw.pl.external.Type param1)
    {
      return (XSDEnumerationValue) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typeloader.XSDEnumerationValue.class, new Class[]{ java.lang.String.class, gw.pl.external.Type.class} , new Object[]{ param, param1});
    }

  }
}
