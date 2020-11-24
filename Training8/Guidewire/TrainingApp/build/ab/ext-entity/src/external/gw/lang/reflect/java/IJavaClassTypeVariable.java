package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IJavaClassTypeVariable extends external.gw.lang.reflect.java.IJavaClassType
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Bounds")
  public external.gw.lang.reflect.java.IJavaClassType[] getBounds();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();
}
