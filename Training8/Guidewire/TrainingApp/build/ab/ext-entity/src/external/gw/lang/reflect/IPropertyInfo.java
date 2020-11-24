package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IPropertyInfo extends external.gw.lang.reflect.IAttributedFeatureInfo, external.gw.lang.reflect.IIntrinsicTypeReference
{
  /**
   * the PropertyAccessor (for getting and setting) this property.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Accessor")
  public external.gw.lang.reflect.IPropertyAccessor getAccessor();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PresentationInfo")
  public external.gw.lang.reflect.IPresentationInfo getPresentationInfo();

  /**
   * true if the property is readable given the visibility constraint passed in,
        false otherwise.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Readable")
  public boolean isReadable();

  /**
   * True if the property is writable given the visibility constraint passed in,
        false otherwise.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Writable")
  public boolean isWritable();


  /**
   * 
   *
   * @return True if the property is writable given the visibility constraint passed in,
        false otherwise.
   * @param whosAskin The type querying the property writability.  For example, passing in the type the property is on will
  allow properties that have private access in the setter to be written to.  Passing in an unrelated type will only
  allow properties that are public to be written to.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isWritable")
  public boolean isWritable(gw.pl.external.Type whosAskin);

}
