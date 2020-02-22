package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IExternalSymbolMap
{

  /**
   * Returns the value for the symbol with the given name.  Throws a runtime exception if the name does not
correspond to a valid external symbol.
   *
   * @return the current value of the symbol
   * @param name the name of the symbol
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getValue")
  public java.lang.Object getValue(java.lang.String name);



  /**
   * Called via bytecode.
   *
   * @param name 
   * @param iArrayDims the expected number of array dimensions of the the symbol's type, useful for
                   debugger expr evaluation for dynamically unwrapping type a single elem array (a captured var)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getValue")
  public java.lang.Object getValue(java.lang.String name, int iArrayDims);



  /**
   * Invokes the named external function with the given arguments.  The name argument should correspond to
the result of calling getName() on the external function symbol.
   *
   * @return the result of the function invocation
   * @param name the name of the function symbol
   * @param args the arguments to the method
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "invoke")
  public java.lang.Object invoke(java.lang.String name, java.lang.Object[] args);



  /**
   * Sets the value of the symbol with the given name.  Throws a runtime exception if the name does not
correspond to a valid external symbol.
   *
   * @param name the name of the symbol
   * @param value the new value to give that symbol
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setValue")
  public void setValue(java.lang.String name, java.lang.Object value);

}
