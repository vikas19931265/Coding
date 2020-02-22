/**
 * UpdateTableStatisticsData.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.2.1 Feb 24, 2009 (02:51:19 PST) WSDL2Java emitter.
 */

package com.guidewire.ab.webservices.entity;


/**
 * Contains the set of SQL that can be applied to update database
 * statistics for
 * the given table.
 */
public class UpdateTableStatisticsData  implements java.io.Serializable {
    /** 
        The statements that must be executed to update table statistics
     */ 
    private java.lang.String[] StatisticsUpdateStatements;
    /** 
        The name of the table that the array of statements is to be applied
 * to
     */ 
    private java.lang.String TableName;

    public UpdateTableStatisticsData() {
    }

    public UpdateTableStatisticsData(
           java.lang.String[] StatisticsUpdateStatements,
           java.lang.String TableName) {
           this.StatisticsUpdateStatements = StatisticsUpdateStatements;
           this.TableName = TableName;
    }


    /**
     *  The statements that must be executed to update table statistics
     * 
     * @return StatisticsUpdateStatements The statements that must be executed to update table statistics
     */
    public java.lang.String[] getStatisticsUpdateStatements() {
        return StatisticsUpdateStatements;
    }


    /**
     *  The statements that must be executed to update table statistics
     * 
     * @param StatisticsUpdateStatements The statements that must be executed to update table statistics
     */
    public void setStatisticsUpdateStatements(java.lang.String[] StatisticsUpdateStatements) {
        this.StatisticsUpdateStatements = StatisticsUpdateStatements;
    }


    /**
     *  The name of the table that the array of statements is to be applied
 * to
     * 
     * @return TableName The name of the table that the array of statements is to be applied
 * to
     */
    public java.lang.String getTableName() {
        return TableName;
    }


    /**
     *  The name of the table that the array of statements is to be applied
 * to
     * 
     * @param TableName The name of the table that the array of statements is to be applied
 * to
     */
    public void setTableName(java.lang.String TableName) {
        this.TableName = TableName;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(UpdateTableStatisticsData.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://entity.webservices.ab.guidewire.com/", "UpdateTableStatisticsData"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("statisticsUpdateStatements");
        elemField.setXmlName(new javax.xml.namespace.QName("", "StatisticsUpdateStatements"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("tableName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TableName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
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
