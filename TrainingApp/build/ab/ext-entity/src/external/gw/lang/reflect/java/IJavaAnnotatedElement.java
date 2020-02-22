package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IJavaAnnotatedElement
{
  /**
   * Returns all annotations that are directly present on this
element.  Unlike the other methods in this interface, this method
ignores inherited annotations.  (Returns an array of length zero if
no annotations are directly present on this element.)  The caller of
this method is free to modify the returned array; it will have no
effect on the arrays returned to other callers.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredAnnotations")
  public external.gw.lang.reflect.IAnnotationInfo[] getDeclaredAnnotations();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnclosingClass")
  public external.gw.lang.reflect.java.IJavaClassInfo getEnclosingClass();


  /**
   * Returns this element's annotation for the specified type if
such an annotation is present, else null.
   *
   * @return this element's annotation for the specified annotation type if
        present on this element, else null
   * @param annotationClass the Class object corresponding to the
                       annotation type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAnnotation")
  public external.gw.lang.reflect.IAnnotationInfo getAnnotation(java.lang.Class annotationClass);



  /**
   * Returns true if an annotation for the specified type
is present on this element, else false.  This method
is designed primarily for convenient access to marker annotations.
   *
   * @return true if an annotation for the specified annotation
        type is present on this element, else false
   * @param annotationClass the Class object corresponding to the
                       annotation type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isAnnotationPresent")
  public boolean isAnnotationPresent(java.lang.Class annotationClass);

}
