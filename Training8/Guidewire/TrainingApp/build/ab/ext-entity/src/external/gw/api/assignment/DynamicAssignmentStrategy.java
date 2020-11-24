package external.gw.api.assignment;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DynamicAssignmentStrategy
{

  /**
   * null
   *
   * @param param Assignable
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAssignmentToken")
  public java.lang.Object getAssignmentToken(com.guidewire.ab.external.entity.Assignable param);



  /**
   * null
   *
   * @param param Assignable
   * @param param1 Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "rollbackAssignment")
  public boolean rollbackAssignment(com.guidewire.ab.external.entity.Assignable param, java.lang.Object param1);

}
