
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.LinkPropertyInfoCache;
import extensions.ab.contact.entity.MessageGenerator;
import gw.pl.messaging.entity.EventAware;
import gw.pl.persistence.core.entity.Retireable;

public interface MessageGeneratorStubI
    extends EventAware, Retireable
{

    EntityIntrinsicTypeReference<MessageGenerator> TYPE = new EntityIntrinsicTypeReference<MessageGenerator>("entity.MessageGenerator");
    ColumnPropertyInfoCache LOADCOMMANDID_PROP = new ColumnPropertyInfoCache(TYPE, "LoadCommandID");
    ColumnPropertyInfoCache NAME_PROP = new ColumnPropertyInfoCache(TYPE, "Name");
    ColumnPropertyInfoCache THROWEXCEPTIONINREQUEST_PROP = new ColumnPropertyInfoCache(TYPE, "ThrowExceptionInRequest");
    ColumnPropertyInfoCache THROWEXCEPTIONINTRANSPORT_PROP = new ColumnPropertyInfoCache(TYPE, "ThrowExceptionInTransport");
    ColumnPropertyInfoCache THROWEXCEPTIONINREPLY_PROP = new ColumnPropertyInfoCache(TYPE, "ThrowExceptionInReply");
    ColumnPropertyInfoCache AUTOACKMESSAGE_PROP = new ColumnPropertyInfoCache(TYPE, "AutoAckMessage");
    ColumnPropertyInfoCache RETIREDVALUE_PROP = new ColumnPropertyInfoCache(TYPE, "RetiredValue");
    ColumnPropertyInfoCache CREATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "CreateTime");
    ColumnPropertyInfoCache UPDATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "UpdateTime");
    LinkPropertyInfoCache CREATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "CreateUser");
    LinkPropertyInfoCache UPDATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "UpdateUser");
    ColumnPropertyInfoCache BEANVERSION_PROP = new ColumnPropertyInfoCache(TYPE, "BeanVersion");
    ColumnPropertyInfoCache ID_PROP = new ColumnPropertyInfoCache(TYPE, "ID");
    ColumnPropertyInfoCache PUBLICID_PROP = new ColumnPropertyInfoCache(TYPE, "PublicID");
    String MESSAGEGENERATORADDED_EVENT = "MessageGeneratorAdded";
    String MESSAGEGENERATORCHANGED_EVENT = "MessageGeneratorChanged";
    String MESSAGEGENERATORREMOVED_EVENT = "MessageGeneratorRemoved";

    /**
     * Gets the value of the LoadCommandID field.
     * 
     * 
     */
    Long getLoadCommandID();

    /**
     * Gets the value of the Name field.
     * Name of instance that is triggering a message
     * 
     */
    String getName();

    /**
     * Sets the value of the Name field.
     * 
     */
    void setName(String value);

    /**
     * Gets the value of the ThrowExceptionInRequest field.
     * Should an exception be thrown during the Request plugin's beforeSend() method?
     * 
     */
    Boolean isThrowExceptionInRequest();

    /**
     * Sets the value of the ThrowExceptionInRequest field.
     * 
     */
    void setThrowExceptionInRequest(Boolean value);

    /**
     * Gets the value of the ThrowExceptionInTransport field.
     * Should an exception be thrown during the Transport plugin's send() method?
     * 
     */
    Boolean isThrowExceptionInTransport();

    /**
     * Sets the value of the ThrowExceptionInTransport field.
     * 
     */
    void setThrowExceptionInTransport(Boolean value);

    /**
     * Gets the value of the ThrowExceptionInReply field.
     * Should an exception be thrown when processing the message reply?
     * 
     */
    Boolean isThrowExceptionInReply();

    /**
     * Sets the value of the ThrowExceptionInReply field.
     * 
     */
    void setThrowExceptionInReply(Boolean value);

    /**
     * Gets the value of the AutoAckMessage field.
     * Should the message generated from this instance be synchronously acknowledged?
     * 
     */
    Boolean isAutoAckMessage();

    /**
     * Sets the value of the AutoAckMessage field.
     * 
     */
    void setAutoAckMessage(Boolean value);

}
