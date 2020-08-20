/*
Model Attribute
=================================

1. @Model Attribute is shortest way to bind the values from form to the object.


Syntax


	@ModelAttribute("userInfo) User user
	
2. If we are not using the model attribute annotation then we will bind the
values by declaring a Model model reference and then adding the values using
addAttribute function.

Later on we also need to create the DTO object in our case User class object to
and then set the values. But using @ModelAttribute annotation we can avoid all 
these things.

3. Using above syntax , spring framework automatically creates a Model object
 and assign a key to it that is userInfo. This key will hold the user object 
 value

4. So in short what it does is that creates a model object assign a key to it userInfo. Then
map all the incoming values in form the the DTO class user object. 

***Note for the data mapping to happen automatically the name of fields of DTO class should be same
as the field names coming from the form.


	


*/