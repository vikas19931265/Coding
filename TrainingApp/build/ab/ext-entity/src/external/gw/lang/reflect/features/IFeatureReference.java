package external.gw.lang.reflect.features;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IFeatureReference <R, T>
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FeatureInfo")
  public external.gw.lang.reflect.IFeatureInfo getFeatureInfo();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RootType")
  public gw.pl.external.Type getRootType();
}
