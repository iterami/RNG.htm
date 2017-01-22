'use strict';

function generate(){
    storage_save();

    var result = '';

    // Generate random number(s).
    var loop_counter = storage_data['repeat'] - 1;
    var range = storage_data['range'] + 1;
    do{
        result += random_integer({
          'max': range,
        }) + storage_data['base'];
        if(loop_counter > 0){
            result += storage_data['separator'];
        }
    }while(loop_counter--);

    document.getElementById('result').innerHTML = result;
}

window.onload = function(e){
    input_init({
      'keybinds': {
        13: {
          'todo': generate,
        },
      },
    });
    storage_init({
      'data': {
        'base': 0,
        'range': 10,
        'repeat': 1,
        'separator': ', ',
      },
      'prefix': 'RNG.htm-',
    });

    storage_update();
    generate();

    document.getElementById('generate').onclick = generate;
    document.getElementById('settings-reset').onclick = function(e){
        storage_reset();
    };
};
