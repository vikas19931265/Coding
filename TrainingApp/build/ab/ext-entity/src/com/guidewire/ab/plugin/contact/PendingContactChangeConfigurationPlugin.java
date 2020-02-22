package com.guidewire.ab.plugin.contact;

/**
 * Internal plugin interface for pending change UI.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PendingContactChangeConfigurationPlugin extends gw.plugin.IPlugin
{
  /**
   * Returns a map of diff display types by entity type. Out of the box implementation returns a KeyableBeanDiffDisplay
for all entity types. The keys in the map should all be entity types (e.g. Address, Policy etc.) The values should
be Gosu classes which implement the DiffDisplay interface.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DiffDisplayTypes")
  public java.util.Map getDiffDisplayTypes();

  /**
   * Configuration for converting the entity graph into a tree structure to display in the UI
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DisplayTree")
  public external.gw.api.graph.Tree getDisplayTree();

  /**
   * Set of properties in the entity graph to ignore when determining if the policies under comparison
actually have differences.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityPropertiesToIgnoreForComparison")
  public java.util.Set getEntityPropertiesToIgnoreForComparison();

  /**
   * Returns a map of matcher types by entity type. Out of the box implementation matches only on LinkID. The keys
in the map should all be entity types (e.g. Address, ABContact etc.) The values should be Gosu classes which
implement the EntityMatcher interface.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MatcherTypes")
  public java.util.Map getMatcherTypes();
}
