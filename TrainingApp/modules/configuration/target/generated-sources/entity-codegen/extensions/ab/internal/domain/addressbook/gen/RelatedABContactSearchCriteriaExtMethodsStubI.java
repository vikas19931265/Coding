
package extensions.ab.internal.domain.addressbook.gen;

import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.addressbook.typekey.AdjudicativeDomain;
import extensions.ab.addressbook.typekey.LegalSpecialty;
import gw.ab.addressbook.entity.RelatedABContactSearchCriteria;
import gw.pl.contact.typekey.SpecialtyType;

public interface RelatedABContactSearchCriteriaExtMethodsStubI {

    TypekeyPropertyInfoCache ADJUDICATIVEDOMAIN_PROP = new TypekeyPropertyInfoCache(RelatedABContactSearchCriteria.TYPE, "AdjudicativeDomain");
    TypekeyPropertyInfoCache ATTORNEYSPECIALTY_PROP = new TypekeyPropertyInfoCache(RelatedABContactSearchCriteria.TYPE, "AttorneySpecialty");
    TypekeyPropertyInfoCache DOCTORSPECIALTY_PROP = new TypekeyPropertyInfoCache(RelatedABContactSearchCriteria.TYPE, "DoctorSpecialty");
    TypekeyPropertyInfoCache MEDICALORGSPECIALTY_PROP = new TypekeyPropertyInfoCache(RelatedABContactSearchCriteria.TYPE, "MedicalOrgSpecialty");
    TypekeyPropertyInfoCache LAWFIRMSPECIALTY_PROP = new TypekeyPropertyInfoCache(RelatedABContactSearchCriteria.TYPE, "LawFirmSpecialty");

    /**
     * Gets the value of the AdjudicativeDomain field.
     * Adjudicative Domain
     * 
     */
    AdjudicativeDomain getAdjudicativeDomain();

    /**
     * Sets the value of the AdjudicativeDomain field.
     * 
     */
    void setAdjudicativeDomain(AdjudicativeDomain value);

    /**
     * Gets the value of the AttorneySpecialty field.
     * Attorney's specialty
     * 
     */
    LegalSpecialty getAttorneySpecialty();

    /**
     * Sets the value of the AttorneySpecialty field.
     * 
     */
    void setAttorneySpecialty(LegalSpecialty value);

    /**
     * Gets the value of the DoctorSpecialty field.
     * Doctor's specialty
     * 
     */
    SpecialtyType getDoctorSpecialty();

    /**
     * Sets the value of the DoctorSpecialty field.
     * 
     */
    void setDoctorSpecialty(SpecialtyType value);

    /**
     * Gets the value of the MedicalOrgSpecialty field.
     * Medical specialty type
     * 
     */
    SpecialtyType getMedicalOrgSpecialty();

    /**
     * Sets the value of the MedicalOrgSpecialty field.
     * 
     */
    void setMedicalOrgSpecialty(SpecialtyType value);

    /**
     * Gets the value of the LawFirmSpecialty field.
     * Law firm Specialty
     * 
     */
    LegalSpecialty getLawFirmSpecialty();

    /**
     * Sets the value of the LawFirmSpecialty field.
     * 
     */
    void setLawFirmSpecialty(LegalSpecialty value);

}
