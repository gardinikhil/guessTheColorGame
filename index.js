function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}
function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
const randomColor = [];
for(i = 0; i < 6; i++) {
    randomColor.push(randomRgbColor());
}
const toGuessColor = randomColor[Math.floor(Math.random() * 6)];

$(document).ready(()=>{
    $('#colorToGuess').html("rgb("+toGuessColor[0]+","+toGuessColor[1]+","+toGuessColor[2]+")");
    for(let i=0;i<6;i++){
        $('.content').append('<div id="'+ randomColor[i]+'" style="height: 170px; width: 170px; background-color:rgb('+ randomColor[i]+');" class="box"></div>');
    }
    var children = $('.content').children();
        for(let child of children){
            $(child).click(() => { 
                if($(child).attr("id") === toGuessColor.toString()){
                    console.log("correct");
                    $("body").css({"background-color": "rgb("+toGuessColor+")"});
                }
                else{
                    console.log("wrong");
                    $(child).hide();
                }
            });
        }
});