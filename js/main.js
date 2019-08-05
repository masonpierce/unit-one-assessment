// state
var num;
var total;

// cached elements
var displayEl = document.querySelector('total');
var inpEl = document.getElementById('num');
var totalEl = document.getElementById('total');

// event listeners
document.querySelector('button').addEventListener('click', function() {
  input += parseFloat(inpEl.value);
});

document.querySelector('button').addEventListener('click', function() {
    input += parseFloat(inpEl.value);
});

// functions
function init() {
  input =  0;
  total = 1;
  
  render();
}

function plus(){
    if('counter'<= 'num');
    return total;
}
function minus() {
    if('counter' >= 'num')
    return total;
}

function render() {
  displayEl.totalEl = (sum >= 0 ? '+' : '-') +- num;
}

init ();
