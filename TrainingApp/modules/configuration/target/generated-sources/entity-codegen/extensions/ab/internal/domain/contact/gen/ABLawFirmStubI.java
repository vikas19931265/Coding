
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.addressbook.typekey.LegalSpecialty;
import extensions.ab.contact.entity.ABLawFirm;
import gw.ab.addressbook.entity.ABCompanyVendor;

public interface ABLawFirmStubI
    extends ABCompanyVendor
{

    EntityIntrinsicTypeReference<ABLawFirm> TYPE = new EntityIntrinsicTypeReference<ABLawFirm>("entity.ABLawFirm");
    TypekeyPropertyInfoCache LAWFIRMSPECIALTY_PROP = new TypekeyPropertyInfoCache(TYPE, "LawFirmSpecialty");

    /**
     * Gets the value of the LawFirmSpecialty field.
     * Law firm specialty
     * 
     */
    LegalSpecialty getLawFirmSpecialty();

    /**
     * Sets the value of the LawFirmSpecialty field.
     * 
     */
    void setLawFirmSpecialty(LegalSpecialty value);

}
