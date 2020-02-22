package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IParserPart
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DontOptimizeStatementLists")
  public boolean isDontOptimizeStatementLists();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DontOptimizeStatementLists")
  public void setDontOptimizeStatementLists(boolean value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LineNumShift")
  public int getLineNumShift();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LineNumShift")
  public void setLineNumShift(int value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OffsetShift")
  public int getOffsetShift();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Owner")
  public external.gw.lang.parser.IGosuParser getOwner();


  /**
   * null
   *
   * @param param IGosuValidator
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setValidator")
  public void setValidator(external.gw.lang.parser.IGosuValidator param);

}
