// function xys(){
// 	var x=window.innerWidth;
// 	var y=x*100/640;
// 	 document.getElementsByTagName("html")[0].style.fontSize=y+"px";
// }
// window.onresize=xys;
// xys();
$(function(){
    $('.carousel').carousel({
        interval: 2000
    });
   
	$('#myCarousel').on('slide.bs.carousel', function () {
			
	});


});
document.getElementsByClassName("totop")[0].onclick=function(){
    var j=setInterval(function(){
		if(document.body.scrollTop){
			var top=document.body.scrollTop;
		}else{
			var top=document.documentElement.scrollTop
		}
         if(top!=0){
         	document.documentElement.scrollTop-=200;
         }else{
         	clearInterval(j)
         }
	},100)
}
window.onscroll=function(){
    if(document.body.scrollTop){
        var top=document.body.scrollTop;
    }else{
        var top=document.documentElement.scrollTop;
    } 
    if(top>=400){
        document.getElementsByClassName("totop")[0].style.display="block"
    }else{
        document.getElementsByClassName("totop")[0].style.display="none"
    }
}
