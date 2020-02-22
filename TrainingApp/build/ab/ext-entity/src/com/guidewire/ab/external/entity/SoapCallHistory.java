package com.guidewire.ab.external.entity;

/**
 * History of SOAP calls
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SoapCallHistory extends com.guidewire.ab.external.entity.InboundHistory
{


  /**
   * The name of the operation. NOTE: when inserting a SoapCallHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OperationName")
  public java.lang.String getOperationName();

  /**
   * The name of the operation. NOTE: when inserting a SoapCallHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OperationName")
  public void setOperationName(java.lang.String value);


  /**
   * The name of the server receiving the request. NOTE: when inserting a SoapCallHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServerName")
  public java.lang.String getServerName();

  /**
   * The name of the server receiving the request. NOTE: when inserting a SoapCallHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServerName")
  public void setServerName(java.lang.String value);


  /**
   * The name of the service. NOTE: when inserting a SoapCallHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServiceName")
  public java.lang.String getServiceName();

  /**
   * The name of the service. NOTE: when inserting a SoapCallHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServiceName")
  public void setServiceName(java.lang.String value);


  /**
   * Utility class for initializing an instance of SoapCallHistory
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity SoapCallHistory.
     */
    public static SoapCallHistory newInstance()
    {
      return (SoapCallHistory) gw.pl.external.entity.EntityFactory.getInstance().newEntity(SoapCallHistory.class);
    }
  }

}
