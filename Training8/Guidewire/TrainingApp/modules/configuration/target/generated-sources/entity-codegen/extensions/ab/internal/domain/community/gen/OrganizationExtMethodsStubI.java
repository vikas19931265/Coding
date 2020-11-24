
package extensions.ab.internal.domain.community.gen;

import java.math.BigDecimal;
import java.util.Date;
import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import gw.api.financials.CurrencyAmount;
import gw.pl.community.entity.Organization;

public interface OrganizationExtMethodsStubI {

    ColumnPropertyInfoCache NAMEKANJI_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "NameKanji");
    ColumnPropertyInfoCache NUMBEROFEMPLOYEES_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "NumberOfEmployees_Ext");
    ColumnPropertyInfoCache RISKFACTOR_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "RiskFactor_Ext");
    ColumnPropertyInfoCache STOCKPRICE_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "StockPrice_Ext");
    ColumnPropertyInfoCache LARGECLAIMPERCENT_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "LargeClaimPercent_Ext");
    ColumnPropertyInfoCache STOCKTICKER_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "StockTicker_Ext");
    ColumnPropertyInfoCache IPODATE_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "IPODate_Ext");
    ColumnPropertyInfoCache ISTAXEXEMPT_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "IsTaxExempt_Ext");
    ColumnPropertyInfoCache ISPUBLIC_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "IsPublic_Ext");
    ColumnPropertyInfoCache PURCHASEORDERACCOUNTNUMBER_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "PurchaseOrderAccountNumber_Ext");
    ColumnPropertyInfoCache PURCHASEORDERACCOUNTNUMBERVERIFIED_EXT_PROP = new ColumnPropertyInfoCache(Organization.TYPE, "PurchaseOrderAccountNumberVerified_Ext");

    /**
     * Gets the value of the NameKanji field.
     * The kanji name of the organization.
     * 
     */
    String getNameKanji();

    /**
     * Sets the value of the NameKanji field.
     * 
     */
    void setNameKanji(String value);

    /**
     * Gets the value of the NumberOfEmployees_Ext field.
     * Number of employees
     * 
     */
    Integer getNumberOfEmployees_Ext();

    /**
     * Sets the value of the NumberOfEmployees_Ext field.
     * 
     */
    void setNumberOfEmployees_Ext(Integer value);

    /**
     * Gets the value of the RiskFactor_Ext field.
     * Risk to insure
     * 
     */
    BigDecimal getRiskFactor_Ext();

    /**
     * Sets the value of the RiskFactor_Ext field.
     * 
     */
    void setRiskFactor_Ext(BigDecimal value);

    /**
     * Gets the value of the StockPrice_Ext field.
     * Price per share (in dollars)
     * 
     */
    CurrencyAmount getStockPrice_Ext();

    /**
     * Sets the value of the StockPrice_Ext field.
     * 
     */
    void setStockPrice_Ext(CurrencyAmount value);

    /**
     * Gets the value of the LargeClaimPercent_Ext field.
     * Percent of claims over $5000
     * 
     */
    Integer getLargeClaimPercent_Ext();

    /**
     * Sets the value of the LargeClaimPercent_Ext field.
     * 
     */
    void setLargeClaimPercent_Ext(Integer value);

    /**
     * Gets the value of the StockTicker_Ext field.
     * Stock market symbol
     * 
     */
    String getStockTicker_Ext();

    /**
     * Sets the value of the StockTicker_Ext field.
     * 
     */
    void setStockTicker_Ext(String value);

    /**
     * Gets the value of the IPODate_Ext field.
     * Date organization went or will go public
     * 
     */
    Date getIPODate_Ext();

    /**
     * Sets the value of the IPODate_Ext field.
     * 
     */
    void setIPODate_Ext(Date value);

    /**
     * Gets the value of the IsTaxExempt_Ext field.
     * Is this organization tax exempt?
     * 
     */
    Boolean isIsTaxExempt_Ext();

    /**
     * Sets the value of the IsTaxExempt_Ext field.
     * 
     */
    void setIsTaxExempt_Ext(Boolean value);

    /**
     * Gets the value of the IsPublic_Ext field.
     * Is this organization publicly owned?
     * 
     */
    Boolean isIsPublic_Ext();

    /**
     * Sets the value of the IsPublic_Ext field.
     * 
     */
    void setIsPublic_Ext(Boolean value);

    /**
     * Gets the value of the PurchaseOrderAccountNumber_Ext field.
     * Purchase order account number
     * 
     */
    String getPurchaseOrderAccountNumber_Ext();

    /**
     * Sets the value of the PurchaseOrderAccountNumber_Ext field.
     * 
     */
    void setPurchaseOrderAccountNumber_Ext(String value);

    /**
     * Gets the value of the PurchaseOrderAccountNumberVerified_Ext field.
     * Is PO account verified?
     * 
     */
    Boolean isPurchaseOrderAccountNumberVerified_Ext();

    /**
     * Sets the value of the PurchaseOrderAccountNumberVerified_Ext field.
     * 
     */
    void setPurchaseOrderAccountNumberVerified_Ext(Boolean value);

}
