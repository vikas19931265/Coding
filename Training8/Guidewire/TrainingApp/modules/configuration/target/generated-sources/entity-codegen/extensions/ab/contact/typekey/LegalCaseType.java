
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class LegalCaseType
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<LegalCaseType> TYPE = new TypeListIntrinsicTypeCache<LegalCaseType>("LegalCaseType");
    public final static extensions.ab.contact.typekey.LegalCaseType.LegalCaseTypeCache TC_FRAUD = new extensions.ab.contact.typekey.LegalCaseType.LegalCaseTypeCache(extensions.ab.contact.typekey.LegalCaseType.TYPE, "fraud");
    public final static extensions.ab.contact.typekey.LegalCaseType.LegalCaseTypeCache TC_MALPRACTICE = new extensions.ab.contact.typekey.LegalCaseType.LegalCaseTypeCache(extensions.ab.contact.typekey.LegalCaseType.TYPE, "malpractice");
    public final static extensions.ab.contact.typekey.LegalCaseType.LegalCaseTypeCache TC_NEGLIGENCE = new extensions.ab.contact.typekey.LegalCaseType.LegalCaseTypeCache(extensions.ab.contact.typekey.LegalCaseType.TYPE, "negligence");
    public final static extensions.ab.contact.typekey.LegalCaseType.LegalCaseTypeCache TC_WRONGFUL_DEATH = new extensions.ab.contact.typekey.LegalCaseType.LegalCaseTypeCache(extensions.ab.contact.typekey.LegalCaseType.TYPE, "wrongful_death");

    public LegalCaseType(ITypeList type, String code) {
        super(type, code);
    }

    public static LegalCaseType getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<LegalCaseType> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class LegalCaseTypeCache
        extends TypeKeyCache
    {


        public LegalCaseTypeCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public LegalCaseType get() {
            return ((LegalCaseType) super.getKey());
        }

    }

}
