package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IFeatureInfo
{
  /**
   * Get this feature's containing feature. May be null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Container")
  public external.gw.lang.reflect.IFeatureInfo getContainer();

  /**
   * A full description of this feature.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Gets the display name of this feature. There is no guarantee this display
name is localized.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DisplayName")
  public java.lang.String getDisplayName();

  /**
   * Gets the programmatic name or identifier of this feature. Note this name
should follow Java identifier naming conventions (alpha-num and
underscores, but can't start with a digit).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Get this feature's owner's type. If this feature has no owner, this is the
type of the feature itself. Typically, the only kind of feature w/o an
owner is an ITypeInfo, so properties, methods, params, etc. s/b considered
owned. Hence, ultimately an ITypeInfo's type will be the owner's type for
any given feature.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OwnersType")
  public gw.pl.external.Type getOwnersType();
}
