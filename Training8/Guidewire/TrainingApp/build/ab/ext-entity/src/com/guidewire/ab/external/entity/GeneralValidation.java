package com.guidewire.ab.external.entity;

/**
 * General validation error or warning raised on an entity
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GeneralValidation extends com.guidewire.ab.external.entity.ValidationIssue
{


  /**
   * Utility class for initializing an instance of GeneralValidation
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GeneralValidation.
     */
    public static GeneralValidation newInstance()
    {
      return (GeneralValidation) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GeneralValidation.class);
    }
  }

}
