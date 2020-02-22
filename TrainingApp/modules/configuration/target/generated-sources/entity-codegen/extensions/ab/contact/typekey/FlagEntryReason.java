
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class FlagEntryReason
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<FlagEntryReason> TYPE = new TypeListIntrinsicTypeCache<FlagEntryReason>("FlagEntryReason");
    public final static extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache TC_DOCTOR_SPECIALTY_UNSPECIFIED = new extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache(extensions.ab.contact.typekey.FlagEntryReason.TYPE, "doctor_specialty_unspecified");
    public final static extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache TC_FRAUDULENT_ACTIVITY = new extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache(extensions.ab.contact.typekey.FlagEntryReason.TYPE, "fraudulent_activity");
    public final static extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache TC_INVALID_ADDRESS = new extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache(extensions.ab.contact.typekey.FlagEntryReason.TYPE, "invalid_address");
    public final static extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache TC_NO_EMAIL = new extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache(extensions.ab.contact.typekey.FlagEntryReason.TYPE, "no_email");
    public final static extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache TC_OVERDUE_LEGAL_REPORT = new extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache(extensions.ab.contact.typekey.FlagEntryReason.TYPE, "overdue_legal_report");
    public final static extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache TC_VENDOR_FAX = new extensions.ab.contact.typekey.FlagEntryReason.FlagEntryReasonCache(extensions.ab.contact.typekey.FlagEntryReason.TYPE, "vendor_fax");

    public FlagEntryReason(ITypeList type, String code) {
        super(type, code);
    }

    public static FlagEntryReason getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<FlagEntryReason> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class FlagEntryReasonCache
        extends TypeKeyCache
    {


        public FlagEntryReasonCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public FlagEntryReason get() {
            return ((FlagEntryReason) super.getKey());
        }

    }

}
