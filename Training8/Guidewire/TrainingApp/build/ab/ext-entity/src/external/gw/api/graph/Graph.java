package external.gw.api.graph;

/**
 * A mathematical graph-theory graph object G(V,E) which contains a set V of vertices and a set E of edges.
Each edge e=(v1,v2) in E connects vertex v1 to vertex v2. Here the graph vertex is referred to as
a <code>Node</code>.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Graph <T> extends external.gw.api.graph.ReadableGraph<T>
{

  /**
   * Adds an edge to the graph. Source and target nodes
will be added to the node set if not present.
   *
   * @return True if edge added
   * @param edge The edge to add
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addEdge")
  public boolean addEdge(external.gw.api.graph.Edge edge);



  /**
   * Adds an edge to the graph using the given source
and target nodes.
   *
   * @return True if edge wasn't already in the graph
   * @param source The source node
   * @param target The target node
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addEdge")
  public boolean addEdge(T source, T target);



  /**
   * Adds an <code>Edge</code> using the given source and target,
and having the given weight.
   *
   * @return True if edge wasn't already in the graph
   * @param source The source node
   * @param target The target node
   * @param weight The edge weight
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addEdge")
  public boolean addEdge(T source, T target, java.lang.Object weight);



  /**
   * Adds a node to the graph.
   *
   * @return True if graph did not already contain the node
   * @param node The node to add
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addNode")
  public boolean addNode(T node);



  /**
   * Returns a read-only view of the graph.
   *
   * @return The read-only view
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "asView")
  public external.gw.api.graph.GraphView asView();



  /**
   * Returns true if the graph contains the given path.
   *
   * @return True if graph contains path
   * @param path The path to check
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasPath")
  public boolean hasPath(external.gw.api.graph.Path path);



  /**
   * Merges the other graph into this one, i.e. adds
all the nodes and edges from the other graph.
   *
   * @param otherGraph The other graph
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "merge")
  public void merge(external.gw.api.graph.Graph otherGraph);



  /**
   * Removes the given edge from the graph.
   *
   * @return True is edge was removed (i.e., present in graph)
   * @param edge The edge to remove
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeEdge")
  public boolean removeEdge(external.gw.api.graph.Edge edge);



  /**
   * Removes a node from the graph. This operation will also
remove any edges where the given node is the target or source.
   *
   * @return True if node was removed (i.e. it was in the graph)
   * @param node The node to remove
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeNode")
  public boolean removeNode(T node);



  /**
   * Creates a (shallow) copy of the graph.
   *
   * @return The shallow graph copy
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "shallowCopy")
  public external.gw.api.graph.Graph shallowCopy();

}
