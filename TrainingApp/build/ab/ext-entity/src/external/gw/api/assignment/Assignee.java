package external.gw.api.assignment;

/**
 * Something to which an assignable entity can be assigned. Often just a user/group pair but could
also be something more abstract like "automatic assignment" or "assign to previous owner".
<p>
An Assignee knows how to assign an assignable bean and should also implements the
toString() method which will be used to display it to the user
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Assignee
{

  /**
   * Assign the given assignable entity according to this destination.
   *
   * @param assignableBean the entity to be assigned
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignToThis")
  public void assignToThis(com.guidewire.ab.external.entity.Assignable assignableBean) throws java.lang.RuntimeException;

}
