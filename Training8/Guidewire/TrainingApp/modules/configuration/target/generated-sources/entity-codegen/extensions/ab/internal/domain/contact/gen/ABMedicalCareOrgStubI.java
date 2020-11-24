
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.entity.ABMedicalCareOrg;
import gw.ab.addressbook.entity.ABCompanyVendor;
import gw.pl.contact.typekey.SpecialtyType;

public interface ABMedicalCareOrgStubI
    extends ABCompanyVendor
{

    EntityIntrinsicTypeReference<ABMedicalCareOrg> TYPE = new EntityIntrinsicTypeReference<ABMedicalCareOrg>("entity.ABMedicalCareOrg");
    TypekeyPropertyInfoCache MEDICALORGSPECIALTY_PROP = new TypekeyPropertyInfoCache(TYPE, "MedicalOrgSpecialty");
    ColumnPropertyInfoCache ISMEMBEROFNETWORK_PROP = new ColumnPropertyInfoCache(TYPE, "IsMemberOfNetwork");
    ColumnPropertyInfoCache NETWORKNAME_PROP = new ColumnPropertyInfoCache(TYPE, "NetworkName");

    /**
     * Gets the value of the MedicalOrgSpecialty field.
     * Medical specialty
     * 
     */
    SpecialtyType getMedicalOrgSpecialty();

    /**
     * Sets the value of the MedicalOrgSpecialty field.
     * 
     */
    void setMedicalOrgSpecialty(SpecialtyType value);

    /**
     * Gets the value of the IsMemberOfNetwork field.
     * Is this medical care org a member of a healthcare network?
     * 
     */
    Boolean isIsMemberOfNetwork();

    /**
     * Sets the value of the IsMemberOfNetwork field.
     * 
     */
    void setIsMemberOfNetwork(Boolean value);

    /**
     * Gets the value of the NetworkName field.
     * Name of healthcare network
     * 
     */
    String getNetworkName();

    /**
     * Sets the value of the NetworkName field.
     * 
     */
    void setNetworkName(String value);

}
