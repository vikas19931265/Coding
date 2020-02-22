
package extensions.ab.internal.domain.community.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.typekey.MeasurementSystem;
import gw.pl.community.entity.User;

public interface UserExtMethodsStubI {

    ColumnPropertyInfoCache INTEGEREXT_PROP = new ColumnPropertyInfoCache(User.TYPE, "IntegerExt");
    ColumnPropertyInfoCache USEHELPERLABELS_PROP = new ColumnPropertyInfoCache(User.TYPE, "UseHelperLabels");
    TypekeyPropertyInfoCache MEASUREMENTSYSTEMPREFERENCE_PROP = new TypekeyPropertyInfoCache(User.TYPE, "MeasurementSystemPreference");

    /**
     * Gets the value of the IntegerExt field.
     * integer extension; default value of '12'
     * 
     */
    Integer getIntegerExt();

    /**
     * Sets the value of the IntegerExt field.
     * 
     */
    void setIntegerExt(Integer value);

    /**
     * Gets the value of the UseHelperLabels field.
     * Should the helper labels be displayed?
     * 
     */
    Boolean isUseHelperLabels();

    /**
     * Sets the value of the UseHelperLabels field.
     * 
     */
    void setUseHelperLabels(Boolean value);

    /**
     * Gets the value of the MeasurementSystemPreference field.
     * Measurement System Preference
     * 
     */
    MeasurementSystem getMeasurementSystemPreference();

    /**
     * Sets the value of the MeasurementSystemPreference field.
     * 
     */
    void setMeasurementSystemPreference(MeasurementSystem value);

}
