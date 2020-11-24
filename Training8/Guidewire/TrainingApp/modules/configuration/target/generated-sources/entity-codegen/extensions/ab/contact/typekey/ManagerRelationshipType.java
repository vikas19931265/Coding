
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class ManagerRelationshipType
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<ManagerRelationshipType> TYPE = new TypeListIntrinsicTypeCache<ManagerRelationshipType>("ManagerRelationshipType");
    public final static extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache TC_ADMIN_ASSIST = new extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache(extensions.ab.contact.typekey.ManagerRelationshipType.TYPE, "admin_assist");
    public final static extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache TC_CLAIMS_MANAGER = new extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache(extensions.ab.contact.typekey.ManagerRelationshipType.TYPE, "claims_manager");
    public final static extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache TC_OTHER = new extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache(extensions.ab.contact.typekey.ManagerRelationshipType.TYPE, "other");
    public final static extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache TC_SELF = new extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache(extensions.ab.contact.typekey.ManagerRelationshipType.TYPE, "self");
    public final static extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache TC_UNKNOWN = new extensions.ab.contact.typekey.ManagerRelationshipType.ManagerRelationshipTypeCache(extensions.ab.contact.typekey.ManagerRelationshipType.TYPE, "unknown");

    public ManagerRelationshipType(ITypeList type, String code) {
        super(type, code);
    }

    public static ManagerRelationshipType getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<ManagerRelationshipType> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class ManagerRelationshipTypeCache
        extends TypeKeyCache
    {


        public ManagerRelationshipTypeCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public ManagerRelationshipType get() {
            return ((ManagerRelationshipType) super.getKey());
        }

    }

}
