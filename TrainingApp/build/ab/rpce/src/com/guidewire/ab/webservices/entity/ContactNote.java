/**
 * ContactNote.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.2.1 Feb 24, 2009 (02:51:19 PST) WSDL2Java emitter.
 */

package com.guidewire.ab.webservices.entity;


/**
 * Contact notes
 */
public class ContactNote  extends com.guidewire.ab.webservices.entity.GWObject  implements java.io.Serializable {
    /** 
        Associated contact
     */ 
    private com.guidewire.ab.webservices.entity.ABContact ABContact;
    /** 
        Auto-incremented object version
     */ 
    private java.lang.Integer BeanVersion;
    /** 
        Body
     */ 
    private java.lang.String Body;
    /** 
        Confidential
     */ 
    private java.lang.Boolean Confidential;
    /** 
        Contact note type
     */ 
    private com.guidewire.ab.webservices.enumeration.ContactNoteType ContactNoteType;
    /** 
        Subject
     */ 
    private java.lang.String Subject;

    public ContactNote() {
    }

    public ContactNote(
           com.guidewire.ab.webservices.entity.ABContact ABContact,
           java.lang.Integer BeanVersion,
           java.lang.String Body,
           java.lang.Boolean Confidential,
           com.guidewire.ab.webservices.enumeration.ContactNoteType ContactNoteType,
           java.lang.String Subject) {
           this.ABContact = ABContact;
           this.BeanVersion = BeanVersion;
           this.Body = Body;
           this.Confidential = Confidential;
           this.ContactNoteType = ContactNoteType;
           this.Subject = Subject;
    }


    /**
     *  Associated contact
     * 
     * @return ABContact Associated contact
     */
    public com.guidewire.ab.webservices.entity.ABContact getABContact() {
        return ABContact;
    }


    /**
     *  Associated contact
     * 
     * @param ABContact Associated contact
     */
    public void setABContact(com.guidewire.ab.webservices.entity.ABContact ABContact) {
        this.ABContact = ABContact;
    }


    /**
     *  Auto-incremented object version
     * 
     * @return BeanVersion Auto-incremented object version
     */
    public java.lang.Integer getBeanVersion() {
        return BeanVersion;
    }


    /**
     *  Auto-incremented object version
     * 
     * @param BeanVersion Auto-incremented object version
     */
    public void setBeanVersion(java.lang.Integer BeanVersion) {
        this.BeanVersion = BeanVersion;
    }


    /**
     *  Body
     * 
     * @return Body Body
     */
    public java.lang.String getBody() {
        return Body;
    }


    /**
     *  Body
     * 
     * @param Body Body
     */
    public void setBody(java.lang.String Body) {
        this.Body = Body;
    }


    /**
     *  Confidential
     * 
     * @return Confidential Confidential
     */
    public java.lang.Boolean getConfidential() {
        return Confidential;
    }


    /**
     *  Confidential
     * 
     * @param Confidential Confidential
     */
    public void setConfidential(java.lang.Boolean Confidential) {
        this.Confidential = Confidential;
    }


    /**
     *  Contact note type
     * 
     * @return ContactNoteType Contact note type
     */
    public com.guidewire.ab.webservices.enumeration.ContactNoteType getContactNoteType() {
        return ContactNoteType;
    }


    /**
     *  Contact note type
     * 
     * @param ContactNoteType Contact note type
     */
    public void setContactNoteType(com.guidewire.ab.webservices.enumeration.ContactNoteType ContactNoteType) {
        this.ContactNoteType = ContactNoteType;
    }


    /**
     *  Subject
     * 
     * @return Subject Subject
     */
    public java.lang.String getSubject() {
        return Subject;
    }


    /**
     *  Subject
     * 
     * @param Subject Subject
     */
    public void setSubject(java.lang.String Subject) {
        this.Subject = Subject;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ContactNote.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://entity.webservices.ab.guidewire.com/", "ContactNote"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ABContact");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ABContact"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://entity.webservices.ab.guidewire.com/", "ABContact"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("beanVersion");
        elemField.setXmlName(new javax.xml.namespace.QName("", "BeanVersion"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("body");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Body"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("confidential");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Confidential"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "boolean"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("contactNoteType");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ContactNoteType"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://enumeration.webservices.ab.guidewire.com/", "ContactNoteType"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("subject");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Subject"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setMinOccurs(0);
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
