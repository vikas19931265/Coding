package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGosuValidator
{

  /**
   * Provides additional semantic checks to a Gosu parser
   *
   * @param rootParsedElement - the root parsed element to validate from
   * @param scriptSrc 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validate")
  public void validate(external.gw.lang.parser.IParsedElement rootParsedElement, java.lang.String scriptSrc);

}
