package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ExternallyReferenceable extends gw.pl.external.entity.Entity
{


  /**
   * The reference code for this entity on an external system NOTE: when inserting a ExternallyReferenceable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RefCode")
  public java.lang.String getRefCode();

  /**
   * The reference code for this entity on an external system NOTE: when inserting a ExternallyReferenceable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RefCode")
  public void setRefCode(java.lang.String value);


  /**
   * Utility class for initializing an instance of ExternallyReferenceable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ExternallyReferenceable.
     */
    public static ExternallyReferenceable newInstance()
    {
      return (ExternallyReferenceable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ExternallyReferenceable.class);
    }
  }

}
