package external.gw.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IQueryablePropertyInfo extends external.gw.entity.IQueryColumn, external.gw.lang.reflect.IPropertyInfo
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Queryable")
  public boolean isQueryable();
}
