package external.gw.api.graph;

/**
 * Represents a directed edge in a graph, G=(V,E).
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Edge <T>
{


  /**
   * Returns the source of the edge.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Source")
  public T getSource();


  /**
   * Returns the target of the edge.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Target")
  public T getTarget();


  /**
   * Utility class for initializing an instance of external.gw.api.graph.Edge
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param T
     * @param param1 T

     */
    public static <T> Edge<T> newInstance(T param, T param1)
    {
      return (Edge) gw.pl.external.Invoker.getInstance().construct(external.gw.api.graph.Edge.class, new Class[]{ java.lang.Object.class, java.lang.Object.class} , new Object[]{ param, param1});
    }

  }
}
