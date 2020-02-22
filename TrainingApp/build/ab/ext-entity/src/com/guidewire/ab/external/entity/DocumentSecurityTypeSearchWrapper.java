package com.guidewire.ab.external.entity;

/**
 * Non-persistent entity used as wrapper for the list of document security types in the search criteria
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DocumentSecurityTypeSearchWrapper extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DocumentSearchCriteria")
  public com.guidewire.ab.external.entity.DocumentSearchCriteria getDocumentSearchCriteria();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DocumentSearchCriteria")
  public void setDocumentSearchCriteria(com.guidewire.ab.external.entity.DocumentSearchCriteria value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DocumentSecurityType")
  public com.guidewire.ab.external.typelist.DocumentSecurityType getDocumentSecurityType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DocumentSecurityType")
  public void setDocumentSecurityType(com.guidewire.ab.external.typelist.DocumentSecurityType value);


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
   * Utility class for initializing an instance of DocumentSecurityTypeSearchWrapper
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DocumentSecurityTypeSearchWrapper.
     */
    public static DocumentSecurityTypeSearchWrapper newInstance()
    {
      return (DocumentSecurityTypeSearchWrapper) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DocumentSecurityTypeSearchWrapper.class);
    }
  }

}
