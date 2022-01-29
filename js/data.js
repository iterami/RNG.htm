'use strict';

function generate(){
    core_storage_save();

    let result = '';

    let loop_counter = core_storage_data['repeat'] - 1;
    const range = core_storage_data['range'] + 1;
    do{
        if(core_storage_data['crypto']){
console.log(1);
            result += Math.floor((core_random_crypto({
              'type': 'Uint32Array',
            }) / 4294967295) * range);

        }else{
            result += core_random_integer({
              'max': range,
            }) + core_storage_data['base'];
        }

        if(loop_counter > 0){
            result += core_storage_data['separator'];
        }
    }while(loop_counter--);

    document.getElementById('result').value = result;
}
