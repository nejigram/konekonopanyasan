const imgs = document.querySelectorAll("img");

let y = 0;
for(let x = 0;x < imgs.length;x++){
    let src = imgs[x].src;
    imgs[x].src = "";
    imgs[x].addEventListener("load",function(){
        y++;
        if(imgs.length <= y){
            document.querySelector("#loading").classList.add("obj_hide_left");
        }
    });
    imgs[x].src = src;
}

window.addEventListener("load",function(){
});
