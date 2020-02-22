package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface StandardCoercionManager extends external.gw.config.BaseService, external.gw.lang.parser.ICoercionManager
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "_coercerCache")
  public external.gw.lang.parser.TypeSystemAwareCache get_coercerCache();

  /**
   * null
   *
   * @param param IType
   * @param param1 IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canCoerce")
  public boolean canCoerce(gw.pl.external.Type param, gw.pl.external.Type param1);

  /**
   * null
   *
   * @param param IType
   * @param param1 IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "coercionRequiresWarningIfImplicit")
  public boolean coercionRequiresWarningIfImplicit(gw.pl.external.Type param, gw.pl.external.Type param1);

  /**
   * null
   *
   * @param param IType
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "convertNullAsPrimitive")
  public java.lang.Object convertNullAsPrimitive(gw.pl.external.Type param, boolean param1);

  /**
   * Given a value and a target Class, return a compatible value via the target Class.
   *
   * @param value 
   * @param intrType 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "convertValue")
  public java.lang.Object convertValue(java.lang.Object value, gw.pl.external.Type intrType);

  /**
   * null
   *
   * @param param IType
   * @param param1 IType
   * @param param2 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findCoercer")
  public external.gw.lang.parser.ICoercer findCoercer(gw.pl.external.Type param, gw.pl.external.Type param1, boolean param2);

  /**
   * null
   *
   * @param param Date
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "formatDate")
  public java.lang.String formatDate(java.util.Date param, java.lang.String param1);

  /**
   * null
   *
   * @param param Double
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "formatNumber")
  public java.lang.String formatNumber(java.lang.Double param, java.lang.String param1);

  /**
   * null
   *
   * @param param Date
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "formatTime")
  public java.lang.String formatTime(java.util.Date param, java.lang.String param1);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isDateTime")
  public boolean isDateTime(java.lang.String param) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPrimitiveOrBoxed")
  public boolean isPrimitiveOrBoxed(gw.pl.external.Type param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeBigDecimalFrom")
  public java.math.BigDecimal makeBigDecimalFrom(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeBigIntegerFrom")
  public java.math.BigInteger makeBigIntegerFrom(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeBooleanFrom")
  public java.lang.Boolean makeBooleanFrom(java.lang.Object param);

  /**
   * Returns a new Date instance representing the object.
   *
   * @param obj 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeDateFrom")
  public java.util.Date makeDateFrom(java.lang.Object obj);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeDoubleFrom")
  public java.lang.Double makeDoubleFrom(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeFloatFrom")
  public java.lang.Float makeFloatFrom(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeIntegerFrom")
  public java.lang.Integer makeIntegerFrom(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeLongFrom")
  public java.lang.Long makeLongFrom(java.lang.Object param);

  /**
   * 
   *
   * @return A Boolean for an arbitrary object.
   * @param obj 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makePrimitiveBooleanFrom")
  public boolean makePrimitiveBooleanFrom(java.lang.Object obj);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makePrimitiveDoubleFrom")
  public double makePrimitiveDoubleFrom(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makePrimitiveFloatFrom")
  public float makePrimitiveFloatFrom(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makePrimitiveIntegerFrom")
  public int makePrimitiveIntegerFrom(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makePrimitiveLongFrom")
  public long makePrimitiveLongFrom(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeStringFrom")
  public java.lang.String makeStringFrom(java.lang.Object param);

  /**
   * Produce a date from a string using standard DateFormat parsing.
   *
   * @param str 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseDateTime")
  public java.util.Date parseDateTime(java.lang.String str) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseNumber")
  public java.lang.Number parseNumber(java.lang.String param);

  /**
   * null
   *
   * @param param IType
   * @param param1 IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resolveCoercerStatically")
  public external.gw.lang.parser.ICoercer resolveCoercerStatically(gw.pl.external.Type param, gw.pl.external.Type param1);

  /**
   * null
   *
   * @param param IType
   * @param param1 IType
   * @param param2 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyTypesComparable")
  public gw.pl.external.Type verifyTypesComparable(gw.pl.external.Type param, gw.pl.external.Type param1, boolean param2) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param IType
   * @param param1 IType
   * @param param2 boolean
   * @param param3 IFullParserState
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyTypesComparable")
  public gw.pl.external.Type verifyTypesComparable(gw.pl.external.Type param, gw.pl.external.Type param1, boolean param2, external.gw.lang.parser.IFullParserState param3) throws gw.pl.external.GenericCheckedException;


  /**
   * Utility class for accessing static features for external.gw.lang.parser.StandardCoercionManager
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static java.lang.Object getNO_DICE()
    {
      return (java.lang.Object) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.StandardCoercionManager.class, "NO_DICE");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param IType
     */
    public static boolean isBoxed(gw.pl.external.Type param)
    {
      return (java.lang.Boolean) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.lang.parser.StandardCoercionManager.class, "isBoxed", new Class[]{ gw.pl.external.Type.class} , new Object[]{ param});
    }

    /**
     * Convert a string to an array of specified type.
     *
     * @return the string converted to an array
     * @param strValue the string to convert
     * @param intrType the array component type
     */
    public static java.lang.Object makeArrayFromString(java.lang.String strValue, gw.pl.external.Type intrType)
    {
      return (java.lang.Object) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.lang.parser.StandardCoercionManager.class, "makeArrayFromString", new Class[]{ java.lang.String.class, gw.pl.external.Type.class} , new Object[]{ strValue, intrType});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.lang.parser.StandardCoercionManager
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static StandardCoercionManager newInstance()
    {
      return (StandardCoercionManager) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.parser.StandardCoercionManager.class, new Class[]{ } , new Object[]{ });
    }

  }
}
