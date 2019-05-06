const pic = document.getElementById('pic')
const foreground = document.getElementById( 'foreground' )

pic.addEventListener('mouseover', e=>{
fadeOutEffect(5)
})


function fadeOutEffect( interval ) {

 var op = 1;
 var timer = setInterval( function () {
   if ( op <= 0.05 ) {
     clearInterval( timer );
     foreground.style.display = 'none';
   }
   foreground.style.opacity = op;
   op -= 0.0002;
 }, interval );

}
