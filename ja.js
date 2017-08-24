/**
 * Created by Vaibhav on 8/23/2017.
 */

var colors=[
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
           ];

var col=["blue","green","yellow"];
var square=document.getElementsByClassName("squ");
var picked=colors[3];
var b=document.getElementById("pc");
b.innerText=picked;
for (var i=0;i<colors.length;i++) {
    square[i].style.background = colors[i];
    square[i].addEventListener("click", function () {
        var a=this.style.background;
        if(a==picked)
        {
            alert("correct");
        }
        else
        {
            alert("wrong");
        }
    });
}


// square[1].addEventListener("click",function () {
//     alert(clicked);
//
// })

