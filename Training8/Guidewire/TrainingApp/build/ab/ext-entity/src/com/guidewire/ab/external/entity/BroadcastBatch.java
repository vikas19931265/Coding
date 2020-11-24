package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BroadcastBatch extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Serialized list of messages NOTE: when inserting a BroadcastBatch this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Messages")
  public external.gw.lang.Blob getMessages();

  /**
   * Serialized list of messages NOTE: when inserting a BroadcastBatch this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Messages")
  public void setMessages(external.gw.lang.Blob value);


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
   * Sequence ID NOTE: when inserting a BroadcastBatch this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SeqNo")
  public java.math.BigDecimal getSeqNo();

  /**
   * Sequence ID NOTE: when inserting a BroadcastBatch this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SeqNo")
  public void setSeqNo(java.math.BigDecimal value);


  /**
   * Sender's serverID NOTE: when inserting a BroadcastBatch this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServerId")
  public java.lang.String getServerId();

  /**
   * Sender's serverID NOTE: when inserting a BroadcastBatch this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServerId")
  public void setServerId(java.lang.String value);


  /**
   * Time batch inserted NOTE: when inserting a BroadcastBatch this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TimeInserted")
  public java.util.Date getTimeInserted();

  /**
   * Time batch inserted NOTE: when inserting a BroadcastBatch this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TimeInserted")
  public void setTimeInserted(java.util.Date value);


  /**
   * Utility class for initializing an instance of BroadcastBatch
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity BroadcastBatch.
     */
    public static BroadcastBatch newInstance()
    {
      return (BroadcastBatch) gw.pl.external.entity.EntityFactory.getInstance().newEntity(BroadcastBatch.class);
    }
  }

}
