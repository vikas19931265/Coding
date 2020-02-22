
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.entity.ABDoctor;
import extensions.ab.contact.typekey.DoctorCategoryType;
import extensions.ab.contact.typekey.DoctorSpecialtyType;
import gw.ab.addressbook.entity.ABPersonVendor;
import gw.pl.contact.typekey.SpecialtyType;

public interface ABDoctorStubI
    extends ABPersonVendor
{

    EntityIntrinsicTypeReference<ABDoctor> TYPE = new EntityIntrinsicTypeReference<ABDoctor>("entity.ABDoctor");
    ColumnPropertyInfoCache MEDICALLICENSE_PROP = new ColumnPropertyInfoCache(TYPE, "MedicalLicense");
    TypekeyPropertyInfoCache DOCTORSPECIALTY_PROP = new TypekeyPropertyInfoCache(TYPE, "DoctorSpecialty");
    TypekeyPropertyInfoCache CATEGORY_PROP = new TypekeyPropertyInfoCache(TYPE, "Category");
    TypekeyPropertyInfoCache SPECIALTY_PROP = new TypekeyPropertyInfoCache(TYPE, "Specialty");

    /**
     * Gets the value of the MedicalLicense field.
     * Doctor's medical license number.
     * 
     */
    String getMedicalLicense();

    /**
     * Sets the value of the MedicalLicense field.
     * 
     */
    void setMedicalLicense(String value);

    /**
     * Gets the value of the DoctorSpecialty field.
     * Doctor's medical specialty
     * 
     */
    SpecialtyType getDoctorSpecialty();

    /**
     * Sets the value of the DoctorSpecialty field.
     * 
     */
    void setDoctorSpecialty(SpecialtyType value);

    /**
     * Gets the value of the Category field.
     * Doctor's type
     * 
     */
    DoctorCategoryType getCategory();

    /**
     * Sets the value of the Category field.
     * 
     */
    void setCategory(DoctorCategoryType value);

    /**
     * Gets the value of the Specialty field.
     * Doctor's specialty
     * 
     */
    DoctorSpecialtyType getSpecialty();

    /**
     * Sets the value of the Specialty field.
     * 
     */
    void setSpecialty(DoctorSpecialtyType value);

}
