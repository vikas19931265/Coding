
package extensions.ab.internal.domain.addressbook.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.typekey.YesNo;
import gw.ab.addressbook.entity.ABPolicyCompany;

public interface ABPolicyCompanyExtMethodsStubI {

    ColumnPropertyInfoCache COLLATERALREQUIRED_PROP = new ColumnPropertyInfoCache(ABPolicyCompany.TYPE, "CollateralRequired");
    ColumnPropertyInfoCache COLLATERALAMOUNT_PROP = new ColumnPropertyInfoCache(ABPolicyCompany.TYPE, "CollateralAmount");
    TypekeyPropertyInfoCache COMPANYCOLLATERALVERIFIED_PROP = new TypekeyPropertyInfoCache(ABPolicyCompany.TYPE, "CompanyCollateralVerified");

    /**
     * Gets the value of the CollateralRequired field.
     * Is collateral (a deposit) required to insure this company?
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
     * Gets the value of the CompanyCollateralVerified field.
     * YesNo only
     * 
     */
    YesNo getCompanyCollateralVerified();

    /**
     * Sets the value of the CompanyCollateralVerified field.
     * 
     */
    void setCompanyCollateralVerified(YesNo value);

}
