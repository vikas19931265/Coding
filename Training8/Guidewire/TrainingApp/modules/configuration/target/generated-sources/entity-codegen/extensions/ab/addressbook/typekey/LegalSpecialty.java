
package extensions.ab.addressbook.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class LegalSpecialty
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<LegalSpecialty> TYPE = new TypeListIntrinsicTypeCache<LegalSpecialty>("LegalSpecialty");
    public final static extensions.ab.addressbook.typekey.LegalSpecialty.LegalSpecialtyCache TC_GENERALLIABILITY = new extensions.ab.addressbook.typekey.LegalSpecialty.LegalSpecialtyCache(extensions.ab.addressbook.typekey.LegalSpecialty.TYPE, "generalliability");
    public final static extensions.ab.addressbook.typekey.LegalSpecialty.LegalSpecialtyCache TC_MOTORVEHLIABILITY = new extensions.ab.addressbook.typekey.LegalSpecialty.LegalSpecialtyCache(extensions.ab.addressbook.typekey.LegalSpecialty.TYPE, "motorvehliability");
    public final static extensions.ab.addressbook.typekey.LegalSpecialty.LegalSpecialtyCache TC_PERSONALINJURY = new extensions.ab.addressbook.typekey.LegalSpecialty.LegalSpecialtyCache(extensions.ab.addressbook.typekey.LegalSpecialty.TYPE, "personalinjury");
    public final static extensions.ab.addressbook.typekey.LegalSpecialty.LegalSpecialtyCache TC_WORKERSCOMP = new extensions.ab.addressbook.typekey.LegalSpecialty.LegalSpecialtyCache(extensions.ab.addressbook.typekey.LegalSpecialty.TYPE, "workerscomp");

    public LegalSpecialty(ITypeList type, String code) {
        super(type, code);
    }

    public static LegalSpecialty getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<LegalSpecialty> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class LegalSpecialtyCache
        extends TypeKeyCache
    {


        public LegalSpecialtyCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public LegalSpecialty get() {
            return ((LegalSpecialty) super.getKey());
        }

    }

}
