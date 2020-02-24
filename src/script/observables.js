import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  setTimeout(() => {
    observer.next('Hello, I am an Observable!');
  }, 2000);
});

observable.subscribe(value => console.log(value));