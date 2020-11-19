document.getElementById("btn").
    onclick=function(){
        var i=setInterval(function(){
                var t=document.documentElement.scrollTop;
            if(t>0){
                t-=20;
                document.documentElement.scrollTop=t;
            }else{
                clearInterval(i);
            }
        },10)
    }