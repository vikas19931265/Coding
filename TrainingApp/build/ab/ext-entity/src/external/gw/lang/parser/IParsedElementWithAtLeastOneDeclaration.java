package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IParsedElementWithAtLeastOneDeclaration extends external.gw.lang.parser.IParsedElement
{
  /**
   * all names declared by this element
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Declarations")
  public java.lang.String[] getDeclarations();


  /**
   * 
   *
   * @return True if this statement declares the given identifier; false otherwise
   * @param identifierName 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "declares")
  public boolean declares(java.lang.String identifierName);



  /**
   * The offset of the token representing the name for the declaration
   *
   * @param identifierName 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNameOffset")
  public int getNameOffset(java.lang.String identifierName);



  /**
   * null
   *
   * @param param int
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setNameOffset")
  public void setNameOffset(int param, java.lang.String param1);

}
