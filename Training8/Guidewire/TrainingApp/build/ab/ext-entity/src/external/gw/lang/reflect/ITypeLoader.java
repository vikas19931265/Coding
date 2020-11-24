package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITypeLoader extends external.gw.config.IService
{
  /**
   * Don't call this method unless you really know what you're doing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllNamespaces")
  public java.util.Set getAllNamespaces();

  /**
   * the set of fully qualified type names this loader is responsible for
        loading. Note due to the dynamic nature of some type loaders, there is no
        guarantee that all types for a given loader are known at the time this
        method is called.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllTypeNames")
  public java.util.Set getAllTypeNames();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CaseSensitive")
  public boolean isCaseSensitive();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HandledPrefixes")
  public java.util.List getHandledPrefixes();

  /**
   * The module to which this type loader belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Module")
  public external.gw.lang.reflect.module.IModule getModule();


  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "computeTypeNames")
  public java.util.Set computeTypeNames();



  /**
   * null
   *
   * @param param IDirectory
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNamespaceForDirectory")
  public java.lang.String getNamespaceForDirectory(external.gw.fs.IDirectory param);



  /**
   * Finds the resource with the given name.  A resource is some data
that can be accessed by class code in a way that may be independent
of the location of the code.  The exact location of the resource is
dependent upon the loader implementation
<p/>
<p> The name of a resource is a '<tt>/</tt>'-separated path name that
identifies the resource.
   *
   * @return A <tt>URL</tt> object for reading the resource, or
        <tt>null</tt> if the resource could not be found or the invoker
        doesn't have adequate  privileges to get the resource.
   * @param name The resource name
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getResource")
  public java.net.URL getResource(java.lang.String name);



  /**
   * Gets a type based on a fully-qualified name.  This could either be the name of an entity,
like "com.guidewire.ab.external.entity.User", the name of a typekey, like "typekey.SystemPermission", or a class name, like
"java.lang.String".  Names can have [] appended to them to create arrays, and multi-dimensional arrays
are supported.<p>
<p/>
If the type can be successfully resolved by the typeloader, it will be returned, otherwise it will
return null.  The sole exception to this rule is the top-level TypeLoaderAccess, which will throw
a {@link ClassNotFoundException} if none of its composite typeloaders can load the type.<p>
<p/>
<p/>
There is a global lock in TypeLoaderAccess that is acquired when this method is called.  Basically
one type at a time can be loaded from the system.  This method is free to release that lock during this call.
This is needed to deal with reentrant type loaders.  It is the responsibility of this method to make sure the
lock is reacquired before this method returns.
<p/>
Type loader access will guarentee that no duplicate types are put into the type loader.
   *
   * @return the corresponding IType or null
   * @param fullyQualifiedName the fully qualified name of the type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getType")
  public gw.pl.external.Type getType(java.lang.String fullyQualifiedName);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypeNames")
  public java.util.Set getTypeNames(java.lang.String param);



  /**
   * Returns ALL type names associated with the given file
whether or not the types have been loaded yet.
Type loading should NOT be used in the implementation of this method.
   *
   * @return All known types derived from that file
   * @param file The file in question
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypesForFile")
  public java.lang.String[] getTypesForFile(external.gw.fs.IFile file);



  /**
   * null
   *
   * @param param IDirectory
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesDirectory")
  public boolean handlesDirectory(external.gw.fs.IDirectory param);



  /**
   * null
   *
   * @param param IFile
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesFile")
  public boolean handlesFile(external.gw.fs.IFile param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesNonPrefixLoads")
  public boolean handlesNonPrefixLoads();



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasNamespace")
  public boolean hasNamespace(java.lang.String param);



  /**
   * Fired when the typesystem is fully refreshed
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshed")
  public void refreshed();



  /**
   * Notifies the type loader that a file has been refreshed.  The type loader should return all
types that it knows need to be refreshed based on the given file.
   *
   * @param file The file that was refreshed
   * @param types 
   * @param kind @return All known types affected by the file change
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedFile")
  public external.gw.lang.reflect.RefreshKind refreshedFile(external.gw.fs.IFile file, java.lang.String[] types, external.gw.lang.reflect.RefreshKind kind);



  /**
   * null
   *
   * @param param String
   * @param param1 IDirectory
   * @param param2 RefreshKind
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedNamespace")
  public void refreshedNamespace(java.lang.String param, external.gw.fs.IDirectory param1, external.gw.lang.reflect.RefreshKind param2);



  /**
   * Fired when an existing type is refreshed, i.e. there are potential changes
   *
   * @param request 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedTypes")
  public void refreshedTypes(external.gw.lang.reflect.RefreshRequest request);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "showTypeNamesInIDE")
  public boolean showTypeNamesInIDE();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "shutdown")
  public void shutdown();


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.ITypeLoader
   * <ul>
   * <li>Access static properties for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    /**
     * 
     * 
     */
    public static java.lang.String[] getNO_TYPES()
    {
      return (java.lang.String[]) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.ITypeLoader.class, "NO_TYPES");
    }

  }
}
