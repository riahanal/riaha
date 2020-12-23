$(function(){
    setInterval(slideAni, 3000);
    var i = 0;
    function slideAni(){
        if(i >= 2){
            i = 0;
        }else{
            i++;
        }
        $(".slide").animate({"margin-left": -(i*345) + "px"}, 300);
    }
});