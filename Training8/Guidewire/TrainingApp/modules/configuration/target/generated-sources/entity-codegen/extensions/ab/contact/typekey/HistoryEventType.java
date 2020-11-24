
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class HistoryEventType
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<HistoryEventType> TYPE = new TypeListIntrinsicTypeCache<HistoryEventType>("HistoryEventType");
    public final static extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache TC_ASSIGNED = new extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache(extensions.ab.contact.typekey.HistoryEventType.TYPE, "assigned");
    public final static extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache TC_CREATED = new extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache(extensions.ab.contact.typekey.HistoryEventType.TYPE, "created");
    public final static extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache TC_FLAGGED = new extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache(extensions.ab.contact.typekey.HistoryEventType.TYPE, "flagged");
    public final static extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache TC_UNFLAGGED = new extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache(extensions.ab.contact.typekey.HistoryEventType.TYPE, "unflagged");
    public final static extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache TC_VIEWED = new extensions.ab.contact.typekey.HistoryEventType.HistoryEventTypeCache(extensions.ab.contact.typekey.HistoryEventType.TYPE, "viewed");

    public HistoryEventType(ITypeList type, String code) {
        super(type, code);
    }

    public static HistoryEventType getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<HistoryEventType> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class HistoryEventTypeCache
        extends TypeKeyCache
    {


        public HistoryEventTypeCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public HistoryEventType get() {
            return ((HistoryEventType) super.getKey());
        }

    }

}
