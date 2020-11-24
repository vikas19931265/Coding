package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IEnhancementIndex
{

  /**
   * null
   *
   * @param param IType
   * @param param1 Collection<IMethodInfo>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addEnhancementMethods")
  public void addEnhancementMethods(gw.pl.external.Type param, java.util.Collection param1);



  /**
   * null
   *
   * @param param IType
   * @param param1 Map<CharSequence, IPropertyInfo>
   * @param param2 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addEnhancementProperties")
  public void addEnhancementProperties(gw.pl.external.Type param, java.util.Map param1, boolean param2);



  /**
   * null
   *
   * @param param IType
   * @param param1 IGosuEnhancement
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addEntry")
  public void addEntry(gw.pl.external.Type param, gw.pl.external.Type param1);



  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEnhancementsForType")
  public java.util.List getEnhancementsForType(gw.pl.external.Type param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOrphanedEnhancement")
  public java.lang.String getOrphanedEnhancement(java.lang.String param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "maybeLoadEnhancementIndex")
  public void maybeLoadEnhancementIndex();



  /**
   * null
   *
   * @param param RefreshRequest
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedTypes")
  public void refreshedTypes(external.gw.lang.reflect.RefreshRequest param);



  /**
   * null
   *
   * @param param IGosuEnhancement
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeEntry")
  public void removeEntry(gw.pl.external.Type param);

}
