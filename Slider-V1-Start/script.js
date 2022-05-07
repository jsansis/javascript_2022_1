// Add your JS here
$(window).on('load',function(){
    'use strict';
    const imageCount= $('#slider ul li').length; //imageCount=5
    const imageWidth = $('#slider ul li:first img').width();
    alert(`Hay ${imageCount} imágenes y su ancho es de ${imageWidth}`);
    const totalWidth = (imageCount*imageWidth)+'px';//Ancho total de toda la tira de imágenes
    let leftPosition = 0;
    let counter =0;
    $('#slider ul').css("width",totalWidth);
    //Paso 3
    $('#next').click(function(){
        counter++;
        if(counter===imageCount){
            counter=0;
        }
        leftPosition = `-${counter*imageWidth}px`;
        $('#slider ul').animate({'left':leftPosition},700,"easeInQuad");
    });
})

