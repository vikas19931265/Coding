package external.gw.xml.xsd.info;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDNodeValueInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BaseType")
  public javax.xml.namespace.QName getBaseType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BaseType")
  public void setBaseType(javax.xml.namespace.QName value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnumerationOptions")
  public java.util.List getEnumerationOptions();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FullyQualifiedTypeName")
  public java.lang.String getFullyQualifiedTypeName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FullyQualifiedTypeName")
  public void setFullyQualifiedTypeName(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxLength")
  public int getMaxLength();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaxLength")
  public void setMaxLength(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinLength")
  public int getMinLength();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinLength")
  public void setMinLength(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Pattern")
  public java.lang.String getPattern();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Pattern")
  public void setPattern(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalDigits")
  public int getTotalDigits();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalDigits")
  public void setTotalDigits(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeWrapper")
  public external.gw.xml.xsd.typewrapper.XSDTypeWrapper getTypeWrapper();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeWrapper")
  public void setTypeWrapper(external.gw.xml.xsd.typewrapper.XSDTypeWrapper value);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addEnumerationOption")
  public void addEnumerationOption(java.lang.String param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.info.XSDNodeValueInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param XSDSchemaIndex

     */
    public static XSDNodeValueInfo newInstance(external.gw.xml.xsd.XSDSchemaIndex param)
    {
      return (XSDNodeValueInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.info.XSDNodeValueInfo.class, new Class[]{ external.gw.xml.xsd.XSDSchemaIndex.class} , new Object[]{ param});
    }

  }
}
