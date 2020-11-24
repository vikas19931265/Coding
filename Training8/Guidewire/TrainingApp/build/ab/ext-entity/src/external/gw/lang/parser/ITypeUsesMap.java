package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITypeUsesMap extends java.io.Serializable, java.lang.Cloneable
{
  /**
   * Returns the set of strings representing the namespaces that are currently
used by this parser.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Namespaces")
  public java.util.Set getNamespaces();

  /**
   * Returns the set of strings representing the types that are currently
used by this parser. The set of types includes both those declared in
#uses statements and those set via setDefaultTypeUses.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeUses")
  public java.util.Set getTypeUses();

  /**
   * Return the set of uses-statements that participate in this map. Note these
are the uses-statements compiled from source.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UsesStatements")
  public java.util.Set getUsesStatements();


  /**
   * Add the specified type to the set of default types.  NOTE:  The type is always treated as a package.  If it ends in .* then it will be stripped
   *
   * @param strQualifiedType 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDefaultTypeUses")
  public void addToDefaultTypeUses(java.lang.String strQualifiedType);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToSpecialTypeUses")
  public void addToSpecialTypeUses(java.lang.String param);



  /**
   * Adds a type to the current set of types. Can be a complete type or a
wildcard namespace e.g., java.util.HashMap and java.util.* are both legal.
   *
   * @param usesStmt 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTypeUses")
  public void addToTypeUses(external.gw.lang.parser.statements.IUsesStatement usesStmt);



  /**
   * Adds a type to the current set of types. Can be a complete type or a
wildcard namespace e.g., java.util.HashMap and java.util.* are both legal.
   *
   * @param strType 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTypeUses")
  public void addToTypeUses(java.lang.String strType);



  /**
   * Clears all types not in the default set of types;
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearNonDefaultTypeUses")
  public void clearNonDefaultTypeUses();



  /**
   * 
   *
   * @return if a type wit the given name can be resolved via this type uses map.
   * @param qualifiedName 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsType")
  public boolean containsType(java.lang.String qualifiedName);



  /**
   * Returns a shallow copy of this map.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copy")
  public external.gw.lang.parser.ITypeUsesMap copy();



  /**
   * Copies the type uses map but alias the global map from this.
   *
   * @return a copy of this type uses map.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copyLocalScope")
  public external.gw.lang.parser.ITypeUsesMap copyLocalScope();



  /**
   * Locks this ITypeUsesMap so that it cannot be mutated in the future
   *
   * @return this ITypeUsesMap, so that this method can be used in a builder-like manner.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "lock")
  public external.gw.lang.parser.ITypeUsesMap lock();



  /**
   * 
   *
   * @return The absolute namespace type for the relative name or null if not found.
   * @param strRelativeName A relative path name. E.g., "lang" is a relative package name of "java.lang"
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resolveRelativeNamespaceInAllNamespaces")
  public gw.pl.external.Type resolveRelativeNamespaceInAllNamespaces(java.lang.String strRelativeName);



  /**
   * Resolve the type of a relative name via the type uses. if the relative type
matches uses-type, resolves the type as such. If the type matches, but does
not resove, throws an exception, otherwise returns null if there is no
match.
   *
   * @param strRelativeName 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resolveType")
  public gw.pl.external.Type resolveType(java.lang.String strRelativeName);

}
