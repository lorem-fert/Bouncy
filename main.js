var rer = document.getElementById("rer");

!function(){var a=function(a,b){var c=document.createElement("canvas");

"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(c);
var d=c.getContext("2d");
if(c.width=c.height=b.size,a.appendChild(c),window.devicePixelRatio>1){
    var e=window.devicePixelRatio;
    c.style.width=c.style.height=[b.size,"px"].join(""),c.width=c.height=b.size*e,d.scale(e,e)}
    d.translate(b.size/2,b.size/2),d.rotate((-0.5+b.rotate/180)*Math.PI);
    var f=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(f-=b.scaleLength+2);
    var g=function(a,b,c){
        c=Math.min(Math.max(0,c||1),1),d.beginPath(),d.arc(0,0,f,0,2*Math.PI*c,!1),d.strokeStyle=a,d.lineWidth=b,d.stroke()},
        h=function(){var a,c,e=24;d.lineWidth=1,d.fillStyle=b.scaleColor,d.save();for(var e=24;e>=0;--e)0===e%6?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),d.fillRect(-b.size/2+a,0,c,1),d.rotate(Math.PI/12);d.restore()};
        Date.now=Date.now||function(){return+new Date};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();this.clear=function(){d.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){this.clear(),b.scaleColor&&h(),b.trackColor&&g(b.trackColor,b.lineWidth),d.lineCap=b.lineCap;var c;c="function"==typeof b.barColor?b.barColor(a):b.barColor,a>0&&g(c,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate),g=b.easing(this,f,a,c-a,b.animate);this.draw(g),b.onStep(a,c,g),f>=b.animate?b.onStop(a,c):i(e)}.bind(this);i(e)}.bind(this)},b=function(b,c){var d,e={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:1e3,renderer:a,easing:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}},f={},g=0,h=function(){this.el=b,this.options=f;for(var a in e)e.hasOwnProperty(a)&&(f[a]=c&&"undefined"!=typeof c[a]?c[a]:e[a],"function"==typeof f[a]&&(f[a]=f[a].bind(this)));f.easing="string"==typeof f.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[f.easing])?jQuery.easing[f.easing]:e.easing,d=new f.renderer(b,f),d.draw(g),b.dataset&&b.dataset.percent&&this.update(parseInt(b.dataset.percent,10))}.bind(this);this.update=function(a){return a=parseInt(a,10),f.animate?d.animate(g,a):d.draw(a),g=a,this}.bind(this),h()};window.EasyPieChart=b}();

var options = {
  scaleColor: false,
  trackColor: 'rgba(255,255,255,0.3)',
  barColor: '#19bd9a',
  lineWidth: 6,
  lineCap: 'butt',
  size: 122
};

window.addEventListener('DOMContentLoaded', function() {
  var charts = [];
  [].forEach.call(document.querySelectorAll('.chart'),  function(el) {
    charts.push(new EasyPieChart(el, options));
  });
});

var $numero = 80; 
$(".chislenny-sostav").html($numero); 

$inicio_porcentagem = 0; 
$fim_porcentagem = $('.chislenny-sostav').html(); 

setInterval(function(){  
  $(".chislenny-sostav").html($inicio_porcentagem); 
  if($inicio_porcentagem < $fim_porcentagem){ 
  $inicio_porcentagem = $inicio_porcentagem + 1; 
  } 
}, 10);


var $numero2 = 75; 
$(".chislenny-sostav2").html($numero2); 

$inicio_porcentagem2 = 0; 
$fim_porcentagem2 = $('.chislenny-sostav2').html(); 

setInterval(function(){  
  $(".chislenny-sostav2").html($inicio_porcentagem2); 
  if($inicio_porcentagem2 < $fim_porcentagem2){ 
  $inicio_porcentagem2 = $inicio_porcentagem2 + 1; 
  } 
}, 10);


var $numero3 = 60; 
$(".chislenny-sostav3").html($numero3); 

$inicio_porcentagem3 = 0; 
$fim_porcentagem3 = $('.chislenny-sostav3').html(); 

setInterval(function(){  
  $(".chislenny-sostav3").html($inicio_porcentagem3); 
  if($inicio_porcentagem3 < $fim_porcentagem3){ 
  $inicio_porcentagem3 = $inicio_porcentagem3 + 1; 
  } 
}, 10);

const one = document.querySelector('.one_mini');
const two = document.querySelector('.two_mini');
const three = document.querySelector('.three_mini');
one.onclick = function () {
	one.style.opacity = '0';
	two.style.opacity = '0.5';
	three.style.opacity = '0.5';
	four.style.opacity = '0.5';
}

two.onclick = function () {
	one.style.opacity = '0.5';
	two.style.opacity = '0';
	three.style.opacity = '0.5';
	four.style.opacity = '0.5';
}

three.onclick = function () {
	one.style.opacity = '0.5';
	two.style.opacity = '0.5';
	three.style.opacity = '0';
	four.style.opacity = '0.5';
}

const items = document.querySelectorAll('.item'); 
items.forEach(item => { 
 item.addEventListener('click', () => { 
  items.forEach(item => item.classList.remove('show')) 
  item.classList.add('show') 
 }) 
});

function fClick(){
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.transform = "rotate(45deg)";
  document.getElementById("third").style.transform = "rotate(-45deg)";
  document.getElementById("fourth").style.display = "none";
  document.getElementById("nokno").style.left = "0";
  document.getElementById("kmenu").style.opacity = "0";
  iClick2();
}

function iClick(){
  document.getElementById("fline").style.display = "block";
  document.getElementById("sline").style.transform = "rotate(0deg)";
  document.getElementById("cline").style.transform = "rotate(0deg)";
  document.getElementById("oline").style.display = "block";
  document.getElementById("nokno").style.left = "-300px";
  document.getElementById("kmenu").style.opacity = "1";
  fClick2();
}

function fClick2(){
  document.getElementById("first").style.display = "block";
  document.getElementById("second").style.transform = "rotate(0deg)";
  document.getElementById("third").style.transform = "rotate(0deg)";
  document.getElementById("fourth").style.display = "block";
}

function iClick2(){
  document.getElementById("fline").style.display = "none";
  document.getElementById("sline").style.transform = "rotate(45deg)";
  document.getElementById("cline").style.transform = "rotate(-45deg)";
  document.getElementById("oline").style.display = "none";
}

var touch = document.getElementById('container');

container.onscroll = function() {
  container.style.color = "red";
}