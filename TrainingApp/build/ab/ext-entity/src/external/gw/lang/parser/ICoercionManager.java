package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ICoercionManager extends external.gw.config.IService
{

  /**
   * 
   *
   * @return true if a coercion exists from rhsType to lhsType, false otherwise
   * @param lhsType type to be coerced to
   * @param rhsType type to be coerced from
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canCoerce")
  public boolean canCoerce(gw.pl.external.Type lhsType, gw.pl.external.Type rhsType);



  /**
   * 
   *
   * @return true if the given coercion should generate a warning
   * @param lhsType type to coerce to
   * @param rhsType type to coerce from
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "coercionRequiresWarningIfImplicit")
  public boolean coercionRequiresWarningIfImplicit(gw.pl.external.Type lhsType, gw.pl.external.Type rhsType);



  /**
   * Converts a null value to a value compatible with the specified primitive type.
   *
   * @return A wrapped primitive value corresponding to null.
   * @param intrType The primitive type to convert to.
   * @param isForBoxing 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "convertNullAsPrimitive")
  public java.lang.Object convertNullAsPrimitive(gw.pl.external.Type intrType, boolean isForBoxing);



  /**
   * 
   *
   * @return the converted value
   * @param value the value to coerce (may not be null)
   * @param intrType type to coerce to
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
   * Determine whether the specified type is either a primitive or a boxed primitive.
   *
   * @return true if the specified type is a primitive or a boxed primitive
   * @param type the type to examine
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPrimitiveOrBoxed")
  public boolean isPrimitiveOrBoxed(gw.pl.external.Type type);



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
   * Returns a Double for an arbitrary object. Uses a semi-intelligent
algorithm to create an appropriate Double instance.  If the Object
argument is a:
<pre>
null value - an appropriate value respecting this parsed element's nullAsZero
  setting e.g., either null or an 'empty' value.
Double - returns the argument as is.
Number - the Number's doubleValue().
String - Double.parseDouble( String )
Boolean - a pooled instance of either Double( 0 ) or Double( 1 )
Date - A Double for Date.getTime().
default - A parsed Double for the Object argument's toString() method.
</pre>
   *
   * @return A Double for an arbitrary object (may return a pooled instance).
   * @param obj 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeDoubleFrom")
  public java.lang.Double makeDoubleFrom(java.lang.Object obj);



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
   * Determine and return a statically valid coercer from the rhsType to the lhsType.  Returns
null if no coercion is necessary.
   *
   * @param lhsType the type to coerce to
   * @param rhsType the type to coerce from
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resolveCoercerStatically")
  public external.gw.lang.parser.ICoercer resolveCoercerStatically(gw.pl.external.Type lhsType, gw.pl.external.Type rhsType);



  /**
   * Verifies that the right hand type can be converted or coerced to the left hand type.  If bBiDirectional is true,
it will verify that either converts to another
   *
   * @param lhsType 
   * @param rhsType 
   * @param bBiDirectional 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyTypesComparable")
  public gw.pl.external.Type verifyTypesComparable(gw.pl.external.Type lhsType, gw.pl.external.Type rhsType, boolean bBiDirectional) throws gw.pl.external.GenericCheckedException;



  /**
   * Verifies that the right hand type can be converted or coerced to the left hand type.  If bBiDirectional is true,
it will verify that either converts to another.  The parser state will be used to report parse errors with.
   *
   * @param lhsType 
   * @param rhsType 
   * @param bBiDirectional 
   * @param parserState 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyTypesComparable")
  public gw.pl.external.Type verifyTypesComparable(gw.pl.external.Type lhsType, gw.pl.external.Type rhsType, boolean bBiDirectional, external.gw.lang.parser.IFullParserState parserState) throws gw.pl.external.GenericCheckedException;

}
