/* 
    Declaring string using `(tick symbol).
    ==========================================

    In the below example we are able to access complete xml having so many lines by keeping the string
    inside the tick symbol.

    So here we are able to keep the string in new line. However if we had used double quotes or single 
    quotes then we would not have been able to do this.
*/

let element=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns4:retrievePolicyDetailResponse xmlns="http://schema.amfam.com/domain/policy/v4" xmlns:ns5="http://schema.amfam.com/domain/policy/summary/v4" xmlns:ns2="http://schema.amfam.com/domain/common" xmlns:ns4="http://schema.amfam.com/message/policyservice/v6" xmlns:ns3="http://schema.amfam.com/domain/policy/legacy">
    <ns4:policyDetailResponse>
        <ns4:policy>
            <policyNumber>02-CA-000000193-0</policyNumber>
            <brandAccountId>12410</brandAccountId>
            <ProductType>CommercialAuto</ProductType>
            <productName>Commercial Auto</productName>
            <periodStartDate>2020-05-07</periodStartDate>
            <periodEndDate>2021-05-07</periodEndDate>
            <BaseState>AZ</BaseState>
            <policyReferenceNumber>P02CA0000001930000</policyReferenceNumber>
            <PolicyTermStatus>InForce</PolicyTermStatus>
            <totalPremium>550.0</totalPremium>
            <partnerId>124</partnerId>
            <ProducerOfService>
                <ContactDetail>
                    <name>American Family Insurance - Business Insurance</name>
                    <Addresses>
                        <ns2:AddressTypeCode>
                            <ns2:AddressCode>Business</ns2:AddressCode>
                        </ns2:AddressTypeCode>
                        <ns2:addressLine1>PO Box 5316</ns2:addressLine1>
                        <ns2:city>Binghamton</ns2:city>
                        <ns2:State>NY</ns2:State>
                        <ns2:county>Broome</ns2:county>
                        <ns2:zipCode5>13902</ns2:zipCode5>
                        <ns2:countryCode>USA</ns2:countryCode>
                    </Addresses>
                    <PhoneNumbers>
                        <ns2:PhoneTypeCode>Other</ns2:PhoneTypeCode>
                        <ns2:number>8669080626</ns2:number>
                    </PhoneNumbers>
                    <EmailAddresses>
                        <ns2:address>service@amfambusinessinsurance.com</ns2:address>
                        <ns2:EmailType>Other</ns2:EmailType>
                    </EmailAddresses>
                </ContactDetail>
                <producerId>0010000124</producerId>
            </ProducerOfService>
            <CommercialAutoPolicy>
                <StateLevelInfo>
                    <State>AZ</State>
                    <Coverages>
                        <code>SCL_LIAB</code>
                        <name>CAVehicleLiabilityCoverage</name>
                        <description>Liability</description>
                        <LimitTerms>
                            <code>BiEachPersonLimit</code>
                            <name>BI Each Person Limit</name>
                            <description>BI Each Person Limit</description>
                            <CoverageTermType>EachPerson</CoverageTermType>
                            <value>250000</value>
                            <ValueType>currency</ValueType>
               2         </LimitTerms>
                        <LimitTerms>
                            <code>PropertyDamLimit</code>
                            <name>Property Damage Limit</name>
                            <description>Property Damage Limit</description>
                            <CoverageTermType>Limit</CoverageTermType>
                            <value>100000</value>
                            <ValueType>currency</ValueType>
                        </LimitTerms>
                        <LimitTerms>
                            <code>BiEachOccLimit</code>
                            <name>BI Each Occurrence Limit</name>
                            <description>BI Each Occurrence Limit</description>
                            <CoverageTermType>EachOccurence</CoverageTermType>
                            <value>500000</value>
                            <ValueType>currency</ValueType>
                        </LimitTerms>
                    </Coverages>
                    <Coverages>
                        <code>SCL_UIM</code>
                        <name>CAVehicleUnderinsuredMotoristCoverage</name>
                        <description>Underinsured Motorist Coverage</description>
                        <LimitTerms>
                            <code>BiEachPersonLimit</code>
                            <name>BI Each Person Limit</name>
                            <description>BI Each Person Limit</description>
                            <CoverageTermType>EachPerson</CoverageTermType>
                            <value>50000</value>
                            <ValueType>currency</ValueType>
                        </LimitTerms>
                        <LimitTerms>
                            <code>BiEachOccLimit</code>
                            <name>BI Each Occurrence Limit</name>
                            <description>BI Each Occurrence Limit</description>
                            <CoverageTermType>EachOccurence</CoverageTermType>
                            <value>100000</value>
                            <ValueType>currency</ValueType>
                        </LimitTerms>
                    </Coverages>
                    <Coverages>
                        <code>SCL_MEDPAY</code>
                        <name>CAVehicleMedicalPayments</name>
                        <description>Medical Payments</description>
                        <LimitTerms>
                            <code>LimitEachPerson</code>
                            <name>Each Person Limit</name>
                            <description>Each Person Limit</description>
                            <CoverageTermType>EachPerson</CoverageTermType>
                            <value>10000</value>
                            <ValueType>currency</ValueType>
                        </LimitTerms>
                    </Coverages>
                    <Coverages>
                        <code>SCL_UM</code>
                        <name>CAVehicleUninsuredMotoristCoverage</name>
                        <description>Uninsured Motorist</description>
                        <LimitTerms>
                            <code>BiEachPersonLimit</code>
                            <name>BI Each Person Limit</name>
                            <description>BI Each Person Limit</description>
                            <CoverageTermType>EachPerson</CoverageTermType>
                            <value>25000</value>
                            <ValueType>currency</ValueType>
                        </LimitTerms>
                        <LimitTerms>
                            <code>BiEachOccLimit</code>
                            <name>BI Each Occurrence Limit</name>
                            <description>BI Each Occurrence Limit</description>
                            <CoverageTermType>EachOccurence</CoverageTermType>
                            <value>50000</value>
                            <ValueType>currency</ValueType>
                        </LimitTerms>
                    </Coverages>
                </StateLevelInfo>
            </CommercialAutoPolicy>
            <Forms>
                <Form>
                    <code>80302220</code>
                    <name>CA00011013</name>
                    <description>Business Auto Coverage Form</description>
                    <form_number>CA00011013</form_number>
                    <edition>10-13</edition>
                    <revision>02/17/2020</revision>
                    <FormCategoryType>
                        <code>Commercial Auto</code>
                        <description>Commercial Auto</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>80297620</code>
                    <name>CA01751013</name>
                    <description>Arizona Changes</description>
                    <form_number>CA01751013</form_number>
                    <edition>10-13</edition>
                    <revision>02/17/2020</revision>
                    <FormCategoryType>
                        <code>Commercial Auto</code>
                        <description>Commercial Auto</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>81270770</code>
                    <name>CA23841013</name>
                    <description>Exclusion Of Terrorism</description>
                    <form_number>CA23841013</form_number>
                    <edition>10-13</edition>
                    <revision>02/17/2020</revision>
                    <FormCategoryType>
                        <code>Commercial Auto</code>
                        <description>Commercial Auto</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>84347310</code>
                    <name>CA 74 02 01 20</name>
                    <description>Personal Trailer Liability Coverage Endorsement</description>
                    <form_number>CA 74 02 01 20</form_number>
                    <edition>01-20</edition>
                    <revision>02/17/2020</revision>
                    <FormCategoryType>
                        <code>Commercial Auto</code>
                        <description>Commercial Auto</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>84494720</code>
                    <name>CA 99 27 01 87</name>
                    <description>Split Liability Limits</description>
                    <form_number>CA 99 27 01 87</form_number>
                    <edition>01-87</edition>
                    <revision>02/17/2020</revision>
                    <FormCategoryType>
                        <code>Commercial Auto</code>
                        <description>Commercial Auto</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>80017370</code>
                    <name>IL00171198</name>
                    <description>Common Policy Conditions</description>
                    <form_number>IL00171198</form_number>
                    <edition>11-98</edition>
                    <revision>02/17/2020</revision>
                    <FormCategoryType>
                        <code>Commercial Auto</code>
                        <description>Commercial Auto</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>80017380</code>
                    <name>IL00210908</name>
                    <description>Nuclear Energy Liability Exclusion Endorsement (Broad Form)</description>
                    <form_number>IL00210908</form_number>
                    <edition>09-08</edition>
                    <revision>02/17/2020</revision>
                    <FormCategoryType>
                        <code>Commercial Auto</code>
                        <description>Commercial Auto</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>84357750</code>
                    <name>MC 1632a 08 99</name>
                    <description>Form F
