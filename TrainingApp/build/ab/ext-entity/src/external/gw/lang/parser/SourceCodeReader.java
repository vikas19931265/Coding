package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SourceCodeReader
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Length")
  public int getLength();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Position")
  public int getPosition();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Position")
  public void setPosition(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Source")
  public java.lang.String getSource();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "peek")
  public int peek();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "read")
  public int read() throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param int
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "subsequence")
  public java.lang.CharSequence subsequence(int param, int param1);


  /**
   * Utility class for accessing static features for external.gw.lang.parser.SourceCodeReader
   * <ul>

* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    
        //Static Methods
    
    /**
     * null
     *
     * @param param Reader
     */
    public static external.gw.lang.parser.SourceCodeReader makeSourceCodeReader(java.io.Reader param)
    {
      return (external.gw.lang.parser.SourceCodeReader) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.lang.parser.SourceCodeReader.class, "makeSourceCodeReader", new Class[]{ java.io.Reader.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.lang.parser.SourceCodeReader
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param CharSequence

     */
    public static SourceCodeReader newInstance(java.lang.CharSequence param)
    {
      return (SourceCodeReader) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.parser.SourceCodeReader.class, new Class[]{ java.lang.CharSequence.class} , new Object[]{ param});
    }

  }
}
