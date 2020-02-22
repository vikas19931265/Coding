package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITokenizerInstructor
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AnalyzingDirective")
  public boolean isAnalyzingDirective();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AnalyzingSeparately")
  public boolean isAnalyzingSeparately();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AtIgnoredPos")
  public boolean isAtIgnoredPos();


  /**
   * null
   *
   * @param param ISourceCodeTokenizer
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createNewInstance")
  public external.gw.lang.parser.ITokenizerInstructor createNewInstance(external.gw.lang.parser.ISourceCodeTokenizer param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getInstructionFor")
  public void getInstructionFor(int param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reset")
  public void reset();



  /**
   * null
   *
   * @param param ISourceCodeTokenizer
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setTokenizer")
  public void setTokenizer(external.gw.lang.parser.ISourceCodeTokenizer param);

}
