
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class VendorEvaluationStatus
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<VendorEvaluationStatus> TYPE = new TypeListIntrinsicTypeCache<VendorEvaluationStatus>("VendorEvaluationStatus");
    public final static extensions.ab.contact.typekey.VendorEvaluationStatus.VendorEvaluationStatusCache TC_PENDING = new extensions.ab.contact.typekey.VendorEvaluationStatus.VendorEvaluationStatusCache(extensions.ab.contact.typekey.VendorEvaluationStatus.TYPE, "pending");
    public final static extensions.ab.contact.typekey.VendorEvaluationStatus.VendorEvaluationStatusCache TC_UNKNOWN = new extensions.ab.contact.typekey.VendorEvaluationStatus.VendorEvaluationStatusCache(extensions.ab.contact.typekey.VendorEvaluationStatus.TYPE, "unknown");
    public final static extensions.ab.contact.typekey.VendorEvaluationStatus.VendorEvaluationStatusCache TC_UNVERIFIED = new extensions.ab.contact.typekey.VendorEvaluationStatus.VendorEvaluationStatusCache(extensions.ab.contact.typekey.VendorEvaluationStatus.TYPE, "unverified");
    public final static extensions.ab.contact.typekey.VendorEvaluationStatus.VendorEvaluationStatusCache TC_VERIFIED = new extensions.ab.contact.typekey.VendorEvaluationStatus.VendorEvaluationStatusCache(extensions.ab.contact.typekey.VendorEvaluationStatus.TYPE, "verified");

    public VendorEvaluationStatus(ITypeList type, String code) {
        super(type, code);
    }

    public static VendorEvaluationStatus getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<VendorEvaluationStatus> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class VendorEvaluationStatusCache
        extends TypeKeyCache
    {


        public VendorEvaluationStatusCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public VendorEvaluationStatus get() {
            return ((VendorEvaluationStatus) super.getKey());
        }

    }

}
