package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProductModelDelegate extends gw.pl.external.entity.Entity
{


  /**
   * The source file in which the entity is defined
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceFile")
  public java.lang.String getSourceFile();

  /**
   * The source file in which the entity is defined
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceFile")
  public void setSourceFile(java.lang.String value);


  /**
   * Utility class for initializing an instance of ProductModelDelegate
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ProductModelDelegate.
     */
    public static ProductModelDelegate newInstance()
    {
      return (ProductModelDelegate) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ProductModelDelegate.class);
    }
  }

}
