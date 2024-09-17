import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {

  invoke(){
   this.subscribeToObservable(this.createObservable());
  }

  createObservable():Observable<Object>{

    return new Observable((obs) => {

      setTimeout(( )=>{(obs.next('Hello')); },2000);


      setTimeout(( )=>{(obs.next('World')); },3000);


      setTimeout(( )=>{(obs.next('In UST')); },4000);


      setTimeout(( )=>{(obs.next('Trivandrum')); },5000);


        // obs.next('Hello');
        // obs.next('World');
        // obs.next('456');

    })
}

subscribeToObservable(observable: Observable<Object>){

   observable .subscribe((data) => {
        console.log('from subscriber',data);
    });
}
}
