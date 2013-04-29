function get(i){
	return document.getElementById(i)
}
function random_number(){
	if(value('repeat')<1){
		get('repeat').value=1
	}
	i=value('repeat')-1;
	range=parseInt(value('range'))+1;
	do{
		result+=Math.floor(Math.random()*range+value('base'))+' '
	}while(i--);
	get('result').innerHTML=result;
	result=''
}
function value(i){
	return get(i).value
}
var i=range=2,
result='';
window.onkeydown=function(e){
	i=window.event?event:e;
	i=i.charCode?i.charCode:i.keyCode;
	if(i==72){
		random_number()
	}
}
