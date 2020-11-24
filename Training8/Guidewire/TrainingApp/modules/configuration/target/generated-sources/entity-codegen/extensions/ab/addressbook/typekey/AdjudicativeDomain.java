
package extensions.ab.addressbook.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class AdjudicativeDomain
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<AdjudicativeDomain> TYPE = new TypeListIntrinsicTypeCache<AdjudicativeDomain>("AdjudicativeDomain");
    public final static extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache TC_APPEALS = new extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache(extensions.ab.addressbook.typekey.AdjudicativeDomain.TYPE, "Appeals");
    public final static extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache TC_COUNTY = new extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache(extensions.ab.addressbook.typekey.AdjudicativeDomain.TYPE, "County");
    public final static extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache TC_DISPUTES = new extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache(extensions.ab.addressbook.typekey.AdjudicativeDomain.TYPE, "Disputes");
    public final static extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache TC_FEDERAL = new extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache(extensions.ab.addressbook.typekey.AdjudicativeDomain.TYPE, "Federal");
    public final static extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache TC_MUNICIPAL = new extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache(extensions.ab.addressbook.typekey.AdjudicativeDomain.TYPE, "Municipal");
    public final static extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache TC_SUPREME = new extensions.ab.addressbook.typekey.AdjudicativeDomain.AdjudicativeDomainCache(extensions.ab.addressbook.typekey.AdjudicativeDomain.TYPE, "Supreme");

    public AdjudicativeDomain(ITypeList type, String code) {
        super(type, code);
    }

    public static AdjudicativeDomain getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<AdjudicativeDomain> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class AdjudicativeDomainCache
        extends TypeKeyCache
    {


        public AdjudicativeDomainCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public AdjudicativeDomain get() {
            return ((AdjudicativeDomain) super.getKey());
        }

    }

}
