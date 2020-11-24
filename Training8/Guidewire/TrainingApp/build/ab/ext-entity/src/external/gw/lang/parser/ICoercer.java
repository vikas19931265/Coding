package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ICoercer
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExplicitCoercion")
  public boolean isExplicitCoercion();


  /**
   * null
   *
   * @param param IType
   * @param param1 Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "coerceValue")
  public java.lang.Object coerceValue(gw.pl.external.Type param, java.lang.Object param1);



  /**
   * 
   *
   * @return a value between 0 and MAX_PRIORITY, inclusive that indicates
the priority of this coercer when resolving overloaded methods.  Typically
a coercer should return 0, but coercers that have a high affinity between the
target and coerced type, such as primitives, can have higher priorities.
   * @param to 
   * @param from 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPriority")
  public int getPriority(gw.pl.external.Type to, gw.pl.external.Type from);



  /**
   * 
   *
   * @return true if this coercer knows how to handle the null value.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesNull")
  public boolean handlesNull();


  /**
   * Utility class for accessing static features for external.gw.lang.parser.ICoercer
   * <ul>
   * <li>Access static properties for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    /**
     * 
     * 
     */
    public static int getMAX_PRIORITY()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ICoercer.class, "MAX_PRIORITY");
    }

  }
}
