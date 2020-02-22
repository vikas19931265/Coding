package com.guidewire.ab.external.entity;

/**
 * This non-persistent entity has been deprecated since ClaimCenter 8.0 along with the IAddressBookAdapter.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface FieldChangeUpdateOp extends com.guidewire.ab.external.entity.UpdateOp
{


  /**
   * Identifies the entity type.  e.g. Person, Company, or Adjudicator.  (Entity type on the application side not a ContactManager entity type)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityTypeName")
  public java.lang.String getEntityTypeName();

  /**
   * Identifies the entity type.  e.g. Person, Company, or Adjudicator.  (Entity type on the application side not a ContactManager entity type)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EntityTypeName")
  public void setEntityTypeName(java.lang.String value);


  /**
   * Identifies the field for the application side.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Field")
  public java.lang.String getField();

  /**
   * Identifies the field for the application side.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Field")
  public void setField(java.lang.String value);


  /**
   * Uniquely identifies target object of the operation.  Can be either an AddressBookUId or a temporary ObjectId that was defined in a CreateUpdateOp.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ObjectUId")
  public java.lang.String getObjectUId();

  /**
   * Uniquely identifies target object of the operation.  Can be either an AddressBookUId or a temporary ObjectId that was defined in a CreateUpdateOp.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ObjectUId")
  public void setObjectUId(java.lang.String value);


  /**
   * Identifies the value of the field on the app side.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Value")
  public java.lang.String getValue();

  /**
   * Identifies the value of the field on the app side.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Value")
  public void setValue(java.lang.String value);


  /**
   * Utility class for initializing an instance of FieldChangeUpdateOp
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity FieldChangeUpdateOp.
     */
    public static FieldChangeUpdateOp newInstance()
    {
      return (FieldChangeUpdateOp) gw.pl.external.entity.EntityFactory.getInstance().newEntity(FieldChangeUpdateOp.class);
    }
  }

}
