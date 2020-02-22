package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IJavaBackedTypeData extends external.gw.lang.reflect.IHasJavaClass
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BackingClassInfo")
  public external.gw.lang.reflect.java.IJavaClassInfo getBackingClassInfo();
}
