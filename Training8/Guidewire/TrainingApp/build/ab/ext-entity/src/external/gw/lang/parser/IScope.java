package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IScope <K, V extends external.gw.lang.parser.ISymbol> extends java.lang.Cloneable, java.util.Map<K, V>
{
  /**
   * Get the activation record context. This can be any object representing the
activation record e.g., a function symbol, a rule set context, whatever
delimits a call boundary.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActivationCtx")
  public external.gw.lang.parser.IActivationContext getActivationCtx();

  /**
   * the compile-time csr for this scope if it exists
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CSR")
  public int getCSR();

  /**
   * the compile-time csr for this scope if it exists
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CSR")
  public void setCSR(int value);


  /**
   * Enforce a cloneable contract.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clone")
  public java.lang.Object clone();



  /**
   * visit all symbols in this Scope,
   *
   * @return true if the visitor want to continue visitiong other symbol/scope,
        false otherwise.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "countSymbols")
  public int countSymbols();



  /**
   * null
   *
   * @param param K
   * @param param1 V
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "put")
  public V put(K param, V param1);

}
