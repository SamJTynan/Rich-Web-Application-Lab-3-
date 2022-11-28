//const { Observable, fromEvent} = rxjs;
const { fromEvent } = rxjs;

const btn = document.getElementById('add');
const clicks = fromEvent(btn, 'click');
clicks.subscribe(x => createnote());

function createnote() {
  const div = document.createElement('div');
  div.className = 'Note';
  div.id = 'Note';
  div.innerHTML = `<textarea style = "height: 170px;width:160px; resize: none;" >Enter Note here</textarea>
  <br> 
  <button class="button yellow" id = "yellow" /> </button>
	<button class="button blue" id = "blue"  /> </button>
	<button class="button red" id = "red"  /> </button>
	<button class="button grey" id = "grey"  /> </button>
	<br><br>
	<button class="button delete" id = "delete"/>Delete</button>
  `;
  document.getElementById('main').appendChild(div);
const yellow = document.getElementById('yellow');
  const blue = document.getElementById('blue');
  const red = document.getElementById('red');
  const grey = document.getElementById('grey');
  const delete_ = document.getElementById('delete');
  
  const yellowbut = fromEvent(yellow, 'click');
  const bluebut = fromEvent(blue, 'click');
  const redbut = fromEvent(red, 'click');
  const greybut = fromEvent(grey, 'click');
  const delbut = fromEvent(delete_, 'click');
	
 
  yellowbut.subscribe(x => Yellow(document.getElementById('Note')));
  bluebut.subscribe(x => Blue(document.getElementById('Note')));
  redbut.subscribe(x => Red(document.getElementById('Note')));
  greybut.subscribe(x => Grey(document.getElementById('Note')));
  delbut.subscribe(x => Del(document.getElementById('Note'))); 
}
  
  
  function Yellow(input)
  {
  	input.style.background = "yellow";
  }
  
    function Blue(input)
  {
  	input.style.background = "blue";
  }
  
  
    function Red(input)
  {
  	input.style.background = "red";
  }
  
  
    function Grey(input)
  {
  	input.style.background = "grey";
  }
  
  
    function Del(input)
  {
  	 document.getElementById('main').removeChild(input);
  }
  
  
  

 
  
  
  







