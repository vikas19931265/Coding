/**
 * CompanyVendor.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.2.1 Feb 24, 2009 (02:51:19 PST) WSDL2Java emitter.
 */

package com.guidewire.ab.webservices.entity;


/**
 * Contact type representing vendors that are companies.
 */
public class CompanyVendor  extends com.guidewire.ab.webservices.entity.Company  implements java.io.Serializable {

    public CompanyVendor() {
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CompanyVendor.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://entity.webservices.ab.guidewire.com/", "CompanyVendor"));
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
