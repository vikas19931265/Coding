
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class ContactNoteType
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<ContactNoteType> TYPE = new TypeListIntrinsicTypeCache<ContactNoteType>("ContactNoteType");
    public final static extensions.ab.contact.typekey.ContactNoteType.ContactNoteTypeCache TC_DATA_UPDATE = new extensions.ab.contact.typekey.ContactNoteType.ContactNoteTypeCache(extensions.ab.contact.typekey.ContactNoteType.TYPE, "data_update");
    public final static extensions.ab.contact.typekey.ContactNoteType.ContactNoteTypeCache TC_GENERAL = new extensions.ab.contact.typekey.ContactNoteType.ContactNoteTypeCache(extensions.ab.contact.typekey.ContactNoteType.TYPE, "general");
    public final static extensions.ab.contact.typekey.ContactNoteType.ContactNoteTypeCache TC_LICENSE = new extensions.ab.contact.typekey.ContactNoteType.ContactNoteTypeCache(extensions.ab.contact.typekey.ContactNoteType.TYPE, "license");
    public final static extensions.ab.contact.typekey.ContactNoteType.ContactNoteTypeCache TC_PROBLEM = new extensions.ab.contact.typekey.ContactNoteType.ContactNoteTypeCache(extensions.ab.contact.typekey.ContactNoteType.TYPE, "problem");

    public ContactNoteType(ITypeList type, String code) {
        super(type, code);
    }

    public static ContactNoteType getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<ContactNoteType> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class ContactNoteTypeCache
        extends TypeKeyCache
    {


        public ContactNoteTypeCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public ContactNoteType get() {
            return ((ContactNoteType) super.getKey());
        }

    }

}
