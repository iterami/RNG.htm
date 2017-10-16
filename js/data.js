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
