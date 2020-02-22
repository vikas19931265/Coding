
package extensions.ab.validation.typekey;

import gw.pl.validation.typekey.ValidationLevel;
import gw.pl.validation.typekey.ValidationLevel.ValidationLevelCache;

public final class ValidationLevelExtConstants {

    public final static ValidationLevelCache TC_EXTERNAL = new ValidationLevelCache(ValidationLevel.TYPE, "external");
    public final static ValidationLevelCache TC_LOADSAVE = new ValidationLevelCache(ValidationLevel.TYPE, "loadsave");

}
