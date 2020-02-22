
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.LinkPropertyInfoCache;
import extensions.ab.contact.entity.ViewedContact;
import gw.ab.addressbook.entity.ABContact;
import gw.pl.community.entity.User;
import gw.pl.persistence.core.entity.Retireable;

public interface ViewedContactStubI
    extends Retireable
{

    EntityIntrinsicTypeReference<ViewedContact> TYPE = new EntityIntrinsicTypeReference<ViewedContact>("entity.ViewedContact");
    ColumnPropertyInfoCache LOADCOMMANDID_PROP = new ColumnPropertyInfoCache(TYPE, "LoadCommandID");
    LinkPropertyInfoCache VIEWINGUSER_PROP = new LinkPropertyInfoCache(TYPE, "ViewingUser");
    LinkPropertyInfoCache VIEWEDCONTACT_PROP = new LinkPropertyInfoCache(TYPE, "ViewedContact");
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
     * Gets the value of the ViewingUser field.
     * User who viewed contact
     * 
     */
    User getViewingUser();

    /**
     * Sets the value of the ViewingUser field.
     * 
     */
    void setViewingUser(User value);

    /**
     * Gets the value of the ViewedContact field.
     * Contact that was viewed
     * 
     */
    ABContact getViewedContact();

    /**
     * Sets the value of the ViewedContact field.
     * 
     */
    void setViewedContact(ABContact value);

}
