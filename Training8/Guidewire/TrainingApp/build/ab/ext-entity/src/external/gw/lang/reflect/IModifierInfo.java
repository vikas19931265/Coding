package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IModifierInfo
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Annotations")
  public java.util.List getAnnotations();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Modifiers")
  public int getModifiers();


  /**
   * This method exists for historical reasons only, and will be removed in future
releases.
   *
   * @param modifierInfo 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "syncAnnotations")
  public void syncAnnotations(external.gw.lang.reflect.IModifierInfo modifierInfo);

}
