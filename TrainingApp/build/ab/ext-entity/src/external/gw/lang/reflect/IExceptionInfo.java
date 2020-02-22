package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IExceptionInfo extends external.gw.lang.reflect.IFeatureInfo
{
  /**
   * Returns the intrinsic type this exception represents
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExceptionType")
  public gw.pl.external.Type getExceptionType();
}
