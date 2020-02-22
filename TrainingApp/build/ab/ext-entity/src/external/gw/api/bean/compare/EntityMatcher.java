package external.gw.api.bean.compare;

/**
 * Interface for matching two different entity instances to determine if they logically represent the same
entity. Semantics are identical to &lt;code&gt;external.gw.api.diff.BeanMatcher#doBeansMatch(gw.pl.external.entity.KeyableEntity,
gw.pl.external.entity.KeyableEntity) BeanMatcher&lt;/code&gt;.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EntityMatcher <T extends gw.pl.external.entity.KeyableEntity>
{

  /**
   * Determine if two beans are really the same "thing" -- i.e. they represent the same
logical entity. For example, a <code>com.guidewire.ab.external.entity.Person</code> might be considered to match another <code>com.guidewire.ab.external.entity.Person</code>
if they have the same <code>TaxID</code>.
   *
   * @return True if the two entities are logically the same entity
   * @param source The source entity
   * @param compare The entity against which the source is compared
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "doEntitiesMatch")
  public boolean doEntitiesMatch(T source, T compare);



  /**
   * To assist with the case where there are multiple matches for an entity, this method
returns a {@link Comparator} to determine the closest match.
   *
   * @return The comparator where lower sort order indicates higher priority
   * @param toBeMatched The bean that is being matched; all other beans passed to the comparator are
                   assumed to match this bean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMatchPrioritizer")
  public java.util.Comparator getMatchPrioritizer(T toBeMatched);

}
