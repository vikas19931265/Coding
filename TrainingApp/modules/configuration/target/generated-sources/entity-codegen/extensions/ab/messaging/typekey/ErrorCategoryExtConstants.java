
package extensions.ab.messaging.typekey;

import gw.pl.messaging.typekey.ErrorCategory;
import gw.pl.messaging.typekey.ErrorCategory.ErrorCategoryCache;

public final class ErrorCategoryExtConstants {

    public final static ErrorCategoryCache TC_DATABASE_CONTENTION = new ErrorCategoryCache(ErrorCategory.TYPE, "database_contention");
    public final static ErrorCategoryCache TC_NO_CONNECTION = new ErrorCategoryCache(ErrorCategory.TYPE, "no_connection");
    public final static ErrorCategoryCache TC_USER_AUTHENTICATION = new ErrorCategoryCache(ErrorCategory.TYPE, "user_authentication");

}
