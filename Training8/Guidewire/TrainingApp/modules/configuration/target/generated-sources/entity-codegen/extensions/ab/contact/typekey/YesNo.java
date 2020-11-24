
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class YesNo
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<YesNo> TYPE = new TypeListIntrinsicTypeCache<YesNo>("YesNo");
    public final static extensions.ab.contact.typekey.YesNo.YesNoCache TC_NO = new extensions.ab.contact.typekey.YesNo.YesNoCache(extensions.ab.contact.typekey.YesNo.TYPE, "no");
    public final static extensions.ab.contact.typekey.YesNo.YesNoCache TC_UNKNOWN = new extensions.ab.contact.typekey.YesNo.YesNoCache(extensions.ab.contact.typekey.YesNo.TYPE, "unknown");
    public final static extensions.ab.contact.typekey.YesNo.YesNoCache TC_YES = new extensions.ab.contact.typekey.YesNo.YesNoCache(extensions.ab.contact.typekey.YesNo.TYPE, "yes");

    public YesNo(ITypeList type, String code) {
        super(type, code);
    }

    public static YesNo getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<YesNo> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class YesNoCache
        extends TypeKeyCache
    {


        public YesNoCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public YesNo get() {
            return ((YesNo) super.getKey());
        }

    }

}
