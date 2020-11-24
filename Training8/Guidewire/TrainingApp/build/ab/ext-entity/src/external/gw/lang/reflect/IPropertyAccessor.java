package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IPropertyAccessor
{

  /**
   * Returns the value for a property given a "this" object
   *
   * @return the value of the property for the <i>ctx</i> object
   * @param ctx the "this" pointer.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getValue")
  public java.lang.Object getValue(java.lang.Object ctx);



  /**
   * Sets the property to the given value for the <i>ctx</i> object
   *
   * @param ctx the "this" pointer
   * @param value the new value
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setValue")
  public void setValue(java.lang.Object ctx, java.lang.Object value);

}
