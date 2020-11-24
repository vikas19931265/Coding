package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IFileContext
{
  /**
   * a class name that uniquely represents this file context when combined with the context string above.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ClassName")
  public java.lang.String getClassName();

  /**
   * Some additional contextual information about the place within a file that this program is located (e.g. an attribute in an XML file)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContextString")
  public java.lang.String getContextString();

  /**
   * the full path
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FilePath")
  public java.lang.String getFilePath();
}
