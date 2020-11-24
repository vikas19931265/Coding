/**
 * ActivityType.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.2.1 Feb 24, 2009 (02:51:19 PST) WSDL2Java emitter.
 */

package com.guidewire.ab.webservices.enumeration;


/**
 * The type of activity
 */
public class ActivityType implements java.io.Serializable {
    private java.lang.String _value_;
    private static java.util.HashMap _table_ = new java.util.HashMap();

    // Constructor
    protected ActivityType(java.lang.String value) {
        _value_ = value;
        _table_.put(_value_,this);
    }

    private static java.lang.String _TC_approval;
    private static java.lang.String _TC_approvaldenied;
    private static java.lang.String _TC_assignmentreview;
    private static java.lang.String _TC_general;

/**
 * Approval
 */
    public static ActivityType TC_approval;

/**
 * Approval Denied
 */
    public static ActivityType TC_approvaldenied;

/**
 * Assignment Review
 */
    public static ActivityType TC_assignmentreview;

/**
 * General
 */
    public static ActivityType TC_general;

    private static void initValues0() {
      _TC_approval = "TC_approval";
      TC_approval = new ActivityType(_TC_approval);
      _TC_approvaldenied = "TC_approvaldenied";
      TC_approvaldenied = new ActivityType(_TC_approvaldenied);
      _TC_assignmentreview = "TC_assignmentreview";
      TC_assignmentreview = new ActivityType(_TC_assignmentreview);
      _TC_general = "TC_general";
      TC_general = new ActivityType(_TC_general);
    }

    static {
      initValues0();
    }
/**
Returns the String representation of the enumeration, equivalent to toString()
 */
    public java.lang.String getValue() { return _value_;}
/**
Returns the enumeration instance which matches the String.<p><b>Note:</b> Requires a preceding "TC_" to be appended to the code value of a typekey
 */
    public static ActivityType fromValue(java.lang.String value)
          throws java.lang.IllegalArgumentException {
        ActivityType enumeration = (ActivityType) internalFromCode(value);
        if (enumeration == null) enumeration = (ActivityType) internalFromCode("TC_" + value);
        if (enumeration==null) throw new java.lang.IllegalArgumentException();
        return enumeration;
    }
    public java.lang.String toCode() {
        if (_value_.length() <= 3 || _value_ == null){
            return _value_;
        }
        if (_value_.startsWith("TC_")){
            return _value_.substring(3);
        }
        return toString();
    }
    public static ActivityType fromCode(java.lang.String value) {
        try {
            return fromString("TC_" + value);
        } catch (java.lang.IllegalArgumentException iae) {
           return null;
        }
    }
    private static ActivityType internalFromCode(java.lang.String value){
        ActivityType enumeration = (ActivityType)
            _table_.get(value);
        return enumeration;
    }
    public static ActivityType fromString(java.lang.String value)
          throws java.lang.IllegalArgumentException {
        return fromValue(value);
    }
    public boolean equals(java.lang.Object obj) {return (obj == this);}
    public int hashCode() { return toString().hashCode();}
    public java.lang.String toString() { return _value_;}
    public java.lang.Object readResolve() throws java.io.ObjectStreamException { return fromValue(_value_);}
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new org.apache.axis.encoding.ser.EnumSerializer(
            _javaType, _xmlType);
    }
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new org.apache.axis.encoding.ser.EnumDeserializer(
            _javaType, _xmlType);
    }
    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ActivityType.class);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://enumeration.webservices.ab.guidewire.com/", "ActivityType"));
    }
    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

}
