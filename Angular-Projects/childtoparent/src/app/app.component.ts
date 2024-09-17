import { Component } from '@angular/core';



//https://docs.angular.lat/guide/inputs-outputs
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childtoparent';
  items: string[] = []; 

  updateParent(item: string) {
    this.items.push(item); 
  }
}
