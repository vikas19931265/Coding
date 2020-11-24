package com.guidewire.ab.external.entity;

/**
 * Steps within a load command.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadStep extends com.guidewire.ab.external.entity.OrdereddLoaderObject, com.guidewire.ab.external.entity.TimedLoaderObject, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Millilseconds of elapsed time for this step.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Duration")
  public java.lang.Integer getDuration();


  /**
   * Timestamp when the timing completed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * Timestamp when the timing completed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * Order of execution (1-N). NOTE: when inserting a LoadStep this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecutionOrder")
  public java.lang.Integer getExecutionOrder();

  /**
   * Order of execution (1-N). NOTE: when inserting a LoadStep this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecutionOrder")
  public void setExecutionOrder(java.lang.Integer value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommand")
  public com.guidewire.ab.external.entity.LoadCommand getLoadCommand();

  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadCommand")
  public void setLoadCommand(com.guidewire.ab.external.entity.LoadCommand value);


  /**
   * Detailed operations.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Operations")
  public com.guidewire.ab.external.entity.LoadOperation[] getOperations();

  /**
   * Detailed operations.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Operations")
  public void setOperations(com.guidewire.ab.external.entity.LoadOperation[] value);


  /**
   * Operations ordered by start time, end time.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrderedOps")
  public external.gw.api.database.IQueryBeanResult getOrderedOps();


  /**
   * For non-root steps, points to parent step.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParentStep")
  public com.guidewire.ab.external.entity.LoadStep getParentStep();

  /**
   * For non-root steps, points to parent step.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParentStep")
  public void setParentStep(com.guidewire.ab.external.entity.LoadStep value);


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
   * Timestamp when the timing began.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Timestamp when the timing began.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * Type of load step. NOTE: when inserting a LoadStep this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StepType")
  public com.guidewire.ab.external.typelist.LoadStepType getStepType();

  /**
   * Type of load step. NOTE: when inserting a LoadStep this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StepType")
  public void setStepType(com.guidewire.ab.external.typelist.LoadStepType value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToOperations")
  public void addToOperations(com.guidewire.ab.external.entity.LoadOperation element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadOperation from the Operations array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromOperations")
  public void removeFromOperations(com.guidewire.ab.external.entity.LoadOperation element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadOperation having id elementID from the Operations array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromOperations")
  public void removeFromOperations(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of LoadStep
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadStep.
     */
    public static LoadStep newInstance()
    {
      return (LoadStep) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadStep.class);
    }
  }

}
