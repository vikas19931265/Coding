package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IPresentationInfo
{
  /**
   * True if the feature editor for this feature can auto-update while
        the user modifies the value. For instance, if this feature is a simple
        label text value, auto-update means that the value changes automatically
        as the user types. Otherwise, if auto-update is false, the user must
        explicitly commit the changes when he is finished typing e.g., via an OK
        button.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutoUpdate")
  public boolean isAutoUpdate();

  /**
   * The id of the category under which this feature belongs. Feature
        categories facilitate grouping of features for presentation purposes
        e.g., in a property editor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Category")
  public external.gw.lang.reflect.FeatureCategory getCategory();

  /**
   * A regular expression string specifying which characters are allowed
        in the value of this property, or null if no such restriction exists.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CharacterMask")
  public java.lang.String getCharacterMask();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultValue")
  public java.lang.String getDefaultValue();

  /**
   * True if this feature can be edited in the company of other objects
        with this feature. For instance, if this is a font it's likely that it's
        ok to edit this font's value along with other objects that are selected so
        as to set all their fonts to the same value with one change. Conversely,
        if this is a value that probably pertains to just this object, say a
        chunk of Gosu, it's probably best to return true here so that the
        feature is not editable while other object are selected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MultiEdit")
  public boolean isMultiEdit();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MultiLine")
  public boolean isMultiLine();

  /**
   * True if the this feature can be presented for editing e.g., in a
        property editor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Presentable")
  public boolean isPresentable();

  /**
   * True if this property is considered the primary property for this
        object, false otherwise.  Editors may use this information to implement
        editing behavior e.g. supporting jumping to the primary property when
        editing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Primary")
  public boolean isPrimary();

  /**
   * True if this feature is required, and should be called out as such in
        a property editor.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Required")
  public boolean isRequired();

  /**
   * Utility class for accessing static features for external.gw.lang.reflect.IPresentationInfo
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
    public static external.gw.lang.reflect.FeatureCategory getCATEGORY_BEHAVIOR()
    {
      return (external.gw.lang.reflect.FeatureCategory) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.IPresentationInfo.class, "CATEGORY_BEHAVIOR");
    }

    /**
     * 
     * 
     */
    public static external.gw.lang.reflect.FeatureCategory getCATEGORY_DESIGN()
    {
      return (external.gw.lang.reflect.FeatureCategory) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.IPresentationInfo.class, "CATEGORY_DESIGN");
    }

  }
}
