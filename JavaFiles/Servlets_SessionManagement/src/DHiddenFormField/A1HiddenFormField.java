/*

Hidden Form Field
======================================

-> In case of Hidden Form Field a hidden (invisible) textfield is used for maintaining the state of an user.

-> In such case, we store the information in the hidden field and get it from another servlet.
   This approach is better if we have to submit form in all the pages and we don't want to depend on the browser.

Let's see the code to store value in hidden field.

<input type="hidden" name="uname" value="Vimal Jaiswal">  


Here, uname is the hidden field name and Vimal Jaiswal is the hidden field value.


Real application of hidden form field
===========================================

It is widely used in comment form of a website. In such case, we store page id or page name
in the hidden field so that each page can be uniquely identified.


*/