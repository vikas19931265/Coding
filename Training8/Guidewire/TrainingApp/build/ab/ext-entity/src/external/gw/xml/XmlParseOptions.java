package external.gw.xml;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlParseOptions
{


  /**
   * Any additional schemas that should be present when parsing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AdditionalSchemas")
  public java.util.List getAdditionalSchemas();

  /**
   * Any additional schemas that should be present when parsing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AdditionalSchemas")
  public void setAdditionalSchemas(java.util.List value);


  /**
   * Determines whether XML will be validated against the schemas.
   * @deprecated Turning off validation is an experimental feature. Use at your own risk.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Validate")
  public boolean isValidate();

  /**
   * Determines whether XML will be validated against the schemas.
   * @deprecated Turning off validation is an experimental feature. Use at your own risk.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Validate")
  public void setValidate(boolean value);

  /**
   * Makes a deep copy of this object.
   *
   * @return a deep copy of this object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copy")
  public external.gw.xml.XmlParseOptions copy();


  /**
   * Utility class for initializing an instance of external.gw.xml.XmlParseOptions
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XmlParseOptions newInstance()
    {
      return (XmlParseOptions) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.XmlParseOptions.class, new Class[]{ } , new Object[]{ });
    }

  }
}
