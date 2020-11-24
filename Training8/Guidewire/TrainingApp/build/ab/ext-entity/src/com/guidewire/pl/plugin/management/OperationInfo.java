package com.guidewire.pl.plugin.management;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface OperationInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Action")
  public boolean isAction();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Desc")
  public java.lang.String getDesc();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Info")
  public boolean isInfo();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReturnType")
  public java.lang.Class getReturnType();


  /**
   * Utility class for initializing an instance of com.guidewire.pl.plugin.management.OperationInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String
     * @param param1 String
     * @param param2 Class
     * @param param3 boolean
     * @param param4 boolean

     */
    public static OperationInfo newInstance(java.lang.String param, java.lang.String param1, java.lang.Class param2, boolean param3, boolean param4)
    {
      return (OperationInfo) gw.pl.external.Invoker.getInstance().construct(com.guidewire.pl.plugin.management.OperationInfo.class, new Class[]{ java.lang.String.class, java.lang.String.class, java.lang.Class.class, boolean.class, boolean.class} , new Object[]{ param, param1, param2, param3, param4});
    }

  }
}
