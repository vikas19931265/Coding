package com.guidewire.ab.external.entity;

/**
 * LUWIDs to be excluded by the loader.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadExclusion extends gw.pl.external.entity.Entity
{


  /**
   * Logical Unit of Work ID NOTE: when inserting a LoadExclusion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LUWID")
  public java.lang.String getLUWID();

  /**
   * Logical Unit of Work ID NOTE: when inserting a LoadExclusion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LUWID")
  public void setLUWID(java.lang.String value);


  /**
   * Utility class for initializing an instance of LoadExclusion
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadExclusion.
     */
    public static LoadExclusion newInstance()
    {
      return (LoadExclusion) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadExclusion.class);
    }
  }

}
