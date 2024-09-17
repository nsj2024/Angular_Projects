import {  Observable } from 'rxjs';

// const myObserver = new Observable((obs) => {
  
//   obs.next('Hello');
//   obs.next('World');
//   obs.next('456');
//   obs.complete();
// });


// myObserver.subscribe({
//   next: (value) => console.log(value),
//   error: (error) => console.error(error),
//   complete: () => console.log('Observer completed'),
// });


export class Test{

    createObservable():Observable<Object>{

        return new Observable((obs) => {

            obs.next('Hello');
            obs.next('World');
            obs.next('456');

        })
    }

    subscribeToObservable(observable: Observable<Object>){

       observable .subscribe((data) => {
            console.log(data);
        });
    }
}

// const testInstance = new Test();
// const observable = testInstance.createObservable();
// testInstance.subscribeToObservable(observable);