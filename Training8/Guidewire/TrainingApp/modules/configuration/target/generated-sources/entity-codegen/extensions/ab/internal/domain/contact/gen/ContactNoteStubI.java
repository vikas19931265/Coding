
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.LinkPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.entity.ContactNote;
import extensions.ab.contact.typekey.ContactNoteType;
import gw.ab.addressbook.entity.ABContact;
import gw.pl.persistence.core.entity.Retireable;

public interface ContactNoteStubI
    extends Retireable
{

    EntityIntrinsicTypeReference<ContactNote> TYPE = new EntityIntrinsicTypeReference<ContactNote>("entity.ContactNote");
    ColumnPropertyInfoCache LOADCOMMANDID_PROP = new ColumnPropertyInfoCache(TYPE, "LoadCommandID");
    ColumnPropertyInfoCache SUBJECT_PROP = new ColumnPropertyInfoCache(TYPE, "Subject");
    ColumnPropertyInfoCache BODY_PROP = new ColumnPropertyInfoCache(TYPE, "Body");
    ColumnPropertyInfoCache CONFIDENTIAL_PROP = new ColumnPropertyInfoCache(TYPE, "Confidential");
    TypekeyPropertyInfoCache CONTACTNOTETYPE_PROP = new TypekeyPropertyInfoCache(TYPE, "ContactNoteType");
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
     * Gets the value of the Subject field.
     * Subject
     * 
     */
    String getSubject();

    /**
     * Sets the value of the Subject field.
     * 
     */
    void setSubject(String value);

    /**
     * Gets the value of the Body field.
     * Body
     * 
     */
    String getBody();

    /**
     * Sets the value of the Body field.
     * 
     */
    void setBody(String value);

    /**
     * Gets the value of the Confidential field.
     * Confidential
     * 
     */
    Boolean isConfidential();

    /**
     * Sets the value of the Confidential field.
     * 
     */
    void setConfidential(Boolean value);

    /**
     * Gets the value of the ContactNoteType field.
     * Contact note type
     * 
     */
    ContactNoteType getContactNoteType();

    /**
     * Sets the value of the ContactNoteType field.
     * 
     */
    void setContactNoteType(ContactNoteType value);

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
