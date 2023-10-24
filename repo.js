'use strict';

function generate(){
    core_storage_save({
      'keys': [
        'base',
        'crypto',
        'range',
        'repeat',
        'separator',
      ],
    });

    let result = '';

    let loop_counter = core_storage_data['repeat'] - 1;
    const range = core_storage_data['range'] + 1;
    do{
        if(core_storage_data['crypto']){
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
    document.title = result + ' - ' + core_repo_title;
}

function repo_init(){
    core_repo_init({
      'events': {
        'generate': {
          'onclick': generate,
        },
      },
      'info': '<input id=generate type=button value="Generate [ENTER]"><br><textarea id=result></textarea>',
      'keybinds': {
        'Enter': {
          'todo': generate,
        },
      },
      'menu': true,
      'menu-block-events': false,
      'menu-lock': true,
      'storage': {
        'base': 0,
        'crypto': false,
        'range': 10,
        'repeat': 1,
        'separator': ', ',
      },
      'storage-menu': '<table><tr><td><input class=mini id=base step=any type=number><td>Base'
        + '<tr><td><input id=crypto type=checkbox><td>Crypto'
        + '<tr><td><input class=mini id=range step=any type=number><td>Range'
        + '<tr><td><input class=mini id=repeat min=1 step=any type=number><td>Repeat'
        + '<tr><td><input class=mini id=separator type=text><td>Separator</table>',
      'title': 'RNG.htm',
    });

    generate();
}
