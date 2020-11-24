package external.gw.api.graph;

/**
 * Super-interface for any graph that has basic readable properties and
query methods.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ReadableGraph <T>
{
  /**
   * Returns a set of all edges in the graph.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Edges")
  public java.util.Set getEdges();

  /**
   * Returns a set of all nodes in the graph. AKA vertexes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Nodes")
  public java.util.Set getNodes();


  /**
   * Returns a set of all edges going into the given
node.
   *
   * @return The incoming edges
   * @param node The target node
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getIncomingEdges")
  public java.util.Set getIncomingEdges(T node);



  /**
   * Returns a set of all edges going out of the
given node.
   *
   * @return The outgoing edges
   * @param node The source node
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOutgoingEdges")
  public java.util.Set getOutgoingEdges(T node);

}
