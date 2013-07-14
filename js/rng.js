function get(i){
    return document.getElementById(i);
}

function random_number(){
    save();

    // generate random numbers
    i = get('repeat').value - 1;
    range = parseInt(get('range').value) + 1;
    do{
        result += Math.floor(Math.random() * range + get('base').value) + ' ';
    }while(i--);

    get('result').innerHTML = result;
    result = '';
}

function reset(){
    if(confirm('Reset settings?')){
        get('base').value = 0;
        get('range').value = 10;
        get('repeat').value = 1;
        get('result').innerHTML = '';

        save();
    }
}

function save(){
    if(get('repeat').value < 1){
        get('repeat').value = 1;
    }

    i = 2;
    j = [
        'base',
        'range',
        'repeat'
    ];
    do{
        if(isNaN(get(j[i]).value) || get(j[i]).value === [0, 10, 1][i]){
            get(j[i]).value = [
                0,
                10,
                1
            ][i];
            ls.removeItem('rng-' + i);
        }else{
            ls.setItem(
                'rng-' + i,
                get(j[i]).value
            );
        }
    }while(i--);
    j = '';
}

var i = 0;
var j = '';
var ls = window.localStorage;
var range = 2;
var result = '';

get('base').value   = ls.getItem('rng-0') === null ?  0 : ls.getItem('rng-0');
get('range').value  = ls.getItem('rng-1') === null ? 10 : ls.getItem('rng-1');
get('repeat').value = ls.getItem('rng-2') === null ?  1 : ls.getItem('rng-2');

window.onkeydown = function(e){
    i = window.event ? event : e;
    i = i.charCode ? i.charCode: i.keyCode;

    if(i === 72){// H
        random_number();
    }
}
