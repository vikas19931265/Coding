package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IHasParameterInfos extends external.gw.lang.reflect.IAttributedFeatureInfo
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parameters")
  public external.gw.lang.reflect.IParameterInfo[] getParameters();
}
