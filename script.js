var left = document.getElementById("left");
var cover = document.getElementById("cover");
var click = true;
function ShowSideBar(){
    if(click==false) return;
    click=false;
    cover.style.display="block";
    setTimeout(function(){
        cover.style.opacity="1";
        setTimeout(function(){
            left.style.left="0";
            setTimeout(function(){
               click=true;
            }, 1000);
        }, 200);
    }, 100);
}
cover.onclick=function(){
    if(click==false) return;
    click=false;
    left.style.left="-100%";
    setTimeout(function(){
        cover.style.opacity="0";
        setTimeout(function(){
        cover.style.display="none";
              setTimeout(function(){
               click=true;
            }, 500);
    }, 300);
    }, 500);
}