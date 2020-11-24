package com.guidewire.ab.external.entity;

/**
 * Store mapping for sequence-key to sequence-number, sequence-key are generated on demand, and number a unique sequnce acquire by application.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Sequence extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


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
   * The sequence-key (name). NOTE: when inserting a Sequence this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SequenceKey")
  public java.lang.String getSequenceKey();

  /**
   * The sequence-key (name). NOTE: when inserting a Sequence this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SequenceKey")
  public void setSequenceKey(java.lang.String value);


  /**
   * The unique sequence-number for the key. NOTE: when inserting a Sequence this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SequenceNumber")
  public java.lang.Long getSequenceNumber();

  /**
   * The unique sequence-number for the key. NOTE: when inserting a Sequence this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SequenceNumber")
  public void setSequenceNumber(java.lang.Long value);


  /**
   * Utility class for initializing an instance of Sequence
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Sequence.
     */
    public static Sequence newInstance()
    {
      return (Sequence) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Sequence.class);
    }
  }

}
