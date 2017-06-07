'use strict';

function generate(){
    core_storage_save();

    var result = '';

    // Generate random number(s).
    var loop_counter = core_storage_data['repeat'] - 1;
    var range = core_storage_data['range'] + 1;
    do{
        result += core_random_integer({
          'max': range,
        }) + core_storage_data['base'];

        if(loop_counter > 0){
            result += core_storage_data['separator'];
        }
    }while(loop_counter--);

    document.getElementById('result').innerHTML = result;
}

function repo_init(){
    core_repo_init({
      'storage': {
        'base': 0,
        'range': 10,
        'repeat': 1,
        'separator': ', ',
      },
      'title': 'RNG.htm',
    });
    core_events_bind({
      'keybinds': {
        13: {
          'todo': generate,
        },
      },
    });

    core_storage_update();
    generate();

    document.getElementById('generate').onclick = generate;
    document.getElementById('settings-reset').onclick = function(e){
        core_storage_reset();
    };
}
