package com.guidewire.ab.external.entity;

/**
 * <p>ValidationResult is used to read and write results of an object's validation (e.g. validation via rules, or field level validation).</p>
      <p>ValidationResult stores both entity level errors (general errors not associated with a particular field) and field level errors (errors associated with a particular field on an entity).</p>
      <p>A FieldValidation object can store the bad value which triggered the error (e.g. a mangled loss date that was imported with the claim) and may also suggests possible correct values,
      either as a list of objects or foreign keys (if the field is a foreign key, e.g. picking from a set of users with the last name "Shaw" if the imported ClaimDef only identifies "Shaw" as the owner).
      See FieldValidation to learn what information may be captured with an invalid field.</p>
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ValidationResult extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityValidations")
  public com.guidewire.ab.external.entity.EntityValidation[] getEntityValidations();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EntityValidations")
  public void setEntityValidations(com.guidewire.ab.external.entity.EntityValidation[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToEntityValidations")
  public void addToEntityValidations(com.guidewire.ab.external.entity.EntityValidation element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.EntityValidation from the EntityValidations array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromEntityValidations")
  public void removeFromEntityValidations(com.guidewire.ab.external.entity.EntityValidation element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.EntityValidation having id elementID from the EntityValidations array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromEntityValidations")
  public void removeFromEntityValidations(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of ValidationResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ValidationResult.
     */
    public static ValidationResult newInstance()
    {
      return (ValidationResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ValidationResult.class);
    }
  }

}