Uniform Motor Carrier Bodily Injury And Property Damage Liability Insurance Endorsement
</description>
                    <form_number>MC 1632a 08 99</form_number>
                    <edition>08-99</edition>
                    <revision>02/17/2020</revision>
                    <FormCategoryType>
                        <code>Commercial Auto</code>
                        <description>Commercial Auto</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>84321850</code>
                    <name>MCS 90 05 17</name>
                    <description>Endorsement For Motor Carrier Policies of Insurance For Public Liability</description>
                    <form_number>MCS 90 05 17</form_number>
                    <edition>05-17</edition>
                    <revision>02/17/2020</revision>
                    <FormCategoryType>
                        <code>Commercial Auto</code>
                        <description>Commercial Auto</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>4</code>
                    <name>CA Worksheet</name>
                    <description>CA Worksheet</description>
                    <form_number>4</form_number>
                    <FormCategoryType>
                        <code>Document</code>
                        <description>Document</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>6</code>
                    <name>POI Cards Policy Level</name>
                    <description>POI Cards Policy Level</description>
                    <form_number>6</form_number>
                    <FormCategoryType>
                        <code>Document</code>
                        <description>Document</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>8</code>
                    <name>NEW BUSINESS</name>
                    <description>NEW BUSINESS</description>
                    <form_number>8</form_number>
                    <FormCategoryType>
                        <code>Document</code>
                        <description>Document</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>2</code>
                    <name>Policy Document</name>
                    <description>Policy Document</description>
                    <form_number>2</form_number>
                    <FormCategoryType>
                        <code>Document</code>
                        <description>Document</description>
                    </FormCategoryType>
                </Form>
                <Form>
                    <code>7</code>
                    <name>Policy Document_All Notices and Forms</name>
                    <description>Policy Document_All Notices and Forms</description>
                    <form_number>7</form_number>
                    <FormCategoryType>
                        <code>Document</code>
                        <description>Document</description>
                    </FormCategoryType>
                </Form>
            </Forms>
            <AmfamCompanyCode>
                <Code>LCIC</Code>
                <description>MIDVALE INDEMNITY COMPANY</description>
            </AmfamCompanyCode>
            <PolicyRoles>
                <RoleType>PrimaryNamedInsured</RoleType>
                <ContactReferenceKey>ca7cd9d2-8dcd-42c0-b9b4-d72900b78c53</ContactReferenceKey>
            </PolicyRoles>
            <Contacts>
                <ContactReferenceKey>ca7cd9d2-8dcd-42c0-b9b4-d72900b78c53</ContactReferenceKey>
                <name>TEST_Profession services, Professional Office Mobile Equipment</name>
                <description>Professional Services, Professional Office Mobile Equipment</description>
                <ContactType>Organization</ContactType>
                <Addresses>
                    <ns2:AddressTypeCode>
                        <ns2:AddressCode>Business</ns2:AddressCode>
                    </ns2:AddressTypeCode>
                    <ns2:addressLine1>815 N 1ST AVE STE 4</ns2:addressLine1>
                    <ns2:city>Phoenix</ns2:city>
                    <ns2:State>AZ</ns2:State>
                    <ns2:county>Maricopa</ns2:county>
                    <ns2:zipCode5>85003</ns2:zipCode5>
                    <ns2:countryCode>USA</ns2:countryCode>
                </Addresses>
                <PhoneNumbers>
                    <ns2:PhoneTypeCode>Other</ns2:PhoneTypeCode>
                    <ns2:number>5555555565</ns2:number>
                </PhoneNumbers>
                <EmailAddresses>
                    <ns2:address>deepakonuatbid@gmail.com</ns2:address>
                    <ns2:EmailType>Other</ns2:EmailType>
                </EmailAddresses>
            </Contacts>
            <lastUpdateTime>2020-02-17T05:44:02</lastUpdateTime>
            <UnderwritingCompanyDetails>
                <companyName>Midvale Indemnity Co</companyName>
            </UnderwritingCompanyDetails>
        </ns4:policy>
        <ns4:status>SUCCESS</ns4:status>
        <ns4:returnMessage>
            <ns4:code>success</ns4:code>
            <ns4:message>Policy retrieved successfully</ns4:message>
            <ns4:source>mic</ns4:source>
            <ns4:policyNumber>02-CA-000000193-0</ns4:policyNumber>
        </ns4:returnMessage>
    </ns4:policyDetailResponse>
</ns4:retrievePolicyDetailResponse>`;
console.log(element);