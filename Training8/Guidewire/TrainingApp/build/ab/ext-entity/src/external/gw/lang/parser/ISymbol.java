package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ISymbol extends external.gw.lang.parser.IHasType, external.gw.lang.parser.IReducedSymbol
{
  /**
   * The symbol's default value e.g., a default parameter value for a function.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultValueExpression")
  public external.gw.lang.parser.IExpression getDefaultValueExpression();

  /**
   * The symbol's default value e.g., a default parameter value for a function.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DefaultValueExpression")
  public void setDefaultValueExpression(external.gw.lang.parser.IExpression value);

  /**
   * Returns the Symbol's optional display name.  If a display name is not assigned,
returns the symbol's name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DisplayName")
  public java.lang.String getDisplayName();

  /**
   * Assigns an optional symbol table so that the symbol can get/set its value
dynamically e.g., via ThreadLocalSymbolTable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DynamicSymbolTable")
  public external.gw.lang.parser.ISymbolTable getDynamicSymbolTable();

  /**
   * Assigns an optional symbol table so that the symbol can get/set its value
dynamically e.g., via ThreadLocalSymbolTable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DynamicSymbolTable")
  public void setDynamicSymbolTable(external.gw.lang.parser.ISymbolTable value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Index")
  public int getIndex();

  /**
   * Creates a copy of this symbol without the value so that the empty symbol can be stored.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LightWeightReference")
  public external.gw.lang.parser.ISymbol getLightWeightReference();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Local")
  public boolean isLocal();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ModifierInfo")
  public external.gw.lang.reflect.IModifierInfo getModifierInfo();

  /**
   * Returns the Symbol's name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Returns the Symbol's type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public gw.pl.external.Type getType();

  /**
   * Returns the Symbol's type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(gw.pl.external.Type value);

  /**
   * Returns the value assigned to this Symbol.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Value")
  public java.lang.Object getValue();

  /**
   * Returns the value assigned to this Symbol.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Value")
  public void setValue(java.lang.Object value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValueBoxed")
  public boolean isValueBoxed();

  /**
   * Returns true if this symbol is writable.
<p/>
An example of a symbol that is not writable is a readonly Property
referenced as a symbol in a Gosu class.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Writable")
  public boolean isWritable();


  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canBeCaptured")
  public boolean canBeCaptured();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createReducedSymbol")
  public external.gw.lang.parser.IReducedSymbol createReducedSymbol();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasDynamicSymbolTable")
  public boolean hasDynamicSymbolTable();



  /**
   * null
   *
   * @param param String
   * @param param1 ISymbolTable
   * @param param2 IScope
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeCapturedSymbol")
  public external.gw.lang.parser.ICapturedSymbol makeCapturedSymbol(java.lang.String param, external.gw.lang.parser.ISymbolTable param1, external.gw.lang.parser.IScope param2);



  /**
   * Indicates that this symbol should use a reference rather than storing its value directly.
   *
   * @param b 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setValueIsBoxed")
  public void setValueIsBoxed(boolean b);


  /**
   * Utility class for accessing static features for external.gw.lang.parser.ISymbol
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
    public static java.lang.String getSUPER()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISymbol.class, "SUPER");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getTHIS()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISymbol.class, "THIS");
    }

  }
}
