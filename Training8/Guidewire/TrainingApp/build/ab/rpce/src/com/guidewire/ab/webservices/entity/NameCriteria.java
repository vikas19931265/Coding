/**
 * NameCriteria.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.2.1 Feb 24, 2009 (02:51:19 PST) WSDL2Java emitter.
 */

package com.guidewire.ab.webservices.entity;


/**
 * A component used as part of a larger search criteria entity. Encapsulates
 * the information
 *         entered by the user to restrict the search to particular contact,
 * specified by some combination
 *         of name, tax ID and official ID. One NameCriteria entity will
 * be used for each field that needs to
 *         be restricted. For example if a search criteria was being
 * constructed to specify searches for
 *         an entity which had two different contact fields, then the
 * search criteria would likely
 *         contain two distinct NameCriteria components.
 */
public class NameCriteria  extends com.guidewire.ab.webservices.entity.GWObject  implements java.io.Serializable {
    /** 
        Auto-incremented object version
     */ 
    private java.lang.Integer BeanVersion;
    /** 
        The company name, if searching for a company.
     */ 
    private java.lang.String CompanyName;
    /** 
        The first name, if searching for a person.
     */ 
    private java.lang.String FirstName;
    /** 
        The last name, if searching for a person.
     */ 
    private java.lang.String LastName;
    /** 
        The last name or the first name.
     */ 
    private java.lang.String Name;
    /** 
        Field matched against the OfficialIDValue of the OfficialID objects
 * associated with Contacts.
     */ 
    private java.lang.String OfficialId;
    /** 
        The contact's tax identification number.
     */ 
    private java.lang.String TaxId;

    public NameCriteria() {
    }

    public NameCriteria(
           java.lang.Integer BeanVersion,
           java.lang.String CompanyName,
           java.lang.String FirstName,
           java.lang.String LastName,
           java.lang.String Name,
           java.lang.String OfficialId,
           java.lang.String TaxId) {
           this.BeanVersion = BeanVersion;
           this.CompanyName = CompanyName;
           this.FirstName = FirstName;
           this.LastName = LastName;
           this.Name = Name;
           this.OfficialId = OfficialId;
           this.TaxId = TaxId;
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
     *  The company name, if searching for a company.
     * 
     * @return CompanyName The company name, if searching for a company.
     */
    public java.lang.String getCompanyName() {
        return CompanyName;
    }


    /**
     *  The company name, if searching for a company.
     * 
     * @param CompanyName The company name, if searching for a company.
     */
    public void setCompanyName(java.lang.String CompanyName) {
        this.CompanyName = CompanyName;
    }


    /**
     *  The first name, if searching for a person.
     * 
     * @return FirstName The first name, if searching for a person.
     */
    public java.lang.String getFirstName() {
        return FirstName;
    }


    /**
     *  The first name, if searching for a person.
     * 
     * @param FirstName The first name, if searching for a person.
     */
    public void setFirstName(java.lang.String FirstName) {
        this.FirstName = FirstName;
    }


    /**
     *  The last name, if searching for a person.
     * 
     * @return LastName The last name, if searching for a person.
     */
    public java.lang.String getLastName() {
        return LastName;
    }


    /**
     *  The last name, if searching for a person.
     * 
     * @param LastName The last name, if searching for a person.
     */
    public void setLastName(java.lang.String LastName) {
        this.LastName = LastName;
    }


    /**
     *  The last name or the first name.
     * 
     * @return Name The last name or the first name.
     */
    public java.lang.String getName() {
        return Name;
    }


    /**
     *  The last name or the first name.
     * 
     * @param Name The last name or the first name.
     */
    public void setName(java.lang.String Name) {
        this.Name = Name;
    }


    /**
     *  Field matched against the OfficialIDValue of the OfficialID objects
 * associated with Contacts.
     * 
     * @return OfficialId Field matched against the OfficialIDValue of the OfficialID objects
 * associated with Contacts.
     */
    public java.lang.String getOfficialId() {
        return OfficialId;
    }


    /**
     *  Field matched against the OfficialIDValue of the OfficialID objects
 * associated with Contacts.
     * 
     * @param OfficialId Field matched against the OfficialIDValue of the OfficialID objects
 * associated with Contacts.
     */
    public void setOfficialId(java.lang.String OfficialId) {
        this.OfficialId = OfficialId;
    }


    /**
     *  The contact's tax identification number.
     * 
     * @return TaxId The contact's tax identification number.
     */
    public java.lang.String getTaxId() {
        return TaxId;
    }


    /**
     *  The contact's tax identification number.
     * 
     * @param TaxId The contact's tax identification number.
     */
    public void setTaxId(java.lang.String TaxId) {
        this.TaxId = TaxId;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(NameCriteria.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://entity.webservices.ab.guidewire.com/", "NameCriteria"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("beanVersion");
        elemField.setXmlName(new javax.xml.namespace.QName("", "BeanVersion"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("companyName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CompanyName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("firstName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FirstName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("lastName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "LastName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("name");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Name"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("officialId");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OfficialId"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("taxId");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TaxId"));
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
