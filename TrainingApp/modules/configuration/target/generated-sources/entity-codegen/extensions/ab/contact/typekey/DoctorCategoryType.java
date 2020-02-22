
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class DoctorCategoryType
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<DoctorCategoryType> TYPE = new TypeListIntrinsicTypeCache<DoctorCategoryType>("DoctorCategoryType");
    public final static extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache TC_GENERALCARE = new extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache(extensions.ab.contact.typekey.DoctorCategoryType.TYPE, "GeneralCare");
    public final static extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache TC_IMMEDIATECARE = new extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache(extensions.ab.contact.typekey.DoctorCategoryType.TYPE, "ImmediateCare");
    public final static extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache TC_LONGTERMCARE = new extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache(extensions.ab.contact.typekey.DoctorCategoryType.TYPE, "LongTermCare");
    public final static extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache TC_SURGERY = new extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache(extensions.ab.contact.typekey.DoctorCategoryType.TYPE, "Surgery");
    public final static extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache TC_UNSPECIFIED = new extensions.ab.contact.typekey.DoctorCategoryType.DoctorCategoryTypeCache(extensions.ab.contact.typekey.DoctorCategoryType.TYPE, "Unspecified");

    public DoctorCategoryType(ITypeList type, String code) {
        super(type, code);
    }

    public static DoctorCategoryType getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<DoctorCategoryType> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class DoctorCategoryTypeCache
        extends TypeKeyCache
    {


        public DoctorCategoryTypeCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public DoctorCategoryType get() {
            return ((DoctorCategoryType) super.getKey());
        }

    }

}
