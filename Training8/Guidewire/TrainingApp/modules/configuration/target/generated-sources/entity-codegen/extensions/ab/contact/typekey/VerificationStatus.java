
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class VerificationStatus
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<VerificationStatus> TYPE = new TypeListIntrinsicTypeCache<VerificationStatus>("VerificationStatus");
    public final static extensions.ab.contact.typekey.VerificationStatus.VerificationStatusCache TC_INVALID = new extensions.ab.contact.typekey.VerificationStatus.VerificationStatusCache(extensions.ab.contact.typekey.VerificationStatus.TYPE, "invalid");
    public final static extensions.ab.contact.typekey.VerificationStatus.VerificationStatusCache TC_PENDING = new extensions.ab.contact.typekey.VerificationStatus.VerificationStatusCache(extensions.ab.contact.typekey.VerificationStatus.TYPE, "pending");
    public final static extensions.ab.contact.typekey.VerificationStatus.VerificationStatusCache TC_VERIFIED = new extensions.ab.contact.typekey.VerificationStatus.VerificationStatusCache(extensions.ab.contact.typekey.VerificationStatus.TYPE, "verified");

    public VerificationStatus(ITypeList type, String code) {
        super(type, code);
    }

    public static VerificationStatus getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<VerificationStatus> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class VerificationStatusCache
        extends TypeKeyCache
    {


        public VerificationStatusCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public VerificationStatus get() {
            return ((VerificationStatus) super.getKey());
        }

    }

}
