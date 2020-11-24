package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface OrdereddLoaderObject extends gw.pl.external.entity.Entity
{


  /**
   * Order of execution (1-N). NOTE: when inserting a OrdereddLoaderObject this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecutionOrder")
  public java.lang.Integer getExecutionOrder();

  /**
   * Order of execution (1-N). NOTE: when inserting a OrdereddLoaderObject this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecutionOrder")
  public void setExecutionOrder(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of OrdereddLoaderObject
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity OrdereddLoaderObject.
     */
    public static OrdereddLoaderObject newInstance()
    {
      return (OrdereddLoaderObject) gw.pl.external.entity.EntityFactory.getInstance().newEntity(OrdereddLoaderObject.class);
    }
  }

}
