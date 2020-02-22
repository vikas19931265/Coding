package external.gw.lang.javadoc;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface JavaHasParams
{

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDocsForParam")
  public external.gw.lang.javadoc.IDocRef getDocsForParam(int param);

}
