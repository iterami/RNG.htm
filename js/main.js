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
      'storage-menu': '<table><tr><td><input class=mini id=base step=any type=number><td>Base'
        + '<tr><td><input id=crypto type=checkbox><td>Crypto'
        + '<tr><td><input class=mini id=range step=any type=number><td>Range'
        + '<tr><td><input class=mini id=repeat min=1 step=any type=number><td>Repeat'
        + '<tr><td><input class=mini id=separator type=text><td>Separator</table>',
      'title': 'RNG.htm',
    });

    generate();
}
