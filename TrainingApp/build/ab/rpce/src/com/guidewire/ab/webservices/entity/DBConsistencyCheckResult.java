/**
 * DBConsistencyCheckResult.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.2.1 Feb 24, 2009 (02:51:19 PST) WSDL2Java emitter.
 */

package com.guidewire.ab.webservices.entity;


/**
 * Class containing information resulting from the running of database
 * consistency
 * checks.
 */
public class DBConsistencyCheckResult  implements java.io.Serializable {
    /** 
        Type of consistency check
     */ 
    private int CheckType;
    /** 
        Get the description of the consistency check
     */ 
    private java.lang.String ConsistencyCheckDescription;
    /** 
        The length of time (in seconds) the check took
     */ 
    private long Duration;
    /** 
        Get the description of the failure
     */ 
    private java.lang.String FailureDescription;
    /** 
     */ 
    private boolean GetNumInconsistenciesValid;
    /** 
        Is the getSqlString() method valid for the associated consistency
 * check type.
     */ 
    private boolean GetSqlStringValid;
    /** 
        Get the number of inconsistencies found for the check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetNumInconsistenciesValid() first.
     */ 
    private int NumInconsistencies;
    /** 
        Get the sql query to identify individual rows that failed the consistency
 * check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     */ 
    private java.lang.String QueryToIdentifyRows;
    /** 
        Get the sql query that was executed for the consistency check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     */ 
    private java.lang.String SqlString;
    /** 
        Whether or not check succeeded
     */ 
    private boolean Succeeded;

    public DBConsistencyCheckResult() {
    }

    public DBConsistencyCheckResult(
           int CheckType,
           java.lang.String ConsistencyCheckDescription,
           long Duration,
           java.lang.String FailureDescription,
           boolean GetNumInconsistenciesValid,
           boolean GetSqlStringValid,
           int NumInconsistencies,
           java.lang.String QueryToIdentifyRows,
           java.lang.String SqlString,
           boolean Succeeded) {
           this.CheckType = CheckType;
           this.ConsistencyCheckDescription = ConsistencyCheckDescription;
           this.Duration = Duration;
           this.FailureDescription = FailureDescription;
           this.GetNumInconsistenciesValid = GetNumInconsistenciesValid;
           this.GetSqlStringValid = GetSqlStringValid;
           this.NumInconsistencies = NumInconsistencies;
           this.QueryToIdentifyRows = QueryToIdentifyRows;
           this.SqlString = SqlString;
           this.Succeeded = Succeeded;
    }


    /**
     *  Type of consistency check
     * 
     * @return CheckType Type of consistency check
     */
    public int getCheckType() {
        return CheckType;
    }


    /**
     *  Type of consistency check
     * 
     * @param CheckType Type of consistency check
     */
    public void setCheckType(int CheckType) {
        this.CheckType = CheckType;
    }


    /**
     *  Get the description of the consistency check
     * 
     * @return ConsistencyCheckDescription Get the description of the consistency check
     */
    public java.lang.String getConsistencyCheckDescription() {
        return ConsistencyCheckDescription;
    }


    /**
     *  Get the description of the consistency check
     * 
     * @param ConsistencyCheckDescription Get the description of the consistency check
     */
    public void setConsistencyCheckDescription(java.lang.String ConsistencyCheckDescription) {
        this.ConsistencyCheckDescription = ConsistencyCheckDescription;
    }


    /**
     *  The length of time (in seconds) the check took
     * 
     * @return Duration The length of time (in seconds) the check took
     */
    public long getDuration() {
        return Duration;
    }


    /**
     *  The length of time (in seconds) the check took
     * 
     * @param Duration The length of time (in seconds) the check took
     */
    public void setDuration(long Duration) {
        this.Duration = Duration;
    }


    /**
     *  Get the description of the failure
     * 
     * @return FailureDescription Get the description of the failure
     */
    public java.lang.String getFailureDescription() {
        return FailureDescription;
    }


    /**
     *  Get the description of the failure
     * 
     * @param FailureDescription Get the description of the failure
     */
    public void setFailureDescription(java.lang.String FailureDescription) {
        this.FailureDescription = FailureDescription;
    }


