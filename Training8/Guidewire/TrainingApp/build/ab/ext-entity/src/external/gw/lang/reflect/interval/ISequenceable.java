package external.gw.lang.reflect.interval;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ISequenceable <E extends external.gw.lang.reflect.interval.ISequenceable, S, U>
{

  /**
   * null
   *
   * @param param S
   * @param param1 U
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "nextInSequence")
  public E nextInSequence(S param, U param1);



  /**
   * null
   *
   * @param param S
   * @param param1 U
   * @param param2 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "nextNthInSequence")
  public E nextNthInSequence(S param, U param1, int param2);



  /**
   * null
   *
   * @param param S
   * @param param1 U
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "previousInSequence")
  public E previousInSequence(S param, U param1);



  /**
   * null
   *
   * @param param S
   * @param param1 U
   * @param param2 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "previousNthInSequence")
  public E previousNthInSequence(S param, U param1, int param2);

}
