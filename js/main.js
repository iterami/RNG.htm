'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'generate': {
          'onclick': generate,
        },
      },
      'info': '<input id=generate type=button value="Generate [ENTER]"><br><textarea id=result></textarea>',
      'keybinds': {
        13: {
          'todo': generate,
        },
      },
      'menu': true,
      'menu-block-events': false,
      'storage': {
        'base': 0,
        'crypto': false,
        'range': 10,
        'repeat': 1,
        'separator': ', ',
      },
      'storage-menu': '<table><tr><td><input id=base type=number><td>Base'
        + '<tr><td><input id=crypto type=checkbox><td>Crypto'
        + '<tr><td><input id=range type=number><td>Range'
        + '<tr><td><input id=repeat min=1 type=number><td>Repeat'
        + '<tr><td><input id=separator><td>Separator</table>',
      'title': 'RNG.htm',
    });

    generate();
}
