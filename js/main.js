'use strict';

function repo_init(){
    core_repo_init({
      'keybinds': {
        13: {
          'todo': generate,
        },
      },
      'storage': {
        'base': 0,
        'range': 10,
        'repeat': 1,
        'separator': ', ',
      },
      'storage-menu': '<table><tr><td><input id=base><td>Base<tr><td><input id=range><td>Range<tr><td><input id=repeat><td>Repeat<tr><td><input id=separator><td>Separator</table>',
      'title': 'RNG.htm',
    });

    core_storage_update();
    generate();

    document.getElementById('generate').onclick = generate;
}