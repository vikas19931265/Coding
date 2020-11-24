package external.gw.api.assignment;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DynamicGroupAssignmentStrategy extends external.gw.api.assignment.DynamicAssignmentStrategy
{

  /**
   * null
   *
   * @param param Assignable
   * @param param1 Set
   * @param param2 Set
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findGroupToAssign")
  public com.guidewire.ab.external.entity.Group findGroupToAssign(com.guidewire.ab.external.entity.Assignable param, java.util.Set param1, java.util.Set param2);



  /**
   * null
   *
   * @param param Assignable
   * @param param1 Group
   * @param param2 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCandidateGroups")
  public java.util.Set getCandidateGroups(com.guidewire.ab.external.entity.Assignable param, com.guidewire.ab.external.entity.Group param1, boolean param2);



  /**
   * null
   *
   * @param param Assignable
   * @param param1 Set
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getLocksForAssignable")
  public java.util.Set getLocksForAssignable(com.guidewire.ab.external.entity.Assignable param, java.util.Set param1);

}
