package com.guidewire.ab.external.entity;

/**
 * 
    A delegate containing the foreign key for decentralized admin entities.
  
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DecentralizedEntity extends gw.pl.external.entity.Entity
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Organization")
  public com.guidewire.ab.external.entity.Organization getOrganization();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Organization")
  public void setOrganization(com.guidewire.ab.external.entity.Organization value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrganizationID")
  public gw.pl.external.entity.Key getOrganizationID();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OrganizationID")
  public void setOrganizationID(gw.pl.external.entity.Key value);

  /**
   * null
   *
   * @param param Key
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setOrganizationID")
  public void setOrganizationID_Method(gw.pl.external.entity.Key param);

  /**
   * null
   *
   * @param param Organization
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setOrganization")
  public void setOrganization_Method(com.guidewire.ab.external.entity.Organization param);


  /**
   * Utility class for initializing an instance of DecentralizedEntity
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DecentralizedEntity.
     */
    public static DecentralizedEntity newInstance()
    {
      return (DecentralizedEntity) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DecentralizedEntity.class);
    }
  }

}
