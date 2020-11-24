package com.guidewire.ab.external.entity;

/**
 * 
      UpdateBatch has been deprecated since ClaimCenter 8.0 along with the IAddressBookAdapter.
  
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpdateBatch extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * List of objects to be created in the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUpdateOps")
  public com.guidewire.ab.external.entity.CreateUpdateOp[] getCreateUpdateOps();

  /**
   * List of objects to be created in the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CreateUpdateOps")
  public void setCreateUpdateOps(com.guidewire.ab.external.entity.CreateUpdateOp[] value);


  /**
   * List of entities to be deleted from the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeleteUpdateOps")
  public com.guidewire.ab.external.entity.DeleteUpdateOp[] getDeleteUpdateOps();

  /**
   * List of entities to be deleted from the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DeleteUpdateOps")
  public void setDeleteUpdateOps(com.guidewire.ab.external.entity.DeleteUpdateOp[] value);


  /**
   * List of changes to fields' values in different entities.  Notice that in this list every entry may apply to a different entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FieldChangeUpdateOps")
  public com.guidewire.ab.external.entity.FieldChangeUpdateOp[] getFieldChangeUpdateOps();

  /**
   * List of changes to fields' values in different entities.  Notice that in this list every entry may apply to a different entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FieldChangeUpdateOps")
  public void setFieldChangeUpdateOps(com.guidewire.ab.external.entity.FieldChangeUpdateOp[] value);


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
   * List of validation warnings to be ignored by Address Book
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValidationWarningsToIgnore")
  public com.guidewire.ab.external.entity.ValidationWarning[] getValidationWarningsToIgnore();

  /**
   * List of validation warnings to be ignored by Address Book
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ValidationWarningsToIgnore")
  public void setValidationWarningsToIgnore(com.guidewire.ab.external.entity.ValidationWarning[] value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToCreateUpdateOps")
  public void addToCreateUpdateOps(com.guidewire.ab.external.entity.CreateUpdateOp element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDeleteUpdateOps")
  public void addToDeleteUpdateOps(com.guidewire.ab.external.entity.DeleteUpdateOp element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToFieldChangeUpdateOps")
  public void addToFieldChangeUpdateOps(com.guidewire.ab.external.entity.FieldChangeUpdateOp element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToValidationWarningsToIgnore")
  public void addToValidationWarningsToIgnore(com.guidewire.ab.external.entity.ValidationWarning element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.CreateUpdateOp from the CreateUpdateOps array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCreateUpdateOps")
  public void removeFromCreateUpdateOps(com.guidewire.ab.external.entity.CreateUpdateOp element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.CreateUpdateOp having id elementID from the CreateUpdateOps array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCreateUpdateOps")
  public void removeFromCreateUpdateOps(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DeleteUpdateOp from the DeleteUpdateOps array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDeleteUpdateOps")
  public void removeFromDeleteUpdateOps(com.guidewire.ab.external.entity.DeleteUpdateOp element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DeleteUpdateOp having id elementID from the DeleteUpdateOps array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDeleteUpdateOps")
  public void removeFromDeleteUpdateOps(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.FieldChangeUpdateOp from the FieldChangeUpdateOps array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromFieldChangeUpdateOps")
  public void removeFromFieldChangeUpdateOps(com.guidewire.ab.external.entity.FieldChangeUpdateOp element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.FieldChangeUpdateOp having id elementID from the FieldChangeUpdateOps array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromFieldChangeUpdateOps")
  public void removeFromFieldChangeUpdateOps(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ValidationWarning from the ValidationWarningsToIgnore array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromValidationWarningsToIgnore")
  public void removeFromValidationWarningsToIgnore(com.guidewire.ab.external.entity.ValidationWarning element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ValidationWarning having id elementID from the ValidationWarningsToIgnore array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromValidationWarningsToIgnore")
  public void removeFromValidationWarningsToIgnore(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of UpdateBatch
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpdateBatch.
     */
    public static UpdateBatch newInstance()
    {
      return (UpdateBatch) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpdateBatch.class);
    }
  }

}
