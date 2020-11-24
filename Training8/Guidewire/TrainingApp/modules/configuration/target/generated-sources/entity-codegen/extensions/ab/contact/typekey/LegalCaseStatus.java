
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class LegalCaseStatus
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<LegalCaseStatus> TYPE = new TypeListIntrinsicTypeCache<LegalCaseStatus>("LegalCaseStatus");
    public final static extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache TC_CASE_DISMISSED = new extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache(extensions.ab.contact.typekey.LegalCaseStatus.TYPE, "case_dismissed");
    public final static extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache TC_CASE_DROPPED = new extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache(extensions.ab.contact.typekey.LegalCaseStatus.TYPE, "case_dropped");
    public final static extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache TC_GUILTY = new extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache(extensions.ab.contact.typekey.LegalCaseStatus.TYPE, "guilty");
    public final static extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache TC_IN_PROGRESS = new extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache(extensions.ab.contact.typekey.LegalCaseStatus.TYPE, "in_progress");
    public final static extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache TC_MISTRIAL = new extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache(extensions.ab.contact.typekey.LegalCaseStatus.TYPE, "mistrial");
    public final static extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache TC_NOT_GUILTY = new extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache(extensions.ab.contact.typekey.LegalCaseStatus.TYPE, "not_guilty");
    public final static extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache TC_SETTLED = new extensions.ab.contact.typekey.LegalCaseStatus.LegalCaseStatusCache(extensions.ab.contact.typekey.LegalCaseStatus.TYPE, "settled");

    public LegalCaseStatus(ITypeList type, String code) {
        super(type, code);
    }

    public static LegalCaseStatus getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<LegalCaseStatus> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class LegalCaseStatusCache
        extends TypeKeyCache
    {


        public LegalCaseStatusCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public LegalCaseStatus get() {
            return ((LegalCaseStatus) super.getKey());
        }

    }

}
