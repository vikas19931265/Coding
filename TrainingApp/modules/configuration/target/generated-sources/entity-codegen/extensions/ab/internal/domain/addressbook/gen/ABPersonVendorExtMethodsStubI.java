
package extensions.ab.internal.domain.addressbook.gen;

import java.util.Date;
import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import gw.ab.addressbook.entity.ABPersonVendor;

public interface ABPersonVendorExtMethodsStubI {

    ColumnPropertyInfoCache SELFEMPLOYEED_EXT_PROP = new ColumnPropertyInfoCache(ABPersonVendor.TYPE, "SelfEmployeed_Ext");
    ColumnPropertyInfoCache FRAUDCONVICTIONS_EXT_PROP = new ColumnPropertyInfoCache(ABPersonVendor.TYPE, "FraudConvictions_Ext");
    ColumnPropertyInfoCache FRAUDCONVICTIONSDATE_EXT_PROP = new ColumnPropertyInfoCache(ABPersonVendor.TYPE, "FraudConvictionsDate_Ext");

    /**
     * Gets the value of the SelfEmployeed_Ext field.
     * Is the vendor self-employed?
     * 
     */
    Boolean isSelfEmployeed_Ext();

    /**
     * Sets the value of the SelfEmployeed_Ext field.
     * 
     */
    void setSelfEmployeed_Ext(Boolean value);

    /**
     * Gets the value of the FraudConvictions_Ext field.
     * Number of convictions for fraud
     * 
     */
    Integer getFraudConvictions_Ext();

    /**
     * Sets the value of the FraudConvictions_Ext field.
     * 
     */
    void setFraudConvictions_Ext(Integer value);

    /**
     * Gets the value of the FraudConvictionsDate_Ext field.
     * Date of check for convictions
     * 
     */
    Date getFraudConvictionsDate_Ext();

    /**
     * Sets the value of the FraudConvictionsDate_Ext field.
     * 
     */
    void setFraudConvictionsDate_Ext(Date value);

}
