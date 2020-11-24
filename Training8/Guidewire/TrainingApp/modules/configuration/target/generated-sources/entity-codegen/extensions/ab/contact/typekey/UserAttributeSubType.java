
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class UserAttributeSubType
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<UserAttributeSubType> TYPE = new TypeListIntrinsicTypeCache<UserAttributeSubType>("UserAttributeSubType");
    public final static extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache TC_ACME = new extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache(UserAttributeSubType.TYPE, "Acme");
    public final static extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache TC_FRENCH = new extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache(UserAttributeSubType.TYPE, "French");
    public final static extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache TC_GERMAN = new extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache(UserAttributeSubType.TYPE, "German");
    public final static extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache TC_MOLD = new extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache(UserAttributeSubType.TYPE, "Mold");
    public final static extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache TC_PRODLIAB = new extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache(UserAttributeSubType.TYPE, "ProdLiab");
    public final static extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache TC_SPANISH = new extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache(UserAttributeSubType.TYPE, "Spanish");
    public final static extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache TC_TIPTOP = new extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache(UserAttributeSubType.TYPE, "TipTop");
    public final static extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache TC_ENV = new extensions.ab.contact.typekey.UserAttributeSubType.UserAttributeSubTypeCache(UserAttributeSubType.TYPE, "env");

    public UserAttributeSubType(ITypeList type, String code) {
        super(type, code);
    }

    public static UserAttributeSubType getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<UserAttributeSubType> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class UserAttributeSubTypeCache
        extends TypeKeyCache
    {


        public UserAttributeSubTypeCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public UserAttributeSubType get() {
            return ((UserAttributeSubType) super.getKey());
        }

    }

}
