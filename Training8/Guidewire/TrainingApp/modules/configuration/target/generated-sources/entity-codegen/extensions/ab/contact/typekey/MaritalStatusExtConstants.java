
package extensions.ab.contact.typekey;

import gw.pl.contact.typekey.MaritalStatus;
import gw.pl.contact.typekey.MaritalStatus.MaritalStatusCache;

public final class MaritalStatusExtConstants {

    public final static MaritalStatusCache TC_COMMON = new MaritalStatusCache(MaritalStatus.TYPE, "common");
    public final static MaritalStatusCache TC_DIVORCED = new MaritalStatusCache(MaritalStatus.TYPE, "divorced");
    public final static MaritalStatusCache TC_MARRIED = new MaritalStatusCache(MaritalStatus.TYPE, "married");
    public final static MaritalStatusCache TC_SEPARATED = new MaritalStatusCache(MaritalStatus.TYPE, "separated");
    public final static MaritalStatusCache TC_SINGLE = new MaritalStatusCache(MaritalStatus.TYPE, "single");
    public final static MaritalStatusCache TC_UNKNOWN = new MaritalStatusCache(MaritalStatus.TYPE, "unknown");
    public final static MaritalStatusCache TC_WIDOWED = new MaritalStatusCache(MaritalStatus.TYPE, "widowed");

}
