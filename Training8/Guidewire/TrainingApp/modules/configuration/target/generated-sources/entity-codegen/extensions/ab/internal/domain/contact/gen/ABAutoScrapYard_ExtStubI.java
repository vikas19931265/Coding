
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import extensions.ab.contact.entity.ABAutoScrapYard_Ext;
import gw.ab.addressbook.entity.ABCompanyVendor;

public interface ABAutoScrapYard_ExtStubI
    extends ABCompanyVendor
{

    EntityIntrinsicTypeReference<ABAutoScrapYard_Ext> TYPE = new EntityIntrinsicTypeReference<ABAutoScrapYard_Ext>("entity.ABAutoScrapYard_Ext");
    ColumnPropertyInfoCache CANPICKUPVEHICLES_PROP = new ColumnPropertyInfoCache(TYPE, "CanPickUpVehicles");

    /**
     * Gets the value of the CanPickUpVehicles field.
     * Can this yard tow non-operational vehicles to its yard?
     * 
     */
    Boolean isCanPickUpVehicles();

    /**
     * Sets the value of the CanPickUpVehicles field.
     * 
     */
    void setCanPickUpVehicles(Boolean value);

}
