package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABLinkable extends gw.pl.external.entity.Entity
{


  /**
   * Return the external public ID
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "External_PublicID")
  public java.lang.String getExternal_PublicID();

  /**
   * Return the external public ID
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "External_PublicID")
  public void setExternal_PublicID(java.lang.String value);


  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LinkID")
  public java.lang.String getLinkID();

  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LinkID")
  public void setLinkID(java.lang.String value);

  /**
   * Set the external public ID
   *
   * @param value 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setExternal_PublicID")
  public void setExternal_PublicID_Method(java.lang.String value);


  /**
   * Utility class for initializing an instance of ABLinkable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ABLinkable.
     */
    public static ABLinkable newInstance()
    {
      return (ABLinkable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ABLinkable.class);
    }
  }

}
