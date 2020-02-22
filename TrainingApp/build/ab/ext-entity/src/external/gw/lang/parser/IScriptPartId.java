package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IScriptPartId
{


  /**
   * The type that contains this part.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContainingType")
  public gw.pl.external.Type getContainingType();


  /**
   * The name of the type that contains this part.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContainingTypeName")
  public java.lang.String getContainingTypeName();


  /**
   * An id that distinguishes this part from other parts
        in the containing type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Id")
  public java.lang.String getId();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RuntimeType")
  public gw.pl.external.Type getRuntimeType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RuntimeType")
  public void setRuntimeType(gw.pl.external.Type value);
}
