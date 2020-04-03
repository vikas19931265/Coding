import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /*
  This is the selector target, app-root target is defined in index.html file. So in this component we have 
  app.component.html file and style app.component.ts. Therefore when this component is going to kick
  start then html file here will be rendered based upon the defined style. 

  What ever objects or values present in this class can be used in the html file. Example we have defined 
  title here which can be used in the html file in order to generate the dynamic content.

  Since the target here is app-root angular will try to find where this target is present. It is present
  in the index.html file, therefore this html page generated here will be rendered in the app-root tag
  of the index.html file.
  
    */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
}
