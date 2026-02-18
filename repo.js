'use strict';

function generate(){
    let result = '';

    let loop_counter = Math.floor(core_storage_data.repeat) - 1;
    const range = core_storage_data.range + 1;
    do{
        if(core_storage_data.crypto){
            const array = new globalThis.Uint32Array(1);
            globalThis.crypto.getRandomValues(array);
            result += core_storage_data.base + Math.floor(array[0] / 4294967295 * range);

        }else{
            result += core_storage_data.base + core_random_integer(range);
        }

        if(loop_counter > 0){
            result += core_storage_data.separator;
        }
    }while(loop_counter--);

    core_elements.result.value = result;
    document.title = result + ' - ' + core_repo_title;
}

function repo_init(){
    core_repo_init({
      'events': {
        'generate': {
          'onclick': generate,
        },
      },
      'info': '<button id=generate type=button>Generate [ENTER]</button><br><textarea id=result readonly></textarea>',
      'keybinds': {
        'Enter': {
          'down': generate,
        },
      },
      'menu_block_events': false,
      'menu_lock': true,
      'storage': {
        'base': 0,
        'crypto': false,
        'range': 10,
        'repeat': 1,
        'separator': ', ',
      },
      'storage_menu': '<table><tr><td><input id=base step=any type=number><td>Base'
        + '<tr><td><input id=crypto type=checkbox><td>Crypto'
        + '<tr><td><input id=range step=any type=number><td>Range'
        + '<tr><td><input id=repeat min=1 step=1 type=number><td>Repeat'
        + '<tr><td><input id=separator type=text><td>Separator</table>',
      'title': 'RNG.htm',
      'ui_elements': [
        'result',
      ],
    });

    generate();
}
