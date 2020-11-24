package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDynamicFunctionSymbol extends external.gw.lang.parser.IDynamicSymbol
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArgTypes")
  public gw.pl.external.Type[] getArgTypes();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Args")
  public java.util.List getArgs();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BackingDfs")
  public external.gw.lang.parser.IDynamicFunctionSymbol getBackingDfs();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Constructor")
  public boolean isConstructor();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclFunctionStmt")
  public external.gw.lang.parser.statements.IFunctionStatement getDeclFunctionStmt();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaringTypeInfo")
  public external.gw.lang.reflect.ITypeInfo getDeclaringTypeInfo();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Initializer")
  public external.gw.lang.parser.statements.IMethodCallStatement getInitializer();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MethodOrConstructorInfo")
  public external.gw.lang.reflect.IAttributedFeatureInfo getMethodOrConstructorInfo();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MethodSignature")
  public java.lang.String getMethodSignature();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Override")
  public boolean isOverride();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReturnType")
  public gw.pl.external.Type getReturnType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Static")
  public boolean isStatic();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SuperDfs")
  public external.gw.lang.parser.IDynamicFunctionSymbol getSuperDfs();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValueDirectly")
  public java.lang.Object getValueDirectly();


  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createReducedSymbol")
  public external.gw.lang.parser.IReducedDynamicFunctionSymbol createReducedSymbol();



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMethodOrConstructorInfo")
  public external.gw.lang.reflect.IAttributedFeatureInfo getMethodOrConstructorInfo(boolean param);



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getParameterDisplay")
  public java.lang.String getParameterDisplay(boolean param);

}
