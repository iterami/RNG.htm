function random_number(){
    save();

    var result = '';

    // Generate random number(s).
    var range = parseInt(document.getElementById('range').value) + 1;
    var loop_counter = parseInt(document.getElementById('repeat').value) - 1;
    do{
        result += Math.floor(Math.random() * range
          + parseInt(document.getElementById('base').value))
          + ' ';
    }while(loop_counter--);

    document.getElementById('result').innerHTML = result;
}

function reset(){
    if(!confirm('Reset settings?')){
        return;
    }

    document.getElementById('base').value = 0;
    document.getElementById('range').value = 10;
    document.getElementById('repeat').value = 1;
    document.getElementById('result').innerHTML = '';

    save();
}

function save(){
    if(parseInt(document.getElementById('repeat').value) < 1){
        document.getElementById('repeat').value = 1;
    }

    var loop_counter = 2;
    do{
        var id = [
          'base',
          'range',
          'repeat',
        ][loop_counter];

        if(isNaN(document.getElementById(id).value)
          || document.getElementById(id).value === [0, 10, 1,][loop_counter]){
            document.getElementById(id).value = [
              0,
              10,
              1,
            ][loop_counter];
            window.localStorage.removeItem('RNG.htm-' + id);

        }else{
            window.localStorage.setItem(
              'RNG.htm-' + id,
              document.getElementById(id).value
            );
        }
    }while(loop_counter--);
}

document.getElementById('base').value = window.localStorage.getItem('RNG.htm-base') === null
  ? 0
  : window.localStorage.getItem('RNG.htm-base');
document.getElementById('range').value = window.localStorage.getItem('RNG.htm-range') === null
  ? 10
  : window.localStorage.getItem('RNG.htm-range');
document.getElementById('repeat').value = window.localStorage.getItem('RNG.htm-repeat') === null
  ? 1
  : window.localStorage.getItem('RNG.htm-repeat');

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // ENTER: generate new random number(s).
    if(key === 13){
        random_number();
    }
};
