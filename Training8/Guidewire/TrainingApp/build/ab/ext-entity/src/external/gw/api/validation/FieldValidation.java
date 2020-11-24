package external.gw.api.validation;

/**
 * FieldValidation
Field validation error raised on an entity
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface FieldValidation extends external.gw.api.validation.ValidationIssue
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BadValue")
  public java.lang.String getBadValue();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BadValue")
  public void setBadValue(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FieldName")
  public java.lang.String getFieldName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FieldName")
  public void setFieldName(java.lang.String value);


  /**
   * Utility class for initializing an instance of external.gw.api.validation.FieldValidation
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static FieldValidation newInstance()
    {
      return (FieldValidation) gw.pl.external.Invoker.getInstance().construct(external.gw.api.validation.FieldValidation.class, new Class[]{ } , new Object[]{ });
    }

  }
}
