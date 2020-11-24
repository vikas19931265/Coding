
package extensions.ab.internal.domain.addressbook.gen;

import java.math.BigDecimal;
import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.typekey.YesNo;
import gw.ab.addressbook.entity.ABPolicyPerson;

public interface ABPolicyPersonExtMethodsStubI {

    ColumnPropertyInfoCache COLLATERALREQUIRED_PROP = new ColumnPropertyInfoCache(ABPolicyPerson.TYPE, "CollateralRequired");
    ColumnPropertyInfoCache COLLATERALAMOUNT_PROP = new ColumnPropertyInfoCache(ABPolicyPerson.TYPE, "CollateralAmount");
    TypekeyPropertyInfoCache PERSONCOLLATERALVERIFIED_PROP = new TypekeyPropertyInfoCache(ABPolicyPerson.TYPE, "PersonCollateralVerified");
    ColumnPropertyInfoCache HEIGHTINMETERS_PROP = new ColumnPropertyInfoCache(ABPolicyPerson.TYPE, "HeightInMeters");

    /**
     * Gets the value of the CollateralRequired field.
     * Is collateral (a deposit) required to insure this person?
     * 
     */
    Boolean isCollateralRequired();

    /**
     * Sets the value of the CollateralRequired field.
     * 
     */
    void setCollateralRequired(Boolean value);

    /**
     * Gets the value of the CollateralAmount field.
     * Amount of collateral required
     * 
     */
    Integer getCollateralAmount();

    /**
     * Sets the value of the CollateralAmount field.
     * 
     */
    void setCollateralAmount(Integer value);

    /**
     * Gets the value of the PersonCollateralVerified field.
     * YesNo
     * 
     */
    YesNo getPersonCollateralVerified();

    /**
     * Sets the value of the PersonCollateralVerified field.
     * 
     */
    void setPersonCollateralVerified(YesNo value);

    /**
     * Gets the value of the HeightInMeters field.
     * Height in meters, such as 1.9805
     * 
     */
    BigDecimal getHeightInMeters();

    /**
     * Sets the value of the HeightInMeters field.
     * 
     */
    void setHeightInMeters(BigDecimal value);

}
