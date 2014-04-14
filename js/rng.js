function random_number(){
    save();

    // generate random numbers
    i = parseInt(document.getElementById('repeat').value) - 1;
    range = parseInt(document.getElementById('range').value) + 1;
    do{
        result += Math.floor(Math.random() * range + parseInt(document.getElementById('base').value)) + ' ';
    }while(i--);

    document.getElementById('result').innerHTML = result;
    result = '';
}

function reset(){
    if(confirm('Reset settings?')){
        document.getElementById('base').value = 0;
        document.getElementById('range').value = 10;
        document.getElementById('repeat').value = 1;
        document.getElementById('result').innerHTML = '';

        save();
    }
}

function save(){
    if(parseInt(document.getElementById('repeat').value) < 1){
        document.getElementById('repeat').value = 1;
    }

    i = 2;
    j = [
      'base',
      'range',
      'repeat'
    ];
    do{
        if(isNaN(document.getElementById(j[i]).value) || document.getElementById(j[i]).value === [0, 10, 1][i]){
            document.getElementById(j[i]).value = [
              0,
              10,
              1
            ][i];
            window.localStorage.removeItem('rng-' + i);
        }else{
            window.localStorage.setItem(
              'rng-' + i,
              document.getElementById(j[i]).value
            );
        }
    }while(i--);
    j = '';
}

var i = 0;
var j = '';
var ls = window.localStorage;
var range = 2;
var result = '';

document.getElementById('base').value = window.localStorage.getItem('rng-0') === null
  ? 0
  : window.localStorage.getItem('rng-0');
document.getElementById('range').value = window.localStorage.getItem('rng-1') === null
  ? 10
  : window.localStorage.getItem('rng-1');
document.getElementById('repeat').value = window.localStorage.getItem('rng-2') === null
  ? 1
  : window.localStorage.getItem('rng-2');

window.onkeydown = function(e){
    i = window.event ? event : e;
    i = i.charCode ? i.charCode: i.keyCode;

    if(i === 72){// H
        random_number();
    }
}
