
package extensions.ab.internal.domain.contact.gen;

import java.util.Date;
import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.LinkPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.entity.BankAccount;
import extensions.ab.contact.typekey.BankAccountType;
import extensions.ab.contact.typekey.VerificationStatus;
import gw.ab.addressbook.entity.ABContact;
import gw.pl.messaging.entity.EventAware;
import gw.pl.persistence.core.entity.Retireable;

public interface BankAccountStubI
    extends EventAware, Retireable
{

    EntityIntrinsicTypeReference<BankAccount> TYPE = new EntityIntrinsicTypeReference<BankAccount>("entity.BankAccount");
    ColumnPropertyInfoCache LOADCOMMANDID_PROP = new ColumnPropertyInfoCache(TYPE, "LoadCommandID");
    ColumnPropertyInfoCache BANKNAME_PROP = new ColumnPropertyInfoCache(TYPE, "BankName");
    ColumnPropertyInfoCache ROUTINGNUMBER_PROP = new ColumnPropertyInfoCache(TYPE, "RoutingNumber");
    ColumnPropertyInfoCache ACCOUNTNUMBER_PROP = new ColumnPropertyInfoCache(TYPE, "AccountNumber");
    TypekeyPropertyInfoCache ACCOUNTTYPE_PROP = new TypekeyPropertyInfoCache(TYPE, "AccountType");
    TypekeyPropertyInfoCache ISVERIFIED_PROP = new TypekeyPropertyInfoCache(TYPE, "IsVerified");
    LinkPropertyInfoCache ABCONTACT_PROP = new LinkPropertyInfoCache(TYPE, "ABContact");
    ColumnPropertyInfoCache ORGINATEDATE_PROP = new ColumnPropertyInfoCache(TYPE, "OrginateDate");
    ColumnPropertyInfoCache RETIREDVALUE_PROP = new ColumnPropertyInfoCache(TYPE, "RetiredValue");
    ColumnPropertyInfoCache CREATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "CreateTime");
    ColumnPropertyInfoCache UPDATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "UpdateTime");
    LinkPropertyInfoCache CREATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "CreateUser");
    LinkPropertyInfoCache UPDATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "UpdateUser");
    ColumnPropertyInfoCache BEANVERSION_PROP = new ColumnPropertyInfoCache(TYPE, "BeanVersion");
    ColumnPropertyInfoCache ID_PROP = new ColumnPropertyInfoCache(TYPE, "ID");
    ColumnPropertyInfoCache PUBLICID_PROP = new ColumnPropertyInfoCache(TYPE, "PublicID");
    String BANKACCOUNTADDED_EVENT = "BankAccountAdded";
    String BANKACCOUNTCHANGED_EVENT = "BankAccountChanged";
    String BANKACCOUNTREMOVED_EVENT = "BankAccountRemoved";

    /**
     * Gets the value of the LoadCommandID field.
     * 
     * 
     */
    Long getLoadCommandID();

    /**
     * Gets the value of the BankName field.
     * Bank name
     * 
     */
    String getBankName();

    /**
     * Sets the value of the BankName field.
     * 
     */
    void setBankName(String value);

    /**
     * Gets the value of the RoutingNumber field.
     * Account routing number
     * 
     */
    String getRoutingNumber();

    /**
     * Sets the value of the RoutingNumber field.
     * 
     */
    void setRoutingNumber(String value);

    /**
     * Gets the value of the AccountNumber field.
     * Account number
     * 
     */
    String getAccountNumber();

    /**
     * Sets the value of the AccountNumber field.
     * 
     */
    void setAccountNumber(String value);

    /**
     * Gets the value of the AccountType field.
     * Type of bank account
     * 
     */
    BankAccountType getAccountType();

    /**
     * Sets the value of the AccountType field.
     * 
     */
    void setAccountType(BankAccountType value);

    /**
     * Gets the value of the IsVerified field.
     * Has the routing and account information been verified with the bank?
     * 
     */
    VerificationStatus getIsVerified();

    /**
     * Sets the value of the IsVerified field.
     * 
     */
    void setIsVerified(VerificationStatus value);

    /**
     * Gets the value of the ABContact field.
     * Associated contact
     * 
     */
    ABContact getABContact();

    /**
     * Sets the value of the ABContact field.
     * 
     */
    void setABContact(ABContact value);

    /**
     * Gets the value of the OrginateDate field.
     * 
     * 
     */
    Date getOrginateDate();

    /**
     * Sets the value of the OrginateDate field.
     * 
     */
    void setOrginateDate(Date value);

}
