
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.addressbook.typekey.LegalSpecialty;
import extensions.ab.contact.entity.ABAttorney;
import gw.ab.addressbook.entity.ABPersonVendor;

public interface ABAttorneyStubI
    extends ABPersonVendor
{

    EntityIntrinsicTypeReference<ABAttorney> TYPE = new EntityIntrinsicTypeReference<ABAttorney>("entity.ABAttorney");
    ColumnPropertyInfoCache ATTORNEYLICENSE_PROP = new ColumnPropertyInfoCache(TYPE, "AttorneyLicense");
    TypekeyPropertyInfoCache ATTORNEYSPECIALTY_PROP = new TypekeyPropertyInfoCache(TYPE, "AttorneySpecialty");

    /**
     * Gets the value of the AttorneyLicense field.
     * Attorney's business license number.
     * 
     */
    String getAttorneyLicense();

    /**
     * Sets the value of the AttorneyLicense field.
     * 
     */
    void setAttorneyLicense(String value);

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

}
