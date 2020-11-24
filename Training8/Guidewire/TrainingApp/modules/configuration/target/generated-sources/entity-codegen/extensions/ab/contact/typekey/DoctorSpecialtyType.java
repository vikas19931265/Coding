
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class DoctorSpecialtyType
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<DoctorSpecialtyType> TYPE = new TypeListIntrinsicTypeCache<DoctorSpecialtyType>("DoctorSpecialtyType");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_CRITICALCAREMEDICINE = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "CriticalCareMedicine");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_DENTISTRY = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "Dentistry");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_EMERGENCYMEDICINE = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "EmergencyMedicine");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_FOOTSURGERY = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "FootSurgery");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_GENERALSURGERY = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "GeneralSurgery");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_HANDSURGERY = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "HandSurgery");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_HOSPITALIST = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "Hospitalist");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_INTERNALMEDICINE = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "InternalMedicine");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_NEUROLOGY = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "Neurology");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_ORTHOPAEDICS = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "Orthopaedics");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_PAINMANAGEMENT = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "PainManagement");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_PHYSICALREHABILITATION = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "PhysicalRehabilitation");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_PODIATRY = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "Podiatry");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_RECONSTRUCTIVESURGERY = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "ReconstructiveSurgery");
    public final static extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache TC_UNSPECIFIED = new extensions.ab.contact.typekey.DoctorSpecialtyType.DoctorSpecialtyTypeCache(extensions.ab.contact.typekey.DoctorSpecialtyType.TYPE, "Unspecified");

    public DoctorSpecialtyType(ITypeList type, String code) {
        super(type, code);
    }

    public static DoctorSpecialtyType getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<DoctorSpecialtyType> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class DoctorSpecialtyTypeCache
        extends TypeKeyCache
    {


        public DoctorSpecialtyTypeCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public DoctorSpecialtyType get() {
            return ((DoctorSpecialtyType) super.getKey());
        }

    }

}
