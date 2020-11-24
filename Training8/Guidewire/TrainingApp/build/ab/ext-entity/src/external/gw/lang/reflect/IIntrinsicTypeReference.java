package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IIntrinsicTypeReference
{
  /**
   * The type of this feature e.g., for a property this is the property's type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FeatureType")
  public gw.pl.external.Type getFeatureType();

  /**
   * 
   * @deprecated Use the 'FeatureType' property instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public gw.pl.external.Type getType();
}
