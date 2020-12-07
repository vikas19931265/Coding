/*
Plugin Parameters
====================

1. Specified values that can be passed into the plugin at the registry level.

2. Useful for changing the plugin behaviour without changing the code.

    Example : Testing env compared to the production env

3. Plugin class must implement InitializablePlugin interface and setParameters() method


4. To make use of plugin parameters, the plugin must implement the InitializablePlugin
 interface and implement the setParameters method.

5. The setParameters method is called only once, before the first use of the plugin.

   package acme.ta.plugin.exchangerate

        uses gw.api.system.database.SequenceUtil
        uses gw.plugin.InitializablePlugin
        uses gw.plugin.exchangerate.IExchangeRateSetPlugin
        uses java.util.Map

        class AcmeIExchangeRateSetPluginWithParameters implements  IExchangeRateSetPlugin,InitializablePlugin{
        override function createExchangeRateSet():ExchangeRateSet{
        }
        override function setParameters(parameters:Map<Object, Object>){
        var userName=parameters.get("username")
        var password=parameters.get("password")
        print("Retrieving currency rates as "       +userName+" with password "+password)

  }



 */


