
package extensions.ab.custom.typekey;

import gw.pl.custom.typekey.DateFieldsToSearchType;
import gw.pl.custom.typekey.DateFieldsToSearchType.DateFieldsToSearchTypeCache;

public final class DateFieldsToSearchTypeExtConstants {

    public final static DateFieldsToSearchTypeCache TC_EFFECTIVEDATE = new DateFieldsToSearchTypeCache(DateFieldsToSearchType.TYPE, "EffectiveDate");
    public final static DateFieldsToSearchTypeCache TC_EXPIRATIONDATE = new DateFieldsToSearchTypeCache(DateFieldsToSearchType.TYPE, "ExpirationDate");
    public final static DateFieldsToSearchTypeCache TC_SUBMISSIONDATE = new DateFieldsToSearchTypeCache(DateFieldsToSearchType.TYPE, "SubmissionDate");

}
