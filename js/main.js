'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'generate': {
          'onclick': generate,
        },
      },
      'keybinds': {
        13: {
          'todo': generate,
        },
      },
      'menu': true,
      'menu-block-events': false,
      'storage': {
        'base': 0,
        'range': 10,
        'repeat': 1,
        'separator': ', ',
      },
      'storage-menu': '<table><tr><td><input id=base><td>Base'
        + '<tr><td><input id=range><td>Range'
        + '<tr><td><input id=repeat><td>Repeat'
        + '<tr><td><input id=separator><td>Separator</table>',
      'title': 'RNG.htm',
    });

    generate();
}
