package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IJavaMethodDescriptor extends java.io.Serializable
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HiddenViaFeatureDescriptor")
  public boolean isHiddenViaFeatureDescriptor();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Method")
  public external.gw.lang.reflect.java.IJavaClassMethod getMethod();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();


  /**
   * null
   *
   * @param param IScriptabilityModifier
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isVisibleViaFeatureDescriptor")
  public boolean isVisibleViaFeatureDescriptor(external.gw.lang.reflect.IScriptabilityModifier param);

}
