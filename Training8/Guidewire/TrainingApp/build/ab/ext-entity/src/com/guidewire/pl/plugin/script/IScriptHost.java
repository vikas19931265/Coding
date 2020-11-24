package com.guidewire.pl.plugin.script;

/**
 * A script host for the Guidewire Scripting language (Gosu).
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IScriptHost extends gw.plugin.IPlugin
{

  /**
   * Evaluate a Gosu expression or program. Note symbols corresponding to entities
referenced in the script (e.g., Claim) are infered by the context of the UI. For
example, if the UI displays a claim file, a symbol for Claim is guarenteed to exist.
If the expression is NOT entirely relavant to the UI context, you are responsible
for managing the symbol dependencies via <code>IScriptHost.evaluate( String, Object[] )</code> or,
<code>IScriptHost.pushScope()</code> and <code>IScriptHost.putSymbol()</scode>.
   *
   * @return The result of evaluating the expression or the return value of the
        program.
   * @param strExpression A Gosu expression or program.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "evaluate")
  public java.lang.Object evaluate(java.lang.String strExpression) throws gw.lang.parser.exceptions.ParseResultsException;



  /**
   * 
   *
   * @param readerTemplate 
   * @param writerOut 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "executeTemplate")
  public void executeTemplate(java.io.Reader readerTemplate, java.io.Writer writerOut);



  /**
   * Pop off the inner-most nested scope. Example: <pre>
...
// Calling pushScope() is a polite -- a following putSymbol() call won't clobber
// an existing symbol with the same name.
scriptHost.pushScope();
try
{
  // Because we have our own nested scope (via pushScope()) we can add symbols
  // here with no worry of clobbering the symbol table -- effectively providing
  // a safe shadowing mechanism for local symbols.
  scriptHost.putSymbol(.1.);
  scriptHost.putSymbol(.2.);
  scriptHost.putSymbol(...);
  scriptHost.putSymbol(.n.);
  scripHost.evaluate(...);
}
finally
{
  // popScope() removes only symbols added in this nested scope, preserving all the
  // symbols in prior scope[s].
  scriptHost.popScope();
}
</pre>
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "popScope")
  public void popScope();



  /**
   * Push a new nested symbol scope. Example: <pre>
...
// Calling pushScope() is a polite -- a following putSymbol() call won't clobber
// an existing symbol with the same name.
scriptHost.pushScope();
try
{
  // Because we have our own nested scope (via pushScope()) we can add symbols
  // here with no worry of clobbering the symbol table -- effectively providing
  // a safe shadowing mechanism for local symbols.
  scriptHost.putSymbol(.1.);
  scriptHost.putSymbol(.2.);
  scriptHost.putSymbol(...);
  scriptHost.putSymbol(.n.);
  scripHost.evaluate(...);
}
finally
{
  // popScope() removes only symbols added in this nested scope, preserving all the
  // symbols in prior scope[s].
  scriptHost.popScope();
}
</pre>
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pushScope")
  public void pushScope();



  /**
   * Put a symbol into the symbol table.
<p/>
Note symbols for entities (Claim, Exposure, etc) are automatically handled in
<code>evaluate( String, Oject[] )</code>, so most of the time you don't need
to call putSymbol().
<p/>
Furthermore, you should almost always add symbols within a nested <i>scope</i>
via <code>IScriptHost.pushScope()</code>. For instance, if you are adding one or
more symbols before evaluating an expression or set of expressions and the symbols
are relevant for only those expressions, first call <code>pushScope()</code> then
execute your code in a <code>try,finally</code> block like so: <pre>
...
// Calling pushScope() is a polite -- a following putSymbol() call won't clobber
// an existing symbol with the same name.
scriptHost.pushScope();
try
{
  // Because we have our own nested scope (via pushScope()) we can add symbols
  // here with no worry of clobbering the symbol table -- effectively providing
  // a safe shadowing mechanism for local symbols.
  scriptHost.putSymbol(.1.);
  scriptHost.putSymbol(.2.);
  scriptHost.putSymbol(...);
  scriptHost.putSymbol(.n.);
  scripHost.evaluate(...);
}
finally
{
  // popScope() removes only symbols added in this nested scope, preserving all the
  // symbols in prior scope[s].
  scriptHost.popScope();
}
</pre>
   *
   * @param strName The symbol's name; referencable in scripts.
   * @param type The symbol's type. Necessary at times when value is null, or
               value is a proxy, or value should be exposed only as an interface.
   * @param value The symbol's value.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "putSymbol")
  public void putSymbol(java.lang.String strName, java.lang.String type, java.lang.Object value);



  /**
   * Remove a symbol from the symbol table. Achtung! Use with care. Most of the time
you should use scopes and, therefore, don't need to call removeSymbol(): <pre>
...
// Calling pushScope() is a polite -- a following putSymbol() call won't clobber
// an existing symbol with the same name.
scriptHost.pushScope();
try
{
  // Because we have our own nested scope (via pushScope()) we can add symbols
  // here with no worry of clobbering the symbol table -- effectively providing
  // a safe shadowing mechanism for local symbols.
  scriptHost.putSymbol(.1.);
  scriptHost.putSymbol(.2.);
  scriptHost.putSymbol(...);
  scriptHost.putSymbol(.n.);
  scripHost.evaluate(...);
}
finally
{
  // popScope() removes only symbols added in this nested scope, preserving all the
  // symbols in prior scope[s].
  scriptHost.popScope();
}
</pre>
   *
   * @param strName The name of the symbol to remove.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeSymbol")
  public void removeSymbol(java.lang.String strName);

}