    /**
     * 
     * 
     * @return GetNumInconsistenciesValid
     */
    public boolean isGetNumInconsistenciesValid() {
        return GetNumInconsistenciesValid;
    }


    /**
     * 
     * 
     * @param GetNumInconsistenciesValid
     */
    public void setGetNumInconsistenciesValid(boolean GetNumInconsistenciesValid) {
        this.GetNumInconsistenciesValid = GetNumInconsistenciesValid;
    }


    /**
     *  Is the getSqlString() method valid for the associated consistency
 * check type.
     * 
     * @return GetSqlStringValid Is the getSqlString() method valid for the associated consistency
 * check type.
     */
    public boolean isGetSqlStringValid() {
        return GetSqlStringValid;
    }


    /**
     *  Is the getSqlString() method valid for the associated consistency
 * check type.
     * 
     * @param GetSqlStringValid Is the getSqlString() method valid for the associated consistency
 * check type.
     */
    public void setGetSqlStringValid(boolean GetSqlStringValid) {
        this.GetSqlStringValid = GetSqlStringValid;
    }


    /**
     *  Get the number of inconsistencies found for the check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetNumInconsistenciesValid() first.
     * 
     * @return NumInconsistencies Get the number of inconsistencies found for the check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetNumInconsistenciesValid() first.
     */
    public int getNumInconsistencies() {
        return NumInconsistencies;
    }


    /**
     *  Get the number of inconsistencies found for the check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetNumInconsistenciesValid() first.
     * 
     * @param NumInconsistencies Get the number of inconsistencies found for the check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetNumInconsistenciesValid() first.
     */
    public void setNumInconsistencies(int NumInconsistencies) {
        this.NumInconsistencies = NumInconsistencies;
    }


    /**
     *  Get the sql query to identify individual rows that failed the consistency
 * check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     * 
     * @return QueryToIdentifyRows Get the sql query to identify individual rows that failed the consistency
 * check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     */
    public java.lang.String getQueryToIdentifyRows() {
        return QueryToIdentifyRows;
    }


    /**
     *  Get the sql query to identify individual rows that failed the consistency
 * check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     * 
     * @param QueryToIdentifyRows Get the sql query to identify individual rows that failed the consistency
 * check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     */
    public void setQueryToIdentifyRows(java.lang.String QueryToIdentifyRows) {
        this.QueryToIdentifyRows = QueryToIdentifyRows;
    }


    /**
     *  Get the sql query that was executed for the consistency check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     * 
     * @return SqlString Get the sql query that was executed for the consistency check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     */
    public java.lang.String getSqlString() {
        return SqlString;
    }


    /**
     *  Get the sql query that was executed for the consistency check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     * 
     * @param SqlString Get the sql query that was executed for the consistency check.
 * <p/>
 * This method is only valid for the following types of checks (NO_MATCH_ROWS).
 * Call isGetSqlStringValid() first.
     */
    public void setSqlString(java.lang.String SqlString) {
        this.SqlString = SqlString;
    }


    /**
     *  Whether or not check succeeded
     * 
     * @return Succeeded Whether or not check succeeded
     */
    public boolean isSucceeded() {
        return Succeeded;
    }


    /**
     *  Whether or not check succeeded
     * 
     * @param Succeeded Whether or not check succeeded
     */
    public void setSucceeded(boolean Succeeded) {
        this.Succeeded = Succeeded;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DBConsistencyCheckResult.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://entity.webservices.ab.guidewire.com/", "DBConsistencyCheckResult"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("checkType");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CheckType"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consistencyCheckDescription");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsistencyCheckDescription"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("duration");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Duration"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("failureDescription");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FailureDescription"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("getNumInconsistenciesValid");
        elemField.setXmlName(new javax.xml.namespace.QName("", "GetNumInconsistenciesValid"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("getSqlStringValid");
        elemField.setXmlName(new javax.xml.namespace.QName("", "GetSqlStringValid"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numInconsistencies");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NumInconsistencies"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("queryToIdentifyRows");
        elemField.setXmlName(new javax.xml.namespace.QName("", "QueryToIdentifyRows"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("sqlString");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SqlString"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("succeeded");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Succeeded"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setNillable(false);
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
