package com.guidewire.ab.external.entity;

/**
 * Describes a single validation warning sent to the address book
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ValidationWarning extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


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
   * Associated UpdateBatch.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateBatch")
  public com.guidewire.ab.external.entity.UpdateBatch getUpdateBatch();

  /**
   * Associated UpdateBatch.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateBatch")
  public void setUpdateBatch(com.guidewire.ab.external.entity.UpdateBatch value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Warning")
  public java.lang.String getWarning();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Warning")
  public void setWarning(java.lang.String value);


  /**
   * Utility class for initializing an instance of ValidationWarning
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ValidationWarning.
     */
    public static ValidationWarning newInstance()
    {
      return (ValidationWarning) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ValidationWarning.class);
    }
  }

}
