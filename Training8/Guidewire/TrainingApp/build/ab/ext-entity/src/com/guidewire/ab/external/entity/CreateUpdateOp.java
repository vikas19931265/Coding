package com.guidewire.ab.external.entity;

/**
 * This non-persistent entity has been deprecated since ClaimCenter 8.0 along with the IAddressBookAdapter.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CreateUpdateOp extends com.guidewire.ab.external.entity.UpdateOp
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
   * Temporary ID for the newly created object.  Needs to be unique within this UpdateBatch.  Can be referenced from the FieldUpdateOps.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ObjectUId")
  public java.lang.String getObjectUId();

  /**
   * Temporary ID for the newly created object.  Needs to be unique within this UpdateBatch.  Can be referenced from the FieldUpdateOps.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ObjectUId")
  public void setObjectUId(java.lang.String value);


  /**
   * Utility class for initializing an instance of CreateUpdateOp
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity CreateUpdateOp.
     */
    public static CreateUpdateOp newInstance()
    {
      return (CreateUpdateOp) gw.pl.external.entity.EntityFactory.getInstance().newEntity(CreateUpdateOp.class);
    }
  }

}
