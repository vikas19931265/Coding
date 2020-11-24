
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import extensions.ab.contact.entity.ABAutoTowingAgcy;
import gw.ab.addressbook.entity.ABCompanyVendor;

public interface ABAutoTowingAgcyStubI
    extends ABCompanyVendor
{

    EntityIntrinsicTypeReference<ABAutoTowingAgcy> TYPE = new EntityIntrinsicTypeReference<ABAutoTowingAgcy>("entity.ABAutoTowingAgcy");
    ColumnPropertyInfoCache AUTOTOWINGLICENSE_PROP = new ColumnPropertyInfoCache(TYPE, "AutoTowingLicense");

    /**
     * Gets the value of the AutoTowingLicense field.
     * Auto towing agency business license number
     * 
     */
    String getAutoTowingLicense();

    /**
     * Sets the value of the AutoTowingLicense field.
     * 
     */
    void setAutoTowingLicense(String value);

}
