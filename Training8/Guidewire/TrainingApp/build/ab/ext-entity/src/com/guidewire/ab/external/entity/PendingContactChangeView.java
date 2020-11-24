package com.guidewire.ab.external.entity;

/**
 * <p>Aggregates the information needed to display one PendingContactChange in the PendingContactChange.</p>
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PendingContactChangeView extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContactName")
  public java.lang.String getABContactName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ABContactName")
  public void setABContactName(java.lang.String value);


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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RelatedTo")
  public java.lang.String getRelatedTo();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RelatedTo")
  public void setRelatedTo(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RequestingUser")
  public java.lang.String getRequestingUser();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RequestingUser")
  public void setRequestingUser(java.lang.String value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.PendingContactChangeView getSubtype();


  /**
   * Utility class for initializing an instance of PendingContactChangeView
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity PendingContactChangeView.
     */
    public static PendingContactChangeView newInstance()
    {
      return (PendingContactChangeView) gw.pl.external.entity.EntityFactory.getInstance().newEntity(PendingContactChangeView.class);
    }
  }

}
