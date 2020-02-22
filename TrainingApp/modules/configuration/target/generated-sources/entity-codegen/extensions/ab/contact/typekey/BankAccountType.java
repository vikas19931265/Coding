
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class BankAccountType
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<BankAccountType> TYPE = new TypeListIntrinsicTypeCache<BankAccountType>("BankAccountType");
    public final static extensions.ab.contact.typekey.BankAccountType.BankAccountTypeCache TC_CHECKING = new extensions.ab.contact.typekey.BankAccountType.BankAccountTypeCache(extensions.ab.contact.typekey.BankAccountType.TYPE, "checking");
    public final static extensions.ab.contact.typekey.BankAccountType.BankAccountTypeCache TC_OTHER = new extensions.ab.contact.typekey.BankAccountType.BankAccountTypeCache(extensions.ab.contact.typekey.BankAccountType.TYPE, "other");
    public final static extensions.ab.contact.typekey.BankAccountType.BankAccountTypeCache TC_SAVINGS = new extensions.ab.contact.typekey.BankAccountType.BankAccountTypeCache(extensions.ab.contact.typekey.BankAccountType.TYPE, "savings");

    public BankAccountType(ITypeList type, String code) {
        super(type, code);
    }

    public static BankAccountType getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<BankAccountType> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class BankAccountTypeCache
        extends TypeKeyCache
    {


        public BankAccountTypeCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public BankAccountType get() {
            return ((BankAccountType) super.getKey());
        }

    }

}
