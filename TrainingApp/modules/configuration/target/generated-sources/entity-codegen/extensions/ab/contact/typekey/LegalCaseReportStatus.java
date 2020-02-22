
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class LegalCaseReportStatus
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<LegalCaseReportStatus> TYPE = new TypeListIntrinsicTypeCache<LegalCaseReportStatus>("LegalCaseReportStatus");
    public final static extensions.ab.contact.typekey.LegalCaseReportStatus.LegalCaseReportStatusCache TC_NEVER_REQUESTED = new extensions.ab.contact.typekey.LegalCaseReportStatus.LegalCaseReportStatusCache(extensions.ab.contact.typekey.LegalCaseReportStatus.TYPE, "never_requested");
    public final static extensions.ab.contact.typekey.LegalCaseReportStatus.LegalCaseReportStatusCache TC_REQUESTED_PENDING = new extensions.ab.contact.typekey.LegalCaseReportStatus.LegalCaseReportStatusCache(extensions.ab.contact.typekey.LegalCaseReportStatus.TYPE, "requested_pending");
    public final static extensions.ab.contact.typekey.LegalCaseReportStatus.LegalCaseReportStatusCache TC_REQUESTED_RECEIVED = new extensions.ab.contact.typekey.LegalCaseReportStatus.LegalCaseReportStatusCache(extensions.ab.contact.typekey.LegalCaseReportStatus.TYPE, "requested_received");

    public LegalCaseReportStatus(ITypeList type, String code) {
        super(type, code);
    }

    public static LegalCaseReportStatus getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<LegalCaseReportStatus> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class LegalCaseReportStatusCache
        extends TypeKeyCache
    {


        public LegalCaseReportStatusCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public LegalCaseReportStatus get() {
            return ((LegalCaseReportStatus) super.getKey());
        }

    }

}
