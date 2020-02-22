
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class ContactTier
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<ContactTier> TYPE = new TypeListIntrinsicTypeCache<ContactTier>("ContactTier");
    public final static extensions.ab.contact.typekey.ContactTier.ContactTierCache TC_GOLD = new extensions.ab.contact.typekey.ContactTier.ContactTierCache(ContactTier.TYPE, "gold");
    public final static extensions.ab.contact.typekey.ContactTier.ContactTierCache TC_PLATINUM = new extensions.ab.contact.typekey.ContactTier.ContactTierCache(ContactTier.TYPE, "platinum");
    public final static extensions.ab.contact.typekey.ContactTier.ContactTierCache TC_SILVER = new extensions.ab.contact.typekey.ContactTier.ContactTierCache(ContactTier.TYPE, "silver");
    public final static extensions.ab.contact.typekey.ContactTier.ContactTierCache TC_UNKNOWN = new extensions.ab.contact.typekey.ContactTier.ContactTierCache(ContactTier.TYPE, "unknown");

    public ContactTier(ITypeList type, String code) {
        super(type, code);
    }

    public static ContactTier getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<ContactTier> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class ContactTierCache
        extends TypeKeyCache
    {


        public ContactTierCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public ContactTier get() {
            return ((ContactTier) super.getKey());
        }

    }

}
