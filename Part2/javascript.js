const { Observable, fromEvent,tap } = rxjs; 
const {
  takeWhile,
  takeUntil,
  switchMap,
  scan,
  mapTo,
  startWith,
  repeat,
  switchMapTo
} = rxjs/operators;




const Hour = document.getElementById('Hour');
const Minute = document.getElementById('Minute');
const Second = document.getElementById('Second');
const button = document.getElementById('button');
const click = fromEvent(button, 'click');

click.subscribe(x => countdown(Hour.value,Minute.value,Second.value));

function countdown(Hour, Minute, Second) {
  document.getElementById('hrdis').innerHTML = Hour;
  document.getElementById('mindis').innerHTML = Minute;
  document.getElementById('secdis').innerHTML = Second;
	
startClick$.pipe(mapTo(true))
  .pipe(
    switchMap(shouldStart => (shouldStart ? interval(1000) : EMPTY)),
    mapTo(-1),
    scan((acc: number, curr: number) => acc + curr, startValue),
    takeWhile(val => val >= 0),
    startWith(startValue),
    repeat()
  )
  .subscribe(val => {
    counterDisplayHeader.innerHTML = val.toString();
  });

  
  

}