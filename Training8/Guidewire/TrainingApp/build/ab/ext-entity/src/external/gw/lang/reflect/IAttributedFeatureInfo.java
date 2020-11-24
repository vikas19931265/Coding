package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IAttributedFeatureInfo extends external.gw.lang.reflect.IAnnotatedFeatureInfo
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Abstract")
  public boolean isAbstract();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Final")
  public boolean isFinal();

  /**
   * True if this feature is hidden. Hidden feature should not to be exposed to
earthlings.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Hidden")
  public boolean isHidden();

  /**
   * True if this feature is internal. Internal features are accessible from
within the type that owns them and from other types in the same namespace.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Internal")
  public boolean isInternal();

  /**
   * True if this feature is private. Private features are only accessible from
within the type that owns them.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Private")
  public boolean isPrivate();

  /**
   * True if this feature is protected. Protected features are accessible from
within the type that owns them and from derived containers.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Protected")
  public boolean isProtected();

  /**
   * True if this feature is public. Public features are not restricted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Public")
  public boolean isPublic();

  /**
   * True if this feature is exposed for scripting.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Scriptable")
  public boolean isScriptable();

  /**
   * True if this feature is static, meaning the feature is not specific to a
particular instance of the feature's containing type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Static")
  public boolean isStatic();


  /**
   * Determine if this feature is visible given a visibility constraint.<p>
<p/>
NOTE: implementers of this method are responsible for handling the null
case, taken to mean that there are not scriptability constraints.
   *
   * @param constraint 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isVisible")
  public boolean isVisible(external.gw.lang.reflect.IScriptabilityModifier constraint);

}
