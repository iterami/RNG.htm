'use strict';

function random_number(){
    save();

    var result = '';

    // Generate random number(s).
    var base = parseInt(document.getElementById('base').value);
    var range = parseInt(document.getElementById('range').value) + 1;
    var loop_counter = parseInt(document.getElementById('repeat').value) - 1;
    do{
        result += Math.floor(Math.random() * range + base) + ' ';
    }while(loop_counter--);

    document.getElementById('result').innerHTML = result;
}

function reset(){
    if(!window.confirm('Reset settings?')){
        return;
    }

    document.getElementById('base').value = 0;
    document.getElementById('range').value = 10;
    document.getElementById('repeat').value = 1;
    document.getElementById('result').innerHTML = '';

    save();
}

// Save settings into window.localStorage if they differ from default.
function save(){
    if(parseInt(document.getElementById('repeat').value) < 1){
        document.getElementById('repeat').value = 1;
    }

    var ids = {
      'base': 0,
      'range': 10,
      'repeat': 1,
    };
    for(var id in ids){
        var value = document.getElementById(id).value;
        if(isNaN(value)
          || value == ids[id]){
            document.getElementById(id).value = ids[id];
            window.localStorage.removeItem('RNG.htm-' + id);

        }else{
            window.localStorage.setItem(
              'RNG.htm-' + id,
              value
            );
        }
    }
}

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // ENTER: generate new random number(s).
    if(key === 13){
        random_number();
    }
};

window.onload = function(e){
    document.getElementById('base').value = window.localStorage.getItem('RNG.htm-base') || 0;
    document.getElementById('range').value = window.localStorage.getItem('RNG.htm-range') || 10;
    document.getElementById('repeat').value = window.localStorage.getItem('RNG.htm-repeat') || 1;
};
