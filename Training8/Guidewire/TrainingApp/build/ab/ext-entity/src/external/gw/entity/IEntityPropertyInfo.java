package external.gw.entity;

/**
 * Marker interface for properties defined in the datamodel.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IEntityPropertyInfo extends external.gw.entity.IQueryablePropertyInfo
{
  /**
   * Gets the type of this property's owner, which must be an entity type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OwnersType")
  public gw.pl.external.Type getOwnersType();
}
