package com.guidewire.ab.external.entity;

/**
 * Validation on a specific entity
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EntityValidation extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * ID of the entity NOTE: when inserting a EntityValidation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityId")
  public java.lang.Long getEntityId();

  /**
   * ID of the entity NOTE: when inserting a EntityValidation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EntityId")
  public void setEntityId(java.lang.Long value);


  /**
   * What kind of entity NOTE: when inserting a EntityValidation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityType")
  public java.lang.String getEntityType();

  /**
   * What kind of entity NOTE: when inserting a EntityValidation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EntityType")
  public void setEntityType(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FieldValidations")
  public com.guidewire.ab.external.entity.FieldValidation[] getFieldValidations();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FieldValidations")
  public void setFieldValidations(com.guidewire.ab.external.entity.FieldValidation[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GeneralValidations")
  public com.guidewire.ab.external.entity.GeneralValidation[] getGeneralValidations();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GeneralValidations")
  public void setGeneralValidations(com.guidewire.ab.external.entity.GeneralValidation[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OwningValidationResult")
  public com.guidewire.ab.external.entity.ValidationResult getOwningValidationResult();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OwningValidationResult")
  public void setOwningValidationResult(com.guidewire.ab.external.entity.ValidationResult value);


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToFieldValidations")
  public void addToFieldValidations(com.guidewire.ab.external.entity.FieldValidation element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToGeneralValidations")
  public void addToGeneralValidations(com.guidewire.ab.external.entity.GeneralValidation element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.FieldValidation from the FieldValidations array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromFieldValidations")
  public void removeFromFieldValidations(com.guidewire.ab.external.entity.FieldValidation element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.FieldValidation having id elementID from the FieldValidations array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromFieldValidations")
  public void removeFromFieldValidations(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GeneralValidation from the GeneralValidations array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGeneralValidations")
  public void removeFromGeneralValidations(com.guidewire.ab.external.entity.GeneralValidation element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GeneralValidation having id elementID from the GeneralValidations array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGeneralValidations")
  public void removeFromGeneralValidations(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of EntityValidation
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity EntityValidation.
     */
    public static EntityValidation newInstance()
    {
      return (EntityValidation) gw.pl.external.entity.EntityFactory.getInstance().newEntity(EntityValidation.class);
    }
  }

}
