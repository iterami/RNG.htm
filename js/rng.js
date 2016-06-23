'use strict';

function generate(){
    save();

    var result = '';

    // Generate random number(s).
    var loop_counter = settings['repeat'] - 1;
    var range = settings['range'] + 1;
    do{
        result += Math.floor(Math.random() * range + settings['base']);
        if(loop_counter > 0){
            result += settings['separator'];
        }
    }while(loop_counter--);

    document.getElementById('result').innerHTML = result;
}

window.onload = function(e){
    init_input(
      {
        13: {
          'todo': generate,
        },
      }
    );
    init_settings(
      'RNG.htm-',
      {
        'base': 0,
        'range': 10,
        'repeat': 1,
        'separator': ', ',
      }
    );

    update_settings();
    generate();
};
