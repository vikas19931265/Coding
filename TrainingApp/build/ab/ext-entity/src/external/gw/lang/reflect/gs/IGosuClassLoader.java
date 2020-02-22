package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGosuClassLoader
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ActualLoader")
  public java.lang.ClassLoader getActualLoader();


  /**
   * null
   *
   * @param param ClassLoader
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignParent")
  public void assignParent(java.lang.ClassLoader param);



  /**
   * null
   *
   * @param param String
   * @param param1 byte[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "defineClass")
  public java.lang.Class defineClass(java.lang.String param, byte[] param1);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "dumpAllClasses")
  public void dumpAllClasses();



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findClass")
  public java.lang.Class findClass(java.lang.String param) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param ICompilableType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getBytes")
  public byte[] getBytes(gw.pl.external.Type param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getFunctionClassForArity")
  public gw.pl.external.Type getFunctionClassForArity(int param);



  /**
   * null
   *
   * @param param ICompilableType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getInterfaceMethodsClassName")
  public java.lang.String getInterfaceMethodsClassName(gw.pl.external.Type param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "loadClass")
  public java.lang.Class loadClass(java.lang.String param) throws gw.pl.external.GenericCheckedException;

}
