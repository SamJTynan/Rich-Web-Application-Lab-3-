const { fromEvent, interval, merge, EMPTY } = rxjs;

const {
  takeWhile,
  takeUntil,
  switchMap,
  scan,
  mapTo,
  startWith,
  repeat,
  switchMapTo
} = rxjs;


const Second = document.getElementById('Second');
const button = document.getElementById('button');
const click = fromEvent(button, 'click');

click.subscribe(x => countdown(Second.value));

function countdown(Seconds) {
 /*  document.getElementById('hrdis').innerHTML = Hour;
  document.getElementById('mindis').innerHTML = Minute;
  document.getElementById('secdis').innerHTML = Second; */
const display = document.getElementById('secdis');
var startValue = parseInt(Seconds);


  click.pipe(
    switchMap(shouldStart => (shouldStart ? interval(1000) : EMPTY)),
    mapTo(-1),
    scan((acc= number, curr= number) => acc + curr, startValue),
    takeWhile(val => val >= 0),
    startWith(startValue),
    repeat()
  )
  .subscribe(val => {
    display.innerHTML = val.toString();
  });
}

