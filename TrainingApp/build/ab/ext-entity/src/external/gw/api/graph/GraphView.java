package external.gw.api.graph;

/**
 * A <code>GraphView</code> is a read-only view on a <code>Graph</code>. Implementations
will generally be optimized for multiple read operations (i.e., some "startup
cost" but with faster operations).
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GraphView <T> extends external.gw.api.graph.ReadableGraph<T>
{
  /**
   * Returns all graph roots (nodes with no incoming edges).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Roots")
  public java.lang.Iterable getRoots();
}
