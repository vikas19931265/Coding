package com.guidewire.ab.external.entity;

/**
 * <p>Aggregates the information needed to display one PendingContactChange in the PendingContactChange.</p>
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PendingContactCreateView extends com.guidewire.ab.external.entity.PendingContactChangeView
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContactID")
  public gw.pl.external.entity.Key getABContactID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ABContactID")
  public void setABContactID(gw.pl.external.entity.Key value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContactSubtype")
  public com.guidewire.ab.external.typelist.ABContact getABContactSubtype();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ABContactSubtype")
  public void setABContactSubtype(com.guidewire.ab.external.typelist.ABContact value);


  /**
   * Returns a string description of the tags on an ABContact or an empty string
if no tags exist.
The string description is the list of ContactTagType DisplayName properties
sorted and comma separated.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContactTagsDescription")
  public java.lang.String getABContactTagsDescription();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PendingContactCreate")
  public com.guidewire.ab.external.entity.PendingContactCreate getPendingContactCreate();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PendingContactCreate")
  public void setPendingContactCreate(com.guidewire.ab.external.entity.PendingContactCreate value);


  /**
   * Utility class for initializing an instance of PendingContactCreateView
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity PendingContactCreateView.
     */
    public static PendingContactCreateView newInstance()
    {
      return (PendingContactCreateView) gw.pl.external.entity.EntityFactory.getInstance().newEntity(PendingContactCreateView.class);
    }
  }

}
