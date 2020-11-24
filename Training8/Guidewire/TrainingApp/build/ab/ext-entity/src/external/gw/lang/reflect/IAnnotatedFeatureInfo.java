package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IAnnotatedFeatureInfo extends external.gw.lang.reflect.IFeatureInfo
{
  /**
   * A map of AnnotationInfo objects by type representing all the annotations associated
        with this feature and all the features in its ancestry, or an empty map if there are no annotations.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Annotations")
  public java.util.List getAnnotations();

  /**
   * A map of AnnotationInfo objects by type representing all the annotations associated
        with this feature, or an empty map if there are no annotations.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredAnnotations")
  public java.util.List getDeclaredAnnotations();

  /**
   * True if this feature is deprecated.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Deprecated")
  public boolean isDeprecated();

  /**
   * The deprecation message, or null if the feature is not deprecated.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeprecatedReason")
  public java.lang.String getDeprecatedReason();


  /**
   * 
   *
   * @return An AnnotationInfo object having the specified type, or null if no such AnnotationInfo exists.
   * @param type 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAnnotation")
  public external.gw.lang.reflect.IAnnotationInfo getAnnotation(gw.pl.external.Type type);



  /**
   * 
   *
   * @return A list of AnnotationInfo objects having the specified type.
   * @param type 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAnnotationsOfType")
  public java.util.List getAnnotationsOfType(gw.pl.external.Type type);



  /**
   * 
   *
   * @return true If this feature has an annotation with of the given type, false otherwise
   * @param type The type of the annotation to test for existence.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasAnnotation")
  public boolean hasAnnotation(gw.pl.external.Type type);



  /**
   * 
   *
   * @return true If this feature has a declared annotation of the given type, false otherwise
   * @param type The type of the annotation to test for existence.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasDeclaredAnnotation")
  public boolean hasDeclaredAnnotation(gw.pl.external.Type type);

}
