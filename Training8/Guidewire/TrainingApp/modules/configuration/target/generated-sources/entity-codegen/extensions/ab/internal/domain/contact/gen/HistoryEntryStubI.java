
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.LinkPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.entity.HistoryEntry;
import extensions.ab.contact.typekey.HistoryEventType;
import gw.ab.addressbook.entity.ABContact;
import gw.pl.persistence.core.entity.Retireable;

public interface HistoryEntryStubI
    extends Retireable
{

    EntityIntrinsicTypeReference<HistoryEntry> TYPE = new EntityIntrinsicTypeReference<HistoryEntry>("entity.HistoryEntry");
    ColumnPropertyInfoCache LOADCOMMANDID_PROP = new ColumnPropertyInfoCache(TYPE, "LoadCommandID");
    ColumnPropertyInfoCache DESCRIPTION_PROP = new ColumnPropertyInfoCache(TYPE, "Description");
    TypekeyPropertyInfoCache EVENTTYPE_PROP = new TypekeyPropertyInfoCache(TYPE, "EventType");
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
     * Gets the value of the Description field.
     * Description of history event
     * 
     */
    String getDescription();

    /**
     * Sets the value of the Description field.
     * 
     */
    void setDescription(String value);

    /**
     * Gets the value of the EventType field.
     * Type of event for history entry
     * 
     */
    HistoryEventType getEventType();

    /**
     * Sets the value of the EventType field.
     * 
     */
    void setEventType(HistoryEventType value);

    /**
     * Gets the value of the ABContact field.
     * Contact to which history event belongs
     * 
     */
    ABContact getABContact();

    /**
     * Sets the value of the ABContact field.
     * 
     */
    void setABContact(ABContact value);

}
