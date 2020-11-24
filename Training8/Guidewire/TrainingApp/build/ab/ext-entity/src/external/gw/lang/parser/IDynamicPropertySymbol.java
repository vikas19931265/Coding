package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDynamicPropertySymbol extends external.gw.lang.parser.IDynamicSymbol
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FullDescription")
  public java.lang.String getFullDescription();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GetterDfs")
  public external.gw.lang.parser.IDynamicFunctionSymbol getGetterDfs();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GetterDfs")
  public void setGetterDfs(external.gw.lang.parser.IDynamicFunctionSymbol value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public external.gw.lang.parser.IDynamicPropertySymbol getParent();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PropertyInfo")
  public external.gw.lang.reflect.IFeatureInfo getPropertyInfo();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Readable")
  public boolean isReadable();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SetterDfs")
  public external.gw.lang.parser.IDynamicFunctionSymbol getSetterDfs();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SetterDfs")
  public void setSetterDfs(external.gw.lang.parser.IDynamicFunctionSymbol value);

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VarIdentifier")
  public java.lang.String getVarIdentifier();


  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getFunction")
  public external.gw.lang.parser.IDynamicFunctionSymbol getFunction(java.lang.String param);



  /**
   * null
   *
   * @param param IGosuClass
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getParameterizedVersion")
  public external.gw.lang.parser.IDynamicPropertySymbol getParameterizedVersion(gw.pl.external.Type param);

}
