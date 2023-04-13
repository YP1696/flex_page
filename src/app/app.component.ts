import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flex-page';
  // model ={option: 'row'};  
  // selected_direction: string ="";

  options = {
    direction :  'row',
    horizontal_direction  : 'start',
    vertical_direction :  'start',
  };

  // direction= ['row', 'column'];
  // horizontal_direction=['none', 'start(default)','center','end','space-around','space-between','space-evenly'];
  // vertical_direction=['none','start','center','end','stretch(default)'];

}
