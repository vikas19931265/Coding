package com.guidewire.ab.external.entity;

/**
 * Search criteria used for workflow stats searches.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WFStatsSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Returns all the workflow subtypes that are not abstract.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AvailableTypes")
  public com.guidewire.ab.external.typelist.Workflow[] getAvailableTypes();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Date lower bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateFrom")
  public java.util.Date getDateFrom();

  /**
   * Date lower bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateFrom")
  public void setDateFrom(java.util.Date value);


  /**
   * Date upper bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateTo")
  public java.util.Date getDateTo();

  /**
   * Date upper bound.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateTo")
  public void setDateTo(java.util.Date value);


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
   * The type of workflow.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.Workflow getType();

  /**
   * The type of workflow.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.Workflow value);

  /**
   * Finds all workflow stats that match this search criteria
   *
   * @return a QueryProcessor of WorkflowStepStats objects that match this search criteria
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearch")
  public external.gw.api.database.IQueryBeanResult performSearch();


  /**
   * Utility class for initializing an instance of WFStatsSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WFStatsSearchCriteria.
     */
    public static WFStatsSearchCriteria newInstance()
    {
      return (WFStatsSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WFStatsSearchCriteria.class);
    }
  }

}
