package external.gw.xml.xsd.info;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface NestedList <E> extends external.gw.lang.reflect.gs.IGosuObject
{

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getItem")
  public java.lang.Object getItem(int param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "listIterator")
  public java.util.ListIterator listIterator(int param);



  /**
   * null
   *
   * @param param Object
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setItem")
  public void setItem(java.lang.Object param, int param1);



  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setType")
  public void setType(gw.pl.external.Type param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "size")
  public int size();

}
