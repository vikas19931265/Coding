package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGosuObject
{
  /**
   * 
   * @deprecated Use the 'typeof' operator in Gosu instead. 'obj.IntrinsicType' becomes 'typeof obj'.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IntrinsicType")
  public gw.pl.external.Type getIntrinsicType();
}
