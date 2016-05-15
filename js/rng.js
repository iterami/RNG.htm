'use strict';

function generate(){
    save();

    var result = '';

    // Generate random number(s).
    var range = settings['range'] + 1;
    var loop_counter = settings['repeat'] - 1;
    do{
        result += Math.floor(Math.random() * range + settings['base']) + ' ';
    }while(loop_counter--);

    document.getElementById('result').innerHTML = result;
}

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // ENTER: generate new random number(s).
    if(key === 13){
        generate();
    }
};

window.onload = function(e){
    init_settings(
      'RNG.htm-',
      {
        'base': 0,
        'range': 10,
        'repeat': 1,
      }
    );

    update_settings();
    generate();
};
