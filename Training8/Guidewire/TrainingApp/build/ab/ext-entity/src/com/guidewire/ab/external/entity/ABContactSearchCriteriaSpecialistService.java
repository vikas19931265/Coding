package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactSearchCriteriaSpecialistService extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * ABContactSearchCriteria
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContactSearchCriteria")
  public com.guidewire.ab.external.entity.ABContactSearchCriteria getABContactSearchCriteria();


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
   * SpecialistService NOTE: when inserting a ABContactSearchCriteriaSpecialistService this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SpecialistService")
  public com.guidewire.ab.external.entity.SpecialistService getSpecialistService();

  /**
   * SpecialistService NOTE: when inserting a ABContactSearchCriteriaSpecialistService this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SpecialistService")
  public void setSpecialistService(com.guidewire.ab.external.entity.SpecialistService value);


  /**
   * Utility class for initializing an instance of ABContactSearchCriteriaSpecialistService
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABContactSearchCriteriaSpecialistService.
     */
    public static ABContactSearchCriteriaSpecialistService newInstance()
    {
      return (ABContactSearchCriteriaSpecialistService) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABContactSearchCriteriaSpecialistService.class);
    }
  }

}
