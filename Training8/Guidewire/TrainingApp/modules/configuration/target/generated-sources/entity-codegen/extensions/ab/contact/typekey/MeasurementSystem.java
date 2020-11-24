
package extensions.ab.contact.typekey;

import java.util.List;
import com.guidewire.commons.metadata.types.TypeKeyCache;
import com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache;
import com.guidewire.commons.typelist.TypeKeyImpl;
import gw.entity.ITypeList;

public final class MeasurementSystem
    extends TypeKeyImpl
{

    public final static TypeListIntrinsicTypeCache<MeasurementSystem> TYPE = new TypeListIntrinsicTypeCache<MeasurementSystem>("MeasurementSystem");
    public final static extensions.ab.contact.typekey.MeasurementSystem.MeasurementSystemCache TC_METRIC = new extensions.ab.contact.typekey.MeasurementSystem.MeasurementSystemCache(MeasurementSystem.TYPE, "metric");
    public final static extensions.ab.contact.typekey.MeasurementSystem.MeasurementSystemCache TC_US_CUSTOMARY = new extensions.ab.contact.typekey.MeasurementSystem.MeasurementSystemCache(MeasurementSystem.TYPE, "us_customary");

    public MeasurementSystem(ITypeList type, String code) {
        super(type, code);
    }

    public static MeasurementSystem getTypeKey(String code) {
        return TYPE.get().getTypeKey(code);
    }

    public static List<MeasurementSystem> getAllTypeKeys() {
        return TYPE.get().getTypeKeys(true);
    }

    @Override
    protected Object readResolve() {
        return getTypeKey(getCode());
    }

    public static class MeasurementSystemCache
        extends TypeKeyCache
    {


        public MeasurementSystemCache(TypeListIntrinsicTypeCache cache, String code) {
            super(cache, code);
        }

        public MeasurementSystem get() {
            return ((MeasurementSystem) super.getKey());
        }

    }

}
