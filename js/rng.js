function random_number(){
    save();

    // generate random numbers
    var range = parseInt(document.getElementById('range').value) + 1;
    var loop_counter = parseInt(document.getElementById('repeat').value) - 1;
    do{
        result += Math.floor(Math.random() * range
          + parseInt(document.getElementById('base').value))
          + ' ';
    }while(loop_counter--);

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

    j = [
      'base',
      'range',
      'repeat'
    ];
    var loop_counter = 2;
    do{
        if(isNaN(document.getElementById(j[loop_counter]).value)
          || document.getElementById(j[loop_counter]).value === [0, 10, 1][loop_counter]){
            document.getElementById(j[loop_counter]).value = [
              0,
              10,
              1
            ][loop_counter];
            window.localStorage.removeItem('rng-' + loop_counter);
        }else{
            window.localStorage.setItem(
              'rng-' + loop_counter,
              document.getElementById(j[loop_counter]).value
            );
        }
    }while(loop_counter--);
    j = '';
}

var j = '';
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
    var key = window.event ? event : e;
    key = key.charCode ? key.charCode: key.keyCode;

    if(key === 72){// H
        random_number();
    }
};
