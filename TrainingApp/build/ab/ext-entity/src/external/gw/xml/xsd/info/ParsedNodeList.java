package external.gw.xml.xsd.info;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ParsedNodeList <E> extends external.gw.xml.xsd.info.NestedList<E>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IntrinsicType")
  public gw.pl.external.Type getIntrinsicType();

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addItem")
  public void addItem(java.lang.Object param);

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
   * @param param int
   * @param param1 E
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setItem")
  public void setItem(int param, E param1);

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


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.info.ParsedNodeList
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static <E> ParsedNodeList<E> newInstance()
    {
      return (ParsedNodeList) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.info.ParsedNodeList.class, new Class[]{ } , new Object[]{ });
    }

  }
}
