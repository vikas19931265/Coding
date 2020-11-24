package com.guidewire.ab.external.entity;

/**
 * Timed loader callbacks.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadCallback extends com.guidewire.ab.external.entity.OrdereddLoaderObject, com.guidewire.ab.external.entity.TimedLoaderObject, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Timed loader callback results.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CallbackResults")
  public com.guidewire.ab.external.entity.LoadCallbackResult[] getCallbackResults();

  /**
   * Timed loader callback results.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CallbackResults")
  public void setCallbackResults(com.guidewire.ab.external.entity.LoadCallbackResult[] value);


  /**
   * Description of loader callback. NOTE: when inserting a LoadCallback this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of loader callback. NOTE: when inserting a LoadCallback this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Get the duration in milliseconds
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
   * Order of execution (1-N). NOTE: when inserting a LoadCallback this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecutionOrder")
  public java.lang.Integer getExecutionOrder();

  /**
   * Order of execution (1-N). NOTE: when inserting a LoadCallback this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecutionOrder")
  public void setExecutionOrder(java.lang.Integer value);


  /**
   * Execution time of LoaderCallback. NOTE: when inserting a LoadCallback this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecutionTime")
  public com.guidewire.ab.external.typelist.LoaderCallbackTimeType getExecutionTime();

  /**
   * Execution time of LoaderCallback. NOTE: when inserting a LoadCallback this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecutionTime")
  public void setExecutionTime(com.guidewire.ab.external.typelist.LoaderCallbackTimeType value);


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
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadOperation")
  public com.guidewire.ab.external.entity.LoadOperation getLoadOperation();

  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadOperation")
  public void setLoadOperation(com.guidewire.ab.external.entity.LoadOperation value);


  /**
   * Name of loader callback. NOTE: when inserting a LoadCallback this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Name of loader callback. NOTE: when inserting a LoadCallback this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * Get the LoadCallbackResults in chronological order
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrderedResults")
  public external.gw.api.database.IQueryBeanResult getOrderedResults();


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
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToCallbackResults")
  public void addToCallbackResults(com.guidewire.ab.external.entity.LoadCallbackResult element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadCallbackResult from the CallbackResults array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCallbackResults")
  public void removeFromCallbackResults(com.guidewire.ab.external.entity.LoadCallbackResult element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadCallbackResult having id elementID from the CallbackResults array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCallbackResults")
  public void removeFromCallbackResults(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of LoadCallback
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadCallback.
     */
    public static LoadCallback newInstance()
    {
      return (LoadCallback) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadCallback.class);
    }
  }

}
