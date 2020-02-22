package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IHasInnerClass
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InnerClasses")
  public java.util.List getInnerClasses();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadedInnerClasses")
  public java.util.List getLoadedInnerClasses();


  /**
   * returns the appropriate inner class
   *
   * @param strTypeName 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getInnerClass")
  public gw.pl.external.Type getInnerClass(java.lang.CharSequence strTypeName);

}
