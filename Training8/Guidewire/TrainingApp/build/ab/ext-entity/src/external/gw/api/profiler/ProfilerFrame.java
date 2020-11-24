package external.gw.api.profiler;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProfilerFrame extends java.lang.AutoCloseable
{
  /**
   * The children of this frame
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Children")
  public java.util.List getChildren();

  /**
   * Elapsed time in millis spent in childen of this frame
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ChildrenElapsedTime")
  public int getChildrenElapsedTime();

  /**
   * True if the frame has been closed and is no longer on the stack, false if the frame is open and is still on
        the stack.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Closed")
  public boolean isClosed();

  /**
   * Amount of time in millis that the frame was open, difference between pop time and push time, this includes
        all the elapsed time of children; -1 if the frame is still on the stack ("open")
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElapsedTime")
  public int getElapsedTime();

  /**
   * Amount of time spent in this frame, does not include the elapsed time of children; ; -1 if the frame is
        still on the stack ("open")
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FrameTime")
  public int getFrameTime();

  /**
   * Number of children for this frame.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumChildren")
  public int getNumChildren();

  /**
   * Time in millis from when the stack started to when this frame was pushed on to the stack
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Offset")
  public int getOffset();

  /**
   * Parent of this frame; NULL if this frame has a depth of 0
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public external.gw.api.profiler.ProfilerFrame getParent();

  /**
   * Get path from root
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Path")
  public java.lang.String getPath();

  /**
   * A map of all the properties and counters, hashed by name
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PropertiesAndCounters")
  public java.util.Map getPropertiesAndCounters();

  /**
   * Identifier of the frame; doesn't have to be unique
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tag")
  public external.gw.api.profiler.ProfilerTag getTag();


  /**
   * From AutoCloseable. No unchecked exception thrown.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "close")
  public void close();



  /**
   * Get the value of a specific counter
   *
   * @return Value of the counter or 0 if the counter doesn't exist
   * @param name Name of the counter
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCounterValue")
  public int getCounterValue(java.lang.String name);



  /**
   * 
   *
   * @return The value of the given property
   * @param property 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPropertyValue")
  public java.lang.String getPropertyValue(java.lang.String property);



  /**
   * 
   *
   * @return True if the counter exists; false otherwise
   * @param name Name of the counter
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasCounter")
  public boolean hasCounter(java.lang.String name);



  /**
   * 
   *
   * @return True if the property exists; false otherwise
   * @param name Name of the property
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasProperty")
  public boolean hasProperty(java.lang.String name);



  /**
   * Increments the value of a counter by one.  If the counter doesn't exist a new counter is created w/ a value of
one.
   *
   * @param name Name of counter
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "incrementCounter")
  public int incrementCounter(java.lang.String name);



  /**
   * Set the value of a counter
   *
   * @param name Name of the counter
   * @param value Value of the counter
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setCounterValue")
  public void setCounterValue(java.lang.String name, int value);



  /**
   * Sets a property on this frame
   *
   * @param name 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setProperty")
  public void setProperty(java.lang.String name);



  /**
   * Sets a property on this frame to the given value
   *
   * @param propertyName 
   * @param value 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setPropertyValue")
  public void setPropertyValue(java.lang.String propertyName, java.lang.CharSequence value);

}
