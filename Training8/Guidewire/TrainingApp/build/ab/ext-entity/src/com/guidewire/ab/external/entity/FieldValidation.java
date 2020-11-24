package com.guidewire.ab.external.entity;

/**
 * Field validation error or warning raised on an entity
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface FieldValidation extends com.guidewire.ab.external.entity.ValidationIssue
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
   *  NOTE: when inserting a FieldValidation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FieldName")
  public java.lang.String getFieldName();

  /**
   *  NOTE: when inserting a FieldValidation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FieldName")
  public void setFieldName(java.lang.String value);


  /**
   * Utility class for initializing an instance of FieldValidation
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity FieldValidation.
     */
    public static FieldValidation newInstance()
    {
      return (FieldValidation) gw.pl.external.entity.EntityFactory.getInstance().newEntity(FieldValidation.class);
    }
  }

}
