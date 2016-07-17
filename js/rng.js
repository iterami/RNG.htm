'use strict';

function generate(){
    settings_save();

    var result = '';

    // Generate random number(s).
    var loop_counter = settings_settings['repeat'] - 1;
    var range = settings_settings['range'] + 1;
    do{
        result += random_integer(range) + settings_settings['base'];
        if(loop_counter > 0){
            result += settings_settings['separator'];
        }
    }while(loop_counter--);

    document.getElementById('result').innerHTML = result;
}

window.onload = function(e){
    input_init(
      {
        13: {
          'todo': generate,
        },
      }
    );
    settings_init(
      'RNG.htm-',
      {
        'base': 0,
        'range': 10,
        'repeat': 1,
        'separator': ', ',
      }
    );

    settings_update();
    generate();
};
