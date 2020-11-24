package external.gw.api.graph;

/**
 * Represents a tree as a specialized form of a graph.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Tree <T>
{


  /**
   * Returns a collection of all leaf nodes in the tree.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Leaves")
  public java.util.Collection getLeaves();


  /**
   * Get the root node.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Root")
  public T getRoot();

  /**
   * Adds a parent-child relationship to the tree
   *
   * @param parent The parent node
   * @param child The child node (to be added)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addChild")
  public void addChild(T parent, T child);

  /**
   * Adds a parent-child relationship to the tree with an attribute
or label.
   *
   * @param parent The parent node
   * @param child The child node (to be added)
   * @param attribute The attribute/label of the edge
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addChild")
  public void addChild(T parent, T child, java.lang.Object attribute);

  /**
   * Returns the children of the given parent node.
   *
   * @return The (potentially empty) collection of children
   * @param parent The parent node
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildrenOf")
  public java.util.Collection getChildrenOf(T parent);

  /**
   * null
   *
   * @param param T
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getParentOf")
  public T getParentOf(T param);

  /**
   * Returns true if the tree has this node.
   *
   * @return True if the tree contains the node
   * @param node The node to test for membership
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasNode")
  public boolean hasNode(T node);

  /**
   * Returns the tree as a graph instance.
   *
   * @return The graph
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toGraph")
  public external.gw.api.graph.Graph toGraph();


  /**
   * Utility class for initializing an instance of external.gw.api.graph.Tree
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param T

     */
    public static <T> Tree<T> newInstance(T param)
    {
      return (Tree) gw.pl.external.Invoker.getInstance().construct(external.gw.api.graph.Tree.class, new Class[]{ java.lang.Object.class} , new Object[]{ param});
    }

  }
}
