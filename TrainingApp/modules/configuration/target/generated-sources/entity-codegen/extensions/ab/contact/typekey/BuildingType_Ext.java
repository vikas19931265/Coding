
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class BuildingType_Ext
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<BuildingType_Ext> TYPE = new TypeListIntrinsicTypeCache<BuildingType_Ext>("BuildingType_Ext");
    public final static extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache TC_HOTEL = new extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache(BuildingType_Ext.TYPE, "hotel");
    public final static extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache TC_INDUSTRIAL = new extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache(BuildingType_Ext.TYPE, "industrial");
    public final static extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache TC_OFFICE = new extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache(BuildingType_Ext.TYPE, "office");
    public final static extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache TC_OTHER = new extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache(BuildingType_Ext.TYPE, "other");
    public final static extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache TC_RESIDENTIAL_MUTLI = new extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache(BuildingType_Ext.TYPE, "residential_mutli");
    public final static extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache TC_RESIDENTIAL_SINGLE = new extensions.ab.contact.typekey.BuildingType_Ext.BuildingType_ExtCache(BuildingType_Ext.TYPE, "residential_single");

    public BuildingType_Ext(ITypeList type, String code) {
        super(type, code);
    }

    public static BuildingType_Ext getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<BuildingType_Ext> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class BuildingType_ExtCache
        extends TypeKeyCache
    {


        public BuildingType_ExtCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public BuildingType_Ext get() {
            return ((BuildingType_Ext) super.getKey());
        }

    }

}
