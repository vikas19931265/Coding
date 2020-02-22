package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGosuClassRepository
{
  /**
   * A set containing all type names in this repository (includes enhancement names)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllTypeNames")
  public java.util.Set getAllTypeNames();

  /**
   * The module having this repository
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Module")
  public external.gw.lang.reflect.module.IModule getModule();


  /**
   * Finds the ISourceFileHandle for a given fully-qualified class name, or null if no such source file exists
   *
   * @return The source file handle for the given class, or null if no such
  source file exists.
   * @param strQualifiedClassName the fully-qualified name of the class
   * @param extensions 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findClass")
  public external.gw.lang.reflect.gs.ISourceFileHandle findClass(java.lang.String strQualifiedClassName, java.lang.String[] extensions);



  /**
   * Finds the given resource in this repository.

<p> The name of a resource is a '<tt>/</tt>'-separated path name that
identifies the resource.
   *
   * @return the URL of the resource or null if the resource cannot be found.
   * @param name the name of the resource
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findResource")
  public java.net.URL findResource(java.lang.String name);



  /**
   * Returns the names of all types in this repository that end with one of the specified file extensions
   *
   * @return A set containing all the type names in this repository.
   * @param extensions the set of file name extensions to consider
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAllTypeNames")
  public java.util.Set getAllTypeNames(java.lang.String[] extensions);



  /**
   * Returns all type names in the given namespace and with the given extensions.
   *
   * @param namespace 
   * @param extensions 
   * @param loader 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypeNames")
  public java.util.Set getTypeNames(java.lang.String namespace, java.util.Set extensions, external.gw.lang.reflect.ITypeLoader loader);



  /**
   * Returns the number of namespaces this repository has matching the given name.
Note a namespace can span multiple source roots, hence the integer return value -- one per source root.
   *
   * @param namespace 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasNamespace")
  public int hasNamespace(java.lang.String namespace);



  /**
   * Called when a namespace is refreshed
   *
   * @param namespace 
   * @param dir 
   * @param kind 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "namespaceRefreshed")
  public void namespaceRefreshed(java.lang.String namespace, external.gw.fs.IDirectory dir, external.gw.lang.reflect.RefreshKind kind);



  /**
   * Called when a type is refreshed
   *
   * @param request 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "typesRefreshed")
  public void typesRefreshed(external.gw.lang.reflect.RefreshRequest request);

}
