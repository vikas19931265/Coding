
package extensions.ab.internal.domain.contact.gen;

import java.util.Date;
import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.LinkPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.entity.FlagEntry;
import extensions.ab.contact.typekey.FlagEntryReason;
import gw.ab.addressbook.entity.ABContact;
import gw.pl.community.entity.User;
import gw.pl.persistence.core.entity.Retireable;

public interface FlagEntryStubI
    extends Retireable
{

    EntityIntrinsicTypeReference<FlagEntry> TYPE = new EntityIntrinsicTypeReference<FlagEntry>("entity.FlagEntry");
    ColumnPropertyInfoCache LOADCOMMANDID_PROP = new ColumnPropertyInfoCache(TYPE, "LoadCommandID");
    ColumnPropertyInfoCache FLAGDATE_PROP = new ColumnPropertyInfoCache(TYPE, "FlagDate");
    ColumnPropertyInfoCache UNFLAGDATE_PROP = new ColumnPropertyInfoCache(TYPE, "UnflagDate");
    ColumnPropertyInfoCache RESOLUTION_PROP = new ColumnPropertyInfoCache(TYPE, "Resolution");
    ColumnPropertyInfoCache ISOPEN_PROP = new ColumnPropertyInfoCache(TYPE, "IsOpen");
    TypekeyPropertyInfoCache REASON_PROP = new TypekeyPropertyInfoCache(TYPE, "Reason");
    LinkPropertyInfoCache ABCONTACT_PROP = new LinkPropertyInfoCache(TYPE, "ABContact");
    LinkPropertyInfoCache UNFLAGUSER_PROP = new LinkPropertyInfoCache(TYPE, "UnflagUser");
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
     * Gets the value of the FlagDate field.
     * Date contact was flagged
     * 
     */
    Date getFlagDate();

    /**
     * Sets the value of the FlagDate field.
     * 
     */
    void setFlagDate(Date value);

    /**
     * Gets the value of the UnflagDate field.
     * Date contact was unflagged
     * 
     */
    Date getUnflagDate();

    /**
     * Sets the value of the UnflagDate field.
     * 
     */
    void setUnflagDate(Date value);

    /**
     * Gets the value of the Resolution field.
     * Note regarding resolution
     * 
     */
    String getResolution();

    /**
     * Sets the value of the Resolution field.
     * 
     */
    void setResolution(String value);

    /**
     * Gets the value of the IsOpen field.
     * Is the entry open?
     * 
     */
    Boolean isIsOpen();

    /**
     * Sets the value of the IsOpen field.
     * 
     */
    void setIsOpen(Boolean value);

    /**
     * Gets the value of the Reason field.
     * Reason contact was flagged
     * 
     */
    FlagEntryReason getReason();

    /**
     * Sets the value of the Reason field.
     * 
     */
    void setReason(FlagEntryReason value);

    /**
     * Gets the value of the ABContact field.
     * Contact that was flagged
     * 
     */
    ABContact getABContact();

    /**
     * Sets the value of the ABContact field.
     * 
     */
    void setABContact(ABContact value);

    /**
     * Gets the value of the UnflagUser field.
     * User who unflags contact
     * 
     */
    User getUnflagUser();

    /**
     * Sets the value of the UnflagUser field.
     * 
     */
    void setUnflagUser(User value);

}
