package external.gw.api.graph;

/**
 * A contiguous set of directed edges representing a "path" through the graph.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Path <T>
{


  /**
   * Returns a set of edges in the path.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Edges")
  public java.util.Set getEdges();


  /**
   * Returns the last edge in the path.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastEdge")
  public external.gw.api.graph.Edge getLastEdge();

  /**
   * Adds an edge to the path.
   *
   * @param edge The edge to add
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addEdge")
  public void addEdge(external.gw.api.graph.Edge edge);

  /**
   * Adds an edge to the <code>Path</code> from the "head" to
the given node.
   *
   * @param node The target node
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addNode")
  public void addNode(T node);

  /**
   * Makes a copy of the Path. Useful in graph traversal.
   *
   * @return The copy
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copy")
  public external.gw.api.graph.Path copy();


  /**
   * Utility class for initializing an instance of external.gw.api.graph.Path
   */
  public static class CONSTRUCT
  {

    /**
     * Create a <code>Path</code> with a starting edge.
     *
     * @param startEdge The first edge in the path

     */
    public static <T> Path<T> newInstance(external.gw.api.graph.Edge startEdge)
    {
      return (Path) gw.pl.external.Invoker.getInstance().construct(external.gw.api.graph.Path.class, new Class[]{ external.gw.api.graph.Edge.class} , new Object[]{ startEdge});
    }

    /**
     * null
     *
     * @param param T
     * @param param1 T

     */
    public static <T> Path<T> newInstance(T param, T param1)
    {
      return (Path) gw.pl.external.Invoker.getInstance().construct(external.gw.api.graph.Path.class, new Class[]{ java.lang.Object.class, java.lang.Object.class} , new Object[]{ param, param1});
    }

  }
}
