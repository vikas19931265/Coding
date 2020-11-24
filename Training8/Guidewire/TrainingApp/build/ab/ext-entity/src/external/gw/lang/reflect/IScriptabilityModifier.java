package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IScriptabilityModifier extends java.io.Serializable
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Qualifiers")
  public external.gw.lang.reflect.IScriptabilityModifier[] getQualifiers();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public external.gw.lang.reflect.IVisibilityModifierType getType();


  /**
   * null
   *
   * @param param IVisibilityModifierType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getModifierWithType")
  public external.gw.lang.reflect.IScriptabilityModifier getModifierWithType(external.gw.lang.reflect.IVisibilityModifierType param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasConstraintQualifiers")
  public boolean hasConstraintQualifiers();



  /**
   * null
   *
   * @param param IVisibilityModifierType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasModifierWithType")
  public boolean hasModifierWithType(external.gw.lang.reflect.IVisibilityModifierType param);



  /**
   * null
   *
   * @param param IScriptabilityModifier
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "satisfiesConstraint")
  public boolean satisfiesConstraint(external.gw.lang.reflect.IScriptabilityModifier param);

}
