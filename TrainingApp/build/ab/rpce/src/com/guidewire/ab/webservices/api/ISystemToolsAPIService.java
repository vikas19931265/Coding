/**
 * ISystemToolsAPIService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.2.1 Feb 24, 2009 (02:51:19 PST) WSDL2Java emitter.
 */

package com.guidewire.ab.webservices.api;

public interface ISystemToolsAPIService extends javax.xml.rpc.Service {

/**
 * System maintenance interface.
 */
    public java.lang.String getISystemToolsAPIAddress();

    public com.guidewire.ab.webservices.api.ISystemToolsAPI getISystemToolsAPI() throws javax.xml.rpc.ServiceException;

    public com.guidewire.ab.webservices.api.ISystemToolsAPI getISystemToolsAPI(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}
