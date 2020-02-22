
package extensions.ab.internal.domain.contact.gen;

import java.util.Date;
import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.LinkPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.entity.LegalCase;
import extensions.ab.contact.typekey.LegalCaseStatus;
import extensions.ab.contact.typekey.LegalCaseType;
import gw.ab.addressbook.entity.ABContact;
import gw.pl.persistence.core.entity.Retireable;

public interface LegalCaseStubI
    extends Retireable
{

    EntityIntrinsicTypeReference<LegalCase> TYPE = new EntityIntrinsicTypeReference<LegalCase>("entity.LegalCase");
    ColumnPropertyInfoCache LOADCOMMANDID_PROP = new ColumnPropertyInfoCache(TYPE, "LoadCommandID");
    ColumnPropertyInfoCache FILEDATE_PROP = new ColumnPropertyInfoCache(TYPE, "FileDate");
    ColumnPropertyInfoCache FILEDBYCONTACT_PROP = new ColumnPropertyInfoCache(TYPE, "FiledByContact");
    ColumnPropertyInfoCache PLAINTIFF_PROP = new ColumnPropertyInfoCache(TYPE, "Plaintiff");
    ColumnPropertyInfoCache DEFENDANT_PROP = new ColumnPropertyInfoCache(TYPE, "Defendant");
    TypekeyPropertyInfoCache CASETYPE_PROP = new TypekeyPropertyInfoCache(TYPE, "CaseType");
    TypekeyPropertyInfoCache STATUS_PROP = new TypekeyPropertyInfoCache(TYPE, "Status");
    LinkPropertyInfoCache ABCONTACT_PROP = new LinkPropertyInfoCache(TYPE, "ABContact");
    ColumnPropertyInfoCache RETIREDVALUE_PROP = new ColumnPropertyInfoCache(TYPE, "RetiredValue");
    ColumnPropertyInfoCache CREATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "CreateTime");
    ColumnPropertyInfoCache UPDATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "UpdateTime");
    LinkPropertyInfoCache CREATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "CreateUser");
    LinkPropertyInfoCache UPDATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "UpdateUser");
    ColumnPropertyInfoCache BEANVERSION_PROP = new ColumnPropertyInfoCache(TYPE, "BeanVersion");
    ColumnPropertyInfoCache ID_PROP = new ColumnPropertyInfoCache(TYPE, "ID");
    ColumnPropertyInfoCache PUBLICID_PROP = new ColumnPropertyInfoCache(TYPE, "PublicID");

    /**
     * Gets the value of the LoadCommandID field.
     * 
     * 
     */
    Long getLoadCommandID();

    /**
     * Gets the value of the FileDate field.
     * Date the case was filed with the courts
     * 
     */
    Date getFileDate();

    /**
     * Sets the value of the FileDate field.
     * 
     */
    void setFileDate(Date value);

    /**
     * Gets the value of the FiledByContact field.
     * Did the contact file this case?
     * 
     */
    Boolean isFiledByContact();

    /**
     * Sets the value of the FiledByContact field.
     * 
     */
    void setFiledByContact(Boolean value);

    /**
     * Gets the value of the Plaintiff field.
     * Plaintiff of the lawsuit (if contact is defendant)
     * 
     */
    String getPlaintiff();

    /**
     * Sets the value of the Plaintiff field.
     * 
     */
    void setPlaintiff(String value);

    /**
     * Gets the value of the Defendant field.
     * Defendant of the lawsuit (if contact is the plaintiff)
     * 
     */
    String getDefendant();

    /**
     * Sets the value of the Defendant field.
     * 
     */
    void setDefendant(String value);

    /**
     * Gets the value of the CaseType field.
     * Type of case
     * 
     */
    LegalCaseType getCaseType();

    /**
     * Sets the value of the CaseType field.
     * 
     */
    void setCaseType(LegalCaseType value);

    /**
     * Gets the value of the Status field.
     * Status of case
     * 
     */
    LegalCaseStatus getStatus();

    /**
     * Sets the value of the Status field.
     * 
     */
    void setStatus(LegalCaseStatus value);

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

}
