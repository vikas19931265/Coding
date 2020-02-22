
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.addressbook.typekey.AdjudicativeDomain;
import extensions.ab.contact.entity.ABAdjudicator;
import gw.ab.addressbook.entity.ABPerson;

public interface ABAdjudicatorStubI
    extends ABPerson
{

    EntityIntrinsicTypeReference<ABAdjudicator> TYPE = new EntityIntrinsicTypeReference<ABAdjudicator>("entity.ABAdjudicator");
    ColumnPropertyInfoCache ADJUDICATORLICENSE_PROP = new ColumnPropertyInfoCache(TYPE, "AdjudicatorLicense");
    TypekeyPropertyInfoCache ADJUDICATIVEDOMAIN_PROP = new TypekeyPropertyInfoCache(TYPE, "AdjudicativeDomain");

    /**
     * Gets the value of the AdjudicatorLicense field.
     * Adjudicator's business license number.
     * 
     */
    String getAdjudicatorLicense();

    /**
     * Sets the value of the AdjudicatorLicense field.
     * 
     */
    void setAdjudicatorLicense(String value);

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

}
