let img = document.querySelector('.yyz')
let imgArr = ['https://picsum.photos/id/180/600/400','https://picsum.photos/id/200/600/400','https://picsum.photos/id/220/600/400']
let content = 0;
function cuting(){
    img.src = imgArr[content];
}
let timer = setInterval(function()
{
    content++;
    if(content >= imgArr.length){
        content = 0;
    }
    img.src = imgArr[content];
},4000)