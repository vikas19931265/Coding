package external.gw.lang.reflect.features;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IPropertyReference <R, T> extends external.gw.lang.reflect.features.IFeatureReference<R, T>
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PropertyInfo")
  public external.gw.lang.reflect.IPropertyInfo getPropertyInfo();
}
