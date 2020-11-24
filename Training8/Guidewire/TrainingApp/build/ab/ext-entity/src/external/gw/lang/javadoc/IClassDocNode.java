package external.gw.lang.javadoc;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IClassDocNode
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Constructors")
  public java.util.List getConstructors();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Deprecated")
  public java.lang.String getDeprecated();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Deprecated")
  public void setDeprecated(java.lang.String value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Methods")
  public java.util.List getMethods();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Vars")
  public java.util.List getVars();


  /**
   * null
   *
   * @param param IConstructorNode
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addConstructor")
  public void addConstructor(external.gw.lang.javadoc.IConstructorNode param);



  /**
   * null
   *
   * @param param IMethodNode
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addMethod")
  public void addMethod(external.gw.lang.javadoc.IMethodNode param);



  /**
   * null
   *
   * @param param IVarNode
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addVar")
  public void addVar(external.gw.lang.javadoc.IVarNode param);



  /**
   * null
   *
   * @param param IJavaClassConstructor
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getConstructor")
  public external.gw.lang.javadoc.IConstructorNode getConstructor(external.gw.lang.reflect.java.IJavaClassConstructor param);



  /**
   * null
   *
   * @param param IJavaMethodDescriptor
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMethod")
  public external.gw.lang.javadoc.IMethodNode getMethod(external.gw.lang.reflect.java.IJavaMethodDescriptor param);



  /**
   * null
   *
   * @param param String
   * @param param1 Type[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMethod")
  public external.gw.lang.javadoc.IMethodNode getMethod(java.lang.String param, java.lang.reflect.Type[] param1);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getVar")
  public external.gw.lang.javadoc.IVarNode getVar(java.lang.String param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isDeprecated")
  public boolean isDeprecated();

}
