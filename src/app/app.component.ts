import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Fastest Cars App';
  
   ngAfterViewInit(){
           $(document).ready(function(){          
            $('body').find('.placeholder').eq(1).addClass('row')
           });
  
}
