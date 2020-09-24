/*
Implementing POST method
=================================

To implement post methods 2 annotations are used one is @RequestBody and other is @PathMapping

@RequestBody
========================

The @RequestBody annotation maps body of the web request to the method parameter. The body of the request is passed
through an HttpMessageConverter. It resolves the method argument depending on the content type of the request. 

Optionally, automatic validation can be applied by annotating the argument with @Valid.

@PostMapping 
=======================

method handles the Http POST requests matched with the specified URI

*/