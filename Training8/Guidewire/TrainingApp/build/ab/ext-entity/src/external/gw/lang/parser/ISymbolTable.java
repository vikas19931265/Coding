package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ISymbolTable extends external.gw.lang.parser.IStackProvider
{
  /**
   * The number of scopes on the private global stack. Useful for
        recording a specific offset in the symbol table e.g., a debugger needs
        this to jump to a position in a call stack.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrivateGlobalScopeCount")
  public int getPrivateGlobalScopeCount();

  /**
   * The number of scopes on the stack. These include all scopes:
        global, isolated, and local. Useful for recording a specific offset in the
        symbol table e.g., a debugger needs this to jump to a position in a call
        stack.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ScopeCount")
  public int getScopeCount();

  /**
   * A list of currently mapped ISymbols e.g., the values in a hash
        table based implementation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Symbols")
  public java.util.Map getSymbols();

  /**
   * Get the 'this' symbol from either the stack or the table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ThisSymbolFromStackOrMap")
  public external.gw.lang.parser.ISymbol getThisSymbolFromStackOrMap();

  /**
   * the number of symbols exist in this table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalSymbolCount")
  public int getTotalSymbolCount();


  /**
   * Perform a semi-deep copy of this symbol table. Symbols need not be cloned.
   *
   * @return A semi-deep copy of this symbol table.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copy")
  public external.gw.lang.parser.ISymbolTable copy();



  /**
   * Define symbols that are considered ubiquitous. There may be none.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "defineCommonSymbols")
  public void defineCommonSymbols();



  /**
   * 
   *
   * @return The symbol mapped to the specified name.
   * @param name 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getSymbol")
  public external.gw.lang.parser.ISymbol getSymbol(java.lang.CharSequence name);



  /**
   * 
   *
   * @return A list of currently mapped ISymbols e.g., the values in a hash
        table based implementation.
   * @param iScopeIndex Scopes positioned on the stack at an index greater than
                   this number are not included. Very useful for examining a specific scope
                   e.g., for a debugger. Note an index < 0 indicates that all scopes are
                   included.
   * @param iPrivateGlobalIndex 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getSymbols")
  public java.util.Map getSymbols(int iScopeIndex, int iPrivateGlobalIndex);



  /**
   * 
   *
   * @return true if the given symbol is within the given scope
   * @param sym 
   * @param scope 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isSymbolWithinScope")
  public boolean isSymbolWithinScope(external.gw.lang.parser.ISymbol sym, external.gw.lang.parser.IScope scope);



  /**
   * 
   *
   * @return the top-most isolated scope
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "peekIsolatedScope")
  public external.gw.lang.parser.IScope peekIsolatedScope();



  /**
   * 
   *
   * @return the currently active scope
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "peekScope")
  public external.gw.lang.parser.IScope peekScope();



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "peekScope")
  public external.gw.lang.parser.IScope peekScope(int param);



  /**
   * Pops a global scope previously pushed via <code>pushGlobalScope( IScope )</code>
or <code>pushPrivateGlobalScope( IScope )</code>.
<p/>
You probably shouldn't call this method.
   *
   * @param scope 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "popGlobalScope")
  public void popGlobalScope(external.gw.lang.parser.IScope scope);



  /**
   * Pop a local scope context from the symbol table.
<p/>
See pushScope() for implementation suggestions.
   *
   * @return The popped scope.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "popScope")
  public external.gw.lang.parser.IScope popScope();



  /**
   * null
   *
   * @param param IScope
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "popScope")
  public external.gw.lang.parser.IScope popScope(external.gw.lang.parser.IScope param);



  /**
   * Push a scope that demarcates an activation record. The behavior is nearly
identical to pushScope(), the [big] difference is that activation record
scopes cannot access symbols from other activation record scopes.
<p/>
Use popScope() to pop a scope pushed via this method.
   *
   * @return The isolated scope (aka the activation record).
   * @param activationCtx The context for the activation record.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pushIsolatedScope")
  public external.gw.lang.parser.IScope pushIsolatedScope(external.gw.lang.parser.IActivationContext activationCtx);



  /**
   * Push a global scope you specify onto the private global scope space. Useful
for handling private global scopes for libraries, namespaces, etc. As this
functionality is primarily for Gosu runtime, you'll likely never need to
call this.
<p/>
If you need to push a scope with restricted visibility, consider calling
<code>pushIsolatedScope()</code> instead.
   *
   * @param scope 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pushPrivateGlobalScope")
  public void pushPrivateGlobalScope(external.gw.lang.parser.IScope scope);



  /**
   * Push a local scope context onto the symbol table.
   *
   * @return The pushed scope.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pushScope")
  public external.gw.lang.parser.IScope pushScope();



  /**
   * Push a local scope context onto the symbol table.
   *
   * @return The pushed scope.
   * @param scope the scope to push
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pushScope")
  public external.gw.lang.parser.IScope pushScope(external.gw.lang.parser.IScope scope);



  /**
   * Maps a name to a symbol in the table.
   *
   * @param symbol 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "putSymbol")
  public void putSymbol(external.gw.lang.parser.ISymbol symbol);



  /**
   * Removes a previously mapped symbol.
   *
   * @param name The name mapped to the symbol to remove.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeSymbol")
  public external.gw.lang.parser.ISymbol removeSymbol(java.lang.CharSequence name);

}
